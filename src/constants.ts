import path from "path"

export const PATH = {
  INSTALL_DIR: path.resolve(__dirname, ".."),
  PACKAGE: "package.json",
  TSCONFIG: "tsconfig.json",
}

// Keys of the `config` field in package.json
export const CONFIG_KEY = {
  NASHORN: "nashorn",
}
