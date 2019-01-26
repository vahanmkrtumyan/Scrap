const request = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");
const Json2csvParser = require("json2csv").Parser;
const puppeteer = require("puppeteer");

const URL = "https://internetbank.armbusinessbank.am/InternetBank/MainForm.wgx";

(async () => {
  const browser = await puppeteer.launch({
    args: ["--disable-features=site-per-process"],
    headless: false
  });
  const page = await browser.newPage();
  await page.goto(
    "https://internetbank.armbusinessbank.am/internetbank/MainForm.wgx"
  );
  await page.waitForSelector("#TRG_32");
  await page.type("#TRG_32", "telectro1");
  await page.type("#TRG_38", "3215987");
  await page.keyboard.press("Enter");

  await page.waitForSelector("#VWGLE_100");

  await page.click("#VWGLE_100");
  await page.waitFor(4000);

  await page.click('#VWG_194 > div > span');

  const respone = await request(URL);

  let $ = cheerio.load(respone);

  let EUR = await page.evaluate(()=>{
      return document.querySelector(`tr[id = "VWG_202"] > td:nth-child(10) > div > span`).innerText;
  });
  let USD = await page.evaluate(()=>{
    return document.querySelector(`tr[id = "VWG_203"] > td:nth-child(10) > div > span`).innerText;
});
let RUB = await page.evaluate(()=>{
    return document.querySelector(`tr[id = "VWG_204"] > td:nth-child(10) > div > span`).innerText;
});
let AMD = await page.evaluate(()=>{
    return document.querySelector(`tr[id = "VWG_205"] > td:nth-child(10) > div > span`).innerText;
});
let AMD2 = await page.evaluate(()=>{
    return document.querySelector(`tr[id = "VWG_205"] > td:nth-child(10) > div > span`).innerText;
});
let AMD3 = AMD + AMD2;

  console.log(EUR, USD, RUB, AMD3);

  

  //   page.mainFrame().evaluate()
  // await page.mainFrame()
  // .waitForSelector("#TRG_133");

  await page.screenshot({ path: "example.png" });
  //await browser.close();
})();
