import { useEffect } from "react";
import { usePetStore } from "../store/usePetStore.ts";

/**
 * Dispatches a feed action to the pet store. Increases the fullness of the pet by 10. Maximum fullness is 100.
 */
export function useDispatchInitializeHunger() {
  const fullness = usePetStore((state) => state.fullness);
  const setFullness = usePetStore((state) => state.setFullness);

  useEffect(() => {
    const timer = setTimeout(
      () => setFullness(Math.max(fullness - 10, 0)),
      10000,
    );
    return () => clearTimeout(timer);
  }, [setFullness, fullness]);
}
