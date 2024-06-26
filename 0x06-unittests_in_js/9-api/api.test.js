const request = require('request');

const { expect } = require('chai');

describe('Integration Testing', () => {
  describe('GET /', () => {
    it('Code: 200 | Body: Welcome to the payment system', (done) => {

      const optiions = {
        url: 'http://localhost:7865',
        method: 'GET',
      };

      request(optiions, function (error, response, body) {

        expect(response.statusCode).to.equal(200);

        expect(body).to.equal('Welcome to the payment system');

        done();

      });
    });
  });

  describe('GET /cart/12', () => {
    it('Responds is with the 200 and id 12 in msg', (done) => {
      const optiions = {
        url: 'http://localhost:7865/cart/12',
        method: 'GET',
      };

      request(optiions, function (error, response, body) {

        expect(response.statusCode).to.equal(200);

        expect(body).to.equal('Payment methods for cart 12');

        done();

      });
    });
  });

  describe('GET /cart/1', () => {
    it('Responds is with the 200 and id 1 in msg', (done) => {
      const optiions = {
        url: 'http://localhost:7865/cart/1',
        method: 'GET',
      };

      request(optiions, function (error, response, body) {

        expect(response.statusCode).to.equal(200);

        expect(body).to.equal('Payment methods for cart 1');

        done();

      });
    });
  });

  describe('GET /cart/123', () => {
    it('Responds is with the 200 and id 12 in msg', (done) => {
      const optiions = {
        url: 'http://localhost:7865/cart/123',
        method: 'GET',
      };

      request(optiions, function (error, response, body) {

        expect(response.statusCode).to.equal(200);

        expect(body).to.equal('Payment methods for cart 123');

        done();

      });
    });
  });

  describe('GET /cart/a12', () => {
    it('Responds is with the 404', (done) => {
      const optiions = {
        url: 'http://localhost:7865/cart/a12',
        method: 'GET',
      };

      request(optiions, function (error, response, body) {

        expect(response.statusCode).to.equal(404);

        done();

      });
    });
  });

  describe('GET /cart/a12b', () => {
    it('Responds is with the 404', (done) => {
      const optiions = {

        url: 'http://localhost:7865/cart/a12b',
        method: 'GET',
      };

      request(optiions, function (error, response, body) {

        expect(response.statusCode).to.equal(404);

        done();

      });
    });
  });

  describe('GET /cart/12b', () => {
    it('Responds is with the 404', (done) => {

      const optiions = {

        url: 'http://localhost:7865/cart/12b',
        method: 'GET',
      };

      request(optiions, function (error, response, body) {

        expect(response.statusCode).to.equal(404);

        done();
      });
    });
  });

  describe('GET /cart/hello', () => {
    it('Responds is with the 404', (done) => {
      const optiions = {

        url: 'http://localhost:7865/cart/hello',
        method: 'GET',
      };

      request(optiions, function (error, response, body) {

        expect(response.statusCode).to.equal(404);

        done();

      });
    });
  });

  describe('GET /cart/', () => {
    it('Responds is with the 404', (done) => {
      const optiions = {

        url: 'http://localhost:7865/cart/',
        method: 'GET',
      };

      request(optiions, function (error, response, body) {

        expect(response.statusCode).to.equal(404);

        done();

      });
    });
  });
});
