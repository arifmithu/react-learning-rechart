import { useState } from "react";
import "./App.css";
import { CgProfile } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";
import Recharts from "./components/Recharts";
import Table from "./components/Table";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center py-5 px-10 md:px-[150px]  bg-blue-400">
        <div className="md:hidden">
          <IoMdMenu onClick={() => setOpen(!open)} />
        </div>
        <div className="hidden gap-20 md:flex">
          <p>Home</p>
          <p>Categories</p>
          <p>Products</p>
          <p>Contact</p>
        </div>

        <div>
          <CgProfile />
        </div>
      </div>
      <div
        className={`absolute ${
          open ? "top-16" : "top-[-200px]"
        } gap-20 py-4 duration-1000 bg-blue-400 p-5 text-white left-10 rounded md:flex md:fixed`}
      >
        <p>Home</p>
        <p>Categories</p>
        <p>Products</p>
        <p>Contact</p>
      </div>
      <Recharts />
      <Table />
    </>
  );
}

export default App;
