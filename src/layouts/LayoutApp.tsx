import { Link, Outlet } from "react-router-dom";
import { Logo } from "../components/Logo";
import NavMenu from "../components/NavMenu";
import {ToastContainer}from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const LayoutApp = () => {
  return (
    <>
      <header className="bg-gray-800 text-white p-4">
        <ToastContainer/>
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className=" w-64">
            <Link to={"/"} className=" flex items-center hover:opacity-80 cursor-pointer">
              <Logo />
            </Link>
          </div>
          <NavMenu />
        </div>
      </header>
      <section className="max-w-screen-2xl mx-auto mt-10 p-5">
        <Outlet />
      </section>
      <footer className="p-5">
        <p className="text-center font-bold">
          {" "}
          All rights reserved {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
};

export default LayoutApp;
