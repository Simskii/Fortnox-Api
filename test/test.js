
var expect = require('chai').expect;
var FortnoxClient = require('../lib/index');

describe('FortnoxClient', function() {
    const fortnox = new FortnoxClient(process.env.SECRET, process.env.accessToken);
    it('should get list of customers', async function() {
        var result = await fortnox.getCustomers();
        expect(result.Customers).to.be.an('array');
    });
});