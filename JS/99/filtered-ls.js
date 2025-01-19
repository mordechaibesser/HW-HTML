const fs = require('fs');
const path = require('path');


const directory = process.argv[2];
const extension = process.argv[3];


fs.readdir(directory, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

  
    if (Array.isArray(files)) {
        files.forEach(file => {
            if (path.extname(file) === '.' + extension) {
                console.log(file);
            }
        });
    } else {
        console.error('Error: files is not an array');
    }
});
