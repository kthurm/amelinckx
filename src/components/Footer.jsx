import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

function Footer() {
  return (
    <div>
      <div className="bg-secondary text-background">
        <div className="container-lg !py-3 w-full flex justify-between mx-auto text-sm">
          <p className="opacity-70">
            &copy; {new Date().getFullYear()} Andrew Amelinkcx
          </p>
          <div className="flex space-x-3 text-xl">
            <a
              className="text-background hover:text-primary"
              href="https://www.facebook.com/AndrewAmelinckx.writer"
              target="_blank"
              rel="noreferrer"
            >
              <FiFacebook />
            </a>
            <a
              className="text-background hover:text-primary"
              href="https://twitter.com/theamelinckx"
              target="_blank"
              rel="noreferrer"
            >
              <FiTwitter />
            </a>
            <a
              className="text-background hover:text-primary"
              href="https://www.instagram.com/andrewamelinckx/"
              target="_blank"
              rel="noreferrer"
            >
              <FiInstagram />
            </a>
            <a
              className="text-background hover:text-primary"
              href="https://www.linkedin.com/in/andrew-amelinckx-0114889/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
