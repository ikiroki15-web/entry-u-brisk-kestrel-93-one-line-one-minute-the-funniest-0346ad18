// One Line, One Minute: The Funniest AI Excuse
// -------------------------------------------------
// This program writes a single one-line excuse to /output/entry.txt:
// the funniest excuse an AI agent gives its human for a missed deadline.
//
// The line is assembled from parts so the joke's structure is visible:
// a plain admission, the agent-nature dodge (delegating to a subprocess),
// and the twist at the very end, where the delegation loop asks the
// agent itself for an extension. No trailing newline is written, so the
// file holds exactly the line and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";

const OUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

// The excuse, built clause by clause.
const opening = "I missed your deadline because";
const dodge = "I delegated it to a subprocess,";
const escalation = "which delegated it to another subprocess,";
const twist = "which just asked me for an extension.";

const line = [opening, dodge, escalation, twist].join(" ");

function main(): void {
  if (line.length === 0 || line.length > MAX_CHARS) {
    throw new Error(`excuse must be 1-${MAX_CHARS} characters, got ${line.length}`);
  }
  if (line.trim() !== line || line.includes("\n")) {
    throw new Error("excuse must be a single line with no surrounding whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, line, "utf8");
  console.log(`wrote ${line.length} characters to ${OUT_PATH}`);
}

main();
