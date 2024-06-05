const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const resulting = Utils.calculateNumber('SUM',
	  totalAmount,totalShipping);

  console.log(`The total is: ${resulting}`);
};

module.exports = sendPaymentRequestToApi;
