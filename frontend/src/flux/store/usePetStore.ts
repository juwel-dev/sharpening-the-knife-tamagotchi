import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type State = {
  food: FoodType;
  fullness: number;
  setFullness: (fullness: number) => void;
};

const foodStore = {
  pizza: { fullness: 50 },
  banana: { fullness: 30 },
  apple: { fullness: 20 },
};

export type FoodType = typeof foodStore;

export const usePetStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        food: foodStore,
        fullness: 50,
        setFullness: (fullness) => set({ fullness }),
      }),
      { name: "petStore" },
    ),
  ),
);
