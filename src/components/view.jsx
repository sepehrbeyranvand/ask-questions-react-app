import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { useParams } from "react-router-dom";
import LeaveComment from "./leaveComment";

export default function View() {
  const [loading, setLoading] = useState(false);
  const [documents, setDocuments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const ref = doc(db, "questions", id);
    onSnapshot(ref, (snapshot) => {
      setDocuments([snapshot.data()]);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-3xl overflow-hidden text-blue-400 animate-spin">
        <i className="fa fa-refresh overflow-hidden"></i>
      </div>
    );
  }

  return (
    <div>
      <div>
        {documents.map((e, index) => (
          <div
            className="flex flex-col justify-center items-center gap-10 mt-20"
            key={index}
          >
            <h1 className="text-center text-3xl my-13 leading-6 font-light text-indigo-400">
              Subject: {e.title}
            </h1>
            <p className="text-sm text-gray-400 font-light">Tags: {e.tags}</p>
            <div className=" border border-1 border-fuchsia-800 p-5 rounded-md w-[60%] h-64 overflow-y-scroll">
              <p className=" text-cyan-600 text-lg">{e.describe}<br/></p>
            </div>
            <hr className="w-[70%] mt-8" />
          </div>
        ))}
        <LeaveComment />
      </div>
    </div>
  );
}
