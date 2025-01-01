import Shimmer from "./Shimmer";
import { CDN_IMG_URL } from "../utils/constants";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = ()=>{
    const [showIndex,setShowIndex]=useState(null);
    const {restId} = useParams();
    const restInfo=useRestaurantMenu(restId);
    if(restInfo===null){
        return <Shimmer/>;
    }
    const {
        name,
        image,
        cuisines,
        cloudinaryImageId,
        costForTwoMessage,
        avgRatingString,
        totalRatingsString,
        areaName,
        sla
    } = restInfo?.cards[2]?.card?.card?.info;
    const{itemCards}=restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;

    const categories =restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
        (c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) ;
    return  (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/**Categories Accordion */}
            {
                categories.map((category,index)=>(
                    <RestaurantCategory 
                        key={category?.card?.card?.title} 
                        data={category?.card?.card}
                        showItems={index===showIndex } 
                        setShowIndex={()=>setShowIndex(index === showIndex ? null : index)} 
                        />
                ))
            }
        </div>
    );
}

export default RestaurantMenu;