import React from "react";
import { useAuth } from "../AdminAuth";
import Content from "./Content";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import Login from "../views/Login";

export default function Activity() {
  const {IsLoggedIn} = useAuth();
  if(!IsLoggedIn){
    return (
    <>
      <div className="flex select-none">
        <Sidebar />
        <div className="flex flex-column w-full content-main">
          <TopBar />
          <Content />
        </div>
      </div>
    </>
  );
  } else {
    return <Login />
  }
  
}
