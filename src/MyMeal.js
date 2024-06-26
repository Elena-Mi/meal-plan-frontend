import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";


const MyMeal = ({text,updatingInput,deleteMeal}) => {
  return (
    <div>
        <p>{text}</p>
        
        <FaRegEdit  onClick={updatingInput}  size={30} color={'#FFFFFF'}/>
      
        
        <MdDeleteOutline  onClick={deleteMeal}  size={30} color={'#FF0000'}/>
      
    
    </div>
  )
}

export default MyMeal