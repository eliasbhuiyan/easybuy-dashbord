import { Link } from "react-router-dom";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const AboutNav = () => {
  return (
    <nav className="py-6 shadow-md">
      <div className="container flex items-center justify-between">
        <div className="w-24">
          <Link to="/">
            <img src="/logo.png" className="w-full" alt="logo" />
          </Link>
        </div>
        <div>
          <ul className="flex gap-5 items-center">
            <li>
              <Link to="https://github.com/eliasbhuiyan" target="_blank">
                <FaGithubSquare className="text-3xl" />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/in/elias-bhuiyan/"
                target="_blank"
              >
                <FaLinkedin className="text-3xl" />
              </Link>
            </li>
            <li>
              <Link to="/login" className="btn">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AboutNav;
