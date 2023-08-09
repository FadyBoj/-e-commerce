import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'

export default function searchInput (props)
{
    return(
        <div className="search--input--container">
                <div className="search--icon--container"><BiSearchAlt fill='#fff' size={35} /></div>
                <div onMouseEnter={props.handleHover}
                      onMouseLeave={props.handleRemoveHover} className={props.focus ? 'search--focus':''}><input style={props.styles}  placeholder="Search product" className="search--input" type="text"/></div>
        </div>
    )
}