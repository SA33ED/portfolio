import fs from "node:fs";
import path from "node:path";

const assetsDir = path.join("dist", "client", "assets");
const jsFiles = fs.readdirSync(assetsDir).filter((file) => file.endsWith(".js"));

const bootstrap = jsFiles.find((file) =>
  fs.readFileSync(path.join(assetsDir, file), "utf8").includes("hydrateRoot(document"),
);

if (!bootstrap) {
  throw new Error("Could not find the browser bootstrap chunk");
}

const css = fs
  .readdirSync(assetsDir)
  .find((file) => file.startsWith("styles-") && file.endsWith(".css"));

if (!css) {
  throw new Error("Could not find the built stylesheet");
}

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#0f172a" />
    <title>Mohammed Saeed — Senior Flutter Developer</title>
    <link rel="stylesheet" href="./assets/${css}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./assets/${bootstrap}"></script>
  </body>
</html>`;

fs.writeFileSync(path.join("dist", "client", "index.html"), html);
fs.copyFileSync(path.join("dist", "client", "index.html"), path.join("dist", "client", "404.html"));
fs.writeFileSync(path.join("dist", "client", ".nojekyll"), "");

console.log(JSON.stringify({ bootstrap, css }, null, 2));