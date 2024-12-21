import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
const Body = () =>{
    //Local state variable -super power variable
    const [allData,setAllData] = useState([]);
    const [restaurantsList,setListOfRestaurants] =useState(allData);
    const [filteredRest,setFilteredList] = useState(allData);
    const [searchText,setSearchText] =  useState("");
    // const arr= useState(resList);
    // const [restaurantsList,setListOfRestaurants] =arr;
    //normal js variable
    let restaurantsListJs  = allData;
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
            setAllData(cards);
            setListOfRestaurants(cards);
        } catch (error) {
            console.error("Error fetching or parsing data:", error);
        }
        
    };

    //conditional rendering
    return restaurantsList.length===0? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}></input>
                    <button className="search-btn" onClick={()=>{
                        const filteredList = allData.filter(
                            (res) => res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setListOfRestaurants(filteredList);
                    }}>Search</button>
                </div>
                <button 
                    className="filter-btn" 
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
                <button 
                    className="filter-all-btn"
                    onClick={()=>{
                        setListOfRestaurants(allData);
                    }}
                >
                    See All Restaurants
                </button>
            </div>
            
            <div className="res-container">
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