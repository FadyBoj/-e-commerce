import React from 'react'

//icons
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { AiTwotoneStar } from 'react-icons/ai';


const TrendingProduct = (props) => {

    const optionsRef = React.useRef();
    const addToCartRef = React.useRef();
    const showOptions = ()=>{
        optionsRef.current.classList.add('show-options');
        addToCartRef.current.classList.add('show-add');


    }

    const hideOptions = ()=>{
        optionsRef.current.classList.remove('show-options');
        addToCartRef.current.classList.remove('show-add');


    }

  return (
    
    <div className='trending-product'
    onMouseEnter={()=>showOptions()}
    onMouseLeave={()=>hideOptions()}

    >
            <div className='sec-1'>

                <div ref={optionsRef} className='options'>
                    <div className='trend-wish'>
                        <AiOutlineHeart size={22}/>
                    </div>

                    <div ref={addToCartRef} className='add-to-cart'>ADD TO CART</div>
                </div>

                <img className='trending-img' draggable={false} src={props.img} alt='product' />
            </div>

            <div className='caption'>

                <div className='title'>Chocolate cup cake</div>
                <div className='rating'><AiTwotoneStar color='#a31251' size={17} /><div>4.5</div></div>
                <div className='price'>$20,00</div>

            </div>
    </div>
  )
}

export default TrendingProduct