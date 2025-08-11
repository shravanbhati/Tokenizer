#!/usr/bin/env node

const char = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "'", ";", '"', ".", "<", ">", ",", "/", " "];

function getToken(input) {
  const inputArr = input.split("");
  let positionArr = [];
  inputArr.forEach((token) => {
    const index = char.indexOf(token);
    if (index !== -1) {
      positionArr.push(index);
    } else {
      positionArr.push("<?N?>");
    }
  });
  return positionArr;
}

function getOutput(input) {
  let outputArr = [];
  input.forEach((token) => {
    if (token === "<?N?>") {
      outputArr.push("<?N?>");
    } else {
      const singleChar = char[token];
      if (singleChar !== undefined) {
        outputArr.push(singleChar);
      }
    }
  });
  return outputArr;
}
// Get command line arguments
const args = process.argv.slice(2);
const command = args[0];
const input = args[1];

// Check if command and input are provided
if (!command || !input) {
  console.log("Usage:");
  console.log("  tokenizer encode <text>     - Convert text to tokens");
  console.log("  tokenizer decode <tokens>   - Convert tokens to text");
  process.exit(1);
}

if (command === "encode") {
  const tokens = getToken(input);
  console.log("Input:", input);
  console.log("Tokens:", JSON.stringify(tokens));
} else if (command === "decode") {
  try {
    // Parse the token array from string
    const tokenArray = JSON.parse(input);
    const text = getOutput(tokenArray);
    console.log("Tokens:", JSON.stringify(tokenArray));
    console.log("Output:", text.join(""));
  } catch (error) {
    console.log("Error: Invalid token format. Please provide tokens as JSON array.");
    console.log('Example: tokenizer decode "[1,2,3,4]"');
    process.exit(1);
  }
} else {
  console.log("Unknown command:", command);
  console.log("Available commands: encode, decode");
  process.exit(1);
}
