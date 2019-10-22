function dateAdder(date, diff) {
  const secReg = /s$/;
  const minReg = /m$/;
  const hourReg = /h$/;
  const dayReg = /d$/;
  const weekReg = /w$/;
  const monthReg = /M$/;
  const yearReg = /y$/;

  if(secReg.test(diff)) {
    return new Date(date.valueOf() + (diff.slice(0, -1) * 1000));
  }
  if(minReg.test(diff)) {
    return new Date(date.valueOf() + (diff.slice(0, -1) * 1000 * 60));
  }
  if(hourReg.test(diff)) {
    return new Date(date.valueOf() + (diff.slice(0, -1) * 1000 * 60 * 60));
  }
  if(dayReg.test(diff)) {
    return new Date(date.valueOf() + (diff.slice(0, -1) * 1000 * 60 * 60 * 24));
  }
  if(weekReg.test(diff)) {
    return new Date(date.valueOf() + (diff.slice(0, -1) * 1000 * 60 * 60 * 24 * 7));
  }
  if(monthReg.test(diff)) {
    return new Date(date.valueOf() + (diff.slice(0, -1) * 1000 * 60 * 60 * 24 * 7 * 4));
  }
  if(yearReg.test(diff)) {
    return new Date(date.valueOf() + (diff.slice(0, -1) * 1000 * 60 * 60 * 24 * 365));
  }
}

// operators
// s	seconds
// m	minutes
// h	hours
// d	days
// w	weeks
// M	months
// y  years

module.exports = {
  dateAdder
};