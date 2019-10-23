function dailyRevenue(transactions) {

  return transactions.reduce((acc, transaction) => {
    //                        Takes out the hours mins and secs   Time Zone
    //transaction.timestamp - (transaction.timestamp % 86400000) + 25200000
    const date = new Date(transaction.timestamp - (transaction.timestamp % 86400000) + (new Date().getTimezoneOffset() * 60000));
    acc[date.toString().slice(0, 15)] ? acc[date.toString().slice(0, 15)] += transaction.price : acc[date.toString().slice(0, 15)] = transaction.price;
    return acc;
  }, {});

}
//8.64 x 10^7 milliseconds in a day
module.exports = {
  dailyRevenue
};