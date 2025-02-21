import { FoodType, usePetStore } from "../store/usePetStore.ts";

/**
 * Dispatches a feed action to the pet store. Increases the fullness of the pet by 10. Maximum fullness is 100.
 */
export function useDispatchFeed() {
  const foodStore = usePetStore((state) => state.food);
  const fullness = usePetStore((state) => state.fullness);
  const setFullness = usePetStore((state) => state.setFullness);

  function feed(food: keyof FoodType) {
    const newFullness = Math.min(fullness + foodStore[food].fullness, 100);
    setFullness(newFullness);
  }

  return feed;
}
