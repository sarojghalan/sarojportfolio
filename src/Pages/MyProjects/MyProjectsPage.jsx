import React, { useState, useEffect } from "react";
import TitleContent from "../../Provider/TitleContent/TitleContent";
import firebaseDb from "../../FirebaseConfig";
import { collection, query, onSnapshot } from "firebase/firestore";

const MyProjectsPage = () => {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const q = query(collection(firebaseDb, "myproject"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const project = [];
      querySnapshot.forEach((doc) => {
        project.push(doc.data());
      });
      setProjectData(project);
    });
    setLoading(false);
  }, []);

  console.log("Project Data are : ", projectData);

  return (
    <>
      <TitleContent heading="My Works" />
      <div className="project-main">
        <div className="container">
          {loading ? (
            <p>Loading ....</p>
          ) : (
            projectData.map((get, keys) => {
              return (
                <>
                  {keys % 2 == 0 ? (
                    <div className="service-card">
                      <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="service-card main1">
                    <div className="row">
                      <div className="col-md-6"></div>
                      <div className="col-md-6"></div>
                    </div>
                    </div>
                  )}
                </>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default MyProjectsPage;
