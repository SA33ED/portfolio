import { spawn } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const args = process.argv.slice(2);
const viteBin = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../node_modules/vite/bin/vite.js");
const patchPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "patch-stdin.cjs");
const clientIndex = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../dist/client/index.html");

await rm(path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../dist"), {
  force: true,
  recursive: true,
});

const child = spawn(process.execPath, ["--require", patchPath, viteBin, ...args], {
  stdio: ["inherit", "pipe", "pipe"],
  env: {
    ...process.env,
  },
});

child.stdout.on("data", (chunk) => {
  const text = chunk.toString();
  process.stdout.write(text);
});

child.stderr.on("data", (chunk) => {
  const text = chunk.toString();
  process.stderr.write(text);
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  if (code !== 0 && existsSync(clientIndex) && readFileSync(clientIndex, "utf8").includes("$_TSR")) {
    console.warn("[build wrapper] Ignoring known Vite teardown error because prerendered client output was generated.");
    process.exit(0);
    return;
  }

  process.exit(code ?? 0);
});