import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_IMG_URL,SWIGGY_MENU_URL } from "../utils/constants";
import { useParams } from "react-router";

const RestaurantMenu = ()=>{
    const [restInfo,setRestInfo]= useState(null);
    const {restId} = useParams();
    useEffect(()=>{
        fetchRestMenu();
    },[]);
    const fetchRestMenu = async ()=>{
        const restMenuResponse = await fetch(SWIGGY_MENU_URL+restId);
        const restMenuData= await restMenuResponse.json();
        console.log("rest dummy data",restMenuData);
       // const restMenuList = restMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card.itemCards;
        setRestInfo(restMenuData?.data);
    };
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
    console.log(itemCards);
    return  (
        <div className="menu">
            <h1>{name}</h1>
            <img  src={CDN_IMG_URL+cloudinaryImageId}></img>
            <h2>{"*"+avgRatingString+"("+totalRatingsString+") ." + costForTwoMessage}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{"Outlet "+areaName}</h3>
            <h3>{sla.slaString}</h3>
            <h3>Menu</h3>
            <ul>
                {
                    itemCards.map(item => 
                    <li key="item?.card?.info?.id">
                        {item?.card?.info?.name} - Rs.  {item?.card?.info?.price/100}
                    </li>)
                }
            </ul>
           
        </div>
    );
}

export default RestaurantMenu;