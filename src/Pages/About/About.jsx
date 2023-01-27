import React, { useEffect, useState, useRef } from "react";
import TitleContent from "../../Provider/TitleContent/TitleContent";
import firebaseDb from "../../FirebaseConfig";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import AboutMe from "../../Components/HomeComponents/AboutMe";
import "slick-carousel/slick/slick.css";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const slider = useRef(null);
  const [mySkill, setMySkill] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const q = query(collection(firebaseDb, "myskill"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const skill = [];
      querySnapshot.forEach((doc) => {
        skill.push(doc.data());
      });
      setMySkill(skill);
    });
    setLoading(false);
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 920,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [id, setID] = useState("");
  const [modalTopic, setModelTopic] = useState("");
  const [modalDescription, setModalDescription] = useState("");

  const skillHandler = (e, description, skill, key) => {
    e.preventDefault();
    setModalDescription(description);
    setModelTopic(skill);
    setID(key);
  };

  //   const [skillDescription , setSkillDescription] = useState("");

  //   useEffect(() => {
  //     setSkillDescription(modalDescription)
  //   },[modalDescription])

  console.log("ID : ", id);
  console.log("modal topic : ", modalTopic);
  console.log("modal description : ", modalDescription);

  return (
    <>
      {/* <TitleContent heading="About Me" /> */}
      <AboutMe />
      <div className="about-back">
        <div className="container">
          <div className="main ">
            <div className="main-title" id="skill">
              <h3>My Skills</h3>
            </div>
            <div className="about-slider">
              <Slider ref={slider} {...settings}>
                {mySkill.map((get, keys) => {
                  return (
                    <>
                      <button
                        className="button-main"
                        data-bs-toggle="modal"
                        data-bs-target={`#a${keys}`}
                        onClick={(e) =>
                          skillHandler(e, get?.description, get?.skill, keys)
                        }
                      >
                        <span><i class="fa-solid fa-fire-flame-curved"></i></span>{get?.skill}<span><i class="fa-solid fa-fire-flame-curved"></i></span>
                      </button>
                    </>
                  );
                })}
              </Slider>
              <div className="slider-arrow slider-arrow-1">
                <ul>
                  <li>
                    <p
                      className="slider-p"
                      onClick={() => slider?.current?.slickPrev()}
                    >
                      <span className="slider-span1">
                        <i className="fa-solid fa-circle-left"></i>
                      </span>
                      Prev
                    </p>
                  </li>
                  <li>
                    <p
                      className="slider-p"
                      onClick={() => slider?.current?.slickNext()}
                    >
                      Next{" "}
                      <span className="slider-span2">
                        <i class="fa-solid fa-circle-right"></i>
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
              
              <div className="project-title"><span><i class="fa-solid fa-fire-flame-curved"></i></span>Double click to know more about my skill<span><i class="fa-solid fa-fire-flame-curved"></i></span></div>

            </div>
          </div>
          {skillHandler && (
            <div
              className="modal fade"
              id={`a${id}`}
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content modal-dialog-centered">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      {modalTopic}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">{modalDescription}</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Ok
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default About;
