import React from "react";
import NavLogo from "../../assets/NavLogo.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center gap-2">
        <img className="w-14 h-14 " src={NavLogo} alt="" />
        <span className="text-base-200 font-bold text-2xl tracking-wide">
          Green Circle
        </span>
      </div>
    </Link>
  );
};

export default Logo;
