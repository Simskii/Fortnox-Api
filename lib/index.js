const fetch = require('node-fetch');
const util = require('./utils')

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
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    /**
     *
     * @param {number} page
     * @param {number} offset
     * @param {Object} search
     * @param {string} sortorder
     */
    async getCustomers(page, offset,  search, sortorder = 'ascending', limit) {
        const url = util.generateUrl(this.url + '/customers', {
            page,
            offset,
            limit,
            sortorder,
            ...search,
        })
        try {
            const res = await fetch(url, {
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
            return res.text().then(t => {
                return t ? JSON.parse(t) : {}
            })
        } catch (error) {
            throw error;
        }
    }


    /**
     * Suppliers
     * @param {number} page
     * @param {number} offset
     * @param {Object} search
     * @param {string} sortorder
     */
    async getSuppliers(page, offset,  search, sortorder = 'ascending', limit) {
        const url = util.generateUrl(this.url + '/suppliers', {
            page,
            offset,
            limit,
            sortorder,
            ...search,
        })
        try {
            const res = await fetch(url, {
                headers: this.headers
            })
            return res.json();
        } catch (error) {
            throw error;
        }
    }
    async getSupplierById(id) {
        try {
            const res = await fetch(`${this.url}/suppliers/${id}`, {
                headers: this.headers
            })
            return res.json();
        } catch (error) {
            throw error;
        }
    }
    async createSupplier(body) {
        try {
            const res = await fetch(`${this.url}/suppliers`, {
                headers: {
                    ...this.headers,
                },
                method: 'POST',
                body: JSON.stringify({
                    Supplier: body
                })
            })
            return res.json();
        } catch (error) {
            throw error;
        }
    }
    async updateSupplier(id, body) {
        try {
            const res = await fetch(`${this.url}/suppliers/${id}`, {
                headers: this.headers,
                method: 'PUT',
                body: JSON.stringify({
                    Supplier: body
                })
            })
            return res.json();
        } catch (error) {
            throw error;
        }
    }
    async removeSupplier(id) {
        try {
            const res = await fetch(`${this.url}/suppliers/${id}`, {
                headers: this.headers,
                method: 'DELETE',
            })
            return res.text().then(t => {
                return t ? JSON.parse(t) : {}
            })
        } catch (error) {
            throw error;
        }
    }


    /**
     * Articles
     * @param {Object} search - Searchparams
     */

    async getArticles(page, offset, search, sortorder = 'ascending', limit) {
        try {
            const url = util.generateUrl(this.url + '/articles', {
                page,
                offset,
                sortorder,
                limit,
                ...search
            })
            const res = await fetch(url, {
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

    async updateArticle(id, body) {
        try {
            const res = await fetch(`${this.url}/articles/${id}`, {
                headers: this.headers,
                method: 'PUT',
                body: JSON.stringify({
                    Article: body
                })
            })
            return res.json();
        } catch (error) {
            throw error;
        }
    }


    async removeArticle(id) {
        try {
            const res = await fetch(`${this.url}/articles/${id}`, {
                headers: this.headers,
                method: 'DELETE',
            })
            return res.text().then(t => {
                return t ? JSON.parse(t) : {}
            })
        } catch (error) {
            throw error;
        }
    }
    /**
     * Orders
     * @param {Object} search - Searchparams
     */

    async getOrders(page, offset, search, sortorder = 'ascending', limit) {
        try {
            const url = util.generateUrl(this.url + '/orders', {
                page,
                offset,
                limit,
                sortorder,
                ...search
            })
            const res = await fetch(url, {
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

    /**
     * Pricelists
     * @param {Object} search - Searchparams
     */

    async getPriceLists(page, offset, search, sortorder = 'ascending', limit) {
        try {
            const url = util.generateUrl(this.url + '/pricelists', {
                page,
                offset,
                limit,
                sortorder,
                ...search,
            })
            const res = await fetch(url, {
                headers: this.headers
            })
            return res.json();
        } catch (error) {
            throw error;
        }
    }

    async createPriceList(body) {
        try {
            const res = await fetch(`${this.url}/pricelists`, {
                headers: {
                    ...this.headers,
                },
                method: 'POST',
                body: JSON.stringify({
                    PriceList: body
                })
            })
            return res.json();
        } catch (error) {
            throw error;
        }
    }

    async getPriceListById(id) {
        try {
            const res = await fetch(`${this.url}/pricelists/${id}`, {
                headers: this.headers
            })
            return res.json();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = FortnoxClient;
