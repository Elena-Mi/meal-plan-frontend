import React from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const MyMeal = ({text,updatingInput,deleteMeal}) => {
  return (
    <div>
        <p>{text}</p>
        <CiEdit onClick={updatingInput} />
        <MdDeleteOutline onClick={deleteMeal}/>
        

    </div>
  )
}

export default MyMeal