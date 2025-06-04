import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContex";

const Navbar = () => {
  const navigate = useNavigate();
  // const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);
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
                <ul className="block py-2 lg:flex lg:py-0">
                  <NavLink to={"/"}>
                    <li>
                      <a className="group mx-4 flex rounded-md p-3 text-sm text-ink hover:bg-gray-200 lg:mx-8 lg:text-base lg:text-white lg:hover:bg-transparent lg:hover:text-ginger">
                        <svg
                          className="flex h-4 lg:hidden"
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
                        <p className="ml-3 lg:ml-0">Beranda</p>
                      </a>
                    </li>
                  </NavLink>
                  <NavLink to={"/artikel"}>
                    <li>
                      <a className="group mx-4 flex rounded-md p-3 text-sm text-ink hover:bg-gray-200 lg:mx-8 lg:text-base lg:text-white lg:hover:bg-transparent lg:hover:text-ginger">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 18"
                          fill="currentColor"
                          className="flex h-4 lg:hidden"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 3.5A1.5 1.5 0 0 1 3.5 2h9A1.5 1.5 0 0 1 14 3.5v11.75A2.75 2.75 0 0 0 16.75 18h-12A2.75 2.75 0 0 1 2 15.25V3.5Zm3.75 7a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Zm0 3a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5ZM5 5.75A.75.75 0 0 1 5.75 5h4.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 8.25v-2.5Z"
                            clip-rule="evenodd"
                          />
                          <path d="M16.5 6.5h-1v8.75a1.25 1.25 0 1 0 2.5 0V8a1.5 1.5 0 0 0-1.5-1.5Z" />
                        </svg>
                        <p className="ml-3 lg:ml-0">Artikel</p>
                      </a>
                    </li>
                  </NavLink>
                  <NavLink to={"/scanTrash"}>
                    <li>
                      <a className="group mx-4 flex rounded-md p-3 text-sm text-ink hover:bg-gray-200 lg:mx-8 lg:text-base lg:text-white lg:hover:bg-transparent lg:hover:text-ginger">
                        <svg
                          className="flex h-4 lg:hidden"
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
                        <p className="ml-3 lg:ml-0">Deteksi</p>
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
                        src={userData?.foto || assets.upload}
                        alt="User"
                      />
                    </div>
                  </button>
                  <nav
                    id="nav-user"
                    className={`absolute right-4 top-full mt-1 w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg ${
                      isUserMenuOpen ? "" : "hidden"
                    }`}
                  >
                    <div className="mx-3 px-4 py-3">
                      <span className="block text-sm text-ink">
                        {userData.username}
                      </span>
                      <span className="block truncate text-sm text-ink">
                        {userData?.email || "-"}
                      </span>
                    </div>
                    <ul className="py-2" aria-labelledby="user-menu-button">
                      <li>
                        <a
                          onClick={() => navigate("/my-profile")}
                          className="mx-4 flex rounded-md p-3 text-sm text-ink hover:bg-gray-200 cursor-pointer"
                        >
                          <svg
                            className="h-4"
                            aria-hidden="true"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.5 8C5.80777 8 5.13108 7.79473 4.55551 7.41015C3.97993 7.02556 3.53133 6.47893 3.26642 5.83939C3.00152 5.19985 2.9322 4.49612 3.06725 3.81719C3.2023 3.13825 3.53564 2.51461 4.02513 2.02513C4.51461 1.53564 5.13825 1.2023 5.81719 1.06725C6.49612 0.932205 7.19985 1.00152 7.83939 1.26642C8.47893 1.53133 9.02556 1.97993 9.41015 2.55551C9.79473 3.13108 10 3.80777 10 4.5"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M6.5 17H1V15C1 13.9391 1.42143 12.9217 2.17157 12.1716C2.92172 11.4214 3.93913 11 5 11"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M19.5 11H18.38C18.2672 10.5081 18.0714 10.0391 17.801 9.613L18.601 8.818C18.6947 8.72424 18.7474 8.59708 18.7474 8.4645C18.7474 8.33192 18.6947 8.20476 18.601 8.111L17.894 7.404C17.8002 7.31026 17.6731 7.25761 17.5405 7.25761C17.4079 7.25761 17.2808 7.31026 17.187 7.404L16.392 8.204C15.9647 7.93136 15.4939 7.73384 15 7.62V6.5C15 6.36739 14.9473 6.24021 14.8536 6.14645C14.7598 6.05268 14.6326 6 14.5 6H13.5C13.3674 6 13.2402 6.05268 13.1464 6.14645C13.0527 6.24021 13 6.36739 13 6.5V7.62C12.5081 7.73283 12.0391 7.92863 11.613 8.199L10.818 7.404C10.7242 7.31026 10.5971 7.25761 10.4645 7.25761C10.3319 7.25761 10.2048 7.31026 10.111 7.404L9.404 8.111C9.31026 8.20476 9.25761 8.33192 9.25761 8.4645C9.25761 8.59708 9.31026 8.72424 9.404 8.818L10.204 9.618C9.9324 10.0422 9.73492 10.5096 9.62 11H8.5C8.36739 11 8.24021 11.0527 8.14645 11.1464C8.05268 11.2402 8 11.3674 8 11.5V12.5C8 12.6326 8.05268 12.7598 8.14645 12.8536C8.24021 12.9473 8.36739 13 8.5 13H9.62C9.73283 13.4919 9.92863 13.9609 10.199 14.387L9.404 15.182C9.31026 15.2758 9.25761 15.4029 9.25761 15.5355C9.25761 15.6681 9.31026 15.7952 9.404 15.889L10.111 16.596C10.2048 16.6897 10.3319 16.7424 10.4645 16.7424C10.5971 16.7424 10.7242 16.6897 10.818 16.596L11.618 15.796C12.0422 16.0676 12.5096 16.2651 13 16.38V17.5C13 17.6326 13.0527 17.7598 13.1464 17.8536C13.2402 17.9473 13.3674 18 13.5 18H14.5C14.6326 18 14.7598 17.9473 14.8536 17.8536C14.9473 17.7598 15 17.6326 15 17.5V16.38C15.4919 16.2672 15.9609 16.0714 16.387 15.801L17.182 16.601C17.2758 16.6947 17.4029 16.7474 17.5355 16.7474C17.6681 16.7474 17.7952 16.6947 17.889 16.601L18.596 15.894C18.6897 15.8002 18.7424 15.6731 18.7424 15.5405C18.7424 15.4079 18.6897 15.2808 18.596 15.187L17.796 14.392C18.0686 13.9647 18.2662 13.4939 18.38 13H19.5C19.6326 13 19.7598 12.9473 19.8536 12.8536C19.9473 12.7598 20 12.6326 20 12.5V11.5C20 11.3674 19.9473 11.2402 19.8536 11.1464C19.7598 11.0527 19.6326 11 19.5 11ZM14 14.5C13.5055 14.5 13.0222 14.3534 12.6111 14.0787C12.2 13.804 11.8795 13.4135 11.6903 12.9567C11.5011 12.4999 11.4516 11.9972 11.548 11.5123C11.6445 11.0273 11.8826 10.5819 12.2322 10.2322C12.5819 9.8826 13.0273 9.6445 13.5123 9.54804C13.9972 9.45157 14.4999 9.50108 14.9567 9.6903C15.4135 9.87952 15.804 10.2 16.0787 10.6111C16.3534 11.0222 16.5 11.5055 16.5 12C16.5 12.663 16.2366 13.2989 15.7678 13.7678C15.2989 14.2366 14.663 14.5 14 14.5Z"
                              fill="currentColor"
                            />
                          </svg>
                          <span className="ml-3">Info Akun</span>
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => navigate("/sampoint")}
                          className="mx-4 flex rounded-md p-3 text-sm text-ink hover:bg-gray-200 cursor-pointer"
                        >
                          <svg
                            className="h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2Zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2ZM7.16 14h9.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49a1 1 0 0 0-.88-1.48H5.21L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 14.37 5.48 16 7 16h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.96-1.63Z" />
                          </svg>

                          <span className="ml-3">Sampoint</span>
                        </a>
                      </li>
                      <li>
                        <p
                          onClick={logout}
                          className="mx-4 flex rounded-md p-3 text-sm text-ink hover:bg-gray-200 cursor-pointer"
                        >
                          <svg
                            className="h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 16 16"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"
                            />
                          </svg>
                          <span className="ml-3">Keluar</span>
                        </p>
                      </li>
                    </ul>
                  </nav>
                </>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="rounded-md hover:bg-green-700 bg-green-900 px-5 py-2.5 text-sm font-medium text-primary hover:scale-105 transition-all duration-300 cursor-pointer"
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
