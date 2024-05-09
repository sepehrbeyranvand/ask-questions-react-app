import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/config";
import Swal from "sweetalert2";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const resetAll = () => {
    setName("");
    setEmail("");
    setSubject("");
    setText("");
  };

  const submitContact = async (e) => {
    e.preventDefault()
    const doc = { name, email, subject, text };
    try {
      const ref = collection(db, "contact");
      await addDoc(ref, doc);
      Swal.fire({
        position: "top-end",
        width: 200,
        heightAuto: true,
        icon: "success",
        title: "Your message has been sent",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (err) {
      console.log(err);
    }
    resetAll();
  };

  return (
    <div className="flex flex-col leading-10 justify-center items-center mt-14">
      <h1 className="text-5xl ">Contact Us</h1>
      <p className="select-all m-5 text-lg text-gray-500">
        Here you can Directly text me or you can use Social Apps
      </p>
      <hr className="w-[70%] text-indigo-700 bg-indigo-700 p-[.022em] mt-7" />
      <div className="flex justify-center items-center gap-5 mt-6">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/sepehrbeyranvand"
        >
          <i className="fa fa-github text-3xl mx-4 hover:scale-110 transition .4s ease-in-out duration-200 drop-shadow-xl"></i>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://telegram.me/its_SepehrB"
        >
          <i className="fa fa-telegram text-3xl text-sky-500 mx-4 hover:scale-110 transition .4s ease-in-out duration-200"></i>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/its.sepehrb/"
        >
          <i className="fa fa-instagram text-3xl text-red-500 mx-4 hover:scale-110 transition .4s ease-in-out duration-200"></i>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/sepehr-beyranvand-3516122aa/"
        >
          <i className="fa fa-linkedin text-3xl text-blue-700 mx-4 hover:scale-110 transition .4s ease-in-out duration-200"></i>
        </a>
      </div>
      <div className="mt-9">
        <form onSubmit={submitContact} className="flex gap-2">
          <div className="flex flex-col">
            <input
              className="bg-gray-100 outline-none rounded-sm w-[50vh] border border-1 border-neutral-300 p-[.3em] my-1 focus:ring-2 ring-offset-2 transition  .4s ease-in-out duration-200"
              placeholder="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="bg-gray-100 outline-none rounded-sm w-[50vh] border border-1 border-neutral-300 p-[.3em] my-1 focus:ring-2 ring-offset-2 transition  .4s ease-in-out duration-200"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="bg-gray-100 outline-none rounded-sm w-[50vh] border border-1 border-neutral-300 p-[.3em] my-1 focus:ring-2 ring-offset-2 transition  .4s ease-in-out duration-200"
              placeholder="Subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <div className="flex justify-center items-center">
              <button className="bg-green-600 rounded-md text-white p-[.4em] my-4 w-full hover:bg-green-700 transtion .4s ease-in-out duration-200">
                Send
              </button>
            </div>
          </div>
          <textarea
            className=" bg-neutral-200 outline-none w-[70vh] h-64 rounded-sm border border-1 border-neutral-300 p-[.5em] resize-none"
            placeholder="Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </form>
      </div>
    </div>
  );
}
