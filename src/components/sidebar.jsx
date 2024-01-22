import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-white text-white p-4  border-r border-gray-300">
      {/* <h1 className="text-3xl font-semibold mb-6">Dashboard</h1> */}
      <ul>
        <li className="mb-4">
          <a
            href="#"
            className=" bg-black block text-lg text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-gray-700"
          >
            <i className="fas fa-home mr-2"></i> Dashboard Home
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#"
            className="bg-black block text-lg text-white  py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-gray-700"
          >
            <i className="fas fa-chart-bar mr-2"></i> Analytics
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#"
            className=" bg-black block text-lg  text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-gray-700"
          >
            <i className="fas fa-file-text mr-2"></i> Reports
          </a>
        </li>
        {/* Add more list items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
