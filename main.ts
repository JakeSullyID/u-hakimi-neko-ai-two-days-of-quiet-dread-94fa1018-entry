import * as fs from 'node:fs';
import * as path from 'node:path';

// Code review comment to be written deterministically
// The dread arises from the chilling implication that assumptions are sentient and have only temporarily agreed to cooperate.
const comment = "Approved; the assumptions have agreed to hold for now.";

// Ensure comment length stays within the valid 1 to 140 character limit to prevent empty strings or oversized payloads.
if (comment.length < 1 || comment.length > 140) {
    console.error("Error: Comment length is invalid.");
    process.exit(1);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const outputPath = path.join(outputDir, 'entry.txt');

try {
    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(outputPath, comment, 'utf-8');
} catch (error) {
    console.error("Failed to write entry.txt:", error);
    process.exit(1);
}
