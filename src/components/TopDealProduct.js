import React  from "react";
import { AiOutlineHeart,AiFillHeart } from 'react-icons/ai';
import { BsCart } from 'react-icons/bs';

export default function TopDealProduct(props)
{

    
    return(
        <div className='top--product'>
                    <div onClick={()=>{props.handleHeart(props.id)}} className='heart--container'>
                        {props.isActive ?<AiFillHeart fill="red" size={30} />:<AiOutlineHeart size={30} />}
                    </div>
                    <div className='off'>{props.deal}% off</div>
                    <img alt='top-product' className='top--image' src="images/groc.jpg" />
                    <p className="title">{props.title}</p><br />
                    <div className="top--deal--price">
                        <div><p className="price">{props.price} <span>Egp</span></p></div>
                        <div><p className="original--price">400 <span>Egp</span></p></div>
                        <div className="cart--container"><BsCart color="white" size={props.windowWidth > 1024 ? 22: 18} /></div>
                    </div>

                </div>
    )
}