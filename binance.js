const request = require('request');
const URL_BASE = 'https://api.binance.com';

const path = '/api/v3/ticker/price?symbol=BTCUSDT';

const full_url = URL_BASE + path;

function getBTCPrice() {
    return new Promise((resolve, reject) => {
        request.get(full_url, function (err, response, json) {
            if (err) {
                return reject(err);
            }
            let data = JSON.parse(json);
            const priceBtc = parseFloat(data.price).toFixed(2);
            resolve(priceBtc);
        });
    });
}

module.exports = { getBTCPrice }
