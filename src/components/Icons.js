import React  from "react";

export default function Icons(props)
{
    return(
        <div className="icons">
        <div className={props.visible ? '':'setIcon'}><div className="icon"><ion-icon name="heart-outline"></ion-icon></div></div>
        <div className={props.visible ? '':'setIcon'}><div className="icon"><ion-icon name="person-circle-outline"></ion-icon></div></div>
        <div className={props.visible ? '':'setIcon'}><div className="icon"><ion-icon name="cart-outline"></ion-icon></div></div>

    </div>
    )
}