import React from 'react'

//components
import TrendingProduct from '../TrendingProduct';
import t1 from '../../assests/trending-1.webp';
import t2 from '../../assests/trending-2.webp';
import t3 from '../../assests/trending-3.webp';
import t4 from '../../assests/trending-4.webp';
import t5 from '../../assests/trending-5.webp';
import t6 from '../../assests/trending-6.webp';
import t7 from '../../assests/trending-7.webp';

//icons 
import { IoIosArrowBack,IoIosArrowForward } from 'react-icons/io';


const HomeSection2 = () => {


  const [isClicked,setIsClicked] = React.useState(false);
  const slideRef = React.useRef();
  React.useEffect(()=>{
    const handleDrag = (event) =>{
      if(slideRef.current.contains(event.target) && isClicked)
      {
        slideRef.current.scrollLeft -= event.movementX;
      }
    }

    document.addEventListener('mousemove',handleDrag);

    return ()=>{
      document.removeEventListener('mousemove',handleDrag);
    }
  })


  return (
    <div className='home-section-2'>

      <h1 className='trend-title'>Trending Products</h1>

        <div className='arrow-cont'>< IoIosArrowBack size={30}/></div>
        <div ref={slideRef} className='wrapper'
        onMouseDown={()=>setIsClicked(true)}
        onMouseUp={()=>setIsClicked(false)}
        >
            
           <TrendingProduct img={t1} />
           <TrendingProduct img={t2} />
           <TrendingProduct img={t3} />
           <TrendingProduct img={t4} />
           <TrendingProduct img={t5} />
           <TrendingProduct img={t6} />
           <TrendingProduct img={t7} />


        </div>
        <div className='arrow-cont'>< IoIosArrowForward size={30}/></div>

    </div>
  )
}

export default HomeSection2