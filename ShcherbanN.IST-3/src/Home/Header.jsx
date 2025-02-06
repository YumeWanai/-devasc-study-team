import * as React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between rounded-l items-center px-10  py-5 bg-black text-white shadow-md">
      <div className="text-3xl font-bold text-red-500">Hot Wheels Catalog</div>
      <div className="flex gap-6 text-lg">
        <div className="cursor-pointer transition duration-300 hover:text-red-500">
          Home
        </div>
        <div className="cursor-pointer transition duration-300 hover:text-red-500">
          Popular
        </div>
        <div className="cursor-pointer transition duration-300 hover:text-red-500">
          New
        </div>
        <div
          onClick={() => navigate("/login")}
          className="cursor-pointer transition duration-300 hover:text-red-500"
        >
          Login
        </div>
        <div
          onClick={() => navigate("/profile")}
          className="cursor-pointer transition duration-300 hover:text-red-500"
        >
          Profile
        </div>
      </div>
    </div>
  );
}

export default Header;
