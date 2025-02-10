import { usePetStore } from "../store/usePetStore.ts";

export const useGetFullness = () => usePetStore((state) => state.fullness);
