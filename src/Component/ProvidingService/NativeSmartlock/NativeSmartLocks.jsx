import React, {useState, useEffect} from 'react'
import Header from '../../Header/Header';
import { FaStar } from "react-icons/fa";
import './NativeSmartLocks.style.css';
import ReactSimplyCarousel from 'react-simply-carousel';
import { Link } from 'react-router-dom';
import { CgPlayStop } from "react-icons/cg";
import Footer from '../../Footer/Footer';

const data = [
    {
        id: 1,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIPRvB7OV4O6Jss5ESNb4KPci-IECZlh664Q&usqp=CAU",   
    },
    {
        id: 2,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAsJA0GoOJXrvQadMRMARtHQcCHw8krhk6jA&usqp=CAU",   
    },
    {
        id: 3,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRltrZFlHe_YCyZyBoAa9UBChe5vv3FC7G-SFAQKUXly_8JiKcnpabjYx5Qgpo4nIMcmyo&usqp=CAU",   
    },
]

function NativeSmartLock() {

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
                        <h1>Native Smart Locks</h1>
                    </div>
                    <div className='rating'>
                        <h4><FaStar />4.01 (4.5k bookings)</h4>
                        <hr />
                    </div>
                    <div className='viewButtons'>
                        <button className='viewButton'>View Products</button>
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
                            <h2>Products</h2>
                        </div>
                        <div className='divi'>
                            <div className='smImage'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdYRwWRkC_IwYhawxo07cjeMODp8ZE7BtRRg&usqp=CAU' className='im' />
                            </div>
                            <div className='description'>
                                <div className='detSubTitle'>
                                    <h2>Native L1 - 5 Way Unlock</h2>
                                </div>
                                <div className='ratings'>
                                    <p><FaStar />4.87 (1K reviews)</p>
                                </div>
                                <div className='charge'>
                                    <p>$40</p>
                                </div>
                                <div className='subDescription'>
                                    <p><CgPlayStop />  Unlock in 5 ways via App, card, fingerprint, passcode & key</p>
                                    <p><CgPlayStop />  99% Accuracy</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='divi'>
                            <div className='smImage'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7V4RMmcf8Tr4dxW2cT74LQ_pXVq0pZgGHQQ&usqp=CAU' className='im' />
                            </div>
                            <div className='description'>
                                <div className='detSubTitle'>
                                    <h2>Native L3 - 2 Way Unlock</h2>
                                </div>
                                <div className='charge'>
                                    <p>$35</p>
                                </div>
                                <div className='subDescription'>
                                    <p><CgPlayStop />  Unlock in 4 ways via card, fingerprint, passcode & key</p>
                                    <p><CgPlayStop />  99% accurate fingerprint from FPC, sweden</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='divi'>
                            <div className='smImage'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuPxlTzzP8kgU0UHADszosaRXFz2r5qS6kmA&usqp=CAU' className='im' />
                            </div>
                            <div className='description'>
                                <div className='detSubTitle'>
                                    <h2>Native A1 - 4 Way Unlock</h2>
                                </div>
                                <div className='charge'>
                                    <p>$33</p>
                                </div>
                                <div className='subDescription'>
                                    <p><CgPlayStop />  Renter Friendly</p>
                                    <p><CgPlayStop />  fingerprint recoginition</p>
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

export default NativeSmartLock