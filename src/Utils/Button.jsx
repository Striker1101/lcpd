import { NavLink } from "react-router-dom";

export default function Button({ link, text, handleCLick, className = "" }) {
  return (
    <NavLink
      onClick={handleCLick}
      href={link}
      className={`bg-red-600 text-white p-2 rounded ${className}`}
    >
      {text}
    </NavLink>
  );
}
