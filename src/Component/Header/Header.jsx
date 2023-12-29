import React, {useState} from "react";
import "./Header.style.css";
import { MdLocationOn } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import OpenModal from "../Login";


function Header() {

  const [showModal, setShowModal] = useState(false);
  return (
    <div className="mainCont">
      <div className="cont">
        <div className="content">
          <div className="brandLogo">
            <img
              className="logo"
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/images/supply/partner-training/1628575858610-5b0ae4.png"
              alt="UrbanClap"
            />
          </div>
          <div className="filter">
            <div className="locationFilter">
              <MdLocationOn className="icon-logo" />
              <input type="text" className="input" placeholder="Noida, India" />
            </div>
            <div className="productCategory">
              <FaSearch className="icon-logo" />
              <input type="text" className="input" placeholder="eg: Kitchen" />
            </div>
          </div>
        </div>
        <div className="login">
          <button className="buttonLogin" onClick={() => setShowModal(!showModal)}>Login</button>
        </div>
      </div>
      {showModal ? <OpenModal showModal = {showModal} setShowModal = {setShowModal} /> : ""}
    </div>
  );
}

export default Header;
