import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="border-gray-200 bg-white dark:bg-gray-900">
        <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <a href="https://flowbite.com/" class="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="mr-3 h-8"
              alt="Flowbite Logo"
            />
            <span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              E-Commerce
            </span>
          </a>
          <div class="flex space-x-2 md:order-2">
            <Link to={"/cart"}>
              <button
                type="button"
                className="mr-3 flex rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-black hover:bg-green-300 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-green-400 dark:focus:ring-blue-800 md:mr-0"
              >
                <img
                  className="w-5"
                  src="https://img.icons8.com/?size=512&id=59997&format=png"
                  alt="shopping cart logo"
                />

                <span className="ml-2">Cart</span>
              </button>
            </Link>
            <Link to="/signup">
              <button
                type="button"
                class="mr-3 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
              >
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button
                type="button"
                class="mr-3 rounded-lg bg-rose-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-rose-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
              >
                Login
              </button>
            </Link>
          </div>
          <div
            class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="navbar-cta"
          >
            <ul class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
              <li>
                <Link to="/">
                  <a
                    href="#"
                    class="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  class="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  About
                </a>
              </li>
              <li>
                <Link
                  to="/product"
                  class="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Product
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  class="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export { Navbar };
