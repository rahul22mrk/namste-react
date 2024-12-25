import { useState,useEffect } from "react";
import { SWIGGY_API_URL } from "../utils/constants";
const useRestaurants = ()=>{
    const [allData,setAllData] =useState([]);
    const [restaurantsList,setListOfRestaurants] =useState([]);
    //use effect
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        try {
            const data = await fetch(SWIGGY_API_URL);
            if (!data.ok) {
                throw new Error(`HTTP error! Status: ${data.status}`);
            }
            const json = await data.json();
            //optional chaining
            const cards = json?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards;
            setListOfRestaurants(cards);
            setAllData(cards);
        } catch (error) {
            console.error("Error fetching or parsing data:", error);
        }
        
    };
    return {restaurantsList,allData,setListOfRestaurants,setAllData};
}

export default useRestaurants;