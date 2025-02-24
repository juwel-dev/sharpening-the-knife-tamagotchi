import { FoodType, usePetStore } from "../store/usePetStore.ts";

export const useGetFood = (): (keyof FoodType)[] => {
  const foodStore = usePetStore((state) => state.food);
  return Object.keys(foodStore) as (keyof FoodType)[];
};
