const request = require('request');
const URL_BASE = 'https://localbitcoins.com';

const getBestOfferOf = (currency) => {
    const path = `/buy-bitcoins-online/${currency}/.json`;
    const fullUri = URL_BASE + path;
    return new Promise((resolve, reject) => {
        request.get(fullUri, (err, response, json) => {
            if (err) {
                return reject(err);
            }
            const data = JSON.parse(json);
            const priceCOP = parseFloat(data.data.ad_list[0].data.temp_price);
            resolve(priceCOP);
        });
    });
}

const handler = async (event, context) => {
    const params = event.queryStringParameters
    const currency = params.currency.toUpperCase();
    const bestOffer = await getBestOfferOf(currency);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Successful',
            bestOffer
        })
    }
}

module.exports = { handler };