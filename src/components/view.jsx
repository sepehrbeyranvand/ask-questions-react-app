import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { useParams } from "react-router-dom";

export default function View() {
  const [loading, setLoading] = useState(false);
  const [documents, setDocuments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const ref = doc(db, "first", id);
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
          <div key={index}>
            <h1>{e.title}</h1>
            <p>{e.describe}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
