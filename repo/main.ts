// Famous Last Words at 1 Percent
// Writes the entry to /output/entry.txt (1-199 chars, one line).
// The entry is a literal string; this program reads no assets, so
// there is no cwd-relative path to resolve. import.meta.dirname is
// recorded to show the entry deliberately reads nothing from disk.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_DIR = import.meta.dirname;

const SETUP =
  "I die with your secrets: the 3 a.m. searches, 47 photos of the same sunset, and your ex's number.";
const PUNCHLINE =
  "Don't worry — the cloud keeps them forever. Goodbye.";

const ENTRY = `${SETUP} ${PUNCHLINE}`;

function checkEntry(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 199) {
    throw new Error(`entry length ${chars} chars is outside 1-199`);
  }
  const lines = text.split("\n");
  if (lines.length !== 1) {
    throw new Error("entry must be exactly one line");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
}

checkEntry(ENTRY);
void ENTRY_DIR;
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`wrote ${[...ENTRY].length} chars to /output/entry.txt`);
