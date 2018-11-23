const request = require('request');
const URL_BASE = 'https://api.binance.com';

const getPriceOf = (symbol) => {
    const path = `/api/v3/ticker/price?symbol=${symbol}`;
    const fullUri = URL_BASE + path;
    return new Promise((resolve, reject) => {
        request.get(fullUri, (err, response, json) => {
            if (err) {
                return reject(err);
            }
            let data = JSON.parse(json);
            const priceBtc = parseFloat(data.price);
            resolve(priceBtc);  
        });
    });
}

const handler = async (event, context) => {
    const params = event.queryStringParameters
    const symbol = params.symbol.toUpperCase();
    const price = await getPriceOf(symbol);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Successful',
            params,
            price
        })
    }
}

module.exports = { handler }
