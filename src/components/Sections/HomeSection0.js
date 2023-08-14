import React from 'react'

import Lottie from 'lottie-react';
import deliveryAnimation from '../../assests/delivery.json';
const HomeSection0 = () => {

  const [intersecting,setInterSecting] = React.useState(false);

  const textParentRef = React.useRef();

  const titleRef = React.useRef();
  const mainRef = React.useRef();
  const createRef = React.useRef();
  const shopRef = React.useRef();
  const deliveryRef = React.useRef()

  const animateText = ()=>{

     titleRef.current.classList.add('show-text');
     deliveryRef.current.classList.add('show-animation')
    setTimeout(()=>{
      mainRef.current.classList.add('show-text');

    },500)

    setTimeout(()=>{
      createRef.current.classList.add('show-text');
    },1100)

    setTimeout(()=>{
      shopRef.current.classList.add('show-text');
    },1100)
    setTimeout(()=>{
     createRef.current.classList.remove('show-text')
     createRef.current.classList.add('regular-trans')
    },2100)
  }


  const observer = new IntersectionObserver((entries)=>{
      if(entries[0].isIntersecting)
      {
        animateText()
        setInterSecting(true)
      }
    },{threshold:0.7})

  React.useEffect(()=>{
    observer.observe(textParentRef.current);
    return (()=>{
      observer.dissconnect();
    })
  },[])

  return (
    <div className='home-section-0'>
      <div className='section-elem'>
      <div ref={textParentRef} className='text'>

                    <div ref={titleRef} className='title'>Premiuim Quality</div>
                    <div ref={mainRef} className='main'>Perfect Delivery right on time </div>
                    <button ref={createRef} className='create-account-btn'>Create account</button>
                    <div ref={shopRef} className='shop'>And start shopping now . . . . .</div>
            </div>
      </div >

      <div ref={deliveryRef} className='section-elem'><Lottie  style={intersecting ? {transform:'unset'}:{}} className='delivery-animation' animationData={deliveryAnimation}/></div>
    </div>
  )
}

export default HomeSection0