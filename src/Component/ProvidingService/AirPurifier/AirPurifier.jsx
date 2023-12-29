import React, {useState, useEffect} from 'react'
import Header from '../../Header/Header';
import { FaStar } from "react-icons/fa";
import './AirPurifier.style.css';
import ReactSimplyCarousel from 'react-simply-carousel';
import { Link } from 'react-router-dom';
import { CgPlayStop } from "react-icons/cg";
import Footer from '../../Footer/Footer';

const data = [
    {
        id: 1,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJEVeunjPHhEpRi7g_yeKYH_gaJ6Qj1r18fw&usqp=CAU",   
    },
    {
        id: 2,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJEVeunjPHhEpRi7g_yeKYH_gaJ6Qj1r18fw&usqp=CAU",   
    },
    {
        id: 3,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPTCqcs9gMBnYRWDt26J11me43trv78go8MSEqetq0paidlTKlCCvCC9n9h_6r6uertl4&usqp=CAU",   
    },
]

function AirPurifier() {

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
                        <h1>Air Purifier Service</h1>
                    </div>
                    <div className='rating'>
                        <h4><FaStar />4.87 (9K bookings)</h4>
                        <hr />
                    </div>
                    <div className='viewButtons'>
                        <button className='viewButton'>View Services</button>
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
                            <h2>Service</h2>
                        </div>
                        <div className='divi'>
                            <div className='description'>
                                <div className='detSubTitle'>
                                    <h2>Filter Cleaning Service</h2>
                                </div>
                                <div className='ratings'>
                                    <p><FaStar />4.87 (1K reviews)</p>
                                </div>
                                <div className='charge'>
                                    <p>$20 * 30 minutes</p>
                                </div>
                                <div className='subDescription'>
                                    <p><CgPlayStop />  Includes full cleaning of all filters</p>
                                    <p><CgPlayStop />  Recommended if your filter is less than 12 month old</p>
                                </div>
                            </div>
                            <div className='smImage'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxpLqAB7ZFiXYDVhAu2G2cGqlTesZA0g7iBA&usqp=CAU' className='im' />
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

export default AirPurifier