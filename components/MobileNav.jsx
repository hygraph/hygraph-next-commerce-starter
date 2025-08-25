"use client";
import { useState } from "react";
export default function MobileNav(props) {
  // set opener stuff
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="lg:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center p-3 text-indigo-500 navbar-burger"
        >
          <svg
            className="block w-4 h-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <div className={`${open ? "" : "hidden"} relative z-50`}>
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-gray-800 opacity-50 navbar-backdrop"
        ></div>
        <nav className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-700 ${open ? 'translate-x-0': '-translate-x-full'}`}>
          <button onClick={() => setOpen(false)} className="navbar-close">
            <svg
              className="w-6 h-6 text-indigo-400 cursor-pointer hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <ul className="mt-10 text-xl font-extrabold">
            <li className="my-5"><a className="text-indigo-500"
            href="/">Home</a></li>
            {props.nav.navLink.map((link) => (
              <li key={link.id} className="my-5">
                <a
                  href={link.url ? link.url : "/en/" + link.page.url}
                  className="text-gray-100 text-bold hover:text-indigo-400"
                >
                  {link.displayText}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
