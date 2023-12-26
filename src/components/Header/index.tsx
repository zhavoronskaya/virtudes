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
    <header className="fixed left-0 top-0 w-full z-10 mix-blend-difference">
      <div
        className={styles.burger + " pointer"}
        onClick={() => {
          setIsMenuOpen((value) => !value);
        }}
      >
        {isMenuOpen ? <Cross /> : <Burger />}

        {/* <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} /> */}
      </div>

      <div
        className={
          headerClass + " relative max-w-[1328px] mx-auto px-[24px] pt-[72px]"
        }
      >
        <nav className="absolute right-[24px] text-end text-[36px]/[36px]">
          <ul className={styles.glass}>
            <li>
              <Link
                href="#home"
                className="uppercase hover:font-bold "
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="#greenery"
                className="uppercase hover:font-bold "
                onClick={() => setIsMenuOpen(false)}
              >
                Greenery
              </Link>
            </li>
            <li>
              <Link
                href="#overview"
                className="uppercase hover:font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Overview
              </Link>
            </li>
            <li>
              <Link
                href="#art"
                className="uppercase hover:font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Art
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className=" uppercase hover:font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Cross() {
  return (
    // <svg
    //   width="24"
    //   viewBox="0 0 38 38"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M37 1L1 37M1 1L37 37"
    //     stroke="#FDF7FA"
    //     strokeWidth="2"
    //     strokeLinejoin="round"
    //   />
    // </svg>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.270363 0.270363C0.630847 -0.090121 1.21531 -0.090121 1.57579 0.270363L12 10.6946L22.4242 0.270363C22.7847 -0.090121 23.3692 -0.090121 23.7296 0.270363C24.0901 0.630847 24.0901 1.21531 23.7296 1.57579L13.3054 12L23.7296 22.4242C24.0901 22.7847 24.0901 23.3692 23.7296 23.7296C23.3692 24.0901 22.7847 24.0901 22.4242 23.7296L12 13.3054L1.57579 23.7296C1.21531 24.0901 0.630847 24.0901 0.270363 23.7296C-0.090121 23.3692 -0.090121 22.7847 0.270363 22.4242L10.6946 12L0.270363 1.57579C-0.090121 1.21531 -0.090121 0.630847 0.270363 0.270363Z"
        fill="#FDF7FA"
      />
    </svg>
  );
}

function Burger() {
  return (
    <svg
      width="24"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="16.6154"
        width="36"
        height="2.76923"
        rx="1.38462"
        fill="#FDF7FA"
      />
      <rect
        y="33.2308"
        width="18"
        height="2.76923"
        rx="1.38462"
        fill="#FDF7FA"
      />
      <rect x="18" width="18" height="2.76923" rx="1.38462" fill="#FDF7FA" />
    </svg>
  );
}
