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

  console.log("my skill : ", mySkill);

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

  const [modalTopic , setModelTopic] = useState("");
  const [modalDescription , setModalDescription] = useState("");

  const skillHandler = (e , description , skill,key) => {
    e.preventDefault();
    setModalDescription(description);
    setModelTopic(skill);
  };

  return (
    <>
      {/* <TitleContent heading="About Me" /> */}
      <AboutMe />
      <div className="container">
        <div className="main ">
          <div className="main-title">
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
                      data-bs-target={`#${get?.skill}`}
                      onClick={(e)=>skillHandler(e,get?.description,get?.skill,keys)}
                    >
                      {get?.skill}
                    </button>
                  </>
                );
              })}
            </Slider>
            {skillHandler && <div
              class="modal fade"
              id={modalTopic}
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content modal-dialog-centered">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      {modalTopic}
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">{setModalDescription}</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Ok
                    </button>
                  </div>
                </div>
              </div>
            </div>}
            <div className="slider-arrow slider-arrow-1">
              <ul>
                <li>
                  <p
                    className="slider-p"
                    onClick={() => slider?.current?.slickPrev()}
                  >
                    <span className="slider-span1">
                      <i class="fa-solid fa-circle-left"></i>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
