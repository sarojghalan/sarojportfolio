import React, { useState, useEffect, useRef } from "react";
import firebaseDb from "../../FirebaseConfig";
import { collection, query, where, onSnapshot } from "firebase/firestore";

const AboutMe = () => {
  const image = useRef(null);
  const image1 = useRef(null);
  const [imageExists, setImageExists] = useState(false);
  const [imageExists1, setImageExists1] = useState(false);
  const [aboutMe, setAboutMe] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const q = query(collection(firebaseDb, "aboutme"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const service = [];
      querySnapshot.forEach((doc) => {
        service.push(doc.data());
      });
      setAboutMe(service);
    });
    setLoading(false);
  }, []);

  useEffect(() => {
    if (imageExists) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          image.current.classList.add(
            "animate__animated",
            "animate__backInLeft"
          );
          observer.disconnect();
        }
      });
      observer.observe(image.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [imageExists]);

  useEffect(() => {
    if (imageExists1) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          image1.current.classList.add(
            "animate__animated",
            "animate__backInRight"
          );
          observer.disconnect();
        }
      });
      observer.observe(image1.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [imageExists1]);

  return (
    <div className="main">
      <div className="container">
        <div className="main-title">
          <h3>{aboutMe[0]?.title}</h3>
        </div>
        <div className="about-me-content">
          <div className="row">
            <div className="col-md-6">
              <div
                ref={(el) => {
                  image.current = el;
                  setImageExists(true);
                }}
                className="about-me-img"
              >
                <img src={aboutMe[0]?.image} alt="" />
              </div>
            </div>
            <div className="col-md-5">
              <div
                ref={(el) => {
                  image1.current = el;
                  setImageExists1(true);
                }}
                className="about-me-description"
              >
                <p>" {aboutMe[0]?.description} "</p>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
