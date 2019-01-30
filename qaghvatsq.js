const request = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");
const Json2csvParser = require("json2csv").Parser;
const puppeteer = require("puppeteer");
var json2xls = require("json2xls");

const URL = "https://internetbank.armbusinessbank.am/InternetBank/MainForm.wgx";

(async () => {
  let amsatver = [["01", "02", "2018"], ["10", "02", "2018"]];

  const browser = await puppeteer.launch({
    args: ["--disable-features=site-per-process"],
    headless: false
  });

  let companies = [
    { username: "miparti1", password: "123456" },
    { username: "telectro1", password: "3215987" },
    { username: "tfurniture2", password: "3215987" },
    { username: "tindustry2", password: "3215987" }
  ];

  const page = await browser.newPage();

  await page.goto(
    "https://internetbank.armbusinessbank.am/internetbank/MainForm.wgx"
  );
  await page.waitForSelector("#TRG_32");
  await page.type("#TRG_32", companies[0].username);
  await page.type("#TRG_38", companies[0].password);
  await page.keyboard.press("Enter");

  await page.waitForSelector("#VWGLE_100");

  await page.click("#VWGLE_100");
  await page.waitFor(2000);

  await page.click(
    `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr > td:nth-child(4)`
  );
  await page.waitFor(1000);
  await page.click("#VWG_187");
  await page.waitFor(500);
  await page.keyboard.press("Tab");
  await page.waitFor(500);
  await page.keyboard.press("Tab");
  await page.waitFor(500);
  await page.keyboard.type(amsatver[0][0]);
  await page.waitFor(100);
  await page.keyboard.press("ArrowRight");
  await page.waitFor(100);
  await page.keyboard.type(amsatver[0][1]);
  await page.waitFor(100);
  await page.keyboard.press("ArrowRight");
  await page.waitFor(100);
  await page.keyboard.type(amsatver[0][2]);
  await page.waitFor(100);
  await page.keyboard.press("Tab");
  await page.keyboard.type(amsatver[1][0]);
  await page.waitFor(100);
  await page.keyboard.press("ArrowRight");
  await page.waitFor(100);
  await page.keyboard.type(amsatver[1][1]);
  await page.waitFor(100);
  await page.keyboard.press("ArrowRight");
  await page.waitFor(100);
  await page.keyboard.type(amsatver[1][2]);
  await page.waitFor(100);
  await page.keyboard.press("Enter");

  // await page.click("#VWG_145");
  //await page.click("#VWG_194 > div > span");

  //   let cur1 = await page.evaluate(() => {
  //     return document.querySelector(
  //       `table[class= "cb58 cb54 cct32"] > tbody > tr:nth-child(1) > td:nth-child(4) > div >span`
  //     ).innerText;
  //   });
  //   let cur1val = await page.evaluate(() => {
  //     return document.querySelector(
  //       `table[class= "cb58 cb54 cct32"] > tbody > tr:nth-child(1) > td:nth-child(10) > div >span`
  //     ).innerText;
  //   });
  //   let cur2 = await page.evaluate(() => {
  //     return document.querySelector(
  //       `table[class= "cb58 cb54 cct32"] > tbody > tr:nth-child(2) > td:nth-child(4) > div >span`
  //     ).innerText;
  //   });
  //   let cur2val = await page.evaluate(() => {
  //     return document.querySelector(
  //       `table[class= "cb58 cb54 cct32"] > tbody > tr:nth-child(2) > td:nth-child(10) > div >span`
  //     ).innerText;
  //   });
  //   let cur3 = await page.evaluate(() => {
  //     return document.querySelector(
  //       `table[class= "cb58 cb54 cct32"] > tbody > tr:nth-child(3) > td:nth-child(4) > div >span`
  //     ).innerText;
  //   });
  //   let cur3val = await page.evaluate(() => {
  //     return document.querySelector(
  //       `table[class= "cb58 cb54 cct32"] > tbody > tr:nth-child(3) > td:nth-child(10) > div >span`
  //     ).innerText;
  //   });
  //   let cur4 = await page.evaluate(() => {
  //     return document.querySelector(
  //       `table[class= "cb58 cb54 cct32"] > tbody > tr:nth-child(4) > td:nth-child(4) > div >span`
  //     ).innerText;
  //   });
  //   let cur4val = await page.evaluate(() => {
  //     return document.querySelector(
  //       `table[class= "cb58 cb54 cct32"] > tbody > tr:nth-child(4) > td:nth-child(10) > div >span`
  //     ).innerText;
  //   });

  //   let Անվանում = await page.evaluate(() => {
  //     return document.querySelector(
  //       `table[class= "cb58 cb54 cct32"] > tbody > tr:nth-child(1) > td:nth-child(6) > div >span`
  //     ).innerText;
  //   });

  //   let AMD = 0,
  //     USD = 0,
  //     RUB = 0,
  //     EUR = 0;

  //   switch (cur1) {
  //     case "AMD":
  //       AMD = AMD + parseFloat(cur1val.replace(/,/g, ""));
  //       break;
  //     case "USD":
  //       USD = USD + parseFloat(cur1val.replace(/,/g, ""));
  //       break;
  //     case "RUB":
  //       RUB = RUB + parseFloat(cur1val.replace(/,/g, ""));
  //       break;
  //     case "EUR":
  //       EUR = EUR + parseFloat(cur1val.replace(/,/g, ""));
  //       break;

  //     default:
  //     // code block
  //   }
  //   switch (cur2) {
  //     case "AMD":
  //       AMD = AMD + parseFloat(cur2val.replace(/,/g, ""));
  //       break;
  //     case "USD":
  //       USD = USD + parseFloat(cur2val.replace(/,/g, ""));
  //       break;
  //     case "RUB":
  //       RUB = RUB + parseFloat(cur2val.replace(/,/g, ""));
  //       break;
  //     case "EUR":
  //       EUR = EUR + parseFloat(cur2val.replace(/,/g, ""));
  //       break;

  //     default:
  //     // code block
  //   }

  //   switch (cur3) {
  //     case "AMD":
  //       AMD = AMD + parseFloat(cur3val.replace(/,/g, ""));
  //       break;
  //     case "USD":
  //       USD = USD + parseFloat(cur3val.replace(/,/g, ""));
  //       break;
  //     case "RUB":
  //       RUB = RUB + parseFloat(cur3val.replace(/,/g, ""));
  //       break;
  //     case "EUR":
  //       EUR = EUR + parseFloat(cur3val.replace(/,/g, ""));
  //       break;

  //     default:
  //     // code block
  //   }
  //   switch (cur4) {
  //     case "AMD":
  //       AMD = AMD + parseFloat(cur4val.replace(/,/g, ""));
  //       break;
  //     case "USD":
  //       USD = USD + parseFloat(cur4val.replace(/,/g, ""));
  //       break;
  //     case "RUB":
  //       RUB = RUB + parseFloat(cur4val.replace(/,/g, ""));
  //       break;
  //     case "EUR":
  //       EUR = EUR + parseFloat(cur4val.replace(/,/g, ""));
  //       break;

  //     default:
  //     // code block
  //   }

  //   if (c.username === "telectro1") {
  //     let cur5 = await page.evaluate(() => {
  //       return (
  //         document.querySelector(
  //           `table[class= "cb58 cb54 cct32"] > tbody > tr:nth-child(5) > td:nth-child(4) > div >span`
  //         ).innerText || 0
  //       );
  //     });
  //     let cur5val = await page.evaluate(() => {
  //       return (
  //         document.querySelector(
  //           `table[class= "cb58 cb54 cct32"] > tbody > tr:nth-child(5) > td:nth-child(10) > div >span`
  //         ).innerText || 0
  //       );
  //     });

  //     switch (cur5) {
  //       case "AMD":
  //         AMD = AMD + parseFloat(cur5val.replace(/,/g, ""));
  //         break;
  //       case "USD":
  //         USD = USD + parseFloat(cur5val.replace(/,/g, ""));
  //         break;
  //       case "RUB":
  //         RUB = RUB + parseFloat(cur5val.replace(/,/g, ""));
  //         break;
  //       case "EUR":
  //         EUR = EUR + parseFloat(cur5val.replace(/,/g, ""));
  //         break;

  //       default:
  //       // code block
  //     }
  //   }

  //   hashivner.push({Անվանում, AMD, USD, RUB, EUR})

  // var xls = json2xls(hashivner);
  // fs.writeFileSync('data.xlsx', xls, 'binary');
  // fs.writeFileSync('./data.json', JSON.stringify(hashivner), 'UTF-8');
  //   page.mainFrame().evaluate()
  // await page.mainFrame()
  // .waitForSelector("#TRG_133");

  // await page.screenshot({ path: "example.png" });
  // await browser.close();
})();
