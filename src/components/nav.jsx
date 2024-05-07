import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="grid grid-cols-12 p-3 items-center border-b border-neutral-300 shadow-md">
        <div className="col-span-3">
          <Link className="text-2xl font-light" to="/">Ask Question</Link>
        </div>
        <div className="col-span-4">
          <input
            className="ms-12 outline-none border border-1 border-neutral-300 p-[.43em] w-full rounded-md bg-neutral-200 placeholder:text-neutral-500"
            type="text"
            placeholder="Search your Question"
          />
        </div>
        <div className="flex justify-center items-center col-span-5">
          <NavLink to='/addQuestion' className="m-1">Ask a question</NavLink>
          <NavLink className="m-1">Questions</NavLink>
          <NavLink>Contact Us</NavLink>
          <NavLink className="m-1">
            <i className="fa fa-user-o"></i>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
