
var expect = require('chai').expect;
require('dotenv').load();
var FortnoxClient = require('../lib/index');

describe('FortnoxClient', function() {
    const fortnox = new FortnoxClient(process.env.SECRET, process.env.ACCESSTOKEN);
    it('should get list of customers', async function() {
        var result = await fortnox.getCustomers();
        expect(result.Customers).to.be.an('array');
    });

    it('should create a new customer', async function() {
        const customer = {
            Name: 'Simon testar ett api 123',
        }
        const result = await fortnox.createCustomer(customer);
        expect(result.Customer).to.be.an('object');
    });

    it('should get list of articles', async function() {
        var result = await fortnox.getArticles();
        expect(result.Articles).to.be.an('array');
    });

    it('should get list of orders', async function() {
        var result = await fortnox.getOrders();
        expect(result.Orders).to.be.an('array');
    });
});