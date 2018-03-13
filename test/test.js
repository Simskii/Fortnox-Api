
const expect = require('chai').expect;
require('dotenv').load();
const FortnoxClient = require('../lib/index');

describe('FortnoxClient', () => {
    const fortnox = new FortnoxClient(process.env.SECRET, process.env.ACCESSTOKEN);
    it('should get list of customers', async () => {
        const result = await fortnox.getCustomers();
        expect(result.Customers).to.be.an('array');
    });

    it('should create a new customer', async () => {
        const customer = {
            Name: 'Customer AB',
        }
        const result = await fortnox.createCustomer(customer);
        expect(result.Customer).to.be.an('object');
    });

    it('should get list of articles', async () => {
        const result = await fortnox.getArticles();
        expect(result.Articles).to.be.an('array');
    });

    it('should get list of orders', async () => {
        const result = await fortnox.getOrders();
        expect(result.Orders).to.be.an('array');
    });
});
