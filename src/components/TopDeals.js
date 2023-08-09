import React from 'react';
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";
import TopDealProduct from './TopDealProduct';
import productsDummy from '../porducts-dumy.json'



export default function TopDeals(props)
{
   
 

    function slideLeft()
    {    
        const productsContainer = document.getElementsByClassName('top--deals--products')[0];

        if(window.innerWidth > 1024)
        {
        productsContainer.scrollLeft = productsContainer.scrollLeft + 211;
        }
        if(window.innerWidth >= 485 && window.innerWidth < 1024)
        {
        productsContainer.scrollLeft = productsContainer.scrollLeft + 189;
        }
        if(window.innerWidth <= 485)
        {
            productsContainer.scrollLeft = productsContainer.scrollLeft + 140;

        }

    }
    
    function slideRight()
    {
        const productsContainer = document.getElementsByClassName('top--deals--products')[0];
        if(window.innerWidth > 1024)
        {
        productsContainer.scrollLeft = productsContainer.scrollLeft - 211;
        }
        if(window.innerWidth >= 485 && window.innerWidth < 1024)
        {
        productsContainer.scrollLeft = productsContainer.scrollLeft - 189;
        }
        if(window.innerWidth <= 485)
        {
            productsContainer.scrollLeft = productsContainer.scrollLeft - 140;

        }
    }

    //top Deal products

    const [topProducts,setTopProducts] = React.useState(productsDummy)

 

   window.addEventListener('resize',()=>{
    setTopProducts((prevValue)=>{
        return prevValue
    })
   })

    function setHeart(id){
        setTopProducts((prevProducts) =>{
            return prevProducts.map((product) =>{
                return product.id === id ? {...product,favorite:!product.favorite}:product
            })
        })
    }
    const topProductsElements = topProducts.map((item) =>{
        return <TopDealProduct
                key={item.id}
                windowWidth={window.innerWidth}
                id ={item.id}
                title={item.title}
                price={item.price}
                deal={item.deal}
                isActive={item.favorite}
                handleHeart={setHeart}
        />
    })

  

    return(
        <div className='top--deals--section'>
            <h1>Top deals</h1>
                <div className='top--deals'>
                <div className='arrow'><FaArrowLeft onClick={slideRight} size={props.windowWidth > 700 ? 40 : 20}  /></div>
            <div className='top--deals--products'>
              
                {topProductsElements}
                  
            </div>
                <div className='arrow'><FaArrowRight onClick={slideLeft} size={props.windowWidth > 700 ? 40 : 20} /></div>
                </div>
        </div>
    )
}
