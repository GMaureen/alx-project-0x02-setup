# components/layout/Header.tsx
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-around items-center">
      <Link href="/home" className="hover:underline">
        Home
      </Link>
      <Link href="/about" className="hover:underline">
        About
      </Link>
      <Link href="/posts" className="hover:underline">
        Posts
      </Link>
    </header>
  );
};

export default Header;
