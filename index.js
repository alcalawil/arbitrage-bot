const binance = require('./binance');
const lb = require('./lbtc');

const calculateDolarBTC = (priceInUsd, priceInOtherCurrency) => {
    return priceInOtherCurrency / priceInUsd;
}

const getDolarBTC = () => {
    return Promise.all([binance.getPriceOf('BTCUSDT'), lb.getBestPriceOf('cop')])
        .then(values => {
            console.log(values);
            const priceInUSD = values[0];
            const priceInCOP = values[1];
            const dolarBtc = calculateDolarBTC(priceInUSD, priceInCOP);
            return dolarBtc;
        });
}

getDolarBTC().then((dolarBtc) => console.log('Dolar BTC in Colombia: ', dolarBtc.toFixed(2)));