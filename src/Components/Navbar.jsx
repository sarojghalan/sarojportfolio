import React, { useState, useEffect } from "react";
import firebaseDb from "../FirebaseConfig";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const Navbar = () => {
  const [navbarListData, setNavbarListData] = useState([]);
  const [mySkill, setMySkill] = useState([]);
  const [loading, setLoading] = useState(false);
  const [skillLoader, setSkillLoader] = useState(false);

  useEffect(() => {
    setLoading(true);
    const q = query(collection(firebaseDb, "navbarlist"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const navbarList = [];
      querySnapshot.forEach((doc) => {
        navbarList.push(doc.data());
      });
      setNavbarListData(navbarList);
    });
    setLoading(false);
  }, []);

  useEffect(() => {
    setSkillLoader(true);
    const q = query(collection(firebaseDb, "myskill"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const skill = [];
      querySnapshot.forEach((doc) => {
        skill.push(doc.data());
      });
      setMySkill(skill);
      setSkillLoader(false);
    });
  }, []);

  const navbarCss = navbarListData.map((get, keys) => {
    if (get.id == "YrPd2sVMNDb7QMEuBJmm") {
      return (
        <>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {get.title}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              { 
                mySkill.map((get, keys) => {
                  return (
                    <li>
                      <p class="dropdown-item">
                        {get.skill}
                      </p>
                    </li>
                  );
                })
              }
            </ul>
          </li>
        </>
      );
    } else {
      return (
        <li class="nav-item">
          <a class="nav-link" href="#">
            {get.title}
          </a>
        </li>
      );
    }
  });

  console.log("navbar list data are : ", mySkill);

  return (
    <div className="main-navbar">
      <div className="container-fluid">
        <div className="container">
          <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                Saroj G.
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon">
                  <i class="fa-solid fa-bars"></i>
                </span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  {loading ? <p>loading</p> : navbarCss}
                </ul>
                <p className="d-flex">
                  <span>
                    <i class="fa-solid fa-envelope"></i>
                  </span>
                  codewithsaroj@gmail.com
                </p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
