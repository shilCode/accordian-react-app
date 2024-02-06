import { useState } from "react";
import data from "./data";
import './style.css'

/* Approach
-----------------
created the folder so that its reusable


two type of accordian
- single selection
- multiple

*/
export default function Accordian(){

    const [selected, setSelected]  = useState(null);

    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId===selected?null:getCurrentId)

    }
   
    return <div className="wrapper"> Accordian APP
       <div className="accordian">{
        data && data.length > 0 ?
        data.map(dataItem=> <div className="item">
            <div onClick={()=>handleSingleSelection(dataItem.id)} className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
            </div>{
                selected===dataItem.id?<div className="content">{dataItem.answer}</div>: null
            }
        </div>)
        : <div>data not found</div>
       }</div>
    </div>
}