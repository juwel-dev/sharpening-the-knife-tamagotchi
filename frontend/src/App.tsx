import { useDispatchInitializeHunger } from "./flux/commands/useDispatchIncreaseHunger.ts";
import Home from "./pages/Home.tsx";

export default function App() {
  useDispatchInitializeHunger();

  return <Home />;
}
