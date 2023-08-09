import React from "react";

import { AiOutlineMinus } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'
import { FaRegTrashAlt } from 'react-icons/fa'
export default function MiniCartItem(props)
{
    const [deleteClass,setDeleteClass] = React.useState(false);

    const deleteAnimation = async()=>{
        setDeleteClass(true);
        await props.delete(props.id)
    }

    return(
        <div  className={`miniCart--item`}>
            <div className="sec-1">

                <div className="secc-1">
                    <img src={props.image} className="miniImg"/>
                </div>

                <div className="secc-2">
                    <div className="title">{props.title}</div>
                    <div className="price">{props.price}  <span>EGP</span></div>
                </div>

            </div>

            <div className="sec-2">
                <div className="modify--qty">
                    <div onClick={()=>{props.minusQty(props.id)}} className="minus"><AiOutlineMinus /></div>
                    <div className="qty">{props.qty}</div>
                    <div onClick={()=>{props.addQty(props.id)}} className="add"><IoMdAdd /></div>
                </div>

                <div className="delete--item">
                    <div className="delete--btn" onClick={deleteAnimation}><FaRegTrashAlt size={25} color="red" /></div>
                </div>
            </div>

        </div>
    )
}