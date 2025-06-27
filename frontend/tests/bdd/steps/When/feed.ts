import { When } from "@cucumber/cucumber";

When("I feed my pet with {string}", async function (food: string) {
  await this.page.getByTestId(`feed_${food}`).click();
});
