import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const divStyle = {
  backgroundSize: 'cover',
  backgroundPosition:'center',
  width:'100%',
  backgroundRepeat:'no-repeat',
}
const slideImages = [

  {
    url: 'https://res.cloudinary.com/ddivi7f83/image/upload/v1688554754/slide2_xpw6yl.webp',
    caption: 'Slide 2'
  },
  {
    url: 'https://res.cloudinary.com/ddivi7f83/image/upload/v1688554758/slide3_gt9s7s.webp',
    caption: 'Slide 3'
  },
  {
    url: 'https://res.cloudinary.com/ddivi7f83/image/upload/v1688554765/slide4_bkdunr.webp',
    caption: 'Slide 3'
  },
];

export default function Slideshow()  {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div className='slider--image' style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}