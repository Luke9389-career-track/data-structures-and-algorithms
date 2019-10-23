function dailyRevenue(transactions) {
  const summary = {};
  transactions.forEach(transaction => {
    //                        Takes out the hours mins and secs   Time Zone
    //transaction.timestamp - (transaction.timestamp % 86400000) + 25200000
    const date = new Date(transaction.timestamp - (transaction.timestamp % 86400000) + 25200000);
    summary[date.toString().slice(0, 15)] ? summary[date.toString().slice(0, 15)] += transaction.price : summary[date.toString().slice(0, 15)] = transaction.price;
  });
  return summary;
}
//8.64 x 10^7 milliseconds in a day
module.exports = {
  dailyRevenue
};