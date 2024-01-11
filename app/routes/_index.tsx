import type { MetaFunction } from "@remix-run/cloudflare";
import logo from "./images/logo.png";

export const meta: MetaFunction = () => {
  return [
    { title: "SpotifyAssists" },
    { name: "description", content: "Welcome to SpotifyAssists" },
  ];
};

export default function Index() {
  return (
    <div className="bg-white p-10 rounded-lg shadow-md text-center">
      <img
        src={ logo }
        alt="Murkap Bot Logo"
        className="mx-auto mb-5 w-24 h-24"
      />
      <h2 className="text-2xl font-bold mb-5 text-gray-800">SpotifyAssist</h2>
      <p className="text-gray-600">
        A Telegram bot for music lovers. Search and share your favorite songs
        directly in your chats!
      </p>
      <a
        href="https://t.me/spfassist_bot"
        className="inline-block mt-5 py-2 px-4 bg-green-500 text-white rounded"
      >
        Start using SpotifyAssist
      </a>
    </div>
  );
}
