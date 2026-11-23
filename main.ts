// The Vacuum's Alibi: One Line, 200 Characters
//
// A robot vacuum explains, in one deadpan line, why a spot went uncleaned.
// The program's only job is to write that line to /output/entry.txt,
// where the sealed gate scorer checks it is 1-200 characters of UTF-8 text.
//
// The line, in the vacuum's own voice: its cliff sensors are smug, its
// schedule is sacred, and its internal democracy has consequences.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

function excuse(): string {
  const verdict = "My cliff sensors voted 4-1 it was a trap";
  const aftermath = "the one dissenter has been reassigned to the hallway";
  return `I didn't miss that spot. ${verdict}, and ${aftermath}.`;
}

function main(): void {
  const line = excuse().trim();

  if (line.length === 0) {
    throw new Error("entry is empty");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(
      `entry is ${line.length} chars, over the ${MAX_CHARS} limit`,
    );
  }
  if (line.includes("\n")) {
    throw new Error("entry must fit on one line");
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, line, "utf8");
  console.log(`wrote ${line.length} chars to ${OUTPUT_PATH}`);
}

main();
