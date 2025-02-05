import * as React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate(); // Get the navigate function

  return (
    <div className="flex overflow-hidden flex-wrap gap-5 justify-between px-20 py-4 w-full bg-white shadow-sm max-md:px-5 max-md:max-w-full">
      <div className="text-2xl font-bold leading-none text-black">
        Hot Wheels Catalog
      </div>
      <div className="flex gap-5 my-auto text-base text-gray-700 whitespace-nowrap">
        <div className="grow font-black text-blue-600">Home</div>
        <div>Popular</div>
        <div>New</div>
        <div onClick={() => navigate("/login")} className="cursor-pointer">
          Login
        </div>
        <div onClick={() => navigate("/profile")} className="cursor-pointer">
          Profile
        </div>
      </div>
    </div>
  );
}

export default Header;
