var robot = require("robotjs");
const puppeteer = require("puppeteer");

(async function asd() {
  let companies = [
    {
      username: "BRIGHT_IDEAS_ID",
      password: "Belilanmer6784!",
      key: "BrightIdeas.PSW"
    }
  ];

  for (c of companies) {
    const browser = await puppeteer.launch({
      args: [
        "--disable-features=IsolateOrigins,site-per-process"
        // "--disable-gl-drawing-for-tests"
      ],
      headless: false
    });

    const page = await browser.newPage();
    await page.goto("https://online.idbank.am/");

    await page.waitForSelector("#username");
    await page.type("#username", `${c.username}`);
    await page.type("#password", `${c.password}`);

    // const filePath = process.cwd() + "/SECRETKEY 2.PSW";

    await page.click("#userfile");

    await page.waitFor(2000);

    await robot.keyTap("f4");
    await robot.keyTap("f4");

    await page.waitFor(2000);
    await robot.typeString(`${c.key}`);
    await robot.keyTap("enter");
    await page.waitFor(1000);
    await page.click("#submit_btn");

    await page.waitForSelector("#layout_layout_panel_main");
    await page.waitFor(1000);

    let Անվանում = await page.evaluate(() => {
      return document
        .querySelector(
          `div[id = "layout_layout_panel_main"] > div:nth-child(3) > div > table > tbody > tr > td:nth-child(5)`
        )
        .innerText.trim();
    });

    const cur1val = await page.evaluate(() => {
      const iframe = document.getElementById("iframe");

      // grab iframe's document object
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

      const iframeP = iframeDoc.getElementById("grid_grid_data_0_3");

      return iframeP.innerText;
    });

    const cur2val = await page.evaluate(() => {
      const iframe = document.getElementById("iframe");

      // grab iframe's document object
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

      const iframeP = iframeDoc.getElementById("grid_grid_data_1_3");

      return iframeP.innerText;
    });

    const cur3val = await page.evaluate(() => {
      const iframe = document.getElementById("iframe");

      // grab iframe's document object
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

      const iframeP = iframeDoc.getElementById("grid_grid_data_2_3");

      return iframeP.innerText;
    });

    const cur4val = await page.evaluate(() => {
      const iframe = document.getElementById("iframe");

      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

      const iframeP = iframeDoc.getElementById("grid_grid_data_3_3");

      return iframeP.innerText;
    });

    await page.waitFor(500);

    await page.goto("https://supply-b6f48.web.app/");
    await page.waitForSelector("#name");
    await page.waitFor(1000);
    await page.type("#name", `${Անվանում} ID`);
    await page.type("#AMD", `${cur1val}`);
    await page.type("#EUR", `${cur2val}`);
    await page.type("#RUB", `${cur3val}`);
    await page.type("#USD", `${cur4val}`);
    await page.waitFor(500);
    await page.click(".button");
    await page.waitFor(500);
    await browser.close();
  }
})();
