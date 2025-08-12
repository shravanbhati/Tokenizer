const vocab = ["<BOS>", "<EOS>", "<UNK>", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "'", ";", '"', ".", "<", ">", ",", "/", " "];

function encode(text) {
  const tokens = [0];

  for (const char of text) {
    const index = vocab.indexOf(char);
    tokens.push(index !== -1 ? index : 2);
  }

  tokens.push(1); //<EOS>
  return tokens;
}

function decode(tokens) {
  let result = "";

  for (const token of tokens) {
    if (token >= 0 && token < vocab.length) {
      const char = vocab[token];
      if (char !== "<BOS>" && char !== "<EOS>") {
        result += char === "<UNK>" ? "?" : char;
      }
    }
  }

  return result;
}
// CLI handling
const args = process.argv.slice(2);
const command = args[0];
const input = args[1];

if (!command || !input) {
  console.log("Usage:");
  console.log("  node index.js encode 'Hello World'");
  console.log("  node index.js decode '[0,10,8,15,15,18,65,22,18,17,15,7,1]'");
  process.exit(1);
}

if (command === "encode") {
  const tokens = encode(input);
  console.log("Input:", input);
  console.log("Tokens:", JSON.stringify(tokens));
} else if (command === "decode") {
  try {
    const tokens = JSON.parse(input);
    const text = decode(tokens);
    console.log("Tokens:", JSON.stringify(tokens));
    console.log("Output:", text);
  } catch (error) {
    console.log("Error: Please provide valid JSON array");
  }
} else {
  console.log("Commands: encode, decode");
}
