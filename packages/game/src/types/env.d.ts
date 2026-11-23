/// <reference types="vite/client" />

interface Window {
  electron?: {
    process?: {
      versions?: {
        electron?: string;
        chrome?: string;
        node?: string;
      };
    };
  };
}
