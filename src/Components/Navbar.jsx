import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";
import { FaSquareTwitter } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="logo" className="mx-2" width={50} height={33} />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.twitter.com/in/your-twitter-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter">
        <FaSquareTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-derangula-a64233273/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn">
        <FaLinkedin />
        </a>

        <a
          href="https://github.com/DerangulaAbhishek"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub">
        <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/abhi_shek__13/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram">
        <FaInstagram />
        </a>

      </div>
    </nav>
  );
};

export default Navbar;
