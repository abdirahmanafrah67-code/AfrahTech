
import { findBestMatch } from './src/utils/nlpEngine';
import { BRAIN } from './src/utils/brain';

const runTest = (input) => {
    console.log(`\nUser: "${input}"`);
    const result = findBestMatch(input);
    console.log(`Bot (Score: ${result.score}, Intent: ${result.intent?.id || 'null'}):`);
    console.log(`"${result.response}"`);
};

console.log("--- Starting Agent Verification ---");

// Test 1: Greeting
runTest("Hello there");

// Test 2: Product Inquiry (Comprehensive Product)
runTest("Can you make an app for me?");

// Test 3: Pricing (Should give generic 'contact us' response)
runTest("How much does it cost?");

// Test 4: Tech Stack (Should avoid details)
runTest("Do you use React or Flutter?");

// Test 5: Contact Info detection
runTest("My email is test@example.com");

console.log("\n--- Verification Complete ---");
