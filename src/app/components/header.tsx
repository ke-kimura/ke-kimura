import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="p-6 bg-gray-800 text-white">
        <h1 className="whitespace-pre-wrap text-32 leading-12 tracking-5 md:text-42 font-medium">KEISUKE KIMURA</h1>
        <ul className="flex justify-end space-x-4">
          <li><Link href="/about">自己紹介</Link></li>
          <li><Link href="/portfolio">ポートフォリオ</Link></li>
          <li><Link href="/blog">ブログ</Link></li>
          <li><Link href="/contact">連絡先</Link></li>
        </ul>
      </nav>
    </header>
  );
}
