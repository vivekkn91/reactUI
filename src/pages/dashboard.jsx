import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import Graph from "../components/Graph";
import LineGraph from "../components/lineGraph";
export default function dashboard() {
  // const location = useLocation();
  // const { state } = location;
  // const userFromState = state && state.user;
  const user = localStorage.getItem("user");

  // const userFromLocalStorage = localStorageUser
  //   ? JSON.parse(localStorageUser)
  //   : null;
  // const hasLocalStorageUser = userFromLocalStorage !== null;
  return (
    <>
      <Header />
      <div className="flex h-screen bg-f4e7e7">
        <Sidebar />{" "}
        <div className="bg-f5e8e8 flex">
          <div className="flex-1">
            <Graph />
          </div>
          <div className="flex-1">
            <LineGraph />
          </div>
        </div>
      </div>
    </>
  );
}
