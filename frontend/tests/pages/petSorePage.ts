import { Locator, Page } from "@playwright/test";
import { FoodType } from "../../src/flux/store/usePetStore";

export class PetStorePage {
  private readonly page: Page;
  private readonly fullnessDisplay: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fullnessDisplay = page.getByTestId("fullness");
  }

  async goto() {
    await this.page.goto("http://localhost:5173/");
  }

  async getFullnessValue(): Promise<string> {
    return (await this.fullnessDisplay.textContent()) || "";
  }

  getFeedButton(food: keyof FoodType): Locator {
    return this.page.getByTestId(`feed_${food}`);
  }

  async feedPet(food: keyof FoodType) {
    await this.getFeedButton(food).click();
  }
}
