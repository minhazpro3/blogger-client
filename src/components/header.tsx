import Link from "next/link";
export default function Header() {
  return (
    <div className="fixed top-0 z-50 h-16 w-full flex-none border-b border-slate-900/10 bg-white/95 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-transparent">
      <div className="text-white">
        <Link href="/doc/python">Python</Link>
        <Link href="/javascript">Javascript</Link>
      </div>
    </div>
  );
}
