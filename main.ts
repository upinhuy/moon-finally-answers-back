// The Moon Finally Answers Back — make.fun bounty
// u-mang-the-moon-finally-answers-back-781a7ec1
//
// Writes one line, in the Moon's own voice, to /output/entry.txt:
// the Moon finally answering four billion years of wishes, howls
// and late-night promises. No network, no environment reads,
// fully deterministic.
//
// The line: four billion years of being wished on, howled at and
// promised things at 3 a.m., answered with one dry correction —
// the Moon is a rock, not a vending machine, and there are no refunds.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "Four billion years of wishes, howls, and 3 a.m. promises, and I've concluded: I'm a rock, not a vending machine. No refunds.";

const outDir = "/output";
const outFile = join(outDir, "entry.txt");

// The gate requires 1-240 characters of non-whitespace UTF-8 text.
const chars = [...LINE].length;
if (chars < 1 || chars > 240 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-240 characters, got ${chars}`);
}

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, LINE, "utf8");
