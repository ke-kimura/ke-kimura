import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";

export const runtime = 'edge';

export default function Home() {
  return (

    <div className="font-sans bg-wight-100 antialiased">
      <Header />
      <section className="py-10 px-5">
        <h2 className="text-3xl font-bold">work</h2>
      </section>
    </div>
  );
}
