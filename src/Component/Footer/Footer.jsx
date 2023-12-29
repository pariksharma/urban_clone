import React from 'react';
import './Footer.style.css';
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className='footerMainCont'>
        <div className='footerCont'>
            <div className="brandLog">
                <img
                className=" "
                src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/images/supply/partner-training/1628575858610-5b0ae4.png"
                alt="UrbanClap"
                />
            </div>
            <div className='footerConte'>
                <div className='company'>
                    <div className='comHead'>
                        <h5>Company</h5>
                    </div>
                    <ul className='comDetail'>
                        <li>About Us</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Anti-discrimination Policy</li>
                        <li>UC impact</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className='ForCustomer'>
                    <div className='comHead'>
                        <h5>For customers</h5>
                    </div>
                    <ul className='comDetail'>
                        <li>UC reviews</li>
                        <li>Categories near you</li>
                        <li>Blog</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className='ForPartners'>
                    <div className='comHead'>
                        <h5>For partners</h5>
                    </div>
                    <ul className='comDetail'>
                        <li>Register as a professional</li>
                    </ul>
                </div>
                <div className='SocialLinks'>
                    <ul className='SocialLogo'>
                        <FaTwitter className='sLogo' />
                        <FaFacebookF className='sLogo' />
                        <FaInstagram className='sLogo' />
                        <FaLinkedin className='sLogo' />
                    </ul>
                    <div className='available'>
                        <img src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_108,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1648463870745-38fece.png' />
                        <img src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_108,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696419732772-28cd3d.jpeg' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer