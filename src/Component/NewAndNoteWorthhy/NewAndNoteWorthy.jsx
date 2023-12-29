import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import { Link } from 'react-router-dom';
import './NewAndNoteWorthy.style.css'

const S_data = [
    {
        id: 1,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjhAa6k3Fo4MJfL_3Dva5uatVngVwahMsb6Q&usqp=CAU",
        title:  "Air Prifier Service", 
    },
    {
        id: 2,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyFwM3lqFFPnV5pTQr8xyW9ws-qP4jZCUpuQYXqiUcL8LSuxb0B6aFVEmbc2rJHsSnoBk&usqp=CAU",
        title:  "Native Water Prifier",   
    },
    {
        id: 3,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStiuCnufbf5SpG1Bxo063n1ZtlQEzTMKRVPQ&usqp=CAU",
        title:  "Native Smart Locks",   
    },
    {
        id: 4,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsMIXnrdmu0IXSkcGeGsAfSgE8HjRfevGGQg&usqp=CAU",
        title:  "Home Painting",   
    },
    {
        id: 5,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO3_fObLsNncyu-eqd1HZNZ7Z6y0RbcwLCgA&usqp=CAU",
        title:  "Laser Hair Reduction",   
    },
    {
        id: 6,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_cAPf-VrSD91e5OnaTHzXcS8JBue4Q10NGg&usqp=CAU",   
        title:  "Spa Ayurveda",
    },
    {
        id: 7,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4cYHoICVmeA9F-XBATa3ekiubRf6biBzGIA&usqp=CAU",  
        title:  "Hair Studio for Women", 
    },
    {
        id: 8,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuhBINrFly4_xwIG5fk7x9Ldnjr8BnuKqkaA&usqp=CAU",
        title:  "AC Service & Repair",

    }
]

function NewAndNoteWorthhy() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div style={{marginTop: '20px'}}>
        <div className='serviceHeading1'>
            <h1>New and NoteWorthy</h1>
        </div>
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
            itemsToShow: 5,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={800}
        easing="linear"
        
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        {S_data.map((item, i) => {
            return <Link to={"/ServicePRoviding/" + item.id} >
                <div key={i} style={{margin: '10px'}}>
                    <img src={item.img} style={{ width: '230px', height: '300px', borderRadius: '10px'}} />
                    <p style={{ color: 'rgba(0, 0, 0, 0.75)', fontSize: '18px'}}>{item.title}</p>
                </div>
            </Link>
        })}
        
      </ReactSimplyCarousel>
    </div>
  );
}

export default NewAndNoteWorthhy;
export {S_data}