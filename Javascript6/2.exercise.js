
// readfile
const fs = require('fs');

function ReadFile (filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                console.log('Successfully read file:', data);
            }
        });
    });
}
ReadFile('read.txt') 
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    });

// writefile 
    function writeFile (filename, data) {
        return new Promise((resolve, reject) => {
            fs.writeFile(filename, data, 'utf8', (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        })
    }

    writeFile('write.txt', 'Hello Brada')
       .then((data) => {
            console.log(data);
        })
       .catch((err) => {
            console.error(err);
        });





