import React, { useEffect, useState, useRef } from "react";

const Navber = () => {
  const [loading, setLoading] = useState(false);
  const [activePath, setActivePath] = useState(window.location.pathname);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handlePopState = () => setActivePath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);

    // Close dropdown if clicked outside
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavigation = (path) => {
    setLoading(true);
    setDropdownOpen(false);
    setTimeout(() => {
      setLoading(false);
      setActivePath(path);
      window.location.href = path;
    }, 700);
  };

  const linkClass = (path) =>
    `text-sm font-medium transition-all duration-300 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#EA8F10] ${
      activePath === path
        ? "text-[#EA8F10] underline underline-offset-4"
        : "text-[#FEF6E6] hover:text-[#EA8F10]"
    }`;

  const renderLinks = (
    <>
      <li>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation("/");
          }}
          className={linkClass("/")}
          aria-current={activePath === "/" ? "page" : undefined}
          tabIndex={0}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="/about"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation("/about");
          }}
          className={linkClass("/about")}
          aria-current={activePath === "/about" ? "page" : undefined}
          tabIndex={0}
        >
          About
        </a>
      </li>
       <li>
        <a
          href="/skill"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation("/skill");
          }}
          className={linkClass("/skill")}
          aria-current={activePath === "/skill" ? "page" : undefined}
          tabIndex={0}
        >
          Skills
        </a>
      </li>
      <li>
        <a
          href="/projects"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation("/projects");
          }}
          className={linkClass("/projects")}
          aria-current={activePath === "/projects" ? "page" : undefined}
          tabIndex={0}
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="/contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation("/contact");
          }}
          className={linkClass("/contact")}
          aria-current={activePath === "/contact" ? "page" : undefined}
          tabIndex={0}
        >
          Contact
        </a>
      </li>
    </>
  );

  return (
    <>
      <nav
        className="sticky top-0 z-50 w-full py-3 px-4 md:px-10 shadow-md transition-all duration-700 ease-in-out backdrop-blur-md border border-[#EA8F10] rounded-xl"
        style={{
          backgroundColor: "#212722",
          animation: "fadeSlideDown 1s ease-out",
        }}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span
              className="text-2xl font-bold tracking-widest italic select-none"
              style={{
                color: "#FEF6E6",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Sabr<span className="text-[#EA8F10] tracking-widest italic ">ina </span>
            </span>
          </div>

          {/* Center Nav Links (Desktop) */}
          <div className="hidden lg:flex">
            <ul className="flex space-x-6 items-center list-none m-0 p-0">{renderLinks}</ul>
          </div>

          {/* CTA Button + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <a
              href="/contact"
              className="rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300 select-none"
              style={{
                backgroundColor: "#EA8F10",
                color: "#212722",
              }}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/contact");
              }}
            >
              Let's Work Together
            </a>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden focus:outline-none focus:ring-2 focus:ring-[#EA8F10] rounded"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-label={dropdownOpen ? "Close menu" : "Open menu"}
              aria-expanded={dropdownOpen}
              aria-controls="mobile-menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#FEF6E6"
              >
                {dropdownOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {dropdownOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden mt-2 p-4 rounded-lg shadow-md"
            style={{ backgroundColor: "#212722", border: "1px solid #EA8F10" }}
            ref={dropdownRef}
          >
            <ul className="flex flex-col gap-2 list-none m-0 p-0">{renderLinks}</ul>
          </div>
        )}
      </nav>

      {/* Loading Spinner Overlay */}
      {loading && (
        <div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: "#212722cc" }}
          aria-live="assertive"
          aria-label="Loading"
        >
          <span
            className="loading loading-bars loading-lg"
            style={{ color: "#EA8F10" }}
          ></span>
          <p className="mt-2 text-[#FEF6E6] text-sm select-none"></p>
        </div>
      )}

      {/* Animation Keyframe */}
      <style>
        {`
          @keyframes fadeSlideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
};

export default Navber; 