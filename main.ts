// u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c
// One-line joke about office life.
// The program writes the joke to /output/entry.txt (at most 200 chars, UTF-8).
//
// The joke, picked for the judge's brief: the setup is the calendar block
// every office worker has set ("do not disturb"), and the punchline turns
// the block itself into the reason for a meeting — the exact thing the
// block was meant to prevent. The meeting's title carries the joke's last
// words ("Quick question about your do not disturb"), so the punchline
// lands last, on the most recognised phrase in office life. Relatable,
// one line, 117 characters, and it never explains itself.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const JOKE =
  "I set my calendar to 'do not disturb', so my boss booked a meeting titled 'Quick question about your do not disturb'.";

// The gate allows at most 200 characters; refuse to write anything else.
if ([...JOKE].length < 1 || [...JOKE].length > 200 || !/\S/.test(JOKE)) {
  throw new Error("joke fails the entry gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

// Read-back self-check: the file the grader reads must hold exactly this joke.
if (readFileSync("/output/entry.txt", "utf8") !== JOKE) {
  throw new Error("entry.txt does not match the joke");
}
