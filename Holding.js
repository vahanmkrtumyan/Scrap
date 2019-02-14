// const request = require("request-promise");
// const cheerio = require("cheerio");
// const fs = require("fs");
//const Json2csvParser = require("json2csv").Parser;
const puppeteer = require("puppeteer");
//var json2xls = require("json2xls");

const URL = "https://internetbank.armbusinessbank.am/InternetBank/MainForm.wgx";

(async () => {
  let amsatver = [["26", "01", "2019"], ["01", "02", "2019"]];

  const browser = await puppeteer.launch({
    args: ["--disable-features=site-per-process"],
    headless: false
  });

  let companies = [
    { username: "armholding2", password: "9875321" },
    { username: "arminvest2", password: "7895123" },
    { username: "armstroikom2", password: "7895123" },
    { username: "energostroi2", password: "7895123" },
    { username: "inginering2", password: "8530112" },
    { username: "stroyproekt2", password: "7895123" },
    { username: "severstroy2", password: "7895123" },
    { username: "exportfinance3", password: "7895123" },
    { username: "pharmco2", password: "124578" }
  ];

  const page = await browser.newPage();

  await page.goto(
    "https://internetbank.armbusinessbank.am/internetbank/MainForm.wgx"
  );

  for (c of companies) {
    await page.waitForSelector("#TRG_32");
    await page.type("#TRG_32", c.username);
    await page.type("#TRG_38", c.password);
    await page.keyboard.press("Enter");

    await page.waitForSelector("#VWGLE_100");
    await page.waitFor(1000);
    await page.click("#VWGLE_100");

    await page.waitForSelector(
      `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(2)`
    );
    await page.waitFor(1000);
    await page.click(
      `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr`
    );

    await page.waitFor(2000);
    await page.click("#VWG_187");
    await page.waitForSelector(
      "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(1)"
    );
    await page.click(
      "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(1)"
    );
    await page.keyboard.type(amsatver[0][0]);
    await page.click(
      "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(3)"
    );
    await page.waitFor(200);
    await page.keyboard.type(amsatver[0][1]);
    await page.waitFor(200);
    await page.click(
      "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(5)"
    );
    await page.waitFor(200);
    await page.keyboard.type(amsatver[0][2]);
    await page.waitFor(200);
    await page.click(
      "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(6) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(1)"
    );
    await page.waitFor(300);
    await page.keyboard.type(amsatver[1][0]);
    await page.waitFor(300);
    await page.click(
      "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(6) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(3)"
    );
    await page.waitFor(200);
    await page.keyboard.type(amsatver[1][1]);
    await page.waitFor(200);
    await page.click(
      "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(6) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(5)"
    );
    await page.waitFor(200);
    await page.keyboard.type(amsatver[1][2]);
    await page.waitFor(200);
    await page.keyboard.press("Enter");

    await page.waitForSelector(
      `div[id = "Contained85"] > div > div > div > div > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(4)`
    );
    await page.waitFor(1000);
    await page.click(
      `div[id = "Contained85"] > div > div > div > div > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(4)`
    );
    await page.waitForSelector("#VWGLE_100");
    await page.waitFor(1000);
    await page.click("#VWGLE_100");

    //await page.waitFor(3000);

    await page.waitForSelector(
      `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(2)`
    );
    await page.waitFor(1000);
    await page.click(
      `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(2)`
    );
    await page.waitFor(2000);
    await page.click("#VWG_187");
    await page.waitForSelector(
      "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(1)"
    );
    await page.click(
      "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(1)"
    );
    await page.keyboard.type(amsatver[0][0]);
    await page.click(
      "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(3)"
    );
    await page.waitFor(200);
    await page.keyboard.type(amsatver[0][1]);
    await page.waitFor(200);
    await page.click(
      "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(5)"
    );
    await page.waitFor(200);
    await page.keyboard.type(amsatver[0][2]);
    await page.waitFor(200);
    await page.click(
      "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(6) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(1)"
    );
    await page.waitFor(300);
    await page.keyboard.type(amsatver[1][0]);
    await page.waitFor(300);
    await page.click(
      "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(6) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(3)"
    );
    await page.waitFor(200);
    await page.keyboard.type(amsatver[1][1]);
    await page.waitFor(200);
    await page.click(
      "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(6) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(5)"
    );
    await page.waitFor(200);
    await page.keyboard.type(amsatver[1][2]);
    await page.waitFor(200);
    await page.keyboard.press("Enter");

    await page.waitForSelector(
      `div[id = "Contained85"] > div > div > div > div > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(4)`
    );
    await page.waitFor(1000);
    await page.click(
      `div[id = "Contained85"] > div > div > div > div > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(4)`
    );

    await page.waitForSelector("#VWGLE_100");
    await page.waitFor(1000);
    await page.click("#VWGLE_100");

    //await page.waitFor(2000);

    await page.waitForSelector(
      `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(2)`
    );
    await page.waitFor(1000);
    await page.click(
      `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(3)`
    );
    await page.waitFor(2000);
    await page.click("#VWG_187");
    await page.waitForSelector(
      "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(1)"
    );
    await page.click(
      "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(1)"
    );
    await page.keyboard.type(amsatver[0][0]);
    await page.click(
      "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(3)"
    );
    await page.waitFor(200);
    await page.keyboard.type(amsatver[0][1]);
    await page.waitFor(200);
    await page.click(
      "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(5)"
    );
    await page.waitFor(200);
    await page.keyboard.type(amsatver[0][2]);
    await page.waitFor(200);
    await page.click(
      "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(6) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(1)"
    );
    await page.waitFor(300);
    await page.keyboard.type(amsatver[1][0]);
    await page.waitFor(300);
    await page.click(
      "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(6) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(3)"
    );
    await page.waitFor(200);
    await page.keyboard.type(amsatver[1][1]);
    await page.waitFor(200);
    await page.click(
      "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(6) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(5)"
    );
    await page.waitFor(200);
    await page.keyboard.type(amsatver[1][2]);
    await page.waitFor(200);
    await page.keyboard.press("Enter");

    await page.waitFor(2000);
    await page.waitForSelector(
      `div[id = "Contained85"] > div > div > div > div > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(4)`
    );
    await page.waitFor(1000);
    await page.click(
      `div[id = "Contained85"] > div > div > div > div > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(4)`
    );
    await page.waitForSelector("#VWGLE_100");
    await page.waitFor(1000);
    await page.click("#VWGLE_100");

    //await page.waitFor(2000);

    await page.waitForSelector(
      `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(2)`
    );
    await page.waitFor(1000);
    await page.click(
      `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(4)`
    );
    await page.waitFor(2000);
    await page.click("#VWG_187");
    await page.waitForSelector(
      "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(1)"
    );
    await page.click(
      "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(1)"
    );
    await page.keyboard.type(amsatver[0][0]);
    await page.click(
      "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(3)"
    );
    await page.waitFor(200);
    await page.keyboard.type(amsatver[0][1]);
    await page.waitFor(200);
    await page.click(
      "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(5)"
    );
    await page.waitFor(200);
    await page.keyboard.type(amsatver[0][2]);
    await page.waitFor(200);
    await page.click(
      "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(6) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(1)"
    );
    await page.waitFor(300);
    await page.keyboard.type(amsatver[1][0]);
    await page.waitFor(300);
    await page.click(
      "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(6) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(3)"
    );
    await page.waitFor(200);
    await page.keyboard.type(amsatver[1][1]);
    await page.waitFor(200);
    await page.click(
      "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(6) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(5)"
    );
    await page.waitFor(200);
    await page.keyboard.type(amsatver[1][2]);
    await page.waitFor(200);
    await page.keyboard.press("Enter");

    await page.waitForSelector(
      `div[id = "Contained85"] > div > div > div > div > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(4)`
    );
    await page.waitFor(1000);
    await page.click(
      `div[id = "Contained85"] > div > div > div > div > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(4)`
    );

    if (c.username === "armholding2") {
      await page.waitForSelector("#VWGLE_100");
      await page.waitFor(1000);
      await page.click("#VWGLE_100");

      await page.waitForSelector(
        `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(2)`
      );
      await page.waitFor(1000);
      await page.click(
        `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(5)`
      );
      await page.waitFor(2000);
      await page.click("#VWG_187");
      await page.waitForSelector(
        "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(1)"
      );
      await page.click(
        "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(1)"
      );
      await page.keyboard.type(amsatver[0][0]);
      await page.click(
        "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(3)"
      );
      await page.waitFor(200);
      await page.keyboard.type(amsatver[0][1]);
      await page.waitFor(200);
      await page.click(
        "#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(5)"
      );
      await page.waitFor(200);
      await page.keyboard.type(amsatver[0][2]);
      await page.waitFor(200);
      ("#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(6) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(1)");
      await page.waitFor(300);
      await page.keyboard.type(amsatver[1][0]);
      await page.waitFor(300);
      ("#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(6) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(3)");
      await page.waitFor(200);
      await page.keyboard.type(amsatver[1][1]);
      await page.waitFor(200);
      ("#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(6) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(5)");
      await page.waitFor(200);
      await page.keyboard.type(amsatver[1][2]);
      await page.waitFor(200);
      await page.keyboard.press("Enter");

      await page.waitForSelector(
        `div[id = "Contained85"] > div > div > div > div > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(4)`
      );
      await page.waitFor(1000);
      await page.click(
        `div[id = "Contained85"] > div > div > div > div > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(4)`
      );
    }
    await page.waitFor(500);
    await page.click("#VWG_145");
  }
  await browser.close();
})();
