import React, {useState, useEffect} from 'react'
import Header from '../../Header/Header';
import { FaStar } from "react-icons/fa";
import './HomePainting.style.css';
import ReactSimplyCarousel from 'react-simply-carousel';
import { Link } from 'react-router-dom';
import { CgPlayStop } from "react-icons/cg";
import Footer from '../../Footer/Footer';

const data = [
    {
        id: 1,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwTAbV9AaDJmxA1ePWIbBXZEMq5b3xTfolCw&usqp=CAU",   
    },
    {
        id: 2,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLgsjj1hXUrgE4DdItzpwItSoMjEA5sLAk9w&usqp=CAU",   
    },
    {
        id: 3,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTneigmL5RJj_xlzFjsKpT_4fGJ4p2a0Zcew&usqp=CAU",   
    },
]

function HomePainting() {

    const [index, setindex] = useState([0]);
    const cardWidth = 300;
  
    useEffect(() => {
      const invalidId = setInterval(() => {
        setindex((prev) => {
          const nextv=prev.map(index=>(index +1) % data.length)
          return nextv
        });
      }, 3000);
      return () => clearInterval(invalidId);
    }, [data.length]);
    console.log(index);


  return (<div>   
        <div style={{position: 'absolute', top: 0}}>
            <Header />
        </div>
        <div className='mainConta'>
            <div className='conta'>
                <div className='serviceTitleDetail'>
                    <div className='ServiceHead'>
                        <h1>Home Paintings & service</h1>
                    </div>
                    <div className='viewButtons'>
                        <button className='viewButton'>View Service</button>
                    </div>
                </div>
            </div>
            <div className='allService'>
                <div className='serviceDetail'>
                    {index.map((dataindex,i) => {
                        // console.log(dataindex)
                        return (
                        <div className="contain" key={i}>
                            <div className="title">
                                <img src={data[dataindex].img} className='img1' />
                            </div>
                        </div>
                        );
                    })}
                </div>
                <div className='servicesDet'>
                    <hr />
                    <div className='DetailCont'>
                        <div className='detTitle'>
                            <h2>Home Painting</h2>
                        </div>
                        <div className='divi'>
                            <div className='smImage'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7K0IWJ0QkwcWvntbiSVG6kihIzfIE6pWGV9W4yZqGL1hP5OCmy5nS2TDUMQHRtUnsa7U&usqp=CAU' className='im' />
                            </div>
                            <div className='description'>
                                <div className='detSubTitle'>
                                    <h2>Painting & Waterproofing</h2>
                                </div>
                                <div className='ratings'>
                                    <p><FaStar />4.7 (17.6K reviews)</p>
                                </div>
                                <div className='charge'>
                                    <p>starts at $5</p>
                                </div>
                                <div className='subDescription'>
                                    <p><CgPlayStop />  Final Paintingcost to be paid, onlyafter you are satisfied</p>
                                    <p><CgPlayStop />  INR 99 is for expert consult, scoping, quote, and plan.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default HomePainting