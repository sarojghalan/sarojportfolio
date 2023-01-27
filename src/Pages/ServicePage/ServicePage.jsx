import React, { useState, useEffect } from "react";
import TitleContent from "../../Provider/TitleContent/TitleContent";
import firebaseDb from ".././../FirebaseConfig";
import Skeleton from "@mui/material/Skeleton"; 
import Stack from "@mui/material/Stack";
import banner from "../../Assests/banner1.png";
import Swal from "sweetalert2";
import {
  setDoc,
  doc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { useSnackbar } from "notistack";

const ServicePage = () => {
  const [loading, setLoading] = useState(false);
  const [webServiceData, setWebServiceData] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const initialState = {
    customerName: "",
    customerCompanyName: "",
    customerCompanyEmail: "",
    customerCompanyNumber: "",
  };

  const [customerData, setCustomerData] = useState(initialState);

  useEffect(() => {
    setLoading(true);
    const q = query(collection(firebaseDb, "webservice"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const service = [];
      querySnapshot.forEach((doc) => {
        service.push(doc.data());
      });
      setWebServiceData(service);
    });
    setLoading(false);
  }, []);

  console.log("Web service : ", webServiceData);

  const customerDoc = doc(collection(firebaseDb, "customerInfo"));

  const handleChange = (e) => {
    e.preventDefault();
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  const closeModal = () => {
    document.querySelector("#close").click();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (
      customerData.customerName === "" &&
      customerData.customerCompanyEmail === "" &&
      customerData.customerCompanyNumber === "" &&
      customerData.customerCompanyName === ""
    ) {
      enqueueSnackbar("Empty Field detected in all !", { variant: "error" });
    } else if (customerData.customerName === "") {
      enqueueSnackbar("Your Name Field is Empty !", { variant: "error" });
    } else if (customerData.customerCompanyName === "") {
      enqueueSnackbar("Your Company Name Field is Empty  !", {
        variant: "error",
      });
    } else if (customerData.customerCompanyEmail === "") {
      enqueueSnackbar("Your Company Email Field is Empty !", {
        variant: "error",
      });
    } else if (customerData.customerCompanyNumber === "") {
      enqueueSnackbar("Your Company Number Field is Empty !", {
        variant: "error",
      });
    } else if (!regex.test(customerData.customerCompanyEmail)) {
      enqueueSnackbar("Opps ! Your provided email is not valid !", {
        variant: "error",
      });
    } else if (customerData.customerCompanyNumber.length > 10) {
      enqueueSnackbar("Opps ! Phone Number Length Exceeded !", { variant: "error" });
    } else {
      setDoc(customerDoc, { ...customerData, id: customerDoc.id })
        .then((res) => {
          closeModal();
          Swal.fire({
            title: "Thank You!",
            text: "You have submitted your proposal. You'll receive email soon.",
            icon: "success",
            confirmButtonText: "OK",
            timerProgressBar: true,
            timer: 5000,
          });
          setCustomerData(initialState);
        })
        .catch((err) => {
          enqueueSnackbar("Opps ! Error Occured While Submitting !", {
            variant: "error",
          });
        });
    }
  };

  return (
    <>
      <TitleContent heading="Web Services" />
      <div>
        {loading ? (
          <Stack spacing={1}>
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            <Skeleton variant="rectangular" width={210} height={400} />
          </Stack>
        ) : (
          webServiceData.map((get, keys) => {
            return (
              <>
                {keys % 2 == 0 ? (
                  <div className="service-card" key={keys}>
                    <div className="container">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="my-service-img ">
                            <img src={get.image} alt="" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="my-service-content">
                            <div className="main-sec-title">
                              <h4>
                                <span className="span-span">
                                  <i class="fa-solid fa-feather-pointed"></i>
                                </span>
                                {get?.title}
                              </h4>
                            </div>
                            <p>{get.description}</p>
                          </div>
                        </div>
                        <div className="col-md-1"></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="service-card main-1" key={keys}>
                    <div className="container">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <div className="my-service-content-1">
                            <div className="main-sec-title-2">
                              <h4>
                                <span className="span-span">
                                  <i class="fa-solid fa-feather-pointed"></i>
                                </span>
                                {get?.title}
                              </h4>
                            </div>
                            <p>{get.description}</p>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="my-service-img">
                            <img src={get.image} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            );
          })
        )}
      </div>
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="inspiration-main"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="saroj-g">
                <h3>Saroj G. : "Be The Change"</h3>
                <p>Bringing your business to the digital forefront.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="hire-me-btn">
                <button
                  className="button-main"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Hire Me
                </button>
              </div>
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog  modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Hire Me
                      </h5>
                      <button
                        id="close"
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div className="hire-form">
                        <div className="hire-input">
                          <label htmlFor="">Your Name : </label>
                          <br />
                          <input
                            type="text"
                            name="customerName"
                            value={customerData.customerName}
                            onChange={(e) => handleChange(e)}
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="hire-input">
                          <label htmlFor="">Company Name : </label>
                          <br />
                          <input
                            type="text"
                            name="customerCompanyName"
                            value={customerData.customerCompanyName}
                            onChange={(e) => handleChange(e)}
                            placeholder="Company Name"
                          />
                        </div>
                        <div className="hire-input">
                          <label htmlFor="">Company Email : </label>
                          <br />
                          <input
                            type="email"
                            name="customerCompanyEmail"
                            value={customerData.customerCompanyEmail}
                            onChange={(e) => handleChange(e)}
                            placeholder="Company Email"
                          />
                        </div>
                        <div className="hire-input">
                          <label htmlFor="">Company Phone Number : </label>
                          <br />
                          <input
                            type="number"
                            name="customerCompanyNumber"
                            value={customerData.customerCompanyNumber}
                            onChange={(e) => handleChange(e)}
                            placeholder="Company Number"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        onClick={(e) => submitHandler(e)}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
