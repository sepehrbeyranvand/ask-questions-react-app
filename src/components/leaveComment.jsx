import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/config";
import Swal from "sweetalert2";
import Comments from "./comments";
import { useParams } from "react-router-dom";

export default function LeaveComment() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const { id } = useParams();

  const d = new Date();
  const getTime = d.getUTCDate();

  const [date] = useState(getTime);

  const sendComment = async (e) => {
    const doc = { name, comment, date, id };
    e.preventDefault();

    try {
      const ref = collection(db, "comments");
      await addDoc(ref, doc);
      Swal.fire({
        title: "Your comment received",
        icon: "success",
      });
    } catch (err) {
      console.log(err);
    }
    setName("");
    setComment("");
  };
  return (
    <div>
      <h1 className="text-2xl inline-block">Comments</h1>

      <div className="mt-8 mx-4 flex gap-x-4">
        <div className="basis-2/3 sticky">
          <form
            onSubmit={sendComment}
            className="flex flex-col self-start justify-center items-center"
          >
            <div className="flex flex-col w-full my-5">
              <input
                className="outline-none border border-1 border-teal-600 rounded-md my-9 p-[.5em]"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <textarea
                className="outline-none resize-x border border-1 border-teal-700 rounded-md h-56 p-3"
                placeholder="Answer"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="w-full">
              <button className="p-2 text-white bg-teal-400 w-full rounded-full hover:bg-teal-600 transition .4s ease-in-out duration-200">
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="bsais-1/3 w-full">
          <Comments />
        </div>
      </div>
    </div>
  );
}
