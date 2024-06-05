const sinon = require('sinon');

const { expect } = require('chai');

const sendPaymentRequestToApi = require('./3-payment');

const Utils = require('./utils');

describe('Spies', function () {
  it('has the same math', () => {
    const spy_utils = sinon.spy(Utils, 'calculateNumber');

    const spy_console = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(spy_utils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    expect(spy_console.calledOnceWithExactly('The total is: 120')).to.be.true;

    spy_utils.restore();

    spy_console.restore();
  });
});
