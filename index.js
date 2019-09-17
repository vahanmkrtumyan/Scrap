const request = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");
//const Json2csvParser = require("json2csv").Parser;
const puppeteer = require("puppeteer");

(async function asd() {
  let hashivner = [];

  const browser = await puppeteer.launch({
    args: [
      "--disable-features=IsolateOrigins,site-per-process"
      // "--disable-gl-drawing-for-tests"
    ],
    headless: false
  });

  let companies = [
    // { username: "armholding2", password: "9875321" },
    // { username: "arminvest2", password: "7895123" },
    // { username: "armstroikom2", password: "654321" },
    // { username: "energostroi2", password: "7895123" },
    // { username: "inginering2", password: "8530112" },
    // { username: "stroyproekt2", password: "7895123" },
    // { username: "severstroy2", password: "654321" },
    // { username: "pharmco2", password: "124578" },
    // { username: "gazardshin2", password: "7895123" },
    // { username: "tradeexport2", password: "7895123" },
    // { username: "exportfinance3", password: "7895123" },
    // { username: "reportsys2", password: "7895123" },
    // { username: "tashircapital2", password: "7895123" },
    // { username: "tmedica2", password: "7895123" },
    // { username: "smartpower2", password: "7895123" },
    // { username: "sardela2", password: "7895123" },
    // { username: "generalcable1", password: "7895123" },
    // { username: "eventon1", password: "7895123" },
    // { username: "patras2", password: "1478963" },
    // { username: "uec2", password: "7895123" },
    // { username: "prix2", password: "7895123" },
    // { username: "fivi2", password: "3215987" },
    // { username: "armholdingserv1", password: "7895123" },
    // { username: "elex1", password: "7895123" },
    // { username: "araratmoscow2", password: "7895123" },
    // { username: "armexcom2", password: "7895123" },
    // { username: "tradeinvest2", password: "9875321" },
    // { username: "exportinvest2", password: "7895123" },
    // { username: "investstroy1", password: "0112358" },
    // { username: "mapache1", password: "963852" },
    // { username: "goldglass2", password: "9875321" },
    // { username: "globalexim2", password: "9875321" },
    // { username: "argest1", password: "1235789" },
    // { username: "epirus1", password: "3215987", user: "Nane" },
    // { username: "hitegh1", password: "3215987" },
    // { username: "fidocapital1", password: "3215987" },
    // { username: "intertorg4", password: "7895123" },
    // { username: "smartholding1", password: "3215987", user: "Anush" },
    // { username: "firstfactoring3", password: "9875321" },
    // { username: "nortexengineering1", password: "852147" },
    // { username: "cascademirtek1", password: "147258" },
    // { username: "cascadeenergo2", password: "147258" },
    // { username: "kaskadenergoprogres1", password: "147258" },
    // { username: "cascadesystem4", password: "777777" },
    // { username: "kaskadenergo2", password: "147258" },
    // { username: "glavsnab1", password: "3215987", user: "Anush" },
    // { username: "tconstruction2", password: "3215987", user: "Nane" },
    // { username: "tsecurity2", password: "3215987", user: "Nane" },
    // { username: "afos2", password: "3215987", user: "Anush" },
    // { username: "delfos2", password: "3215987", user: "Vahe" },
    // { username: "dakia2", password: "32159874", user: "Anush" },
    // { username: "neftproductinvest2", password: "3215987", user: "Vahe" },
    // { username: "volios1", password: "3215987", user: "Vahe" },
    // { username: "fastco1", password: "3215987", user: "Anush" },
    // { username: "brightideas1", password: "32159874", user: "Anush" },
    // { username: "liencompany1", password: "3215987", user: "Vahe" },
    // { username: "varadna", password: "124578" },
    // { username: "bridgecapital1", password: "123456" },
    // { username: "berkrigroup1", password: "963852" },
    // { username: "varadna", password: "963852" },
    // { username: "tindustry1", password: "9875321", user: "Vahe" },
    // { username: "tebes1", password: "3215987", user: "Vahe" },
    // { username: "tfurniture2", password: "3215987", user: "Vahe" },
    // { username: "telectro1", password: "3215987", user: "Vahe" },
    // { username: "servicestroy1", password: "123456", user: "Vahe" },
    // { username: "metalmontage1", password: "123456", user: "Vahe" },
    // { username: "energotechspasarkum1", password: "3215987", user: "Vahe" },
    // { username: "tcapital1", password: "3215987", user: "Vahe" },
    // { username: "cafeboulanger2", password: "3215987", user: "Vahe" },
    // { username: "solanum1", password: "7895123", user: "Vahe" },
    // { username: "miparti1", password: "123456", user: "Vahe" },
    // { username: "ayos2", password: "3215987", user: "Anush" },
    // { username: "inselectro1", password: "3215987", user: "Anush" },
    // { username: "alphaincassatsia", password: "3215987", user: "Anush" }
  ];

  let companiesAmeria = [
    // { username: "selsrtroy2", password: "3654789" },
    // { username: "ashkelon1", password: "3654789" },
    // { username: "fivi2", password: "7895123" },
    // { username: "tfurniture2", password: "3654789" },
    // { username: "ashkeloninvestments1", password: "3654789" },
    // { username: "cascadeenergo1", password: "147258" },
    // { username: "kaskadenergo1", password: "147258" },
    // { username: "epirus3", password: "3654789", user: "Nane" },
    // { username: "lismart2", password: "3654789" }
  ];

  let companiesAmeriaHolding = [
    // { username: "tconstruction2", password: "3215987", user: "Nane" },
    // { username: "armholding3", password: "3654789" },
    // { username: "arminvest2", password: "3654789" },
    // { username: "energostroi2", password: "3654789" },
    // { username: "inginering2", password: "0112358" },
    // { username: "smartp2", password: "3654789" },
    // { username: "severstroy2", password: "3654789" },
    // { username: "stroyproyekt2", password: "3654789" },
    // { username: "export3", password: "3654789" },
    // { username: "armstroikom1", password: "3654789" },
    // { username: "report2", password: "3654789" },
    // { username: "skengineering2", password: "3654789" }
  ];

  let interExpress = [
    // { username: "interexpres2", password: "3654789" }
  ];

  const page = await browser.newPage();

  for (c of companies) {
    await page.goto(
      "https://internetbank.armbusinessbank.am/internetbank/MainForm.wgx"
    );

    await page.waitForSelector("#TRG_32");
    await page.type("#TRG_32", c.username);
    await page.type("#TRG_38", c.password);
    await page.keyboard.press("Enter");

    try {
      await page.waitForSelector("#VWGLE_100");
    } catch (error) {
      await page.waitForSelector("#TRG_107");
      await page.type("#TRG_107", c.password);
      await page.type("#TRG_113", c.password);
      await page.keyboard.press("Enter");
      await page.waitForSelector("#VWG_187");
      await page.waitForSelector("#TRG_32");
      await page.type("#TRG_32", c.username);
      await page.type("#TRG_38", c.password);
      await page.keyboard.press("Enter");
    }

    await page.waitForSelector("#VWGLE_100");

    await page.click("#VWGLE_100");
    await page.waitFor(3000);

    //await page.click("#VWG_194 > div > span");
    await page.waitForSelector("#Contained167");

    let cur1 = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr > td:nth-child(4) > div > span`
      ).innerText;
    });

    let cur1val = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr > td:nth-child(12)> div > span`
      ).innerText;
    });

    let cur2 = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(4)> div > span`
      ).innerText;
    });
    let cur2val = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(12)> div > span`
      ).innerText;
    });
    let cur3 = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(3) > td:nth-child(4) > div > span`
      ).innerText;
    });
    let cur3val = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(3) > td:nth-child(12)> div > span`
      ).innerText;
    });

    var cur4;
    var cur4val;

    let Անվանում = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr > td:nth-child(6)`
      ).innerText;
    });

    let AMD = 0,
      USD = 0,
      RUB = 0,
      EUR = 0;

    switch (cur1) {
      case "AMD":
        AMD = AMD + parseFloat(cur1val.replace(/,/g, ""));
        break;
      case "USD":
        USD = USD + parseFloat(cur1val.replace(/,/g, ""));
        break;
      case "RUB":
        RUB = RUB + parseFloat(cur1val.replace(/,/g, ""));
        break;
      case "EUR":
        EUR = EUR + parseFloat(cur1val.replace(/,/g, ""));
        break;

      default:
      // code block
    }
    switch (cur2) {
      case "AMD":
        AMD = AMD + parseFloat(cur2val.replace(/,/g, ""));
        break;
      case "USD":
        USD = USD + parseFloat(cur2val.replace(/,/g, ""));
        break;
      case "RUB":
        RUB = RUB + parseFloat(cur2val.replace(/,/g, ""));
        break;
      case "EUR":
        EUR = EUR + parseFloat(cur2val.replace(/,/g, ""));
        break;

      default:
      // code block
    }

    switch (cur3) {
      case "AMD":
        AMD = AMD + parseFloat(cur3val.replace(/,/g, ""));
        break;
      case "USD":
        USD = USD + parseFloat(cur3val.replace(/,/g, ""));
        break;
      case "RUB":
        RUB = RUB + parseFloat(cur3val.replace(/,/g, ""));
        break;
      case "EUR":
        EUR = EUR + parseFloat(cur3val.replace(/,/g, ""));
        break;

      default:
      // code block
    }

    try {
      var cur4 = await page.evaluate(() => {
        return document.querySelector(
          `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(4) > td:nth-child(4) > div > span`
        ).innerText;
      });
      var cur4val = await page.evaluate(() => {
        return document.querySelector(
          `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(4) > td:nth-child(12) > div > span`
        ).innerText;
      });

      await page.evaluate(() => {
        return document.querySelector(
          `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(4) > td:nth-child(12) > div > span`
        ).innerText;
      });
    } catch {
      console.log("chka 4 hashiv");
    }

    switch (cur4) {
      case "AMD":
        AMD = AMD + parseFloat(cur4val.replace(/,/g, ""));
        break;
      case "USD":
        USD = USD + parseFloat(cur4val.replace(/,/g, ""));
        break;
      case "RUB":
        RUB = RUB + parseFloat(cur4val.replace(/,/g, ""));
        break;
      case "EUR":
        EUR = EUR + parseFloat(cur4val.replace(/,/g, ""));
        break;

      default:
      // code block
    }

    if (c.username === "telectro1") {
      var cur5 = await page.evaluate(() => {
        return document.querySelector(
          `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(5) > td:nth-child(4)`
        ).innerText;
      });
      var cur5val = await page.evaluate(() => {
        return document.querySelector(
          `div[id = "Contained167"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(5) > td:nth-child(12)`
        ).innerText;
      });

      switch (cur5) {
        case "AMD":
          AMD = AMD + parseFloat(cur5val.replace(/,/g, ""));
          break;
        case "USD":
          USD = USD + parseFloat(cur5val.replace(/,/g, ""));
          break;
        case "RUB":
          RUB = RUB + parseFloat(cur5val.replace(/,/g, ""));
          break;
        case "EUR":
          EUR = EUR + parseFloat(cur5val.replace(/,/g, ""));
          break;

        default:
        // code block
      }
    }

    //  hashivner.push({ Անվանում, AMD, USD, RUB, EUR });
    await page.waitFor(500);
    await page.click("#VWG_145");
    await page.waitFor(1500);
    await page.goto("https://supply-b6f48.web.app/");
    await page.waitForSelector("#name");
    await page.waitFor(1000);
    await page.type("#name", Անվանում);
    await page.type("#AMD", `${AMD}`);
    await page.type("#RUB", `${RUB}`);
    await page.type("#USD", `${USD}`);
    await page.type("#EUR", `${EUR}`);
    await page.type("#User", `${c.user ? c.user : "Aghas"}`);
    await page.waitFor(500);
    await page.click(".button");
    await page.waitFor(500);
  }

  for (c of companiesAmeria) {
    await page.goto("https://online.ameriabank.am/InternetBank/MainForm.wgx");

    await page.waitForSelector("#TRG_32");
    await page.type("#TRG_32", c.username);
    await page.type("#TRG_38", c.password);
    await page.keyboard.press("Enter");

    await page.waitForSelector("#VWGLE_101");

    await page.click("#VWGLE_101");
    await page.waitFor(3000);

    let cur1 = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "Contained168"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr > td:nth-child(4) > div > span`
      ).innerText;
    });

    let cur1val = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "Contained168"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr > td:nth-child(12) > div > span`
      ).innerText;
    });

    let cur2 = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "Contained168"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(4) > div > span`
      ).innerText;
    });

    let cur2val = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "Contained168"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(12) > div > span`
      ).innerText;
    });

    let cur3 = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "Contained168"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(3) > td:nth-child(4) > div > span`
      ).innerText;
    });

    let cur3val = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "Contained168"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(3) > td:nth-child(12) > div > span`
      ).innerText;
    });

    let cur4 = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "Contained168"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(4) > td:nth-child(4) > div > span`
      ).innerText;
    });

    let cur4val = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "Contained168"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(4) > td:nth-child(12) > div > span`
      ).innerText;
    });

    let Անվանում = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "Contained168"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr > td:nth-child(6) > div > span`
      ).innerText;
    });

    let AMD = 0,
      USD = 0,
      RUB = 0,
      EUR = 0;

    switch (cur1) {
      case "AMD":
        AMD = AMD + parseFloat(cur1val.replace(/,/g, ""));
        break;
      case "USD":
        USD = USD + parseFloat(cur1val.replace(/,/g, ""));
        break;
      case "RUB":
        RUB = RUB + parseFloat(cur1val.replace(/,/g, ""));
        break;
      case "EUR":
        EUR = EUR + parseFloat(cur1val.replace(/,/g, ""));
        break;

      default:
      // code block
    }
    switch (cur2) {
      case "AMD":
        AMD = AMD + parseFloat(cur2val.replace(/,/g, ""));
        break;
      case "USD":
        USD = USD + parseFloat(cur2val.replace(/,/g, ""));
        break;
      case "RUB":
        RUB = RUB + parseFloat(cur2val.replace(/,/g, ""));
        break;
      case "EUR":
        EUR = EUR + parseFloat(cur2val.replace(/,/g, ""));
        break;

      default:
      // code block
    }

    switch (cur3) {
      case "AMD":
        AMD = AMD + parseFloat(cur3val.replace(/,/g, ""));
        break;
      case "USD":
        USD = USD + parseFloat(cur3val.replace(/,/g, ""));
        break;
      case "RUB":
        RUB = RUB + parseFloat(cur3val.replace(/,/g, ""));
        break;
      case "EUR":
        EUR = EUR + parseFloat(cur3val.replace(/,/g, ""));
        break;

      default:
      // code block
    }
    switch (cur4) {
      case "AMD":
        AMD = AMD + parseFloat(cur4val.replace(/,/g, ""));
        break;
      case "USD":
        USD = USD + parseFloat(cur4val.replace(/,/g, ""));
        break;
      case "RUB":
        RUB = RUB + parseFloat(cur4val.replace(/,/g, ""));
        break;
      case "EUR":
        EUR = EUR + parseFloat(cur4val.replace(/,/g, ""));
        break;

      default:
      // code block
    }

    await page.waitFor(500);
    await page.click("#VWG_146");
    await page.waitFor(1500);
    await page.goto("https://supply-b6f48.web.app/");
    await page.waitForSelector("#name");
    await page.waitFor(1000);
    await page.type("#name", `${Անվանում} Ամերիա`);
    await page.type("#AMD", `${AMD}`);
    await page.type("#RUB", `${RUB}`);
    await page.type("#USD", `${USD}`);
    await page.type("#EUR", `${EUR}`);
    await page.type("#User", `${c.user ? c.user : "Aghas"}`);
    await page.waitFor(500);
    await page.click(".button");
    await page.waitFor(500);
  }

  /////////////////////////////////////////////////////////////////////////////////////////

  for (c of companiesAmeriaHolding) {
    await page.goto("https://online.ameriabank.am/InternetBank/MainForm.wgx");

    await page.waitForSelector("#TRG_32");
    await page.type("#TRG_32", c.username);
    await page.type("#TRG_38", c.password);
    await page.keyboard.press("Enter");

    await page.waitForSelector("#VWGLE_101");

    await page.click("#VWGLE_101");
    await page.waitFor(3000);

    let cur1 = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "Contained169"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr > td:nth-child(4) > div > span`
      ).innerText;
    });

    let cur1val = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "Contained169"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr > td:nth-child(12) > div > span`
      ).innerText;
    });

    let cur2 = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "Contained169"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(4) > div > span`
      ).innerText;
    });

    let cur2val = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "Contained169"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(12) > div > span`
      ).innerText;
    });

    let cur3 = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "Contained169"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(3) > td:nth-child(4) > div > span`
      ).innerText;
    });

    let cur3val = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "Contained169"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(3) > td:nth-child(12) > div > span`
      ).innerText;
    });

    let cur4 = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "Contained169"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(4) > td:nth-child(4) > div > span`
      ).innerText;
    });

    let cur4val = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "Contained169"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(4) > td:nth-child(12) > div > span`
      ).innerText;
    });

    let Անվանում = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "Contained169"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr > td:nth-child(6) > div > span`
      ).innerText;
    });

    let AMD = 0,
      USD = 0,
      RUB = 0,
      EUR = 0;

    switch (cur1) {
      case "AMD":
        AMD = AMD + parseFloat(cur1val.replace(/,/g, ""));
        break;
      case "USD":
        USD = USD + parseFloat(cur1val.replace(/,/g, ""));
        break;
      case "RUB":
        RUB = RUB + parseFloat(cur1val.replace(/,/g, ""));
        break;
      case "EUR":
        EUR = EUR + parseFloat(cur1val.replace(/,/g, ""));
        break;

      default:
      // code block
    }
    switch (cur2) {
      case "AMD":
        AMD = AMD + parseFloat(cur2val.replace(/,/g, ""));
        break;
      case "USD":
        USD = USD + parseFloat(cur2val.replace(/,/g, ""));
        break;
      case "RUB":
        RUB = RUB + parseFloat(cur2val.replace(/,/g, ""));
        break;
      case "EUR":
        EUR = EUR + parseFloat(cur2val.replace(/,/g, ""));
        break;

      default:
      // code block
    }

    switch (cur3) {
      case "AMD":
        AMD = AMD + parseFloat(cur3val.replace(/,/g, ""));
        break;
      case "USD":
        USD = USD + parseFloat(cur3val.replace(/,/g, ""));
        break;
      case "RUB":
        RUB = RUB + parseFloat(cur3val.replace(/,/g, ""));
        break;
      case "EUR":
        EUR = EUR + parseFloat(cur3val.replace(/,/g, ""));
        break;

      default:
      // code block
    }
    switch (cur4) {
      case "AMD":
        AMD = AMD + parseFloat(cur4val.replace(/,/g, ""));
        break;
      case "USD":
        USD = USD + parseFloat(cur4val.replace(/,/g, ""));
        break;
      case "RUB":
        RUB = RUB + parseFloat(cur4val.replace(/,/g, ""));
        break;
      case "EUR":
        EUR = EUR + parseFloat(cur4val.replace(/,/g, ""));
        break;

      default:
      // code block
    }

    await page.waitFor(500);
    await page.click("#VWG_146");
    await page.waitFor(1500);
    await page.goto("https://supply-b6f48.web.app/");
    await page.waitForSelector("#name");
    await page.waitFor(1000);
    await page.type("#name", `${Անվանում} Ամերիա`);
    await page.type("#AMD", `${AMD}`);
    await page.type("#RUB", `${RUB}`);
    await page.type("#USD", `${USD}`);
    await page.type("#EUR", `${EUR}`);
    await page.type("#User", `${c.user ? c.user : "Aghas"}`);
    await page.waitFor(500);
    await page.click(".button");
    await page.waitFor(500);
  }

  for (c of interExpress) {
    await page.goto("https://online.ameriabank.am/InternetBank/MainForm.wgx");

    await page.waitForSelector("#TRG_32");
    await page.type("#TRG_32", c.username);
    await page.type("#TRG_38", c.password);
    await page.keyboard.press("Enter");

    await page.waitForSelector("#VWGLE_101");

    await page.click("#VWGLE_101");
    await page.waitFor(3000);

    let cur1 = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "VWGLVBODY_195"] > table > tbody > tr > td:nth-child(4) > div > span`
      ).innerText;
    });

    let cur1val = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "VWGLVBODY_195"] > table > tbody > tr > td:nth-child(12) > div > span`
      ).innerText;
    });

    let cur2 = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "VWGLVBODY_195"] > table > tbody > tr:nth-child(2) > td:nth-child(4) > div > span`
      ).innerText;
    });

    let cur2val = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "VWGLVBODY_195"] > table > tbody > tr:nth-child(2) > td:nth-child(12) > div > span`
      ).innerText;
    });

    let cur3 = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "VWGLVBODY_195"] > table > tbody > tr:nth-child(3) > td:nth-child(4) > div > span`
      ).innerText;
    });

    let cur3val = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "VWGLVBODY_195"] > table > tbody > tr:nth-child(3) > td:nth-child(12) > div > span`
      ).innerText;
    });

    let cur4 = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "VWGLVBODY_195"] > table > tbody > tr:nth-child(4) > td:nth-child(4) > div > span`
      ).innerText;
    });

    let cur4val = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "VWGLVBODY_195"] > table > tbody > tr:nth-child(4) > td:nth-child(12) > div > span`
      ).innerText;
    });

    let Անվանում = await page.evaluate(() => {
      return document.querySelector(
        `div[id = "VWGLVBODY_195"] > table > tbody > tr > td:nth-child(6) > div > span`
      ).innerText;
    });

    let AMD = 0,
      USD = 0,
      RUB = 0,
      EUR = 0;

    switch (cur1) {
      case "AMD":
        AMD = AMD + parseFloat(cur1val.replace(/,/g, ""));
        break;
      case "USD":
        USD = USD + parseFloat(cur1val.replace(/,/g, ""));
        break;
      case "RUB":
        RUB = RUB + parseFloat(cur1val.replace(/,/g, ""));
        break;
      case "EUR":
        EUR = EUR + parseFloat(cur1val.replace(/,/g, ""));
        break;

      default:
      // code block
    }
    switch (cur2) {
      case "AMD":
        AMD = AMD + parseFloat(cur2val.replace(/,/g, ""));
        break;
      case "USD":
        USD = USD + parseFloat(cur2val.replace(/,/g, ""));
        break;
      case "RUB":
        RUB = RUB + parseFloat(cur2val.replace(/,/g, ""));
        break;
      case "EUR":
        EUR = EUR + parseFloat(cur2val.replace(/,/g, ""));
        break;

      default:
      // code block
    }

    switch (cur3) {
      case "AMD":
        AMD = AMD + parseFloat(cur3val.replace(/,/g, ""));
        break;
      case "USD":
        USD = USD + parseFloat(cur3val.replace(/,/g, ""));
        break;
      case "RUB":
        RUB = RUB + parseFloat(cur3val.replace(/,/g, ""));
        break;
      case "EUR":
        EUR = EUR + parseFloat(cur3val.replace(/,/g, ""));
        break;

      default:
      // code block
    }
    switch (cur4) {
      case "AMD":
        AMD = AMD + parseFloat(cur4val.replace(/,/g, ""));
        break;
      case "USD":
        USD = USD + parseFloat(cur4val.replace(/,/g, ""));
        break;
      case "RUB":
        RUB = RUB + parseFloat(cur4val.replace(/,/g, ""));
        break;
      case "EUR":
        EUR = EUR + parseFloat(cur4val.replace(/,/g, ""));
        break;

      default:
      // code block
    }

    await page.waitFor(500);
    await page.click("#VWG_175");
    await page.waitFor(1500);
    await page.goto("https://supply-b6f48.web.app/");
    await page.waitForSelector("#name");
    await page.waitFor(1000);
    await page.type("#name", `${Անվանում} Ամերիա`);
    await page.type("#AMD", `${AMD}`);
    await page.type("#RUB", `${RUB}`);
    await page.type("#USD", `${USD}`);
    await page.type("#EUR", `${EUR}`);
    await page.type("#User", `${c.user ? c.user : "Aghas"}`);
    await page.waitFor(500);
    await page.click(".button");
    await page.waitFor(500);
  }

  await page.waitFor(500);
  await page.goto("https://www.ameriabank.am/", { waitUntil: "networkidle2" });

  await page.waitForSelector(`#wo_online_image`);

  await page.waitForSelector(".gadgetExchange");

  let USDBuy = await page.evaluate(() => {
    return document.querySelector(
      `div[class = "gadgetExchange"] > div > table > tbody > tr:nth-child(3) > td:nth-child(2)`
    ).innerText;
  });
  let USDSell = await page.evaluate(() => {
    return document.querySelector(
      `div[class = "gadgetExchange"] > div > table > tbody > tr:nth-child(3) > td:nth-child(3)`
    ).innerText;
  });
  let EURBuy = await page.evaluate(() => {
    return document.querySelector(
      `div[class = "gadgetExchange"] > div > table > tbody > tr:nth-child(4) > td:nth-child(2)`
    ).innerText;
  });
  let EURSell = await page.evaluate(() => {
    return document.querySelector(
      `div[class = "gadgetExchange"] > div > table > tbody > tr:nth-child(4) > td:nth-child(3)`
    ).innerText;
  });
  let RUBBuy = await page.evaluate(() => {
    return document.querySelector(
      `div[class = "gadgetExchange"] > div > table > tbody > tr:nth-child(7) > td:nth-child(2)`
    ).innerText;
  });
  let RUBSell = await page.evaluate(() => {
    return document.querySelector(
      `div[class = "gadgetExchange"] > div > table > tbody > tr:nth-child(7) > td:nth-child(3)`
    ).innerText;
  });

  await page.goto("https://supply-b6f48.web.app/currencyinput");

  await page.waitFor(200);
  await page.waitForSelector(`#USDBuy`);

  await page.type("#USDBuy", `${USDBuy}`);
  await page.type("#USDSell", `${USDSell}`);
  await page.type("#EURBuy", `${EURBuy}`);
  await page.type("#EURSell", `${EURSell}`);
  await page.type("#RUBBuy", `${RUBBuy}`);
  await page.type("#RUBSell", `${RUBSell}`);

  await page.click(".button");

  await page.waitFor(1000);

  await page.goto("https://supply-b6f48.web.app/TimeInput");

  await page.waitFor(1000);

  await page.click(".button");

  await page.waitFor(1000);
  //asd();
  // var xls = json2xls(hashivner);
  // fs.writeFileSync("data.xlsx", xls, "binary");

  await browser.close();
})();
