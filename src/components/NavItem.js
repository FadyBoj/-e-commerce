import React from 'react'

export default function NavItem(props)
{
    return(
        <div onMouseLeave={()=>{props.handleRemoveHover(props.id)}}
            onMouseEnter={()=>{props.handleHover(props.id)}}
            className="navItem" ><div>{props.name}</div> <div style={props.styles} className="border"></div>  </div>
            
        
    )
}