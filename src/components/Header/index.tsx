"use client";
import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";

type Props = {
  className?: string;
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  let headerClass = styles.header;
  if (isMenuOpen) headerClass += " active";

  return (
    <>
      <div
        className={styles.burger + " md:invisible pointer"}
        onClick={() => {
          setIsMenuOpen((value) => !value);
        }}
      >
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
      </div>

      <div className={headerClass}>
        <nav className="p-4 relative text-xl leading-tight invisible md:visible">
          <ul className={styles.glass + " flex justify-between"}>
            <li className="flex-1 p-4 text-center">
              <Link
                href="#home"
                className="uppercase hover:font-bold"
                onClick={() => {
                  setIsMenuOpen((value) => false);
                }}
              >
                Home
              </Link>
            </li>

            <li className="flex-1 p-4 text-center">
              <Link
                href="#greenery"
                className="uppercase hover:font-bold "
                onClick={() => {
                  setIsMenuOpen((value) => false);
                }}
              >
                Greenery
              </Link>
            </li>
            <li className="flex-1 p-4 text-center">
              <Link
                href="#overview"
                className="uppercase hover:font-bold"
                onClick={() => {
                  setIsMenuOpen((value) => false);
                }}
              >
                Overview
              </Link>
            </li>
            <li className="flex-1 p-4 text-center">
              <Link
                href="#art"
                className="uppercase hover:font-bold"
                onClick={() => {
                  setIsMenuOpen((value) => false);
                }}
              >
                Art
              </Link>
            </li>
            <li className="flex-1 p-4 text-center">
              <Link
                href="#contact"
                className=" uppercase hover:font-bold"
                onClick={() => {
                  setIsMenuOpen((value) => false);
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
