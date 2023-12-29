import React, {useState, useEffect} from 'react'
import Header from '../../Header/Header';
import { FaStar } from "react-icons/fa";
import './LaserHair.style.css';
import ReactSimplyCarousel from 'react-simply-carousel';
import { Link } from 'react-router-dom';
import { CgPlayStop } from "react-icons/cg";
import Footer from '../../Footer/Footer';


const data = [
    {
        id: 1,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH2svq-AYi-X-GfLgyLSrR83K8Rf_j9sin3w&usqp=CAU",   
    },
    {
        id: 2,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF_9nsuBRa_EOsN25TsgnAuNjNwvV6eW7AVw&usqp=CAU",   
    },
    {
        id: 3,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVlBAboEaGozTZzgPYMvHpAFUlyeDtJx6iGA&usqp=CAU",   
    },
]

function LaserHair() {

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
                        <h1>Laser Hair Removal</h1>
                    </div>
                    <div className='viewButtons'>
                        <button className='viewButton'>View Package</button>
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
                            <h2>Make Your Package</h2>
                        </div>
                        <div className='divi'>
                            <div className='smImage'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVUIYWqe3nKJQl04FGt_q75WytFrumRrDaBw&usqp=CAU' className='im' />
                            </div>
                            <div className='description'>
                                <div className='detSubTitle'>
                                    <h2>Make Your Package 1 session</h2>
                                </div>
                                <div className='ratings'>
                                    <p><FaStar />4.7 (10.6K reviews)</p>
                                </div>
                                <div className='charge'>
                                    <p>starts at $5</p>
                                </div>
                                <div className='subDescription'>
                                    <p><CgPlayStop />  Select body parts as per your need and create your package</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='divi'>
                            <div className='smImage'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN9BAe-VZ3iqOOd_4g9lY6tkUAK6KqkpCpFxeS2Ggcf2usOH7WbDhgKN8d86JckTtDUPs&usqp=CAU' className='im' />
                            </div>
                            <div className='description'>
                                <div className='detSubTitle'>
                                    <h2>Make Your Package 3 session</h2>
                                </div>
                                <div className='ratings'>
                                    <p><FaStar />4.4 (8.6K reviews)</p>
                                </div>
                                <div className='charge'>
                                    <p>starts at $8</p>
                                </div>
                                <div className='subDescription'>
                                    <p><CgPlayStop />  Select body parts as per your need and create your package</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='divi'>
                            <div className='smImage'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7K0IWJ0QkwcWvntbiSVG6kihIzfIE6pWGV9W4yZqGL1hP5OCmy5nS2TDUMQHRtUnsa7U&usqp=CAU' className='im' />
                            </div>
                            <div className='description'>
                                <div className='detSubTitle'>
                                    <h2>Make Your Package 6 session</h2>
                                </div>
                                <div className='ratings'>
                                    <p><FaStar />4.5 (7.6K reviews)</p>
                                </div>
                                <div className='charge'>
                                    <p>starts at $10</p>
                                </div>
                                <div className='subDescription'>
                                    <p><CgPlayStop />  Select body parts as per your need and create your package</p>
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

export default LaserHair