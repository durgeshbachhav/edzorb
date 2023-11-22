import React from "react";
import NavBar from "./components/NavBar";
import Courses from "./components/Courses";
import Recent from "./components/Recent";

const App = () => {
  return (
    <div className="relative bg-customBlue h-screen">
     <div className="w-full fixed top-0 z-10">
     <NavBar />
     </div>
     <div className="mt-20">
      <Courses />
     </div>
     <div className="mt-20">
      <Recent />
     </div>
    </div>
  )
};

export default App;
