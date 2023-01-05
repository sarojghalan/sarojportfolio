import React, { useState, useEffect } from "react";
import firebaseDb from "../../FirebaseConfig";
import { collection, query, onSnapshot } from "firebase/firestore";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { imageListClasses } from "@mui/material";
import mountain from "../../Assests/mountain.png";
import house from "../../Assests/house.png";
import bird from "../../Assests/birds2.png";
import sun from "../../Assests/sun.png";
import bulb from "../../Assests/bulb.png";

const MasterBanner = () => {
  const [masterBanner, setMasterBanner] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const q = query(collection(firebaseDb, "masterBanner"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const banner = [];
      querySnapshot.forEach((doc) => {
        banner.push(doc.data());
      });
      setMasterBanner(banner);
    });
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="rectangular" height={500} />
        </Stack>
      ) : (
        <div className="master-banner" id="overlay">
          <img
            className="master-banner-img"
            src={masterBanner[0]?.masterBanner}
          />
          <button>See My Works</button>
          {/* <img className="house-img" src={house} alt="" /> */}
          <img className="mountain-img" src={mountain} alt="" />
          <img className="sun-img" src={sun} alt="" />
          <img className="bird-img" src={bird} alt="" />
          <div className="master-banner-content">
            <div className="container">
            <div className="saroj-info">
              <h3>Saroj G.</h3>
              <h4>Do You Have an <span className="banner-span">IDEA</span> ?</h4>
              <h5>I Can <span className="banner-span">BUILD</span> It .</h5>
            </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MasterBanner;
