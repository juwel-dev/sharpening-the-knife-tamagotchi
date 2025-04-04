import { test as base, expect } from "@playwright/test";
import { foodStore } from "../src/flux/store/usePetStore";
import { PetStorePage } from "./pages/petSorePage";

// Define custom fixture
type TestFixtures = {
  petStore: PetStorePage;
};

// Extend base test with our fixture
const test = base.extend<TestFixtures>({
  petStore: async ({ page }, use) => {
    const petStore = new PetStorePage(page);
    await petStore.goto();
    await use(petStore);
  },
});

// test.beforeEach(async ({}, testInfo) => {
//   testInfo.setTimeout(testInfo.timeout + 10000);
// });

test("displays initial fullness of 50", async ({ petStore }) => {
  expect(await petStore.getFullnessValue()).toBe("50");
});

test("decrease fullness by 10 after waiting for 10s", async ({
  petStore,
  page,
}) => {
  await page.waitForTimeout(13000);
  expect(await petStore.getFullnessValue()).toBe("40");
});

test("increases fullness by 50 when feeding 1 pizza", async ({ petStore }) => {
  await petStore.feedPet("pizza");
  expect(await petStore.getFullnessValue()).toBe("100");
});

test("fullness will max out at 100 when feeding 3 pizza", async ({
  petStore,
}) => {
  await petStore.feedPet("pizza");
  await petStore.feedPet("pizza");
  await petStore.feedPet("pizza");
  expect(await petStore.getFullnessValue()).toBe("100");
});

test("has feed buttons for all food types", async ({ petStore }) => {
  const foodTypes = Object.keys(foodStore) as Array<keyof typeof foodStore>;
  expect(foodTypes.length).toBeGreaterThan(0);

  for (const food of foodTypes) {
    await expect(petStore.getFeedButton(food)).toBeVisible();
  }
});
