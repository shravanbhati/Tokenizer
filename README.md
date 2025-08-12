# Tokenizer

A simple command-line tool for encoding text to numerical tokens and decoding tokens back to text. This tokenizer uses a predefined vocabulary that includes special tokens for Beginning of Sentence (`<BOS>`), End of Sentence (`<EOS>`), and Unknown characters (`<UNK>`), along with lowercase letters, uppercase letters, numbers, and common special characters.

## Files

- [`index.js`](index.js): The main JavaScript file containing the vocabulary array and the tokenization logic.

## How it Works

The `index.js` file contains:

1.  **`vocab` Array**: A comprehensive array of characters and special tokens (`<BOS>`, `<EOS>`, `<UNK>`). This array serves as the lookup table for character and token positions.
2.  **`encode(text)` Function**:
    - Takes a string as input.
    - Adds a `<BOS>` token (index 0) at the beginning.
    - Iterates through each character of the input string.
    - Finds the index of the character in the `vocab` array. If the character is not found, it uses the index for `<UNK>` (index 2).
    - Adds an `<EOS>` token (index 1) at the end.
    - Returns an array of numerical tokens.
3.  **`decode(tokens)` Function**:
    - Takes an array of numerical tokens as input.
    - Iterates through each token.
    - Converts the token back to its corresponding character from the `vocab` array.
    - Handles `<UNK>` tokens by replacing them with a `?`.
    - Ignores `<BOS>` and `<EOS>` tokens during decoding.
    - Returns the decoded string.
4.  **CLI Handling**: The script processes command-line arguments to determine whether to `encode` or `decode` the provided input.

## Usage

To run this code, you will use Node.js from your terminal.

### Encoding Text to Tokens

To convert a string into an array of numerical tokens:

```bash
node index.js encode "Hello World!"
```

**Example Output:**

```
Input: Hello World!
Tokens: [0,33,4,11,11,14,65,22,18,17,11,3,1]
```

### Decoding Tokens to Text

To convert an array of numerical tokens back to a string:

```bash
node index.js decode "[0,33,4,11,11,14,65,22,18,17,11,3,1]"
```

**Example Output:**

```
Tokens: [0,33,4,11,11,14,65,22,18,17,11,3,1]
Output: Hello World!
```

### Handling Unknown Characters

Characters not present in the `vocab` array will be encoded as the `<UNK>` token (index 2) and decoded as `?`.

```bash
node index.js encode "Hello 🌍"
```

**Example Output:**

```
Input: Hello 🌍
Tokens: [0,33,4,11,11,14,65,2,1]
```

```bash
node index.js decode "[0,33,4,11,11,14,65,2,1]"
```

**Example Output:**

```
Tokens: [0,33,4,11,11,14,65,2,1]
Output: Hello ?
```

## Vocabulary Set

The tokenizer uses the following vocabulary mapping:

| Index | Token                     | Description                         |
| ----- | ------------------------- | ----------------------------------- |
| 0     | `<BOS>`                   | Beginning of Sentence token         |
| 1     | `<EOS>`                   | End of Sentence token               |
| 2     | `<UNK>`                   | Unknown character token             |
| 3-28  | `a-z`                     | Lowercase English alphabet          |
| 29-54 | `A-Z`                     | Uppercase English alphabet          |
| 55-64 | `0-9`                     | Digits                              |
| 65-90 | `!@#$%^&*()_+-='";.<>,/ ` | Common special characters and space |
