const sinon = require('sinon');

const { expect } = require('chai');

const sendPaymentRequestToApi = require('./5-payment');

const Utils = require('./utils');

describe('Hooks', function () {
  let spying_console;
  beforeEach(function () {
    spying_console = sinon.spy(console, 'log');
  });

  afterEach(function () {
    spying_console.restore();
  });

  it('logs correctly with 100, 20', () => {
    sendPaymentRequestToApi(100, 20);

    expect(spying_console.calledOnceWithExactly('The total is: 120')).to.be.true;

    expect(spying_console.calledOnce).to.be.true;
  });

  it('logs correctly with 10, 10', () => {
    sendPaymentRequestToApi(10, 10);

    expect(spying_console.calledOnceWithExactly('The total is: 20')).to.be.true;

    expect(spying_console.calledOnce).to.be.true;
  });
});
