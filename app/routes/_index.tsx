import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "SpotifyAssists" },
    { name: "description", content: "Welcome to SpotifyAssists" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to SpotifyAssists</h1>
    </div>
  );
}
