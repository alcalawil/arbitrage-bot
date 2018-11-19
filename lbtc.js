const request = require('request');
const URL_BASE = 'https://localbitcoins.com';

const getBestPriceOf = (currency) => {
    const path = `/buy-bitcoins-online/${currency}/.json`;
    const fullUri = URL_BASE + path;
    return new Promise((resolve, reject) => {
        request.get(fullUri, (err, response, json) => {
            if (err) {
                return reject(err);
            }
            const data = JSON.parse(json);
            const priceCOP = data.data.ad_list[0].data.temp_price;
            resolve(priceCOP);
        });
    });
}

module.exports = { getBestPriceOf };