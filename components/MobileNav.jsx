"use client";
import { useState } from "react";
export default function MobileNav(props) {
  // set opener stuff
  const [open, setOpen] = useState(false);
  console.log({ props });
  return (
    <>
      <div class="lg:hidden">
        <button
          onClick={() => setOpen(!open)}
          class="navbar-burger flex items-center text-indigo-500 p-3"
        >
          <svg
            class="block h-4 w-4 fill-current"
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
          class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-50"
        ></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <button onClick={() => setOpen(false)} class="navbar-close">
            <svg
              class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <ul className="mt-10">
            <li className="my-5"><a href="/">Home</a></li>
            {props.nav.navLink.map((link) => (
              <li className="my-5">
                <a
                  key={link.id}
                  href={link.url ? link.url : "/en/" + link.page.url}
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
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
