
const expect = require('chai').expect;
require('dotenv').load();
const FortnoxClient = require('../lib/index');


describe('FortnoxClient', () => {
    const fortnox = new FortnoxClient(process.env.CLIENT_SECRET, process.env.ACCESS_TOKEN);
    it('should get list of customers', async () => {
        const result = await fortnox.getCustomers(1, 2);
        expect(result.Customers).to.be.an('array');
    });



    it('should create a new customer', async () => {
        const customer = {
            Name: 'Customer AB',
        }
        const result = await fortnox.createCustomer(customer);
        expect(result.Customer).to.be.an('object');
    });

    it('should delete a customer', async () => {
        const { Customer } = await fortnox.createCustomer({
            Name: 'Customer ABasd'
        })
        const res = await fortnox.removeCustomer(Customer.CustomerNumber)
        console.log(res)
    })

    it('should get list of articles', async () => {
        const result = await fortnox.getArticles();
        expect(result.Articles).to.be.an('array');
    });

    it('should get list of orders', async () => {
        const result = await fortnox.getOrders();
        expect(result.Orders).to.be.an('array');
    });
});
