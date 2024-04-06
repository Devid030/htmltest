const fs = require("node:fs");

let contentToWrite = "";

fs.writeFile(
  "end.txt",
  contentToWrite,
  (err) => {
    if (err) {
      console.error(err);
    } else {
      fs.appendFile(
        "end.txt",
        "welcome to the world",
        (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log("Success");
          }
        }
      );
    }
  }
);