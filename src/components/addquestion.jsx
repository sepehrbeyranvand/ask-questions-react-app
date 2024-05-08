import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/config";
import Swal from "sweetalert2";

export default function Addquestion() {
  //VARIABLES
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [describe, setDescribe] = useState("");

  //FUNCTIONS
  const resetAll = () => {
    setTitle("");
    setTags("");
    setDescribe("");
  };

  const sendForm = async (e) => {
    e.preventDefault();
    const doc = { title, tags, describe };
    try {
      const ref = collection(db, "first");
      await addDoc(ref, doc);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your question added to the question box",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (err) {
      console.log(err);
    }
    resetAll();
  };
  return (
    <div>
      <form
        onSubmit={sendForm}
        className="flex justify-center items-center flex-col"
      >
        <div className="flex justify-center items-center mt-16 w-full">
          <div className="flex flex-col m-3 mx-12">
            <label className="text-neutral-700 font-light">Title</label>
            <input
              className="border border-1 border-slate-600 rounded-sm outline-none p-[.40em] w-[20vw]"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mx-12">
            <label className="text-neutral-700 font-light">Tags</label>
            <input
              className="border border-1 border-slate-600 rounded-sm outline-none p-[.40em] w-[20vw]"
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex flex-col mt-20">
          <label>Describe</label>
          <textarea
            className="resize-none rounded-md border border-1 border-slate-700 outline-none w-[50vw] p-2 "
            rows="7"
            value={describe}
            onChange={(e) => setDescribe(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="flex justify-between items-center w-[50vw] mt-10">
          <button
            onClick={resetAll}
            type="button"
            className="bg-red-600 rounded-lg text-white p-2 w-40 hover:bg-red-700 transition .4s ease-in-out duration-200"
          >
            Reset
          </button>
          <button className="bg-green-600 rounded-lg text-white p-2 w-40 hover:bg-green-700 transition .4s ease-in-out duration-200">
            Submit
          </button>
        </div>
      </form>
      <div></div>
    </div>
  );
}
