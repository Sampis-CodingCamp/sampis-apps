import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContex";

const Navbar = () => {
  const navigate = useNavigate();
  // const [showMenu, setShowMenu] = useState(false);
  const { token, setToken } = useContext(AppContext);
  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
    navigate("/");
  };

  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClickOutside = (e) => {
    if (!e.target.closest("#nav-menu") && !e.target.closest("#hamburger")) {
      setIsMenuOpen(false);
    }
    if (!e.target.closest("#nav-user") && !e.target.closest("#user-photo")) {
      setIsUserMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div>
      <header
        className={`left-0 top-0 z-10 flex w-full items-center ${
          isFixed ? "fixed z-[9999] bg-gray-700/80 shadow-inner" : "absolute"
        } `}
      >
        <div className="container mx-auto">
          <div className="relative flex items-center justify-between">
            {/* Logo */}
            <div className="px-0 sm:px-4">
              <a href="/" className="block py-6 text-lg font-bold">
                <img
                  className="h-[20px] sm:h-[30px]"
                  src={assets.logoNiga}
                  alt="Logo"
                />
              </a>
            </div>

            {/* Hamburger Button */}
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="absolute right-4 block lg:hidden"
              >
                <span
                  className={`hamburger-line transition origin-top-left duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45" : ""
                  }`}
                />
                <span
                  className={`hamburger-line transition duration-300 ease-in-out ${
                    isMenuOpen ? "scale-0" : ""
                  }`}
                />
                <span
                  className={`hamburger-line transition origin-bottom-left duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45" : ""
                  }`}
                />
              </button>

              {/* Menu */}
              <nav
                id="nav-menu"
                className={`absolute right-4 top-full mt-1 w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none ${
                  isMenuOpen ? "" : "hidden"
                }`}
              >
                <ul class="block py-2 lg:flex lg:py-0">
                  <NavLink to={"/"}>
                    <li>
                      <a class="group mx-4 flex rounded-md p-3 text-sm text-ink hover:bg-gray-200 lg:mx-8 lg:text-base lg:text-white lg:hover:bg-transparent lg:hover:text-ginger">
                        <svg
                          class="flex h-4 lg:hidden"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"
                          />
                        </svg>
                        <p class="ml-3 lg:ml-0">Beranda</p>
                      </a>
                    </li>
                  </NavLink>
                  <NavLink to={"/artikel"}>
                    <li>
                      <a class="group mx-4 flex rounded-md p-3 text-sm text-ink hover:bg-gray-200 lg:mx-8 lg:text-base lg:text-white lg:hover:bg-transparent lg:hover:text-ginger">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 18"
                          fill="currentColor"
                          class="flex h-4 lg:hidden"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 3.5A1.5 1.5 0 0 1 3.5 2h9A1.5 1.5 0 0 1 14 3.5v11.75A2.75 2.75 0 0 0 16.75 18h-12A2.75 2.75 0 0 1 2 15.25V3.5Zm3.75 7a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Zm0 3a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5ZM5 5.75A.75.75 0 0 1 5.75 5h4.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 8.25v-2.5Z"
                            clip-rule="evenodd"
                          />
                          <path d="M16.5 6.5h-1v8.75a1.25 1.25 0 1 0 2.5 0V8a1.5 1.5 0 0 0-1.5-1.5Z" />
                        </svg>
                        <p class="ml-3 lg:ml-0">Artikel</p>
                      </a>
                    </li>
                  </NavLink>
                  <NavLink to={"/scanTrash"}>
                    <li>
                      <a class="group mx-4 flex rounded-md p-3 text-sm text-ink hover:bg-gray-200 lg:mx-8 lg:text-base lg:text-white lg:hover:bg-transparent lg:hover:text-ginger">
                        <svg
                          class="flex h-4 lg:hidden"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 18"
                        >
                          <path
                            fill="currentColor"
                            d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                          />
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                          />
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                          />
                        </svg>
                        <p class="ml-3 lg:ml-0">Deteksi</p>
                      </a>
                    </li>
                  </NavLink>
                </ul>
              </nav>
            </div>

            {/* User Photo */}
            <div className="mr-14 px-4 lg:mr-0">
              {token ? (
                <>
                  <button
                    id="user-photo"
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center"
                  >
                    <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
                      <img
                        className="w-full h-auto"
                        src={assets.dropdown_icon}
                        alt="User"
                      />
                    </div>
                  </button>

                  {/* User Dropdown */}
                  <nav
                    id="nav-user"
                    className={`absolute right-4 top-full mt-1 w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg ${
                      isUserMenuOpen ? "" : "hidden"
                    }`}
                  >
                    <div className="px-4 py-3">
                      <span className="block text-sm">Boni Yudistira</span>
                      <span className="block text-sm truncate">
                        boni@email.com
                      </span>
                    </div>
                    <ul class="py-2" aria-labelledby="user-menu-button">
                      <li>
                        <a
                          onClick={() => navigate("/my-profile")}
                          className="cursor-pointer block px-4 py-2 text-sm hover:bg-gray-200"
                        >
                          Info Akun
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => navigate("/points")}
                          className="cursor-pointer block px-4 py-2 text-sm hover:bg-gray-200"
                        >
                          Points
                        </a>
                      </li>
                      <li>
                        <p
                          onClick={logout}
                          className="cursor-pointer block px-4 py-2 text-sm hover:bg-gray-200"
                        >
                          Keluar
                        </p>
                      </li>
                    </ul>
                  </nav>
                </>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="rounded-md hover:bg-[#BF9264] bg-orange-400 px-5 py-2.5 text-sm font-medium text-primary hover:scale-105 transition-all duration-300"
                >
                  Register
                </button>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
