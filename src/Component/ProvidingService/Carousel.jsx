import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import { Link } from 'react-router-dom';

const data = [
    {
        id: 1,
        img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1678454437383-aa4984.jpeg",   
    },
    {
        id: 2,
        img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1693574670466-aba837.jpeg",   
    },
    {
        id: 3,
        img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1701759875987-8b654d.jpeg",   
    },
    {
        id: 4,
        img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1681110360042-dcfde0.jpeg",   
    },
    {
        id: 5,
        img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1678463309015-2b92d2.jpeg",   
    },
    {
        id: 6,
        img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1700674974377-9026ac.jpeg",   
    },
    {
        id: 7,
        img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1699859892789-978a14.jpeg",   
    },
    {
        id: 8,
        img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1702908121709-671a23.jpeg",   
    }
]

function Carousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'rgba(0, 0, 0, 0.25)',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
            margin: '10px'
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'rgba(0, 0, 0, 0.25)',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
            margin: '10px'
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 3,
            itemsToScroll: 3,
            minWidth: 768,
          },
        ]}
        speed={1500}
        easing="linear"
        
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        {data.map((item, i) => {
            return <Link to={"/" + item.id} >
                <div key={i} style={{margin: '10px'}}>
                    <img src={item.img} style={{borderRadius: '10px'}} />
                </div>
            </Link>
        })}
        
      </ReactSimplyCarousel>
    </div>
  );
}

export default Carousel;