// command line: node fetcher.js http://www.example.edu/ ./index.html
// return: "Downloaded and saved 3261 bytes to ./index.html"

//Implement a node app called fetcher.js.

// It should take two command line arguments:

// a URL
// a local file path
// It should download the resource at the URL to the local path on your machine. Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.

// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html

// use request library
// use fs.write
//use callback approach
//pipe function?? DO NOT USE.
//do NOT use writeFileSync

const request = require("request");
const fs = require("fs");
const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.log("error:", error);
    return;
  }
  fs.writeFile(filePath, body, (err) => {
    if (err) {
      console.error(err);
      return `ERROR! Path is invalid`;
    }
    fs.stat(filePath, (err, stats) => {
      if (err) throw err;
      console.log(`Downloaded and saved ${stats.size} bytes to ${filePath}`);
    });
  });
});
