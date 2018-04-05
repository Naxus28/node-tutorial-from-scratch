const fs = require('fs');
const dir = '..'; // from this file we will read files/directories in the root of this project
const excludeFiles = ['.DS_Store', '.git'];

fs.readdir(dir, (err, files) => {
  if (err) {
    throw err;
  }

  files.forEach(file => {
    // exclude hidden files
    if (file.charAt(0) !== '.') {
      let filePath = `${dir}/${file}`;
      let fileStats = fs.statSync(filePath);

      if (fileStats.isFile() && !excludeFiles.includes(file)) {
        fs.readFile(filePath, 'UTF-8', (err, file) => {
          if (err) {
            throw err;
          }

          console.log('\n========FILE CONTENT========\n');
          console.log(file);
        });
      } else if (fileStats.isDirectory()) {
        console.log('\n========DIRECTORY========\n');
        console.log(file);
      }
    }
  });
});