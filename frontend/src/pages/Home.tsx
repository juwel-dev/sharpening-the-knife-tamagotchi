import Layout from "../components/atoms/Layout.tsx";
import Sprite from "../components/atoms/Sprite.tsx";
import { useDispatchFeed } from "../flux/commands/useDispatchFeed.ts";
import { useGetFullness } from "../flux/queries/useGetFullness.ts";

export default function Home() {
  const fullness = useGetFullness();
  const feed = useDispatchFeed();
  return (
    <Layout>
      <h2>{fullness}</h2>
      <button type={"button"} onClick={() => feed()}>
        FEED
      </button>
      <Sprite />
    </Layout>
  );
}
