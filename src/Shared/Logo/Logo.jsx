import React from "react";
import NavLogo from "../../assets/NavLogo.png";
import { Link } from "react-router";

const Logo = ({ variant }) => {
  const textColor = variant === "dashboard" ? "text-primary" : "text-base-200";
  return (
    <Link to="/">
      <div className="flex items-center gap-2">
        <img className="w-14 h-14 " src={NavLogo} alt="" />
        <span
          className={`font-bold text-2xl tracking-wide transition-colors duration-500 ${textColor}`}
        >
          Green Circle
        </span>
      </div>
    </Link>
  );
};

export default Logo;
