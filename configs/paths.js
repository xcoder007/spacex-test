const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
console.log("App directory:", appDirectory);

const resolvePath = (relativePath) => path.resolve(appDirectory, relativePath);

// const WEBPACK_DIR = __dirname;
const SRC_DIR = resolvePath("src");
const INDEX_HTML = resolvePath("index.html");
// const PUBLIC_DIR = resolvePath("public");
const BUILD_DIR = resolvePath("./static");

module.exports = {
  appDir: appDirectory,
  srcDir: SRC_DIR,
  indexHtml: INDEX_HTML,
  buildDir: BUILD_DIR,
  clientEntryFile: resolvePath("./src/index.js"),
  serverEntryFile: resolvePath("./server/server.js"),
};
