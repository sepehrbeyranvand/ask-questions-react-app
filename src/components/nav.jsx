import { Link, NavLink } from "react-router-dom";
import MainLogo from "../assets/logo.png";

export default function NavBar() {
  return (
    <div>
      <nav className="grid grid-cols-12 p-3 items-center border-b border-neutral-300 shadow-md">
        <div className="col-span-3">
          <Link className="text-2xl flex flex-col justify-center font-light" to="/">
            <img className="size-10 rounded-full" src={MainLogo} alt="" />
            <h2 className="text-xl font-light">Ask Question</h2>
          </Link>
        </div>
        <div className="lg:block sm:hidden col-span-4">
          <input
            className="ms-12 outline-none border border-1 border-neutral-300 p-[.43em] w-full rounded-md bg-neutral-200 placeholder:text-neutral-500"
            type="text"
            placeholder="Search your Question"
          />
        </div>
        <div className="flex justify-center items-center sm:col-span-8 lg:col-span-5">
          <NavLink
            to="/addQuestion"
            className="m-1 hover:border-b-2 border-teal-700 p-1 transition .4s ease-in-out duration-200"
          >
            Ask a question
          </NavLink>
          <NavLink
            to="/questions"
            className="m-1  hover:border-b-2 border-teal-700 p-1 transition .4s ease-in-out duration-200"
          >
            Questions
          </NavLink>
          <NavLink to='/contactUs'>Contact Us</NavLink>
          <NavLink to='/account' className="m-1 ms-5 text-xl">
            <i className="fa fa-user-o"></i>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
