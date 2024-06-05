const sinon = require('sinon');

const { expect } = require('chai');

const sendPaymentRequestToApi = require('./4-payment');

const Utils = require('./utils');

describe('Stubs', function () {
  it('has the same math', () => {
    const stubt_utils = sinon.stub(Utils, 'calculateNumber');

    stubt_utils.returns(10);

    const spying_console = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(stubt_utils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    expect(spying_console.calledOnceWithExactly('The total is: 10')).to.be.true;

    stubt_utils.restore();

    spying_console.restore();
  });
});
