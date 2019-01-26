const request = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");
const Json2csvParser = require("json2csv").Parser;
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    "https://internetbank.armbusinessbank.am/internetbank/MainForm.wgx"
  );
  await page.waitForSelector("#TRG_32");
  await page.type("#TRG_32", "miparti1");
  await page.type("#TRG_38", "123456");
  await page.keyboard.press("Enter");
  await page.waitFor(contains("name"));
  await page.screenshot({ path: "example.png" });

  await browser.close();
})();