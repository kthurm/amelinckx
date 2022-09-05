// import { Link } from "react-router-dom";
import Author from "../images/amelinckx.jpg";
import Syncom from "../images/syncom-1.jpeg";

const MainHeader = () => {
  return (
    <div>
      <header className="fixed w-full flex justified-between h-[450px] lg:overflow-hidden z-10">
        <div
          className="flex w-2/3 relative bg-cover bg-black/50 bg-blend-darken"
          style={{ backgroundImage: `url('${Syncom}')` }}
        ></div>
        <div
          className="w-1/3 bg-cover bg-no-repeat bg-left-top"
          style={{ backgroundImage: `url('${Author}')` }}
        ></div>
      </header>
      <div className="h-[450px]"></div>
    </div>
  );
};

export default MainHeader;
