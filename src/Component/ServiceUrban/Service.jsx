import React from "react";
import './Service.style.css';
import { Link, Outlet } from "react-router-dom";

const serviceData = [
    {
        image: "https://tse1.mm.bing.net/th?id=OIP.tEgckVA_MW7VeSPjqfZ5NAHaE7&pid=Api&rs=1&c=1&qlt=95&w=174&h=115",
        title: "Women's saloon",
        id: 1
    },
    {
        image: "https://tse1.mm.bing.net/th?id=OIP.L5FFEt36ABgv9PLOHni_sAHaEo&pid=Api&rs=1&c=1&qlt=95&w=174&h=108",
        title: "Men's saloon",
        id: 2
    },
    {
        image: "https://tse4.mm.bing.net/th?id=OIP.3Du8kWjqoeBeif30r1tRgAHaE8&pid=Api&P=0&h=180",
        title: "AC Repair",
        id: 3
    },
    {
        image: "https://tse3.mm.bing.net/th?id=OIP.EVXnETITAYulMvmxoYQyUAHaId&pid=Api&P=0&h=180 ",
        title: "Cleaning and Pest",
        id: 4
    },
    {
        image: "https://tse4.mm.bing.net/th?id=OIP.fzNIKvLPBOAX__V17EYgqgHaE8&pid=Api&P=0&h=180",
        title: "Electrincian and Plumber",
        id: 5
    },
    {
        image: "https://tse2.mm.bing.net/th?id=OIP.6xwlWbvnH3sVP0dLobdYNwHaE8&pid=Api&P=0&h=180",
        title: "Painting and Water Proof",
        id: 6
    },
]

const ServiceUrban = () => {
    return <div className="serviceMain"> 
        <div className="serviceContainer">
            <div className="serviceContent">
                <div className="serviceheading">
                    <h1>Home services at your doorstep</h1>
                </div>
                <div className="serviceSubContainer">
                    <div className="serviceSubHeading">
                        <h4>What are you looking for?</h4>
                    </div>
                    <div className="services">
                        {serviceData.map((item, i) => {
                            return (
                                <Link to = {"/" + item.id}>
                                    <div className="service" key={i}>
                                        <img src={item.image} style={{width: "125px", height: "80px"}} />
                                        <p>{item.title}</p>
                                    </div>
                                </Link>
                            )
                        })}
                        <Outlet />
                    </div>
                <hr className="horizontalBar" />
                <div className="Products">
                    <p>Our Products</p>
                    <img className="produtImage1" src="https://tse1.mm.bing.net/th?id=OIP.dI1FncZ8FrtnPT7jtBu0bQHaF7&pid=Api&P=0&h=180" />
                </div>
                </div>
            </div>
            <div className="serviceImage">
                <div className="imageService">
                    <img className="img12" src="https://tse1.mm.bing.net/th?id=OIP.E-0QJjoU8wfciEQS13tu3AHaE4&pid=Api&P=0&h=180" />
                    <img className="img12" src="https://tse1.mm.bing.net/th?id=OIP.SiGG45JE_q0XQHMGucTYrwHaHb&pid=Api&P=0&h=180" />
                </div>
            </div>
        </div>
    </div>
}

export default ServiceUrban
export {serviceData}