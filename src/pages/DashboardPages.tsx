import { Link } from "react-router-dom";

const DashboardPages = () => {
  return (
    <>
      <h1 className="text-5xl font-black">My projects</h1>
      <p className="text-2xl text-gray-500 mt-5 font-light">
        Manages and administers your projects
      </p>
      <nav className=" mt-5">
        <Link
          to={"/projects/create"}
          className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
        >
          New project
        </Link>
      </nav>
    </>
  );
};
export default DashboardPages;
