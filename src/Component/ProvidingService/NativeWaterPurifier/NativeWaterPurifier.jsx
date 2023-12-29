import React, {useState, useEffect} from 'react'
import Header from '../../Header/Header';
import { FaStar } from "react-icons/fa";
import './NativeWaterPurifier.style.css';
import ReactSimplyCarousel from 'react-simply-carousel';
import { Link } from 'react-router-dom';
import { CgPlayStop } from "react-icons/cg";
import Footer from '../../Footer/Footer';

const data = [
    {
        id: 1,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOKPJPxSeXHSKIfmM-XyvemiPFvwDd360XJA&usqp=CAU",   
    },
    {
        id: 2,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_L8sNhHcoFZ2QyrTsikXEgAhB09_2-rwGmg&usqp=CAU",   
    },
    {
        id: 3,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsvsU-hOHajiHLztQY8ZGJQO8v61pDzVZjwQ&usqp=CAU",   
    },
    {
        id: 4,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHtG8qXOcqPg0R8fcfV6TsYsnWm7WILVLhAw&usqp=CAU",
    }
]

function NativeWaterPurifier() {

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
                        <h1>Native Water Purifier</h1>
                    </div>
                    <div className='rating'>
                        <h4><FaStar />4.84 (8K bookings)</h4>
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
                            <div className='smImage'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAO2QzscUlwKi0ZS4F5xuum7IUW98dvChziQ&usqp=CAU' className='im' />
                            </div>
                            <div className='description'>
                                <div className='detSubTitle'>
                                    <h2>Filter Cleaning Service</h2>
                                </div>
                                <div className='ratings'>
                                    <p><FaStar />4.87 (1K reviews)</p>
                                </div>
                                <div className='charge'>
                                    <p>$29 * 30 minutes</p>
                                </div>
                                <div className='subDescription'>
                                    <p><CgPlayStop />  9 stages water purification</p>
                                    <p><CgPlayStop />  2-year unconditionally warrenty</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='divi'>
                            <div className='smImage'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfsqK-dFCHV6PtBwiCO7Y7a-ah--3Pu7X7uQ&usqp=CAU' className='im' />
                            </div>
                            <div className='description'>
                                <div className='detSubTitle'>
                                    <h2>Cleaning Service</h2>
                                </div>
                                <div className='ratings'>
                                    <p><FaStar />4.87 (1K reviews)</p>
                                </div>
                                <div className='charge'>
                                    <p>$31 * 60 minutes</p>
                                </div>
                                <div className='subDescription'>
                                    <p><CgPlayStop />  9 stages water purification</p>
                                    <p><CgPlayStop />  2-year unconditionally warrenty</p>
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

export default NativeWaterPurifier