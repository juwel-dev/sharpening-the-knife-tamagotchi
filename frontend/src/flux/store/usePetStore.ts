import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type State = {
  fullness: number;
  setFullness: (fullness: number) => void;
};

export const usePetStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        fullness: 50,
        setFullness: (fullness) => set({ fullness }),
      }),
      { name: "petStore" },
    ),
  ),
);
