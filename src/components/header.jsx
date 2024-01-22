import React from "react";

const Header = () => {
  const user = localStorage.getItem("user");
  return (
    <header className="bg-white  text-black p-4 border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold bg-black p-2 text-white">
          Your Logo
        </div>
        <div className="text-lg">
          <p>Welcome {user}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
