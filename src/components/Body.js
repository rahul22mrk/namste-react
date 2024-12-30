import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useRestaurants from "../utils/useRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () =>{
    //Local state variable -super power variable
    const [searchText,setSearchText] =  useState("");
    const {restaurantsList,allData,setListOfRestaurants} = useRestaurants();
    const onlineStatus = useOnlineStatus();
    if(onlineStatus===false){
        return (<h1>Looks like you're offline!! Please check your internet connection!!</h1>);
    }

    //conditional rendering
    return (restaurantsList===undefined||restaurantsList.length===0)? <Shimmer/> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black " value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}></input>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                        const filteredList = allData.filter(
                            (res) => res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setListOfRestaurants(filteredList);
                    }}>Search</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                <button 
                    className="px-4 py-2 bg-green-100 rounded-lg" 
                    onClick={()=>{
                        //filter logic here
                        const filteredList = restaurantsList.filter(
                            (res) => res.card.card.info.avgRating > 4.2
                        );
                        setListOfRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
                </div>
             <div className="m-4 p-4 flex items-center">
             <button 
                    className="px-4 py-2 bg-green-100 rounded-lg"
                    onClick={()=>{
                        setListOfRestaurants(allData);
                    }}
                >
                    See All Restaurants
                </button>
             </div>
                
            </div>
            
            <div className=" flex flex-wrap">
				{
					restaurantsList.map((restaurant,index)=>
					(
                        <Link key={restaurant.card.card.info.id}  to={"restaurants/"+restaurant.card.card.info.id}>
                            <RestaurantCard  resData={restaurant} />
                        </Link>
                    ))
				}
            </div>
        </div>
    )
}

export default Body;