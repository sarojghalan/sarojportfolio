import React, { useState, useEffect } from "react";
import firebaseDb from "../../FirebaseConfig";
import { collection, query, onSnapshot } from "firebase/firestore";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { imageListClasses } from "@mui/material";
import mountain from '../../Assests/mountain.png'
import house from '../../Assests/house.png';
import bird from '../../Assests/birds2.png';
import sun from '../../Assests/sun.png';

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
          <img className="master-banner-img" src={masterBanner[0]?.masterBanner} />
          <button>Get In Touch</button>
          <img className="house-img" src={house} alt="" />
          <img className="mountain-img" src={mountain} alt="" />
          <img className="sun-img" src={sun} alt="" />
          <img className="bird-img" src={bird} alt="" />
        </div>
      )}
    </>
  );
};

export default MasterBanner;
