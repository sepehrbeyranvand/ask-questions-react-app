import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { useParams } from "react-router-dom";

export default function Comments() {
  const [cms, setCms] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const ref = collection(db, "comments");
    getDocs(ref).then((snapshot) => {
      let comments = [];
      snapshot.docs.forEach((doc) => {
        comments.push({ id: doc.id, ...doc.data() });
      });
      if (snapshot.empty) {
        console.log("Error! Snapshot is empty");
      } else {
        setCms(comments);
      }
    });
  });
  return (
    <div className="flex flex-col gap-y-3">
      {cms.map((e, index) => (
        <>
          {id === e.id ? (
            <div
              key={index}
              className="border border-1 border-cyan-700 p-5 flex flex-col gap-y-4"
            >
              <p className="text-lg font-semibold font-sans">Name: {e.name}</p>
              <p className="text-gray-400">Date: {e.date}</p>
              <div className="flex justify-center items-center m-y-5">
                <hr className="w-[50%]" />
              </div>
              <p className=" font-mono p-2">Description: {e.comment}</p>
            </div>
          ) : (
            ""
          )}
        </>
      ))}
    </div>
  );
}
