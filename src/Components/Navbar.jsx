import React, { useState, useEffect } from "react";
import firebaseDb from "../FirebaseConfig";
import logo from "../Assests/logosaroj.png";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [navbarListData, setNavbarListData] = useState([]);
  const [mySkill, setMySkill] = useState([]);
  const [myService, setMyService] = useState([]);
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
    });
    setSkillLoader(false);
  }, []);

  useEffect(() => {
    const q = query(collection(firebaseDb, "myservice"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const service = [];
      querySnapshot.forEach((doc) => {
        service.push(doc.data());
      });
      setMyService(service);
    });
  }, []);

  const navbarCss = navbarListData.map((get, keys) => {
    if (get.id == "YrPd2sVMNDb7QMEuBJmm") {
      return (
        <>
          <li className="nav-item dropdown" key={keys}>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {get.title}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {mySkill.map((get, keys) => {
                return (
                  <li key={keys}>
                    <p className="dropdown-item">
                      <span className="span-span">
                        <i class="fa-solid fa-feather-pointed"></i>
                      </span>
                      {get.skill}
                    </p>
                  </li>
                );
              })}
            </ul>
          </li>
        </>
      );
    } else if (get.id == "64WPvgzSwOnwPixS0Z28") {
      return (
        <>
          <li className="nav-item dropdown" key={keys}>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {get.title}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {myService.map((get, keys) => {
                return (
                  <li key={keys}>
                    <p className="dropdown-item-1">
                      <span className="span-span">
                        <i class="fa-solid fa-feather-pointed"></i>
                      </span>
                      {get.title}
                    </p>
                    <p className="dropdown-sub-list">{get.description_title}</p>
                  </li>
                );
              })}
            </ul>
          </li>
        </>
      );
    } else {
      return (
        <li className="nav-item" key={keys}>
          {get.id == "5y41csy64oWqYHLHEeFa" ? (
            <NavLink className="nav-link" to="/about_me">{get.title}</NavLink>
          ) : get.id== "fMGmnDck4PQPuNUG2Evj" && (
            <NavLink className="nav-link" to="my_projects">{get.title}</NavLink>
          )}
        </li>
      );
    }
  });

  return (
    <div className="main-navbar">
      <div className="container-fluid">
        <div className="container">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="/">
                <img className="logo" src={logo} alt="" />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                  <i className="fa-solid fa-bars"></i>
                </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {loading ? <p>loading</p> : navbarCss}
                </ul>
                <p className="d-flex">
                  <span>
                    <i className="fa-solid fa-envelope"></i>
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
