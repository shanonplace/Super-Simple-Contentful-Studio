import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2025 Fake Company. All rights reserved.</p>
        <nav>
          <ul>
            <li>
              <a href="https://www.fakecompany.com/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="https://www.fakecompany.com/accessibility">
                Accessibility
              </a>
            </li>
            <li>
              <a href="https://www.fakecompany.com/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
