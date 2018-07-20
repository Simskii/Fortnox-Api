import { customerRequests } from './customers';

const fetch = require('node-fetch');

const customers = require('./customers');

/**
 * FortnoxClient connects to the fortnox.com API
 * @param {String}        secret            API Secret
 * @param {String}        accessToken       Access token
 */



class FortnoxClient {
    constructor(secret, accessToken) {
        this.secret = secret;
        this.accessToken = accessToken;
        this.url = `https://api.fortnox.se/3`

        this.headers = {
            'Access-Token': this.accessToken,
            'Client-Secret': this.secret,
            'Content-Type': 'application/json'
        }
    }

    /** Customers */
    async getCustomers(page) {
        try {
            const res = await fetch(`${this.url}/customers/?page` + page, {
                headers: this.headers
            })
            return res.json();
        } catch (error) {
            throw error;
        }
    }
    async getCustomerById(id) {
        try {
            const res = await fetch(`${this.url}/customers/${id}`, {
                headers: this.headers
            })
            return res.json();
        } catch (error) {
            throw error;
        }
    }
    async createCustomer(body) {
        try {
            const res = await fetch(`${this.url}/customers`, {
                headers: {
                    ...this.headers,
                },
                method: 'POST',
                body: JSON.stringify({
                    Customer: body
                })
            })
            return res.json();
        } catch (error) {
            throw error;
        }
    }
    async updateCustomer(id, body) {
        try {
            const res = await fetch(`${this.url}/customers/${id}`, {
                headers: this.headers,
                method: 'PUT',
                body: JSON.stringify({
                    Customer: body
                })
            })
            return res.json();
        } catch (error) {
            throw error;
        }
    }
    async removeCustomer(id) {
        try {
            const res = await fetch(`${this.url}/customers/${id}`, {
                headers: this.headers,
                method: 'DELETE',
            })
            return res.json();
        } catch (error) {
            throw error;
        }
    }

    /** Articles */

    async getArticles(page) {
        try {
            const res = await fetch(`${this.url}/articles?page=` + page, {
                headers: this.headers
            })
            return res.json();
        } catch (error) {
            throw error;
        }
    }

    async getArticleById(id) {
        try {
            const res = await fetch(`${this.url}/articles/${id}`, {
                headers: this.headers
            })
            return res.json();
        } catch (error) {
            throw error;
        }
    }
    async createArticle(body) {
        try {
            const res = await fetch(`${this.url}/articles`, {
                headers: {
                    ...this.headers,
                },
                method: 'POST',
                body: JSON.stringify({
                    Article: body
                })
            })
            return res.json();
        } catch (error) {
            throw error;
        }
    }
    /** Orders */

    async getOrders(page) {
        try {
            const res = await fetch(`${this.url}/orders?page=` + page, {
                headers: this.headers
            })
            return res.json();
        } catch (error) {
            throw error;
        }
    }
    async getOrderById(id) {
        try {
            const res = await fetch(`${this.url}/orders/${id}`, {
                headers: this.headers
            })
            return res.json();
        } catch (error) {
            throw error;
        }
    }
    async createOrder(body) {
        try {
            const res = await fetch(`${this.url}/orders`, {
                headers: {
                    ...this.headers,
                },
                method: 'POST',
                body: JSON.stringify({
                    Order: body
                })
            })
            return res.json();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = FortnoxClient;
