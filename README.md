# Tokenizer

A simple command-line tool for encoding text to numerical tokens and decoding tokens back to text. This tokenizer uses a predefined character set that includes lowercase letters, uppercase letters, numbers, and common special characters.

## Files

- [`index.js`](index.js): The main JavaScript file containing the character array and the tokenization logic.

## How it Works

The `index.js` file contains:

1.  **`char` Array**: A comprehensive array of characters including lowercase and uppercase letters, numbers, and various symbols. This array serves as the lookup table for character positions.
2.  **`userInput` Variable**: A string variable that holds the input text to be tokenized.
3.  **`getArray(userInput)` Function**:
    - Takes a string as input.
    - Splits the input string into an array of individual characters.
    - Iterates through each character and finds its index (numerical position) within the `char` array.
    - Collects all found indices into a new array.
    - Returns the array of character positions.

The script then calls `getArray` with the `userInput` and logs the resulting array of positions to the console.

## Usage

#### Decoding Tokens to Text

Convert an array of numerical tokens back to text:

### Method 1: Using npm scripts

#### Encoding with npm scripts:

```bash
npm run encode "Hello World!"
```

#### Decoding with npm scripts:

```bash
npm run decode "[33,4,11,11,14,32,48,14,17,11,3,0]"
```

### Method 2: Direct Node.js execution

```bash
node index.js encode "Hello World!"
node index.js decode "[33,4,11,11,14,32,48,14,17,11,3,0]"
```

**Encoding output:**

```
Input: Hello World!
Tokens: [33,4,11,11,14,32,48,14,17,11,3,0]
```

**Decoding output:**

```
Tokens: [33,4,11,11,14,32,48,14,17,11,3,0]
Output: Hello World!
```

## Character Set

The tokenizer uses the following character mapping:

| Index Range | Characters                                                                                     |
| ----------- | ---------------------------------------------------------------------------------------------- |
| 0-25        | a-z (lowercase)                                                                                |
| 26-51       | A-Z (uppercase)                                                                                |
| 52-61       | 0-9 (numbers)                                                                                  |
| 62-87       | Special characters (!, @, #, $, %, ^, &, \*, (, ), \_, +, =, -, ', ;, ", ., <, >, ,, /, space) |

## Examples

### Using npm scripts

```bash
npm run encode "abc"
# Output: [0,1,2]

npm run decode "[0,1,2]"
# Output: abc
```

### Using direct Node.js execution

```bash
node index.js encode "abc"
# Output: [0,1,2]

node index.js decode "[0,1,2]"
# Output: abc
```

### Special Characters

```bash
tokenizer encode "Hello@123!"
# Output: [33,4,11,11,14,63,52,53,54,62]
```

### Handling Unknown Characters

```bash
tokenizer encode "Hello 🌍"
# Output: [33,4,11,11,14,32,"<?N?>"]
```

### Round-trip Conversion

```bash
# Encode
tokenizer encode "Node.js"
# Output: [39,14,3,4,75,9,18]

# Decode back
tokenizer decode "[39,14,3,4,75,9,18]"
# Output: Node.js
```
