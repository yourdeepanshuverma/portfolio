import { useEffect, useState } from "react";
import navLinks from "../constants/navLinks";
import socialLinks from "../constants/socials";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  return (
    <>
      {!isMenuOpen ? (
        <nav
          className="intersect-once intersect:motion-preset-slide-down motion-duration-700 flex w-full justify-around py-4 text-black md:py-8"
          aria-label="Main Navigation"
        >
          <div className="flex w-full items-center justify-between">
            {/* LOGO */}
            <a href="/" className="text-2xl font-bold">
              Portfolio
            </a>
            {/* NAVIGATION LINKS */}
            <div className="hidden md:block">
              <ul className="ml-auto flex gap-4 space-x-4 text-xl font-medium">
                {navLinks.map(({ label, href }, index) => (
                  <li key={index}>
                    <a href={href} className="hover:text-neutral-500">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* SOCIAL LINKS */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-1 space-x-4">
                {socialLinks.map(({ label, href, icon: Icon }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      target="_blank"
                      className="text-xl hover:text-neutral-500"
                      title={label}
                    >
                      <Icon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* MOBILE MENU */}
            <div className="block md:hidden">
              <button onClick={handleMenu}>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
            {/* MOBILE MENU CONTENT */}
          </div>
        </nav>
      ) : (
        <div className="flex h-screen w-full flex-col justify-between gap-4 bg-white py-8 md:hidden">
          <button onClick={handleMenu}>
            <svg
              className="h-6 w-6 rounded-md hover:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <ul className="justify-self-end-end xs:tracking-wider flex flex-col items-start gap-4 text-5xl font-extrabold tracking-wide sm:text-6xl">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  onClick={handleMenu}
                  className="hover:text-neutral-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-1 space-x-4">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-neutral-500"
                  aria-label={link.label}
                >
                  <link.icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
