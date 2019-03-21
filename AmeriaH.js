const puppeteer = require("puppeteer");

const URL = "https://internetbank.armbusinessbank.am/InternetBank/MainForm.wgx";

(async () => {
  let amsatver = [["26", "01", "2019"], ["01", "02", "2019"]];

  const browser = await puppeteer.launch({
    args: ["--disable-features=site-per-process"],
    headless: false
  });

  let companies = [{ username: "smartp2", password: "3654789" }];

  const page = await browser.newPage();

  await page.goto("https://online.ameriabank.am/InternetBank/MainForm.wgx");

  for (c of companies) {
    await page.waitForSelector("#TRG_32");
    await page.waitFor(200);
    await page.type("#TRG_32", c.username);
    await page.type("#TRG_38", c.password);
    await page.keyboard.press("Enter");

    // if ((await page.waitForSelector("#TRG_32")) !== null)
    //   await page.type("#TRG_32", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    // else await page.waitForSelector("#TRG_32");

    await page.waitForSelector("#VWGLE_101");
    await page.waitFor(1000);
    await page.click("#VWGLE_101");

    let hashivner = [1, 2, 3, 4];

    for (i of hashivner) {
      await page.waitForSelector(
        `div[id = "Contained169"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(2)`
      );
      await page.waitFor(1000);
      await page.click(
        `div[id = "Contained169"] > div > div:nth-child(2) > div:nth-child(2) > div > table > tbody > tr:nth-child(${i})`
      );

      await page.waitFor(2000);
      await page.click("#VWG_189");
      await page.waitForSelector(
        `#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(1)`
      );
      await page.click(
        `#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(1)`
      );
      await page.waitFor(700);
      await page.keyboard.type(amsatver[0][0]);
      await page.click(
        `#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(3)`
      );
      await page.waitFor(200);
      await page.keyboard.type(amsatver[0][1]);
      await page.waitFor(200);
      await page.click(
        `#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(5)`
      );
      await page.waitFor(200);
      await page.keyboard.type(amsatver[0][2]);
      await page.waitFor(200);
      await page.click(
        `#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(6) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(1)`
      );
      await page.waitFor(300);
      await page.keyboard.type(amsatver[1][0]);
      await page.waitFor(300);
      await page.click(
        `#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(6) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(3)`
      );
      await page.waitFor(200);
      await page.keyboard.type(amsatver[1][1]);
      await page.waitFor(200);
      await page.click(
        `#VWGE_WindowsBox > div > div > div > div > div > div > div div:nth-child(4) > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(5) > div > div > div > div > div > div:nth-child(3) > div:nth-child(6) > div > div > div > div > div > div > div > div > div:nth-child(2) > table > tbody > tr > td > div > table > tbody > tr > td:nth-child(5)`
      );
      await page.waitFor(200);
      await page.keyboard.type(amsatver[1][2]);
      await page.waitFor(200);
      await page.keyboard.press("Enter");

      await page.waitForSelector(
        `div[id = "Contained86"] > div > div > div > div > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(4)`
      );
      await page.waitFor(1000);
      await page.click(
        `div[id = "Contained86"] > div > div > div > div > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(4)`
      );
      await page.waitForSelector(`#VWGLE_101`);
      await page.waitFor(1000);
      await page.click(`#VWGLE_101`);
    }

    await page.waitFor(500);
    await page.click("#VWG_146");
  }
  await browser.close();
})();
