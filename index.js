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

  await page.click("#VWG_194 > div > span");

  const respone = await request(URL);

  let $ = cheerio.load(respone);

  let cur1 = await page.evaluate(() => {
    return document.querySelector(
      `table[class= "cb58 cb54 cct32"] > tbody > tr:nth-child(1) > td:nth-child(4) > div >span`
    ).innerText;
  });
  let cur1val = await page.evaluate(() => {
    return document.querySelector(
      `table[class= "cb58 cb54 cct32"] > tbody > tr:nth-child(1) > td:nth-child(10) > div >span`
    ).innerText;
  });
  let cur2 = await page.evaluate(() => {
    return document.querySelector(
      `table[class= "cb58 cb54 cct32"] > tbody > tr:nth-child(2) > td:nth-child(4) > div >span`
    ).innerText;
  });
  let cur2val = await page.evaluate(() => {
    return document.querySelector(
      `table[class= "cb58 cb54 cct32"] > tbody > tr:nth-child(2) > td:nth-child(10) > div >span`
    ).innerText;
  });
  let cur3 = await page.evaluate(() => {
    return document.querySelector(
      `table[class= "cb58 cb54 cct32"] > tbody > tr:nth-child(3) > td:nth-child(4) > div >span`
    ).innerText;
  });
  let cur3val = await page.evaluate(() => {
    return document.querySelector(
      `table[class= "cb58 cb54 cct32"] > tbody > tr:nth-child(3) > td:nth-child(10) > div >span`
    ).innerText;
  });
  let cur4 = await page.evaluate(() => {
    return document.querySelector(
      `table[class= "cb58 cb54 cct32"] > tbody > tr:nth-child(4) > td:nth-child(4) > div >span`
    ).innerText;
  });
  let cur4val = await page.evaluate(() => {
    return document.querySelector(
      `table[class= "cb58 cb54 cct32"] > tbody > tr:nth-child(4) > td:nth-child(10) > div >span`
    ).innerText;
  });
  let cur5 = await page.evaluate(() => {
    return (
      document.querySelector(
        `table[class= "cb58 cb54 cct32"] > tbody > tr:nth-child(5) > td:nth-child(4) > div >span`
      ).innerText || 0
    );
  });
  let cur5val = await page.evaluate(() => {
    return document.querySelector(
      `table[class= "cb58 cb54 cct32"] > tbody > tr:nth-child(5) > td:nth-child(10) > div >span`
    ).innerText;
  });

  console.log(
    cur1,
    cur1val,
    cur2,
    cur2val,
    cur3,
    cur3val,
    cur4,
    cur4val,
    cur5,
    cur5val
  );

  //   page.mainFrame().evaluate()
  // await page.mainFrame()
  // .waitForSelector("#TRG_133");

  await page.screenshot({ path: "example.png" });
  //await browser.close();
})();
