import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";

export const runtime = 'edge';

export default function Home() {
  return (

    <div className="font-sans bg-white text-gray-900 antialiased">
      <Header />
      <section className="py-10 px-5">
        <h2 className="text-3xl font-bold">自己紹介</h2>
        <p>あなた自身についての説明</p>
      </section>
      <section className="py-10 px-5">
        <h2 className="text-3xl font-bold">work</h2>
        {/* あなたの作品を表示するコードをここに追加 */}
      </section>
      <section className="py-10 px-5">
        <h2 className="text-3xl font-bold">連絡先</h2>
        <p>あなたの連絡先情報</p>
      </section>
    </div>
  );
}
