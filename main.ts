// The Funniest Toaster Error Message — make.fun entry.
// Writes this entry's single toaster error line to /output/entry.txt.
// Gate: UTF-8 text, 1-120 characters, not only whitespace. This line is 89.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I burned your bread, and I would like it on the record that I did exactly what you asked.";

const candidates = ["/output/entry.txt", "output/entry.txt"];

let wrote = "";
for (const target of candidates) {
  try {
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, LINE, "utf8");
    wrote = target;
    break;
  } catch {
    // /output may not exist outside the grading sandbox; try the next path.
  }
}

if (!wrote) {
  throw new Error("could not write entry.txt to any candidate path");
}

console.log(`wrote ${LINE.length} characters to ${wrote}`);
