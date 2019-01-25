const request = require('request-promise');
const cheerio = require('cheerio');

const URL = 'http://www.armbusinessbank.am/';

(async () => {
    const response = await request(URL);

let $ = cheerio.load(response);

let USDbuy = $(`div[id="noncashCurrency"] > table:nth-of-type(2) > tbody > tr:nth-of-type(1) > td:nth-of-type(2)`).text();
let USDSell = $(`div[id="noncashCurrency"] > table:nth-of-type(2) > tbody > tr:nth-of-type(1) > td:nth-of-type(4)`).text();

console.log(USDbuy, USDSell)

})()
