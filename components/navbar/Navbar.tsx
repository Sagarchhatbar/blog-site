import Link from "next/link";
import React, { useEffect, useState } from "react";
import style from "../../styles/Navbar.module.css";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={style.navbarMain}>
        <button className={style.hamburger} onClick={toggleMenu}>
          ☰
        </button>
        <div className={`${style.menu} ${isOpen ? style.open : style.menu}`}>
        <div>
            <Link
              href="/"
              title="Home"
              className={
                router.pathname === "/"
                  ? style.activeLink
                  : ""
              }
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              href="/works"
              title="Works"
              className={
                router.pathname === "/works" ||
                router.pathname === "/worksDetail"
                  ? style.activeLink
                  : ""
              }
            >
              Works
            </Link>
          </div>
          <div>
            <Link
              href="/blog"
              title="Blogs"
              className={router.pathname === "/blog" ? style.activeLink : ""}
            >
              Blogs
            </Link>
          </div>
          <div>
            <Link
              href="/contact"
              title="Contact"
              className={router.pathname === "/contact" ? style.activeLink : ""}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
