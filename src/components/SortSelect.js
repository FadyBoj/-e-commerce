import React  from "react";

import { SlArrowDown } from 'react-icons/sl'

export default function SortSelect(props)
{

    function Option(props)
    {
        return(
            <div onClick={()=>{props.setActiveOption(props.id,props.item)}}
                 className={(props.id - 1) === props.activeOption ? 'active--option' : ''}><p>{props.item}</p></div>
        )
    }

    const optionElements = props.options.map((option,index) =>{
        return <Option activeOption={props.activeOption}
                       setActiveOption={props.setActiveOption}
                       key={index + 1}
                       id={index + 1}
                      item={option}/>
    })

    return(
        <div ref={props.refs} onClick={props.handleClick} className="sort--select">
            <div className="col-1">

                <div className="row-1">
                    <p>Sort by</p>
                </div>

                <div className="row-2">

                    <p>{props.options[props.activeOption]}</p>
                    <div><SlArrowDown color="#1d4ca1" /></div>

                </div>

                <div className="line"></div>
            </div>

            <div className={!props.isVisible ? 'col-2 setSortOptions':'col-2'} >
                {optionElements}
            </div>

        </div>
    )
}