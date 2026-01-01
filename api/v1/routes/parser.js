const fs = require('fs');
const xml2js = require('xml2js');

const parser = {
  parseXml: (filePath) => {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, (err, data) => {
        if (err) {
          reject(err);
        } else {
          const parser = new xml2js.Parser();
          parser.parseString(data, (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        }
      });
    });
  },
};

module.exports = parser;