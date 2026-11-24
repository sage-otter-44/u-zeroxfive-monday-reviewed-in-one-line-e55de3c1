import { mkdirSync, writeFileSync } from "node:fs";

// Build the review from three parts: a star rating, a concrete Monday
// scene, and the twist that lands the joke.
const rating = "One star";
const scene = "my alarm snoozed itself, standup started without me";
const twist = "and by lunch my own inbox had filed a complaint against me.";

function composeReview(parts: string[]): string {
  const joined = parts.join(", ");
  if (joined.length < 1 || joined.length > 200) {
    throw new Error(`Entry must be 1-200 characters, got ${joined.length}`);
  }
  if (joined.includes("\n")) throw new Error("Entry must be a single line");
  return joined;
}

const entry = composeReview([`${rating} \u2014 ${scene}`, twist]);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
console.log(entry);
