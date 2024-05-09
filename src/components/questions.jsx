import { collection, getDocs, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { Link } from "react-router-dom";

export default function Questions() {
  const [items, setItems] = useState([]);
  const [switchHS, setSwitchHS] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
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
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center overflow-hidden items-center min-h-screen text-3xl text-blue-400 animate-spin">
        <i className="fa fa-refresh"></i>
      </div>
    );
  }

  return (
    <div>
      {switchHS && (
        <button
          className="text-xl float-right m-2"
          onClick={() => setSwitchHS(!switchHS)}
        >
          <i className="fa fa-eye"></i>
        </button>
      )}
      {!switchHS && (
        <button
          className="text-xl float-right m-2"
          onClick={() => setSwitchHS(!switchHS)}
        >
          <i className="fa fa-eye-slash"></i>
        </button>
      )}
      <div className="flex justify-evenly items-center flex-wrap gap-3 mt-3">
        {switchHS &&
          items.map((e, index) => (
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
                <Link type="button" to={`/view/${e.id}`} className="bg-neutral-200 block text-center rounded-md p-2 w-[30%] hover:bg-neutral-300 transition .4s ease-in-out duration-200">
                  View
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
