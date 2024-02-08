import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './styles.css'


export default function StarRating({noOfStars=10}){
    const [rating,setRating]=useState(0);
    const [hover,setHover]=useState(0);
    
    function handleMouseLeave(getCurrentIndex) {
        setHover(getCurrentIndex);
    }

    function handleMouseOver(getCurrentIndex) {
        setHover(getCurrentIndex);
    }

    function handleClick(rating) {
        setRating(rating);
    }
    

    return (
        <div className='star-rating'>
            {
                [...Array(noOfStars)].map((_,index)=>{
                    index =index+1
                    return <FaStar
                        size={40}
                        onMouseOver={()=>handleMouseOver(index)}
                        className={index<=(rating||hover)?'active':'inactive'}
                        onClick={()=>handleClick(index)}
                        onMouseLeave={()=>handleMouseLeave()}

                    />
                })
            }
        </div>
    )
}
