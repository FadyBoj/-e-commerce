import React from 'react';
import { SlArrowDown } from 'react-icons/sl'

export default function BrandSelect(props)
{

    React.useEffect(()=>{
        const brandOptions = document.getElementsByClassName('brand--options')[0];
        const brandArrow = document.getElementsByClassName('brand--arrow')[0];

        if(props.isVisible)
        {
            setTimeout(()=>{
                brandOptions.classList.add('range--open');
                brandArrow.style.cssText = 'transform:translateY(-2px)rotate(180deg);transition:all 250ms';
            },1)
            
        }
        else{
            brandOptions.classList.remove('range--open');
            brandArrow.style.cssText = 'transform:unset;transition:all 250ms';
        }

    },[props.isVisible])

   //option Element
   function Option(props)
   {
    

    return(
        <div className='brand--option'>
            <p className='title'>{props.title}</p>
            <input data-value={props.title} checked={props.checked} onChange={props.setBrand} className='brand--checkbox' type='checkbox'/>
        </div>
    )
   }

   const optionElemetns = props.brands.map((brand,index)=>{
    return <Option 
            title={brand}
            key={index + 1}
            id={index + 1}
            setBrand={props.setBrand}
            checked={props.selectedBrands.includes(brand)}
            />
   })

    return (
        <div ref={props.refs} className='brand--select'>

        <div onClick={()=>{props.handleVisible()}} className='row-1'>
            <div className='brand'><p>Brand</p></div>
            <div className="brand--arrow" style={{transform:'translateY(2px)'}}><SlArrowDown color="#1d4ca1" size={15} /></div>
        </div>

        <div style={props.isVisible?{display:'flex'}:{display:'none'}} className='row-2 brand--options'>
            {optionElemetns}
        </div>

        </div>
    )
}