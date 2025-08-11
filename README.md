# Tokenizer CLI

A simple command-line tool for encoding text to numerical tokens and decoding tokens back to text. This tokenizer uses a predefined character set that includes lowercase letters, uppercase letters, numbers, and common special characters.

## Features

- **Encode**: Convert text strings to numerical token arrays
- **Decode**: Convert numerical token arrays back to text
- **Character Support**: Handles 88 different characters including:
  - Lowercase letters (a-z)
  - Uppercase letters (A-Z)
  - Numbers (0-9)
  - Special characters (!, @, #, $, %, etc.)
  - Space character
- **Error Handling**: Unknown characters are marked as `<?N?>`

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

`

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

## Error Handling

- **Invalid Commands**: Shows available commands (encode/decode)
- **Missing Arguments**: Displays usage instructions
- **Invalid Token Format**: Provides example of correct JSON array format
- **Unknown Characters**: Replaced with `<?N?>` marker

## Technical Details

- **Language**: JavaScript (Node.js)
- **Dependencies**: None (uses only built-in Node.js modules)
- **Character Set Size**: 88 characters
- **Token Format**: JSON array of integers and/or `<?N?>` strings

## Development

### Project Structure

```
.
├── index.js        # Main CLI application
├── package.json    # npm configuration
└── README.md       # This file
```
