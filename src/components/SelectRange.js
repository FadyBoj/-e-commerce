import React  from "react";

import { SlArrowDown } from 'react-icons/sl'
import Slider from '@mui/material/Slider'


export default function Select(props)
{

    React.useEffect(()=>{
        let rangeSelect = document.getElementById('range--select');
        let rangeArrow = document.getElementsByClassName('range--arrow')[0];

        if(props.isOpen)
        {
            setTimeout(()=>{
                rangeSelect.classList.add('range--open')
                rangeArrow.style.cssText = 'transform:translateY(-2px)rotate(180deg);transition:all 250ms';
            },1) 
        }
        else{
            rangeSelect.classList.remove('range--open');
            rangeArrow.style.cssText = 'transform:rotate(0deg);transition:all 250ms';
        }
    },[props.isOpen])


    const marginStyleBottom={
        transform:`translateX(${props.rangeValue[0] + 20}pt)`
    }

    const marginStyleTop={
        transform:`translateX(${(props.rangeValue[1] - 100) - 20}pt)`
    }
      

    return(
        <div ref={props.refs}  className="select--component">

            <div onClick={()=>{props.handleClick()}} className="row-1 select--label">
                <div>{props.title}</div>
                <div className="range--arrow" style={{transform:'translateY(2px)'}}><SlArrowDown color="#1d4ca1" size={15} /></div>
            </div>
            
            <div id="range--select" style={props.isOpen ? {display:'flex'}:{display:'none'}} className="row-2">
                <div style={marginStyleTop} className="top--range">{props.rangeValue[1]} EGP</div>
                <Slider
                size="small"
                style={{width:'160px'}}
                value={props.rangeValue}
                
                onChange={props.handlePriceRange}
                />  
                <div style={marginStyleBottom} className="bot--range">{props.rangeValue[0]} EGP</div>
           
            </div>
            
        </div>
    )
}