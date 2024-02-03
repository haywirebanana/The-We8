'use client';

import Link from "next/link";
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="flex-none">
            <ul className="px-1">
            <li>
                <Link href="/">Haseeb</Link>
            </li>
            <li>
                <Link href="/ryan">Ryan</Link>
            </li>
            <li>
                <Link href="/armin">Armin</Link>
            </li>
            </ul>
        </div>
    </div>
  );
};
export default Navbar;
