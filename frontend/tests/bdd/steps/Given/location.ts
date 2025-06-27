import { Given } from "@cucumber/cucumber";

Given("I am on the {string} page", async function (location: string) {
  await this.page.goto(`http://localhost:5173/${getPageUrl(location)}`);
  await this.page.waitForTimeout(100);

  this.parameters.fullness = Number(
    await this.page.getByTestId("fullness").textContent(),
  );

  if (Number.isNaN(this.parameters.fullness)) {
    throw new Error("Fullness value is not a number");
  }
});

const getPageUrl = (location: string): string => {
  switch (location) {
    case "home":
      return "";

    default:
      throw new Error(`Unknown location: ${location}`);
  }
};
