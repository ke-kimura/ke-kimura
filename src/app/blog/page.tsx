import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";

export const runtime = 'edge';

export default function Home() {
  return (

    <div className="font-sans text-gray-900 antialiased">
      <Header />
      <section className="py-10 px-5">
        <h2 className="text-3xl font-bold">ブログ</h2>
      </section>
    </div>
  );
}
