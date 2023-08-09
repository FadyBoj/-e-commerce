import React  from "react";

import { SlArrowDown } from 'react-icons/sl'
import Slider from '@mui/material/Slider'


export default function Select(props)
{

    


 
      

    return(
        <div className="select--component">

            <div className="row-1 select--label">
                <div>{props.title}</div>
                <div className="select--arrow" style={{transform:'translateY(2px)'}}><SlArrowDown color="#1d4ca1" size={15} /></div>
            </div>
            
            <div className="row-2 select--options">
           
            </div>
        </div>
    )
}