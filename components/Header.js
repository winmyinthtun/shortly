import { useState } from "react";
import Link from "next/link";
import Logo from "../public/images/logo.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="max-w-6xl mx-auto">
      <div className="md:contianer md:mx-auto px-6">
        <div className="flex items-center justify-between h-28 lg:h-36">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex-shrink-0 pt-2">
                <Logo className="fill-[#34313D]" />
              </a>
            </Link>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {[
                  ["Features", "/#"],
                  ["Pricing", "/#"],
                  ["Resources", "/#"]
                ].map(([title, url]) => (
                  <Link key={title} href={url}>
                    <a className="nav-link">{title}</a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-6">
              <Link href="/#">
                <a className="nav-link">Login</a>
              </Link>
              <Link href="/#">
                <a className="nav-btn">Sign Up</a>
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setToggle(!toggle)}
              className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="h-8 w-8"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={toggle ? "" : "hidden"}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {[
            ["Home", "/"],
            ["Features", "/#"],
            ["Pricing", "/#"],
            ["Resources", "/#"],
            ["Login", "/#"],
            ["Sign Up", "/#"]
          ].map(([title, url]) => (
            <Link key={title} href={url}>
              <a className="mobile-nav-link" onClick={() => setToggle(!toggle)}>
                {title}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
