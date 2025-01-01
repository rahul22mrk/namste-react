import { useState } from "react";
import ItemList from "./ItemList";
import { upSVG,downSVG } from "../utils/constants";

const RestaurantCategory = ({data,showItems,setShowIndex,SetClickHandle})=>{ // Correct usage
    const {title,itemCards}=data;
    const handleClick=()=>{
        setShowIndex();
    }
    return (
        <div>
            {/**Header Accordion */}
            <div className="w-6/12    mx-auto my-4 bg-gray-50 shadow-lg p-4">
               <div className="flex justify-between cursor-pointer" onClick={handleClick}>
               <span className="font-bold text-lg">{title}({itemCards.length})</span>
                <span >
                <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d={
                showItems
                  ? upSVG
                  : downSVG
              }
              clipRule="evenodd"
            />
          </svg>

                </span>
               </div>
                
            {/**Body Accordion */}
            {showItems && <ItemList items={itemCards}/>}
            
            </div>
        </div>
    )
}

export default RestaurantCategory;
