/// <reference types="vite/client" />
/// <reference types="electron-vite/client" />

import type { ElectronAPI } from "@electron-toolkit/preload";

declare global {
  interface Window {
    electron: ElectronAPI;
    api: unknown;
  }
}

export {};
