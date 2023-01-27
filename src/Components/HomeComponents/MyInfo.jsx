import React, { useState, useEffect } from "react";
import html from "../../Assests/htmlcss.jpg";
import react from "../../Assests/react.jpg";
import firebaseDb from "../../FirebaseConfig";
import javascript from "../../Assests/javascript.jpg";
import { collection, query, where, onSnapshot } from "firebase/firestore";

const MyInfo = () => {
  const [welcomeData, setWelcomeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [languageData, setLanguageData] = useState([]);

  useEffect(() => {
    setLoading(true);
    const q = query(collection(firebaseDb, "welcome"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const welcomeInfo = [];
      querySnapshot.forEach((doc) => {
        welcomeInfo.push(doc.data());
      });
      setWelcomeData(welcomeInfo);
    });
    setLoading(false);
  }, []);
  useEffect(() => {
    setLoading(true);
    const q = query(collection(firebaseDb, "language"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const languageInfo = [];
      querySnapshot.forEach((doc) => {
        languageInfo.push(doc.data());
      });
      setLanguageData(languageInfo);
    });
    setLoading(false);
  }, []);
  let reverseLanguageData = languageData?.reverse();
  return (
    <div className="main-1">
      <div className="container">
        <div className="welcome-div">
          <p>
            <span className="welcome-span"> Hi I'm Saroj Ghalan</span>
          </p>
          <p>{welcomeData[0]?.info}</p>
          <div className="row">
            {loading ? (
              <p>loading</p>
            ) : (
              reverseLanguageData.map((get, keys) => {
                return (
                  <div className="col-md-3">
                    <div className="card-skill">
                      <img src={get?.image} alt="" />
                      <p>{get?.title}</p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
