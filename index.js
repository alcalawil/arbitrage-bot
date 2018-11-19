const binance = require('./binance');
const lb = require('./lbtc');

(async () => {
    console.log(await binance.getPriceOf('BTCUSDT'));
    console.log(await lb.getBestPriceOf('cop'));
})();
