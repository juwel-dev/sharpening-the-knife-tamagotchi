import { usePetStore } from "../store/usePetStore.ts";

/**
 * Dispatches a feed action to the pet store. Increases the fullness of the pet by 10. Maximum fullness is 100.
 */
export function useDispatchFeed() {
  const fullness = usePetStore((state) => state.fullness);
  const setFullness = usePetStore((state) => state.setFullness);

  const newFullness = Math.min(fullness + 10, 100);

  return () => setFullness(newFullness);
}
