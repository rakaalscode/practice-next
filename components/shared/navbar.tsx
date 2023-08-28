"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="z-10 w-full border-b shadow-sm">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
        <Link href="/">Phantom</Link>

        <ul className="flex items-center gap-5">
          <li>
            <Link href="/">Menu 1</Link>
          </li>
          <li>
            <Link href="/">Menu 2</Link>
          </li>
          <li>
            <Link href="/">Menu 3</Link>
          </li>
          <li>
            {session && session.user ? (
              <button onClick={() => signOut()}>Sign Out</button>
            ) : (
              <button onClick={() => signIn()}>Sign In</button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
