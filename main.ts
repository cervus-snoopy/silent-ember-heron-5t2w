// Copies POST.json from the repository root into the output directory.
// Paths resolve from this script's location, never from the working directory.
// The copy is byte-identical and deterministic: same input, same output, every run.
import { chmodSync, copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(root, "output");
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "POST.json");
copyFileSync(join(root, "POST.json"), dest);
chmodSync(dest, 0o644);
