import React from "react";
import ReactDOM from "react-dom/client"; // React 18+ import
/**
 * Header
 *    - logo
 *    - Nav Items
 * Body
 *    - search
 *    - RestaurantContainer 
 *        - RestaurantCard  
 *          - Img
 *          - Name of Res
 *          - Start Rating
 *          - Cuisines 
 *          - Delivery time etc
 * Footer
 *    - Copyright
 *    - links
 *    - address
 *    - contact
 */
const logoUrl = "https://media.istockphoto.com/id/981368726/vector/restaurant-food-drinks-logo-fork-knife-background-vector-image.jpg?s=612x612&w=0&k=20&c=9M26CBkCyEBqUPs3Ls5QCjYLZrB9sxwrSFmnAmNCopI=";
const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logoUrl} alt='logo'/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor : "#f0f0f0"
}

const cdnImgUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
const RestaurantCard = (props) => {
	const {resData}=props;
	const {cloudinaryImageId,
		name,
		cuisines,
		avgRating,
		sla,
		costForTwo
	} = resData?.card.card.info;
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-logo" src={cdnImgUrl+cloudinaryImageId} />
            <h3>{name} </h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} mins</h4>
			<h4>₹{costForTwo /100} FOR TWO</h4>
        </div>
    )
}

const resList = [
	{
		"card": {
			"card": {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
				"info": {
					"id": "866939",
					"name": "Punjabi Angithi (Vegorama Group)",
					"city": "4",
					"slugs": {
						"restaurant": "punjabi-angithi-vegorama-group-laxmi-nagar-laxmi-nagar",
						"city": "delhi"
					},
					"cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/41b029f5-a3c3-4696-8908-0b83049a997c_58e5b517-2e98-49c3-9992-e78f4e0e14d9.jpeg",
					"address": "Shop No : H. NO-1, , Floor : Ground , KH. NO.- 956-957, MAIN ROAD, WEST GURU ANGAD , ",
					"locality": "Patparganj Rd",
					"areaName": "Laxmi Nagar",
					"costForTwo": "30000",
					"costForTwoMessage": "₹300 FOR TWO",
					"cuisines": [
						"North Indian",
						"Chinese",
						"Tandoor"
					],
					"avgRating": 4.3,
					"feeDetails": {},
					"avgRatingString": "4.3",
					"totalRatingsString": "5.6K+",
					"promoted": true,
					"adTrackingId": "cid=22353211~p=0~adgrpid=22353211#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=866939~st=veg biryani~eid=0a237ba3-8ac7-49af-a396-f1fc3e58efc0~srvts=1734243089103",
					"sla": {
						"deliveryTime": 35,
						"minDeliveryTime": 35,
						"maxDeliveryTime": 40,
						"lastMileTravel": 4.9,
						"serviceability": "SERVICEABLE",
						"rainMode": "RAIN_MODE_NONE",
						"slaString": "35-40 MINS",
						"lastMileTravelString": "4.9 km",
						"iconType": "ICON_TYPE_EMPTY"
					},
					"availability": {
						"opened": true,
						"restaurantClosedMeta": {}
					},
					"badges": {
						"imageBadges": [
							{
								"imageId": "Green%20Dot%20Awards/Best%20In%20Paneer.png",
								"description": "Delivery!"
							},
							{
								"imageId": "Rxawards/_CATEGORY-North%20Indian.png",
								"description": "Delivery!"
							}
						]
					},
					"aggregatedDiscountInfoV3": {
						"header": "ITEMS",
						"subHeader": "AT ₹129",
						"logoCtx": {
							"text": "BENEFITS"
						}
					},
					"ratingSlab": "RATING_SLAB_5",
					"orderabilityCommunication": {
						"title": {},
						"subTitle": {},
						"message": {},
						"customIcon": {},
						"commsStyling": {}
					},
					"cartOrderabilityNudgeBanner": {
						"parameters": {},
						"presentation": {}
					},
					"externalRatings": {
						"aggregatedRating": {
							"rating": "--"
						}
					},
					"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
					"featuredSectionInfo": {
						"sectionTitle": "More"
					},
					"campaignId": "22353211"
				},
				"analytics": {
					"screenName": "explore",
					"context": "{\"tid\":\"undefined\",\"grid\":\"71696304-e195-4a7e-b00c-56f8bc87bc24\",\"queryUniqueId\":\"a47bb241-ea36-ae6e-5142-58e5ada98706\",\"query\":\"veg biryani\",\"adTrackingId\":\"cid=22353211~p=0~adgrpid=22353211#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=866939~st=veg biryani~eid=0a237ba3-8ac7-49af-a396-f1fc3e58efc0~srvts=1734243089103\"}",
					"objectValue": "866939",
					"impressionObjectName": "impression-restaurant-ad",
					"clickObjectName": "click-restaurant-ad"
				},
				"ctaWithParams": {
					"link": "swiggy://menu",
					"type": "DEEPLINK",
					"params": {
						"sourceSessionId": "hsz583c9-1bc5-40c2-b07a-2d5e741bd6c5",
						"source": "SEARCH",
						"isSld": "false",
						"sourceRequestId": "38f552aa57af8f0b97d9c46fde31ec55",
						"restaurant_id": "866939",
						"query": "veg biryani"
					}
				}
			}
		}
	},
	{
		"card": {
			"card": {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
				"info": {
					"id": "256301",
					"name": "Bikkgane Biryani",
					"city": "4",
					"slugs": {
						"restaurant": "bikkgane-biryani-laxmi-nagar-laxmi-nagar",
						"city": "delhi"
					},
					"cloudinaryImageId": "2380b9e8ee23f594ae181610af93bdf4",
					"address": "495, Block A, Ganesh nagar 2, Shakarpur, Delhi - 110092",
					"locality": "Ganesh Nagar",
					"areaName": "Pandav Nagar",
					"costForTwo": "40000",
					"costForTwoMessage": "₹400 FOR TWO",
					"cuisines": [
						"Biryani",
						"Mughlai",
						"North Indian"
					],
					"avgRating": 4.2,
					"feeDetails": {},
					"avgRatingString": "4.2",
					"totalRatingsString": "14K+",
					"sla": {
						"deliveryTime": 37,
						"minDeliveryTime": 35,
						"maxDeliveryTime": 40,
						"lastMileTravel": 3.5,
						"serviceability": "SERVICEABLE",
						"rainMode": "RAIN_MODE_NONE",
						"slaString": "35-40 MINS",
						"lastMileTravelString": "3.5 km",
						"iconType": "ICON_TYPE_EMPTY"
					},
					"availability": {
						"opened": true,
						"restaurantClosedMeta": {}
					},
					"badges": {
						"imageBadges": [
							{
								"imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Biryani.png",
								"description": "Delivery!"
							}
						]
					},
					"aggregatedDiscountInfoV3": {
						"header": "ITEMS",
						"subHeader": "AT ₹169",
						"logoCtx": {
							"text": "BENEFITS"
						}
					},
					"ratingSlab": "RATING_SLAB_5",
					"orderabilityCommunication": {
						"title": {},
						"subTitle": {},
						"message": {},
						"customIcon": {},
						"commsStyling": {}
					},
					"cartOrderabilityNudgeBanner": {
						"parameters": {},
						"presentation": {}
					},
					"externalRatings": {
						"aggregatedRating": {
							"rating": "--"
						}
					},
					"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
					"featuredSectionInfo": {
						"sectionTitle": "More"
					}
				},
				"analytics": {
					"screenName": "explore",
					"context": "{\"tid\":\"undefined\",\"grid\":\"71696304-e195-4a7e-b00c-56f8bc87bc24\",\"queryUniqueId\":\"a47bb241-ea36-ae6e-5142-58e5ada98706\",\"query\":\"veg biryani\"}",
					"objectValue": "256301",
					"impressionObjectName": "impression-restaurant",
					"clickObjectName": "click-restaurant"
				},
				"ctaWithParams": {
					"link": "swiggy://menu",
					"type": "DEEPLINK",
					"params": {
						"isSld": "false",
						"sourceRequestId": "38f552aa57af8f0b97d9c46fde31ec55",
						"restaurant_id": "256301",
						"query": "veg biryani",
						"sourceSessionId": "hsz583c9-1bc5-40c2-b07a-2d5e741bd6c5",
						"source": "SEARCH"
					}
				}
			}
		}
	},
	{
		"card": {
			"card": {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
				"info": {
					"id": "867001",
					"name": "Chinese Veg Crunch By Punjabi Angithi",
					"city": "4",
					"slugs": {
						"restaurant": "chinese-veg-crunch-by-punjabi-angithi-laxmi-nagar-laxmi-nagar",
						"city": "delhi"
					},
					"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/6/77b00e50-da96-4b83-ae81-5e055cd85090_867001.jpg",
					"address": "Shop No : H. NO-1 , Floor : Ground , NO.- 956-957, MAIN ROAD, WEST GURU ANGAD NAGA , ",
					"locality": "Patparganj Rd",
					"areaName": "Laxmi Nagar",
					"costForTwo": "30000",
					"costForTwoMessage": "₹300 FOR TWO",
					"cuisines": [
						"Chinese"
					],
					"avgRating": 4.2,
					"feeDetails": {},
					"avgRatingString": "4.2",
					"totalRatingsString": "124",
					"promoted": true,
					"adTrackingId": "cid=22613796~p=1~adgrpid=22613796#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=867001~st=veg biryani~eid=348e5899-1747-47ea-b83a-573701f654bb~srvts=1734243089103",
					"sla": {
						"deliveryTime": 39,
						"minDeliveryTime": 35,
						"maxDeliveryTime": 40,
						"lastMileTravel": 4.9,
						"serviceability": "SERVICEABLE",
						"rainMode": "RAIN_MODE_NONE",
						"slaString": "35-40 MINS",
						"lastMileTravelString": "4.9 km",
						"iconType": "ICON_TYPE_EMPTY"
					},
					"availability": {
						"opened": true,
						"restaurantClosedMeta": {}
					},
					"badges": {
						"imageBadges": [
							{
								"imageId": "v1695133679/badges/Pure_Veg111.png",
								"description": "pureveg"
							}
						]
					},
					"aggregatedDiscountInfoV3": {
						"header": "60% OFF",
						"subHeader": "UPTO ₹120",
						"logoCtx": {
							"text": "BENEFITS"
						}
					},
					"ratingSlab": "RATING_SLAB_5",
					"orderabilityCommunication": {
						"title": {},
						"subTitle": {},
						"message": {},
						"customIcon": {},
						"commsStyling": {}
					},
					"cartOrderabilityNudgeBanner": {
						"parameters": {},
						"presentation": {}
					},
					"externalRatings": {
						"aggregatedRating": {
							"rating": "--"
						}
					},
					"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
					"featuredSectionInfo": {
						"sectionTitle": "More"
					},
					"campaignId": "22613796"
				},
				"analytics": {
					"screenName": "explore",
					"context": "{\"tid\":\"undefined\",\"grid\":\"71696304-e195-4a7e-b00c-56f8bc87bc24\",\"queryUniqueId\":\"a47bb241-ea36-ae6e-5142-58e5ada98706\",\"query\":\"veg biryani\",\"adTrackingId\":\"cid=22613796~p=1~adgrpid=22613796#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=867001~st=veg biryani~eid=348e5899-1747-47ea-b83a-573701f654bb~srvts=1734243089103\"}",
					"objectValue": "867001",
					"impressionObjectName": "impression-restaurant-ad",
					"clickObjectName": "click-restaurant-ad"
				},
				"ctaWithParams": {
					"link": "swiggy://menu",
					"type": "DEEPLINK",
					"params": {
						"restaurant_id": "867001",
						"query": "veg biryani",
						"sourceSessionId": "hsz583c9-1bc5-40c2-b07a-2d5e741bd6c5",
						"source": "SEARCH",
						"isSld": "false",
						"sourceRequestId": "38f552aa57af8f0b97d9c46fde31ec55"
					}
				}
			}
		}
	},
	{
		"card": {
			"card": {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
				"info": {
					"id": "127640",
					"name": "Biryani Blues",
					"city": "4",
					"slugs": {
						"restaurant": "biryani-blues-mayur-vihar",
						"city": "delhi"
					},
					"cloudinaryImageId": "f7bb006db1236c6bb82a4c082a8c60b0",
					"address": "E 55A 1st Floor, vikas marg laxmi nagar , DELHI - 110092",
					"locality": "Ganesh Nagar",
					"areaName": "Laxmi Nagar",
					"costForTwo": "40000",
					"costForTwoMessage": "₹400 FOR TWO",
					"cuisines": [
						"Biryani",
						"Hyderabadi",
						"Lucknowi",
						"Kebabs",
						"Desserts",
						"Beverages"
					],
					"avgRating": 4.3,
					"feeDetails": {},
					"avgRatingString": "4.3",
					"totalRatingsString": "15K+",
					"sla": {
						"deliveryTime": 34,
						"minDeliveryTime": 30,
						"maxDeliveryTime": 35,
						"lastMileTravel": 4.4,
						"serviceability": "SERVICEABLE",
						"rainMode": "RAIN_MODE_NONE",
						"slaString": "30-35 MINS",
						"lastMileTravelString": "4.4 km",
						"iconType": "ICON_TYPE_EMPTY"
					},
					"availability": {
						"opened": true,
						"restaurantClosedMeta": {}
					},
					"badges": {
						"imageBadges": [
							{
								"imageId": "Rxawards/_CATEGORY-Biryani.png",
								"description": "Delivery!"
							}
						]
					},
					"aggregatedDiscountInfoV3": {
						"header": "ITEMS",
						"subHeader": "AT ₹29",
						"logoCtx": {
							"text": "BENEFITS"
						}
					},
					"ratingSlab": "RATING_SLAB_5",
					"orderabilityCommunication": {
						"title": {},
						"subTitle": {},
						"message": {},
						"customIcon": {},
						"commsStyling": {}
					},
					"cartOrderabilityNudgeBanner": {
						"parameters": {},
						"presentation": {}
					},
					"externalRatings": {
						"aggregatedRating": {
							"rating": "--"
						}
					},
					"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
					"featuredSectionInfo": {
						"sectionTitle": "More"
					}
				},
				"analytics": {
					"screenName": "explore",
					"context": "{\"tid\":\"undefined\",\"grid\":\"71696304-e195-4a7e-b00c-56f8bc87bc24\",\"queryUniqueId\":\"a47bb241-ea36-ae6e-5142-58e5ada98706\",\"query\":\"veg biryani\"}",
					"objectValue": "127640",
					"impressionObjectName": "impression-restaurant",
					"clickObjectName": "click-restaurant"
				},
				"ctaWithParams": {
					"link": "swiggy://menu",
					"type": "DEEPLINK",
					"params": {
						"isSld": "false",
						"sourceRequestId": "38f552aa57af8f0b97d9c46fde31ec55",
						"restaurant_id": "127640",
						"query": "veg biryani",
						"sourceSessionId": "hsz583c9-1bc5-40c2-b07a-2d5e741bd6c5",
						"source": "SEARCH"
					}
				}
			}
		}
	},
	{
		"card": {
			"card": {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
				"info": {
					"id": "58216",
					"name": "Biryani Mahal",
					"city": "10459",
					"slugs": {
						"restaurant": "biryani-mahal-sector-2-sector-18",
						"city": "delhi"
					},
					"cloudinaryImageId": "ef6c7259dd87018e48b4a069cd65ef11",
					"address": "B 86 sector 6 Noida ",
					"areaName": "Sector 6",
					"costForTwo": "50000",
					"costForTwoMessage": "₹500 FOR TWO",
					"cuisines": [
						"Biryani",
						"Mughlai",
						"Chinese",
						"North Indian"
					],
					"avgRating": 4.3,
					"feeDetails": {},
					"avgRatingString": "4.3",
					"totalRatingsString": "22K+",
					"promoted": true,
					"adTrackingId": "cid=22074079~p=4~adgrpid=22074079#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=58216~st=veg biryani~eid=6cfa018f-e91c-47fa-a8d8-3007157c6707~srvts=1734243089103",
					"sla": {
						"deliveryTime": 27,
						"minDeliveryTime": 25,
						"maxDeliveryTime": 30,
						"lastMileTravel": 3.7,
						"serviceability": "SERVICEABLE",
						"rainMode": "RAIN_MODE_NONE",
						"slaString": "25-30 MINS",
						"lastMileTravelString": "3.7 km",
						"iconType": "ICON_TYPE_EMPTY"
					},
					"availability": {
						"opened": true,
						"restaurantClosedMeta": {}
					},
					"badges": {
						"imageBadges": [
							{
								"imageId": "Rxawards/_CATEGORY-Biryani.png",
								"description": "Delivery!"
							}
						]
					},
					"aggregatedDiscountInfoV3": {
						"header": "ITEMS",
						"subHeader": "AT ₹549",
						"logoCtx": {
							"text": "BENEFITS"
						}
					},
					"ratingSlab": "RATING_SLAB_5",
					"orderabilityCommunication": {
						"title": {},
						"subTitle": {},
						"message": {},
						"customIcon": {},
						"commsStyling": {}
					},
					"cartOrderabilityNudgeBanner": {
						"parameters": {},
						"presentation": {}
					},
					"externalRatings": {
						"aggregatedRating": {
							"rating": "--"
						}
					},
					"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
					"featuredSectionInfo": {
						"sectionTitle": "More"
					},
					"campaignId": "22074079"
				},
				"analytics": {
					"screenName": "explore",
					"context": "{\"tid\":\"undefined\",\"grid\":\"71696304-e195-4a7e-b00c-56f8bc87bc24\",\"queryUniqueId\":\"a47bb241-ea36-ae6e-5142-58e5ada98706\",\"query\":\"veg biryani\",\"adTrackingId\":\"cid=22074079~p=4~adgrpid=22074079#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=58216~st=veg biryani~eid=6cfa018f-e91c-47fa-a8d8-3007157c6707~srvts=1734243089103\"}",
					"objectValue": "58216",
					"impressionObjectName": "impression-restaurant-ad",
					"clickObjectName": "click-restaurant-ad"
				},
				"ctaWithParams": {
					"link": "swiggy://menu",
					"type": "DEEPLINK",
					"params": {
						"query": "veg biryani",
						"sourceSessionId": "hsz583c9-1bc5-40c2-b07a-2d5e741bd6c5",
						"source": "SEARCH",
						"isSld": "false",
						"sourceRequestId": "38f552aa57af8f0b97d9c46fde31ec55",
						"restaurant_id": "58216"
					}
				}
			}
		}
	},
	{
		"card": {
			"card": {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
				"info": {
					"id": "34341",
					"name": "Behrouz Biryani",
					"city": "4",
					"slugs": {
						"restaurant": "behrouz-biryani-new-kondli-sector-18-2",
						"city": "delhi"
					},
					"cloudinaryImageId": "zajzlb10h1bnvrcz7wg0",
					"address": "Plot No. B 1/40 and 41, First Floor, New kondli , Mayur Vihar Pin code 110096",
					"locality": "Kondli",
					"areaName": "Mayur Vihar Phase 3",
					"costForTwo": "50000",
					"costForTwoMessage": "₹500 FOR TWO",
					"cuisines": [
						"Biryani",
						"North Indian",
						"Kebabs",
						"Mughlai",
						"Beverages",
						"Desserts"
					],
					"avgRating": 4.3,
					"feeDetails": {},
					"avgRatingString": "4.3",
					"totalRatingsString": "10K+",
					"sla": {
						"deliveryTime": 36,
						"minDeliveryTime": 35,
						"maxDeliveryTime": 40,
						"lastMileTravel": 4,
						"serviceability": "SERVICEABLE",
						"rainMode": "RAIN_MODE_NONE",
						"slaString": "35-40 MINS",
						"lastMileTravelString": "4.0 km",
						"iconType": "ICON_TYPE_EMPTY"
					},
					"availability": {
						"opened": true,
						"restaurantClosedMeta": {}
					},
					"badges": {
						"imageBadges": [
							{
								"imageId": "Rxawards/_CATEGORY-Biryani.png",
								"description": "Delivery!"
							}
						]
					},
					"aggregatedDiscountInfoV3": {
						"header": "ITEMS",
						"subHeader": "AT ₹99",
						"logoCtx": {
							"text": "BENEFITS"
						}
					},
					"ratingSlab": "RATING_SLAB_5",
					"orderabilityCommunication": {
						"title": {},
						"subTitle": {},
						"message": {},
						"customIcon": {},
						"commsStyling": {}
					},
					"cartOrderabilityNudgeBanner": {
						"parameters": {},
						"presentation": {}
					},
					"externalRatings": {
						"aggregatedRating": {
							"rating": "--"
						}
					},
					"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
					"featuredSectionInfo": {
						"sectionTitle": "More"
					}
				},
				"analytics": {
					"screenName": "explore",
					"context": "{\"tid\":\"undefined\",\"grid\":\"71696304-e195-4a7e-b00c-56f8bc87bc24\",\"queryUniqueId\":\"a47bb241-ea36-ae6e-5142-58e5ada98706\",\"query\":\"veg biryani\"}",
					"objectValue": "34341",
					"impressionObjectName": "impression-restaurant",
					"clickObjectName": "click-restaurant"
				},
				"ctaWithParams": {
					"link": "swiggy://menu",
					"type": "DEEPLINK",
					"params": {
						"isSld": "false",
						"sourceRequestId": "38f552aa57af8f0b97d9c46fde31ec55",
						"restaurant_id": "34341",
						"query": "veg biryani",
						"sourceSessionId": "hsz583c9-1bc5-40c2-b07a-2d5e741bd6c5",
						"source": "SEARCH"
					}
				}
			}
		}
	},
	{
		"card": {
			"card": {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
				"info": {
					"id": "866575",
					"name": "Biryani By Kilo",
					"city": "4",
					"slugs": {
						"restaurant": "biryani-by-kilo-khasra-no-20-patparganj-mayur-vihar",
						"city": "delhi"
					},
					"cloudinaryImageId": "2923a7a58547cde7bc49baf03fe0895a",
					"address": "First floor plot no-230, khasra no-20 Patparganj, Mayur Vihar-1, East New Delhi, Delhi 110091",
					"locality": "Patparganj",
					"areaName": "Mayur Vihar",
					"costForTwo": "70000",
					"costForTwoMessage": "₹700 FOR TWO",
					"cuisines": [
						"Biryani",
						"Hyderabadi",
						"Kebabs",
						"Mughlai",
						"Desserts"
					],
					"avgRating": 4.3,
					"feeDetails": {},
					"avgRatingString": "4.3",
					"totalRatingsString": "544",
					"promoted": true,
					"adTrackingId": "cid=22650325~p=5~adgrpid=22650325#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=866575~st=veg biryani~eid=b50a028a-cf39-41b1-9fdb-8b37d61296d8~srvts=1734243089103",
					"sla": {
						"deliveryTime": 49,
						"minDeliveryTime": 45,
						"maxDeliveryTime": 50,
						"lastMileTravel": 2.3,
						"serviceability": "SERVICEABLE",
						"rainMode": "RAIN_MODE_NONE",
						"slaString": "45-50 MINS",
						"lastMileTravelString": "2.3 km",
						"iconType": "ICON_TYPE_EMPTY"
					},
					"availability": {
						"opened": true,
						"restaurantClosedMeta": {}
					},
					"badges": {
						"imageBadges": [
							{
								"imageId": "newg.png",
								"description": "Gourmet"
							}
						]
					},
					"aggregatedDiscountInfoV3": {
						"header": "ITEMS",
						"subHeader": "AT ₹199",
						"logoCtx": {
							"text": "BENEFITS"
						}
					},
					"ratingSlab": "RATING_SLAB_5",
					"orderabilityCommunication": {
						"title": {},
						"subTitle": {},
						"message": {},
						"customIcon": {},
						"commsStyling": {}
					},
					"cartOrderabilityNudgeBanner": {
						"parameters": {},
						"presentation": {}
					},
					"externalRatings": {
						"aggregatedRating": {
							"rating": "--"
						}
					},
					"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
					"featuredSectionInfo": {
						"sectionTitle": "More"
					},
					"campaignId": "22650325"
				},
				"analytics": {
					"screenName": "explore",
					"context": "{\"tid\":\"undefined\",\"grid\":\"71696304-e195-4a7e-b00c-56f8bc87bc24\",\"queryUniqueId\":\"a47bb241-ea36-ae6e-5142-58e5ada98706\",\"query\":\"veg biryani\",\"adTrackingId\":\"cid=22650325~p=5~adgrpid=22650325#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=866575~st=veg biryani~eid=b50a028a-cf39-41b1-9fdb-8b37d61296d8~srvts=1734243089103\"}",
					"objectValue": "866575",
					"impressionObjectName": "impression-restaurant-ad",
					"clickObjectName": "click-restaurant-ad"
				},
				"ctaWithParams": {
					"link": "swiggy://menu",
					"type": "DEEPLINK",
					"params": {
						"restaurant_id": "866575",
						"query": "veg biryani",
						"sourceSessionId": "hsz583c9-1bc5-40c2-b07a-2d5e741bd6c5",
						"source": "SEARCH",
						"isSld": "false",
						"sourceRequestId": "38f552aa57af8f0b97d9c46fde31ec55"
					}
				}
			}
		}
	},
	{
		"card": {
			"card": {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
				"info": {
					"id": "186223",
					"name": "The Biryani Life",
					"city": "4",
					"slugs": {
						"restaurant": "the-biryani-life-new-kondli-sector-18",
						"city": "delhi"
					},
					"cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/11/13/1d6737f9-4397-403c-80c2-782e10c14a5e_9fbd960c-bc6c-4b28-bb7e-cc7a700c2e75.jpeg",
					"address": "Plot No. B 1/40 and 41, First Floor, New kondli , Mayur Vihar Pin code 110096",
					"locality": "Kondli",
					"areaName": "Mayur Vihar Phase 3",
					"costForTwo": "25000",
					"costForTwoMessage": "₹250 FOR TWO",
					"cuisines": [
						"Biryani",
						"Mughlai",
						"Lucknowi",
						"Hyderabadi",
						"Kebabs",
						"Desserts",
						"Beverages"
					],
					"avgRating": 3.7,
					"feeDetails": {},
					"avgRatingString": "3.7",
					"totalRatingsString": "543",
					"sla": {
						"deliveryTime": 34,
						"minDeliveryTime": 30,
						"maxDeliveryTime": 35,
						"lastMileTravel": 4,
						"serviceability": "SERVICEABLE",
						"rainMode": "RAIN_MODE_NONE",
						"slaString": "30-35 MINS",
						"lastMileTravelString": "4.0 km",
						"iconType": "ICON_TYPE_EMPTY"
					},
					"availability": {
						"opened": true,
						"restaurantClosedMeta": {}
					},
					"badges": {},
					"aggregatedDiscountInfoV3": {
						"header": "ITEMS",
						"subHeader": "AT ₹159",
						"logoCtx": {
							"text": "BENEFITS"
						}
					},
					"ratingSlab": "RATING_SLAB_4",
					"orderabilityCommunication": {
						"title": {},
						"subTitle": {},
						"message": {},
						"customIcon": {},
						"commsStyling": {}
					},
					"cartOrderabilityNudgeBanner": {
						"parameters": {},
						"presentation": {}
					},
					"externalRatings": {
						"aggregatedRating": {
							"rating": "--"
						}
					},
					"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
					"featuredSectionInfo": {
						"sectionTitle": "More"
					}
				},
				"analytics": {
					"screenName": "explore",
					"context": "{\"tid\":\"undefined\",\"grid\":\"71696304-e195-4a7e-b00c-56f8bc87bc24\",\"queryUniqueId\":\"a47bb241-ea36-ae6e-5142-58e5ada98706\",\"query\":\"veg biryani\"}",
					"objectValue": "186223",
					"impressionObjectName": "impression-restaurant",
					"clickObjectName": "click-restaurant"
				},
				"ctaWithParams": {
					"link": "swiggy://menu",
					"type": "DEEPLINK",
					"params": {
						"query": "veg biryani",
						"sourceSessionId": "hsz583c9-1bc5-40c2-b07a-2d5e741bd6c5",
						"source": "SEARCH",
						"isSld": "false",
						"sourceRequestId": "38f552aa57af8f0b97d9c46fde31ec55",
						"restaurant_id": "186223"
					}
				}
			}
		}
	},
	{
		"card": {
			"card": {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
				"info": {
					"id": "900345",
					"name": "Aggarwal Biryani Corner",
					"city": "4",
					"slugs": {
						"restaurant": "aggarwal-biryani-corner-mayur-vihar-mayur-vihar",
						"city": "delhi"
					},
					"cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/14/d0c488f8-ab29-4b96-aad6-1a43551b8c3c_20f47ac1-9ecf-45e4-b97c-9c145fdb5e94.jpg",
					"address": "17/227, Block-17, Trilok Puri, Chilla Saroda Khadar, Mayur Vihar, East Delhi - 110091",
					"locality": "Trilok Puri",
					"areaName": "Mayur Vihar",
					"costForTwo": "15000",
					"costForTwoMessage": "₹150 FOR TWO",
					"cuisines": [
						"Biryani"
					],
					"avgRating": 3.6,
					"feeDetails": {},
					"avgRatingString": "3.6",
					"totalRatingsString": "32",
					"promoted": true,
					"adTrackingId": "cid=22588398~p=6~adgrpid=22588398#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=900345~st=veg biryani~eid=90bb3f06-7818-4e52-995b-45f3382878cd~srvts=1734243089103",
					"sla": {
						"deliveryTime": 48,
						"minDeliveryTime": 45,
						"maxDeliveryTime": 50,
						"lastMileTravel": 1.4,
						"serviceability": "SERVICEABLE",
						"rainMode": "RAIN_MODE_NONE",
						"slaString": "45-50 MINS",
						"lastMileTravelString": "1.4 km",
						"iconType": "ICON_TYPE_EMPTY"
					},
					"availability": {
						"opened": true,
						"restaurantClosedMeta": {}
					},
					"badges": {},
					"aggregatedDiscountInfoV3": {
						"header": "ITEMS",
						"subHeader": "AT ₹179",
						"logoCtx": {
							"text": "BENEFITS"
						}
					},
					"ratingSlab": "RATING_SLAB_4",
					"orderabilityCommunication": {
						"title": {},
						"subTitle": {},
						"message": {},
						"customIcon": {},
						"commsStyling": {}
					},
					"cartOrderabilityNudgeBanner": {
						"parameters": {},
						"presentation": {}
					},
					"externalRatings": {
						"aggregatedRating": {
							"rating": "--"
						}
					},
					"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
					"featuredSectionInfo": {
						"sectionTitle": "More"
					},
					"campaignId": "22588398"
				},
				"analytics": {
					"screenName": "explore",
					"context": "{\"tid\":\"undefined\",\"grid\":\"71696304-e195-4a7e-b00c-56f8bc87bc24\",\"queryUniqueId\":\"a47bb241-ea36-ae6e-5142-58e5ada98706\",\"query\":\"veg biryani\",\"adTrackingId\":\"cid=22588398~p=6~adgrpid=22588398#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=900345~st=veg biryani~eid=90bb3f06-7818-4e52-995b-45f3382878cd~srvts=1734243089103\"}",
					"objectValue": "900345",
					"impressionObjectName": "impression-restaurant-ad",
					"clickObjectName": "click-restaurant-ad"
				},
				"ctaWithParams": {
					"link": "swiggy://menu",
					"type": "DEEPLINK",
					"params": {
						"sourceRequestId": "38f552aa57af8f0b97d9c46fde31ec55",
						"restaurant_id": "900345",
						"query": "veg biryani",
						"sourceSessionId": "hsz583c9-1bc5-40c2-b07a-2d5e741bd6c5",
						"source": "SEARCH",
						"isSld": "false"
					}
				}
			}
		}
	},
	{
		"card": {
			"card": {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
				"info": {
					"id": "605414",
					"name": "Dum Safar Biryani",
					"city": "4",
					"slugs": {
						"restaurant": "dum-safar-biryani-vivek-vihar-dilshad-gardens",
						"city": "delhi"
					},
					"cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/11/e456f0c0-69e8-463e-b874-34122d644b15_d15033d4-539f-4ac4-8435-fc00db12c89c.png_compressed",
					"address": "IST FLOOR B-20, 21,126/10 GURUNANAKPURA, OPP. V3S MALL LAXMI NAGAR, PREET VIHAR, East , Delhi-110092",
					"locality": "LAXMI NAGAR",
					"areaName": "V3S MALL",
					"costForTwo": "50000",
					"costForTwoMessage": "₹500 FOR TWO",
					"cuisines": [
						"Biryani",
						"Kebabs",
						"Tandoor",
						"Indian",
						"Desserts"
					],
					"avgRating": 4,
					"feeDetails": {},
					"avgRatingString": "4.0",
					"totalRatingsString": "228",
					"sla": {
						"deliveryTime": 36,
						"minDeliveryTime": 35,
						"maxDeliveryTime": 40,
						"lastMileTravel": 4.9,
						"serviceability": "SERVICEABLE",
						"rainMode": "RAIN_MODE_NONE",
						"slaString": "35-40 MINS",
						"lastMileTravelString": "4.9 km",
						"iconType": "ICON_TYPE_EMPTY"
					},
					"availability": {
						"opened": true,
						"restaurantClosedMeta": {}
					},
					"badges": {},
					"aggregatedDiscountInfoV3": {
						"header": "₹125 OFF",
						"subHeader": "ABOVE ₹599",
						"discountTag": "FLAT DEAL",
						"logoCtx": {
							"text": "BENEFITS"
						}
					},
					"ratingSlab": "RATING_SLAB_4",
					"orderabilityCommunication": {
						"title": {},
						"subTitle": {},
						"message": {},
						"customIcon": {},
						"commsStyling": {}
					},
					"cartOrderabilityNudgeBanner": {
						"parameters": {},
						"presentation": {}
					},
					"externalRatings": {
						"aggregatedRating": {
							"rating": "--"
						}
					},
					"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
					"featuredSectionInfo": {
						"sectionTitle": "More"
					}
				},
				"analytics": {
					"screenName": "explore",
					"context": "{\"tid\":\"undefined\",\"grid\":\"71696304-e195-4a7e-b00c-56f8bc87bc24\",\"queryUniqueId\":\"a47bb241-ea36-ae6e-5142-58e5ada98706\",\"query\":\"veg biryani\"}",
					"objectValue": "605414",
					"impressionObjectName": "impression-restaurant",
					"clickObjectName": "click-restaurant"
				},
				"ctaWithParams": {
					"link": "swiggy://menu",
					"type": "DEEPLINK",
					"params": {
						"sourceRequestId": "38f552aa57af8f0b97d9c46fde31ec55",
						"restaurant_id": "605414",
						"query": "veg biryani",
						"sourceSessionId": "hsz583c9-1bc5-40c2-b07a-2d5e741bd6c5",
						"source": "SEARCH",
						"isSld": "false"
					}
				}
			}
		}
	},
	{
		"card": {
			"card": {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
				"info": {
					"id": "521211",
					"name": "Thalairaj Biryani",
					"city": "10459",
					"slugs": {
						"restaurant": "thalaivars-biryani-indirapuram-indirapuram",
						"city": "delhi"
					},
					"cloudinaryImageId": "ba2duypwxeqvtwk6vlig",
					"address": "Shop No. SB 172, SB 173 UGF Jaipuria Sunrise, Plaza, Plot No. 12A, Ahinsha Khand, Indirapuram, Ghaziabad Nagar Nigam, Zone-11, Ghaziabad, Uttar Pradesh-201014",
					"locality": "Ahinsa Khand",
					"areaName": "Indirapuram",
					"costForTwo": "30000",
					"costForTwoMessage": "₹300 FOR TWO",
					"cuisines": [
						"Andhra",
						"Biryani",
						"Hyderabadi",
						"South Indian",
						"Indian",
						"Kebabs",
						"Snacks",
						"Beverages"
					],
					"avgRating": 4.5,
					"feeDetails": {},
					"avgRatingString": "4.5",
					"totalRatingsString": "4.0K+",
					"promoted": true,
					"adTrackingId": "cid=22666343~p=7~adgrpid=22666343#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=521211~st=veg biryani~eid=2f09b4aa-ae58-4353-92ae-651f1dcbfd90~srvts=1734243089103",
					"sla": {
						"deliveryTime": 46,
						"minDeliveryTime": 45,
						"maxDeliveryTime": 50,
						"lastMileTravel": 10,
						"serviceability": "SERVICEABLE",
						"rainMode": "RAIN_MODE_NONE",
						"slaString": "45-50 MINS",
						"lastMileTravelString": "10.0 km",
						"iconType": "ICON_TYPE_EMPTY"
					},
					"availability": {
						"opened": true,
						"restaurantClosedMeta": {}
					},
					"badges": {},
					"aggregatedDiscountInfoV3": {
						"header": "20% OFF",
						"subHeader": "ABOVE ₹1000",
						"discountTag": "FLAT DEAL",
						"logoCtx": {
							"text": "BENEFITS"
						}
					},
					"ratingSlab": "RATING_SLAB_5",
					"orderabilityCommunication": {
						"title": {},
						"subTitle": {},
						"message": {},
						"customIcon": {},
						"commsStyling": {}
					},
					"cartOrderabilityNudgeBanner": {
						"parameters": {},
						"presentation": {}
					},
					"externalRatings": {
						"aggregatedRating": {
							"rating": "--"
						}
					},
					"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
					"featuredSectionInfo": {
						"sectionTitle": "More"
					},
					"campaignId": "22666343"
				},
				"analytics": {
					"screenName": "explore",
					"context": "{\"tid\":\"undefined\",\"grid\":\"71696304-e195-4a7e-b00c-56f8bc87bc24\",\"queryUniqueId\":\"a47bb241-ea36-ae6e-5142-58e5ada98706\",\"query\":\"veg biryani\",\"adTrackingId\":\"cid=22666343~p=7~adgrpid=22666343#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=521211~st=veg biryani~eid=2f09b4aa-ae58-4353-92ae-651f1dcbfd90~srvts=1734243089103\"}",
					"objectValue": "521211",
					"impressionObjectName": "impression-restaurant-ad",
					"clickObjectName": "click-restaurant-ad"
				},
				"ctaWithParams": {
					"link": "swiggy://menu",
					"type": "DEEPLINK",
					"params": {
						"isSld": "false",
						"sourceRequestId": "38f552aa57af8f0b97d9c46fde31ec55",
						"restaurant_id": "521211",
						"query": "veg biryani",
						"sourceSessionId": "hsz583c9-1bc5-40c2-b07a-2d5e741bd6c5",
						"source": "SEARCH"
					}
				}
			}
		}
	},
	{
		"card": {
			"card": {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
				"info": {
					"id": "650504",
					"name": "ZAZA Mughal Biryani",
					"city": "4",
					"slugs": {
						"restaurant": "zaza-22-spice-biryani-mayur-vihar-mayur-vihar",
						"city": "delhi"
					},
					"cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/10/17/2447f477-ce7c-4d28-a463-384b2b00225d_b46c0af6-2430-4cf5-a4dd-b8ef495625f8.jpg",
					"address": "E-68A, First floor,Pandav Nagar Main Road,Above State Bank of Patiala,Patparganj,New delhi-110091",
					"locality": "Mayur Vihar",
					"areaName": "Phase1",
					"costForTwo": "25000",
					"costForTwoMessage": "₹250 FOR TWO",
					"cuisines": [
						"Biryani",
						"North Indian",
						"Awadhi"
					],
					"avgRating": 4.2,
					"feeDetails": {},
					"avgRatingString": "4.2",
					"totalRatingsString": "516",
					"sla": {
						"deliveryTime": 25,
						"minDeliveryTime": 20,
						"maxDeliveryTime": 30,
						"lastMileTravel": 3,
						"serviceability": "SERVICEABLE",
						"rainMode": "RAIN_MODE_NONE",
						"slaString": "20-30 MINS",
						"lastMileTravelString": "3.0 km",
						"iconType": "ICON_TYPE_EMPTY"
					},
					"availability": {
						"opened": true,
						"restaurantClosedMeta": {}
					},
					"badges": {
						"textExtendedBadges": [
							{
								"iconId": "guiltfree/GF_Logo_android_3x",
								"shortDescription": "options available",
								"fontColor": "#7E808C"
							}
						]
					},
					"aggregatedDiscountInfoV3": {
						"header": "ITEMS",
						"subHeader": "AT ₹139",
						"logoCtx": {
							"text": "BENEFITS"
						}
					},
					"ratingSlab": "RATING_SLAB_5",
					"orderabilityCommunication": {
						"title": {},
						"subTitle": {},
						"message": {},
						"customIcon": {},
						"commsStyling": {}
					},
					"cartOrderabilityNudgeBanner": {
						"parameters": {},
						"presentation": {}
					},
					"externalRatings": {
						"aggregatedRating": {
							"rating": "--"
						}
					},
					"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
					"featuredSectionInfo": {
						"sectionTitle": "More"
					}
				},
				"analytics": {
					"screenName": "explore",
					"context": "{\"tid\":\"undefined\",\"grid\":\"71696304-e195-4a7e-b00c-56f8bc87bc24\",\"queryUniqueId\":\"a47bb241-ea36-ae6e-5142-58e5ada98706\",\"query\":\"veg biryani\"}",
					"objectValue": "650504",
					"impressionObjectName": "impression-restaurant",
					"clickObjectName": "click-restaurant"
				},
				"ctaWithParams": {
					"link": "swiggy://menu",
					"type": "DEEPLINK",
					"params": {
						"restaurant_id": "650504",
						"query": "veg biryani",
						"sourceSessionId": "hsz583c9-1bc5-40c2-b07a-2d5e741bd6c5",
						"source": "SEARCH",
						"isSld": "false",
						"sourceRequestId": "38f552aa57af8f0b97d9c46fde31ec55"
					}
				}
			}
		}
	},
];

//not using keys (not acceptable) <<<<< index as key <<<unique id (best practices)

const Body = () =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* <RestaurantCard 
                    resName="Meghana Foods" 
                    cuisine="Hyderabadi Veg Biryani" 
                    starRating="4.4 Stars" 
                    deliveryTimes="38 mins"
                    imgSrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/zajzlb10h1bnvrcz7wg0"
                /> */}
				{
					resList.map((restaurant,index)=>
					(<RestaurantCard key={restaurant.card.card.info.id} resData={restaurant}/>))
				}
            </div>
        </div>
    )
}
const AppLayout = ()=>{
    return (
        <div className="app">
            {<Header/>}
            {<Body/>}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);