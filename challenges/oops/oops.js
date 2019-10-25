const fs = require('fs');

fs.readdirSync('./challenges/oops/data/').forEach(file => {
  console.log(fs.readFileSync(`./challenges/oops/data/${file}`).toString());
});
