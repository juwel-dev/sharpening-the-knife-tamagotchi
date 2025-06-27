import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Then("Fullness is increased by {int}", async function (increase: number) {
  expect(await this.page.getByTestId("fullness").textContent()).toBe(
    Math.min(this.parameters.fullness + increase, 100).toString(),
  );
});
