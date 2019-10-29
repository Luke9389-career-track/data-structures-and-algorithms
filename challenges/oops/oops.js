const fs = require('fs').promises;

function oops(path) {
  fs.readdir(path)
    .then(files => {
      return Promise.all(
        files.map(file => {
          return Promise.all([
            file,
            fs.readFile(`${path}${file}`),
            file.split('.')[0],
            fs.stat(`${path}${file}`)
          ]);
        })
      );
    })
    .then(dataArr => {
      dataArr.forEach(data => {
        fs.rename(`${path}${data[0]}`, `${path}${data[1]}-${data[2]}-${data[3].mtime.toJSON()}`);
      });
    });
}

oops('./challenges/oops/data/');

module.exports = {
  oops
};




