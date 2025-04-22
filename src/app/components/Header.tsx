import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Image
            src="/company-logo.jpg"
            alt="Business"
            width={204}
            height={204}
          />
        </div>
        <nav>
          <ul>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#">Initiatives</Link>
            </li>
          </ul>
        </nav>
        <nav className="contact-nav">
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
