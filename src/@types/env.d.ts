interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_HTTPS_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
