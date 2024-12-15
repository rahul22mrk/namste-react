import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () =>{
    //Local state variable -super power variable
    const [restaurantsList,setListOfRestaurants] =useState(resList);
    // const arr= useState(resList);
    // const [restaurantsList,setListOfRestaurants] =arr;
    //normal js variable
    let restaurantsListJs  = [
			{
                "card":{
                    "card": {
				"info": {
					"id": "866939",
					"name": "Punjabi Angithi (Vegorama Group)",
					"cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/41b029f5-a3c3-4696-8908-0b83049a997c_58e5b517-2e98-49c3-9992-e78f4e0e14d9.jpeg",
					"costForTwo": "30000",
					"cuisines": [
						"North Indian",
						"Chinese",
						"Tandoor"
					],
					"avgRating": 4.3,
					"totalRatingsString": "5.6K+",
					"sla": {
						"deliveryTime": 35,
					},
				},
			    }
                }
                
		    },{
                "card":{
                    "card": {
				"info": {
					"id": "866930",
					"name": "Dominos",
					"cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/41b029f5-a3c3-4696-8908-0b83049a997c_58e5b517-2e98-49c3-9992-e78f4e0e14d9.jpeg",
					"costForTwo": "30000",
					"cuisines": [
						"North Indian",
						"Chinese",
						"Tandoor"
					],
					"avgRating": 3.8,
					"totalRatingsString": "5.6K+",
					"sla": {
						"deliveryTime": 35,
					},
				},
			    }
                }
                
		    }
    ];
    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={()=>{
                        //filter logic here
                        const filteredList = restaurantsList.filter(
                            (res) => res.card.card.info.avgRating > 4
                        );
                        setListOfRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
                <button 
                    className="filter-all-btn"
                    onClick={()=>{
                        setListOfRestaurants(resList);
                    }}
                >
                    See All Restaurants
                </button>
            </div>
            
            <div className="res-container">
				{
					restaurantsList.map((restaurant,index)=>
					(<RestaurantCard key={restaurant.card.card.info.id} resData={restaurant}/>))
				}
            </div>
        </div>
    )
}

export default Body;