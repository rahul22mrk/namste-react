import { useEffect, useState } from "react";
import { SWIGGY_MENU_URL } from "./constants";
const useRestaurantMenu =(restId)=>{
    const [restInfo,setRestInfo] = useState(null);
    useEffect(()=>{
        fetchRestMenu();
    },[]);
    const fetchRestMenu = async ()=>{
        const restMenuResponse = await fetch(SWIGGY_MENU_URL+restId);
        const restMenuData= await restMenuResponse.json();
       // const restMenuList = restMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card.itemCards;
        setRestInfo(restMenuData?.data);
    };

    return restInfo;
};

export default useRestaurantMenu;