
import Link from "next/link";


export default function Layout({ children }) {
  return (
    <div>
      <nav className="flex justify-center p-4">
        <Link className="link Link pr-3" href="/">
          Home
        </Link>
        <Link className="link Link pr-3" href="/about">
          About Us
        </Link>
        <Link className="link Link pr-3" href="/post">
          Post
        </Link>
      </nav>
      <div className="flex justify-center p-5">{children}</div>
    </div>
  );
}
