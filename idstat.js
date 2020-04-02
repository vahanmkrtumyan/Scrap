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

    // await page.waitForSelector("#username");
    // await page.type("#username", `${c.username}`);
    // await page.type("#password", `${c.password}`);

    // // const filePath = process.cwd() + "/SECRETKEY 2.PSW";

    // await page.click("#userfile");

    // await page.waitFor(2000);

    // await robot.keyTap("f4");
    // await robot.keyTap("f4");

    // await page.waitFor(2000);
    // await robot.typeString(`${c.key}`);
    // await robot.keyTap("enter");
    // await page.waitFor(1000);
    // await page.click("#submit_btn");

    await page.waitFor(20000);
    await page.waitForSelector("#layout_layout_panel_main");
    await page.waitFor(1000);

    // let Անվանում = await page.evaluate(() => {
    //   return document
    //     .querySelector(
    //       `div[id = "layout_layout_panel_main"] > div:nth-child(3) > div > table > tbody > tr > td:nth-child(5)`
    //     )
    //     .innerText.trim();
    // });

    const cur1val = await page.evaluate(() => {
      const iframe = document.getElementById("iframe");

      // grab iframe's document object
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

      const iframeP = iframeDoc.getElementById("grid_grid_data_0_3");

      iframeP.click()
    });


    

    
  //await page.click('#grid_grid_data_0_3', 2),

    // const [response] = await Promise.all([
    //   page.waitForNavigation(),
    //   page.click('#grid_grid_data_0_3', 2),
    // ]);



    await page.waitFor(500);
  }
})();
