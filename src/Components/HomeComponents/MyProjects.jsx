import React, { useState, useEffect, useRef } from "react";
import firebaseDb from "../../FirebaseConfig";
import Slider from "react-slick";
import slickNext from "react-slick";
import "slick-carousel/slick/slick.css";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import "slick-carousel/slick/slick-theme.css";
import { collection, query, onSnapshot } from "firebase/firestore";

const MyProjects = () => {
  const slider = useRef(null);
  const [myProjectData, setMyProjectData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const q = query(collection(firebaseDb, "myproject"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const project = [];
      querySnapshot.forEach((doc) => {
        project.push(doc.data());
      });
      setMyProjectData(project);
    });
    setLoading(false);
  }, []);

  console.log("My Projects : ", myProjectData);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="main ">
      <div className="container">
        <div className="main-title">
          <h3>Welcome To My Recent Works</h3>
        </div>
        {loading ? (
          <Stack spacing={1}>
            <Skeleton variant="rectangular" height={500} />
          </Stack>
        ) : (
          <div className="myproject-content">
            <Slider ref={slider} {...settings}>
              {myProjectData.map((get, keys) => {
                return (
                  <>
                    <div className="project-slider" key={keys}>
                      <a target="_blank" href={get.link}>
                        <img className="project-img" src={get.image} alt="" />
                      </a>
                    </div>
                    <div className="project-title"><span><i class="fa-solid fa-fire-flame-curved"></i></span>{get.title}<span><i class="fa-solid fa-fire-flame-curved"></i></span></div>
                  </>
                );
              })}
            </Slider>
            <div className="slider-arrow">
              <ul>
                <li>
                  <p className="slider-p" onClick={() => slider?.current?.slickPrev()}>
                    <span className="slider-span1">
                      <i class="fa-solid fa-circle-left"></i>
                    </span>
                    Prev
                  </p>
                </li>
                <li>
                  <p className="slider-p" onClick={() => slider?.current?.slickNext()}>
                    Next{" "}
                    <span className="slider-span2">
                    <i class="fa-solid fa-circle-right"></i>
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProjects;
