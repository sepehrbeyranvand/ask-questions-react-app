import { collection, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export default function Questions() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const ref = collection(db, "first");
    getDocs(ref).then((snapshot) => {
      if (snapshot.empty) {
        console.log("Error");
      } else {
        let result = [];
        snapshot.docs.forEach((doc) => {
          result.push({ id: doc.id, ...doc.data() });
        });
        setItems(result);
      }
    });
  }, []);
  return (
    <div className="flex justify-evenly items-center flex-wrap gap-3">
      {items.map((e, index) => (
        <div
          className="border border-1 border-fuchsia-700 p-5 flex flex-col rounded-md flex-wrap w-[80%]"
          key={index}
        >
          <div>
            <p className="text-3xl">Title: {e.title}</p>
            <p className="text-neutral-600">Tags: {e.tags}</p>
            <p className="text-neutral-600">Describe: {e.describe}</p>
          </div>
          <div className="mt-6">
            <button className="bg-neutral-200 rounded-md p-2 w-[30%] hover:bg-neutral-300 transition .4s ease-in-out duration-200">View</button>
          </div>
        </div>
      ))}
    </div>
  );
}
