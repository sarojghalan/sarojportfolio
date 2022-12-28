import React, { useState, useEffect } from "react";
import firebaseDb from "../FirebaseConfig";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { collection, query, where, onSnapshot } from "firebase/firestore";

const Navbar = () => {
  const [navbarListData, setNavbarListData] = useState([]);
  const [loading, setLoading] = useState(false);

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

  console.log("navbar list data are : ", navbarListData);

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
                  {loading
                    ? <p>loading</p>
                    : navbarListData.map((get, keys) => {
                        return <li class="nav-item">{get.title}</li>;
                      })}
                </ul>
                <p className="d-flex"><span><i class="fa-solid fa-envelope"></i></span>codewithsaroj@gmail.com</p>
                {/* <form class="d-flex">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
