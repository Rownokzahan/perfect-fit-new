import { FaHeart } from "react-icons/fa";
import CurrentYear from "./CurrentYear";

const FooterCopyright = () => {
  return (
    <div className="ui-container text-xs mt-12">
      <div className="py-6 border-t border-dark-light flex flex-col sm:flex-row items-center justify-between gap-6">
        <p>
          Copyright &copy;<CurrentYear /> All Rights Reserved.
        </p>

        <p className="flex items-center gap-1">
          <span>Made with</span>
          <FaHeart />
          <span>by</span>
          <a
            href="https://rownok-zahan-rupa.netlify.app/"
            target="_blank"
            className="animated-underline hover:text-primary transition-colors duration-300 font-medium"
          >
            Rownok Zahan Rupa
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterCopyright;
