import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

function SocialMedia() {
  return (
    <div className="flex space-x-3 text-xl">
      <a
        className="hover:text-[#cec9be]"
        href="https://www.facebook.com/AndrewAmelinckx.writer"
        target="_blank"
        rel="noreferrer"
      >
        <FiFacebook />
      </a>
      <a
        className="hover:text-[#cec9be]"
        href="https://twitter.com/theamelinckx"
        target="_blank"
        rel="noreferrer"
      >
        <FiTwitter />
      </a>
      <a
        className="hover:text-[#cec9be]"
        href="https://www.instagram.com/andrewamelinckx/"
        target="_blank"
        rel="noreferrer"
      >
        <FiInstagram />
      </a>
      <a
        className="hover:text-[#cec9be]"
        href="https://www.linkedin.com/in/andrew-amelinckx-0114889/"
        target="_blank"
        rel="noreferrer"
      >
        <FiLinkedin />
      </a>
    </div>
  );
}

export default SocialMedia;
