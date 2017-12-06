const fetch = require('node-fetch');

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
    }

    async getCustomers() {
        try {
            const res = await fetch(`${this.url}/customers`, {
                headers: {
                    'Access-Token': this.accessToken,
                    'Client-Secret': this.secret,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            })
            return res.json();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = FortnoxClient;