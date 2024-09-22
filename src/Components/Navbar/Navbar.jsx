import { useState } from "react";
import Logo from "../../assets/Logo.png";
import "./Navbar.css";
// import menu from "../../assets/menu.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <div className="navvbar">
      <div className="leftSide">
        <img src={Logo} alt="Logo" />
      </div>
      <div
        className={
          isActive ? "rightSide rightSideOn" : "rightSide rightSideOff"
        }
      >
        <Link
          className="navv custom-hover-nav text-acumin"
          onClick={() => {
            setIsActive(!isActive);
          }}
          to="/"
        >
          Home
        </Link>
        <Link
          className="navv custom-hover-nav text-acumin font-semibold"
          onClick={() => setIsActive(!isActive)}
          to="/projects/#"
        >
          Projects
        </Link>
      </div>
      <div className={isActive ? "ham1" : "ham"}>
        {/* <img src={menu} onClick={handleClick} alt="Menu" /> */}
        <span onClick={handleClick}>
          <FaBars />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
