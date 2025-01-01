import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useState,useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useRestaurants from "../utils/useRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () =>{
    const {setUserName,loggedInUser}=useContext(UserContext);
    //Local state variable -super power variable
    const [searchText,setSearchText] =  useState("");
    const {restaurantsList,allData,setListOfRestaurants} = useRestaurants();
    const onlineStatus = useOnlineStatus();
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    if(onlineStatus===false){
        return (<h1>Looks like you're offline!! Please check your internet connection!!</h1>);
    }
    const userChangeHandle =  ()=>{

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
             <div className="m-4 p-4 flex items-center">
                <label>User Name : </label>
                <input type="text"
                    value={loggedInUser}  
                    className="border border-black m-2 p-2" 
                    onChange={(e)=>setUserName(e.target.value)}></input>
             </div>
                
            </div>
            
            <div className=" flex flex-wrap">
				{
					restaurantsList.map((restaurant,index)=>
					(
                        <Link key={restaurant.card.card.info.id}  to={"restaurants/"+restaurant.card.card.info.id}>
                            {/**if the restaurant is promoted the  we will show promoted label */   
                            }
                            {restaurant.card.card.info.promoted?
                            <RestaurantCardPromoted resData={restaurant}/> 
                            : <RestaurantCard  resData={restaurant} /> }
                        </Link>
                    ))
				}
            </div>
        </div>
    )
}

export default Body;