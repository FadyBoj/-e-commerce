import React  from "react";
import { AiOutlineHeart,AiFillHeart,AiOutlineCheck } from 'react-icons/ai';
import { BsCart } from 'react-icons/bs';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';


export default function Product(props)
{

    const [animateState,setAnimateState] = React.useState('default');

   async function handleAnimate()
    {
        setAnimateState('animating');
         setTimeout(()=>{
            props.addToCart(props.id,props.price)
        },500);
        setTimeout(()=>{
            setAnimateState('default');
        },500);
    }

   
    
    return(
        <div className='product'>
                    <div onClick={()=>{props.handleHeart(props.id)}} className='heart--container'>
                        {props.isActive ?<AiFillHeart fill="red" size={30} />:<AiOutlineHeart size={30} />}
                    </div>
                    <img alt='top-product' className='top--image' src={props.image} />
                    <p className="title">{props.title}</p><br />
                    <div className="price">{props.price} <span>EGP</span></div>

                    {animateState === 'default' ?  (!props.exist ? 
                    <div onClick={handleAnimate}
                    className="cart--container"><BsCart color="white" size={props.windowWidth > 1024 ? 20: 18} /></div>:
                    
                    <div 
                    className="added--success"><AiOutlineCheck color="white" size={props.windowWidth > 1024 ? 25: 18} /></div>):
                    <div 
                    className="cart--container"><Stack sx={{ color: 'white' }} spacing={2} direction="row">
                    <CircularProgress size={25} color="inherit" />
                  </Stack></div>}

                   



        </div>
    )
}