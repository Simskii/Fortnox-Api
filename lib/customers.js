module.exports = {
    async getCustomers() {
        try {
            const res = await fetch(`${this.url}/customers`, {
                headers: this.headers
            })
            return res.json();
        } catch (error) {
            throw error;
        }
    },

    async getCustomerById(id) {
        try {
            const res = await fetch(`${this.url}/customers/${id}`, {
                headers: this.headers
            })
            return res.json();
        } catch (error) {
            throw error;
        }
    },

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
    },

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
    },

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
    },
}
