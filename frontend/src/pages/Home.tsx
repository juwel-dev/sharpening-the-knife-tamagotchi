import Layout from "../components/atoms/Layout.tsx";
import Sprite from "../components/atoms/Sprite.tsx";
import { useDispatchFeed } from "../flux/commands/useDispatchFeed.ts";
import { useGetFood } from "../flux/queries/useGetFood.ts";
import { useGetFullness } from "../flux/queries/useGetFullness.ts";
import { FoodType } from "../flux/store/usePetStore.ts";

export default function Home() {
  const food = useGetFood();
  const fullness = useGetFullness();

  const feed = useDispatchFeed();

  return (
    <Layout>
      <h2>{fullness}</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        {Object.keys(food).map((key) => (
          <button
            key={key}
            type={"button"}
            onClick={() => feed(key as keyof FoodType)}
          >
            FEED BANANA
          </button>
        ))}
      </div>
      <Sprite />
    </Layout>
  );
}
