import React, { useState, useEffect } from "react";
import firebaseDb from "../../FirebaseConfig";
import { collection, query, onSnapshot } from "firebase/firestore";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { imageListClasses } from "@mui/material";

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
          <img src={masterBanner[0]?.masterBanner} alt="master banner" />
          <button>Get In Touch</button>
        </div>
      )}
    </>
  );
};

export default MasterBanner;
