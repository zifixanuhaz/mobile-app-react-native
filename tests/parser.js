// parser.js
const fs = require('fs');

class Parser {
  constructor(filePath) {
    this.filePath = filePath;
  }

  /**
   * Reads the file and parses its content
   * @returns {Object} The parsed file content
   * @throws {Error} If the file does not exist or is not a file
   */
  async parse() {
    try {
      const data = await fs.promises.readFile(this.filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        throw new Error(`File not found: ${this.filePath}`);
      } else if (error.code === 'EISDIR') {
        throw new Error(`Is a directory: ${this.filePath}`);
      } else {
        throw error;
      }
    }
  }
}

module.exports = Parser;