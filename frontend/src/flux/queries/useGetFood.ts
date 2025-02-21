import { usePetStore } from "../store/usePetStore.ts";

export const useGetFood = () => usePetStore((state) => state.food);
