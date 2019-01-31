// const request = require("request-promise");
// const cheerio = require("cheerio");
// const fs = require("fs");
//const Json2csvParser = require("json2csv").Parser;
const puppeteer = require("puppeteer");
//var json2xls = require("json2xls");

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
    { username: "tindustry2", password: "3215987" },
    { username: "tebes1", password: "3215987" },
    { username: "servicestroy1", password: "123456" },
    { username: "metalmontage1", password: "123456" },
    { username: "energotechspasarkum1", password: "3215987" },
    { username: "tcapital1", password: "3215987" },
    { username: "cafeboulanger2", password: "3215987" },
    { username: "solanum1", password: "7895123" }
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

    await page.click("#VWGLE_100");
    await page.waitFor(2100);

    await page.click(
      `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr`
    );
    await page.waitFor(1000);
    await page.click("#VWG_187");
    await page.waitFor(500);
    await page.keyboard.press("Tab");
    await page.waitFor(500);
    await page.keyboard.press("Tab");
    await page.waitFor(500);
    await page.keyboard.type(amsatver[0][0]);
    await page.waitFor(200);
    await page.keyboard.press("ArrowRight");
    await page.waitFor(200);
    await page.keyboard.type(amsatver[0][1]);
    await page.waitFor(200);
    await page.keyboard.press("ArrowRight");
    await page.waitFor(200);
    await page.keyboard.type(amsatver[0][2]);
    await page.waitFor(300);
    await page.keyboard.press("Tab");
    await page.keyboard.type(amsatver[1][0]);
    await page.waitFor(300);
    await page.keyboard.press("ArrowRight");
    await page.waitFor(200);
    await page.keyboard.type(amsatver[1][1]);
    await page.waitFor(200);
    await page.keyboard.press("ArrowRight");
    await page.waitFor(200);
    await page.keyboard.type(amsatver[1][2]);
    await page.waitFor(200);
    await page.keyboard.press("Enter");

    await page.waitFor(1000);
    await page.waitForSelector(
      `div[id = "Contained85"] > div > div > div > div > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(4)`
    );
    await page.click(
      `div[id = "Contained85"] > div > div > div > div > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(4)`
    );

    await page.waitForSelector("#VWGLE_100");
    await page.click("#VWGLE_100");

    //await page.waitFor(3000);

    await page.waitForSelector(
      `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(2)`
    );
    await page.waitFor(1000);
    await page.click(
      `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(2)`
    );
    await page.waitFor(1000);
    await page.click("#VWG_187");
    await page.waitFor(500);
    await page.keyboard.press("Tab");
    await page.waitFor(500);
    await page.keyboard.press("Tab");
    await page.waitFor(500);
    await page.keyboard.type(amsatver[0][0]);
    await page.waitFor(200);
    await page.keyboard.press("ArrowRight");
    await page.waitFor(200);
    await page.keyboard.type(amsatver[0][1]);
    await page.waitFor(200);
    await page.keyboard.press("ArrowRight");
    await page.waitFor(200);
    await page.keyboard.type(amsatver[0][2]);
    await page.waitFor(300);
    await page.keyboard.press("Tab");
    await page.keyboard.type(amsatver[1][0]);
    await page.waitFor(300);
    await page.keyboard.press("ArrowRight");
    await page.waitFor(200);
    await page.keyboard.type(amsatver[1][1]);
    await page.waitFor(200);
    await page.keyboard.press("ArrowRight");
    await page.waitFor(200);
    await page.keyboard.type(amsatver[1][2]);
    await page.waitFor(200);
    await page.keyboard.press("Enter");

    await page.waitFor(1000);
    await page.waitForSelector(
      `div[id = "Contained85"] > div > div > div > div > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(4)`
    );
    await page.click(
      `div[id = "Contained85"] > div > div > div > div > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(4)`
    );

    await page.waitForSelector("#VWGLE_100");
    await page.click("#VWGLE_100");

    //await page.waitFor(2000);

    await page.waitForSelector(
      `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(2)`
    );
    await page.waitFor(1000);
    await page.click(
      `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(3)`
    );
    await page.waitFor(1000);
    await page.click("#VWG_187");
    await page.waitFor(500);
    await page.keyboard.press("Tab");
    await page.waitFor(500);
    await page.keyboard.press("Tab");
    await page.waitFor(500);
    await page.keyboard.type(amsatver[0][0]);
    await page.waitFor(200);
    await page.keyboard.press("ArrowRight");
    await page.waitFor(200);
    await page.keyboard.type(amsatver[0][1]);
    await page.waitFor(200);
    await page.keyboard.press("ArrowRight");
    await page.waitFor(200);
    await page.keyboard.type(amsatver[0][2]);
    await page.waitFor(300);
    await page.keyboard.press("Tab");
    await page.keyboard.type(amsatver[1][0]);
    await page.waitFor(300);
    await page.keyboard.press("ArrowRight");
    await page.waitFor(200);
    await page.keyboard.type(amsatver[1][1]);
    await page.waitFor(200);
    await page.keyboard.press("ArrowRight");
    await page.waitFor(200);
    await page.keyboard.type(amsatver[1][2]);
    await page.waitFor(200);
    await page.keyboard.press("Enter");

    await page.waitFor(1000);
    await page.waitForSelector(
      `div[id = "Contained85"] > div > div > div > div > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(4)`
    );
    await page.click(
      `div[id = "Contained85"] > div > div > div > div > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(4)`
    );

    await page.waitForSelector("#VWGLE_100");
    await page.click("#VWGLE_100");

    //await page.waitFor(2000);

    await page.waitForSelector(
      `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(2)`
    );
    await page.waitFor(1000);
    await page.click(
      `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(4)`
    );
    await page.waitFor(1000);
    await page.click("#VWG_187");
    await page.waitFor(500);
    await page.keyboard.press("Tab");
    await page.waitFor(500);
    await page.keyboard.press("Tab");
    await page.waitFor(500);
    await page.keyboard.type(amsatver[0][0]);
    await page.waitFor(200);
    await page.keyboard.press("ArrowRight");
    await page.waitFor(200);
    await page.keyboard.type(amsatver[0][1]);
    await page.waitFor(200);
    await page.keyboard.press("ArrowRight");
    await page.waitFor(200);
    await page.keyboard.type(amsatver[0][2]);
    await page.waitFor(300);
    await page.keyboard.press("Tab");
    await page.keyboard.type(amsatver[1][0]);
    await page.waitFor(300);
    await page.keyboard.press("ArrowRight");
    await page.waitFor(200);
    await page.keyboard.type(amsatver[1][1]);
    await page.waitFor(200);
    await page.keyboard.press("ArrowRight");
    await page.waitFor(200);
    await page.keyboard.type(amsatver[1][2]);
    await page.waitFor(200);
    await page.keyboard.press("Enter");

    await page.waitFor(1000);
    await page.waitForSelector(
      `div[id = "Contained85"] > div > div > div > div > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(4)`
    );
    await page.click(
      `div[id = "Contained85"] > div > div > div > div > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(4)`
    );

    if (c.username === "telectro1") {
      await page.waitForSelector("#VWGLE_100");
      await page.click("#VWGLE_100");

      await page.waitForSelector(
        `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(2)`
      );
      await page.waitFor(1000);
      await page.click(
        `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(5)`
      );
      await page.waitFor(1000);
      await page.click("#VWG_187");
      await page.waitFor(500);
      await page.keyboard.press("Tab");
      await page.waitFor(500);
      await page.keyboard.press("Tab");
      await page.waitFor(500);
      await page.keyboard.type(amsatver[0][0]);
      await page.waitFor(200);
      await page.keyboard.press("ArrowRight");
      await page.waitFor(200);
      await page.keyboard.type(amsatver[0][1]);
      await page.waitFor(200);
      await page.keyboard.press("ArrowRight");
      await page.waitFor(200);
      await page.keyboard.type(amsatver[0][2]);
      await page.waitFor(300);
      await page.keyboard.press("Tab");
      await page.keyboard.type(amsatver[1][0]);
      await page.waitFor(300);
      await page.keyboard.press("ArrowRight");
      await page.waitFor(200);
      await page.keyboard.type(amsatver[1][1]);
      await page.waitFor(200);
      await page.keyboard.press("ArrowRight");
      await page.waitFor(200);
      await page.keyboard.type(amsatver[1][2]);
      await page.waitFor(200);
      await page.keyboard.press("Enter");

      await page.waitFor(1000);
      await page.waitForSelector(
        `div[id = "Contained85"] > div > div > div > div > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(4)`
      );
      await page.click(
        `div[id = "Contained85"] > div > div > div > div > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(4)`
      );
    }
    await page.waitFor(500);
    await page.click("#VWG_145");
  }
  await browser.close();
})();
