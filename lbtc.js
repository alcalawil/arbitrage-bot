const request = require('request');

const URL_BASE = 'https://localbitcoins.com';

const path = '/api/buy-bitcoins-online/CO/colombia/.json';

const full_url = 'https://localbitcoins.com/buy-bitcoins-online/cop/.json'

function requestForTicker() {
    request.get(full_url, function (err, response, json) {
        if (err) {
            throw err;
        }
        let data = JSON.parse(json);
        const priceCOP = data.data.ad_list[0].data.temp_price;
    });
}

requestForTicker();



