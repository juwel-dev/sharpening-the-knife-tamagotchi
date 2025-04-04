import Layout from "../components/atoms/Layout.tsx";
import Sprite from "../components/atoms/Sprite.tsx";
import { useDispatchFeed } from "../flux/commands/useDispatchFeed.ts";
import { useGetFood } from "../flux/queries/useGetFood.ts";
import { useGetFullness } from "../flux/queries/useGetFullness.ts";

export default function Home() {
  const foodNames = useGetFood();
  const fullness = useGetFullness();

  const feed = useDispatchFeed();

  return (
    <Layout>
      <h2 data-testid={"fullness"}>{fullness}</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        {foodNames.map((name) => (
          <button
            key={name}
            type={"button"}
            onClick={() => feed(name)}
            data-testid={`feed_${name}`}
          >
            FEED {name.toUpperCase()}
          </button>
        ))}
      </div>
      <Sprite />
    </Layout>
  );
}
