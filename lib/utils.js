const queryString = require('query-string');

module.exports = {
    generateUrl(url, params){
        const param = queryString.stringify({...params})
        return `${url}?${param}`
    }
}
