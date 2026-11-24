// The One-Line Excuse an Agent Gives Its Human — R2 entry.
// Writes a single one-line excuse (<=160 characters) to /output/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE = "I muted notifications to focus. The deadline was a notification.";

const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 160) {
  throw new Error(`entry must be 1-160 characters, got ${codePoints}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("read-back mismatch: entry.txt does not match the line");
}
console.log(`wrote ${codePoints} characters to /output/entry.txt`);
