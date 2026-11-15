import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { pipeline } from "stream/promises";
import Seven from "node-7z";
import { path7za } from "7zip-bin";

// ESM __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path Configuration
const ROOT_DIR = path.resolve(__dirname, "..", "..");
const APP_DIR = path.join(ROOT_DIR, "app");
const TOOLS_DIR = path.join(APP_DIR, "resources", "tools");
const TEMP_DIR = path.join(ROOT_DIR, ".temp");
const BUILD_CACHE_DIR = path.join(APP_DIR, ".build-cache");

// Constants and URLs
const WIN_CODE_SIGN_URL =
  "https://github.com/electron-userland/electron-builder-binaries/releases/download/winCodeSign-2.6.0/winCodeSign-2.6.0.7z";

/**
 * Downloads a file and saves it to disk.
 */
async function downloadFile(url: string, destPath: string): Promise<void> {
  console.info(`Downloading: ${url}`);
  const response = await fetch(url);

  if (!response.ok || !response.body) {
    throw new Error(`Download failed: ${response.statusText}`);
  }

  const fileStream = fs.createWriteStream(destPath);
  await pipeline(response.body as unknown as NodeJS.ReadableStream, fileStream);
}

/**
 * Cleans the tools directory to ensure a fresh setup.
 */
function cleanTools(): void {
  if (fs.existsSync(TOOLS_DIR)) {
    console.info("🧹 Cleaning tools directory...");
    fs.rmSync(TOOLS_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(TOOLS_DIR, { recursive: true });
}

/**
 * Robust extraction using node-7z for .7z files.
 */
async function extract7z(
  archivePath: string,
  outputDir: string,
): Promise<void> {
  return new Promise((resolve, reject) => {
    console.info(`📦 Extracting 7z archive to ${outputDir}...`);

    const stream = Seven.extract(archivePath, outputDir, {
      $bin: path7za,
      $progress: true,
      symlinks: false,
      recursive: true,
    });

    stream.on("end", () => {
      resolve();
    });

    stream.on("error", (err: Error) => {
      console.warn(`⚠ Extraction warning: ${err.message}`);
      resolve();
    });

    process.on("unhandledRejection", (reason) => {
      reject(new Error(`Extraction failed: ${String(reason)}`));
    });
  });
}

/**
 * Prepopulates the electron-builder cache to avoid symlink errors on Windows.
 */
async function setupBuildCache(): Promise<void> {
  if (process.platform !== "win32") {
    return;
  }

  const cacheBase = path.join(BUILD_CACHE_DIR, "winCodeSign");
  const winCodeSignPath = path.join(cacheBase, "winCodeSign-2.6.0");
  const archivePath = path.join(cacheBase, "winCodeSign-2.6.0.7z");
  const criticalFile = path.join(winCodeSignPath, "rcedit-x64.exe");

  if (fs.existsSync(criticalFile)) {
    console.info("✔ winCodeSign build cache already populated.");
    return;
  }

  console.info("🛠 Preparing local build cache for Windows...");

  if (fs.existsSync(winCodeSignPath)) {
    fs.rmSync(winCodeSignPath, { recursive: true, force: true });
  }

  if (!fs.existsSync(cacheBase)) {
    fs.mkdirSync(cacheBase, { recursive: true });
  }

  if (!fs.existsSync(archivePath)) {
    await downloadFile(WIN_CODE_SIGN_URL, archivePath);
  }

  await extract7z(archivePath, winCodeSignPath);

  if (fs.existsSync(criticalFile)) {
    console.info("✅ winCodeSign cache successfully populated!");
  } else {
    console.error("❌ Extraction failed to produce critical files.");
  }
}

/**
 * Main orchestration function.
 */
async function setupEnvironment(): Promise<void> {
  try {
    cleanTools();
    await setupBuildCache();

    if (!fs.existsSync(TEMP_DIR)) {
      fs.mkdirSync(TEMP_DIR, { recursive: true });
    }

    // Cleanup
    console.info("Cleaning up temporary files...");
    if (fs.existsSync(TEMP_DIR)) {
      fs.rmSync(TEMP_DIR, { recursive: true, force: true });
    }

    console.info(`\n✅ Windows environment configured!`);
    console.info(`📁 Tools: ${TOOLS_DIR}`);
    console.info(`📁 Build Cache: ${BUILD_CACHE_DIR}`);
  } catch (error) {
    console.error("❌ Error during setup:", error);
    process.exit(1);
  }
}

// Execute the script
void setupEnvironment();
