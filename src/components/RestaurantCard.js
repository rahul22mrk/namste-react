import { CDN_IMG_URL } from "../utils/constants";
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
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg" alt="res-logo" src={CDN_IMG_URL+cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name} </h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} mins</h4>
			<h4>₹{costForTwo /100} FOR TWO</h4>
        </div>
    )
}

//Higher Order Component

// input: RestaurantCard => Output : RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard resData={props.resData}/>
            </div>
        );
    };
};

export default RestaurantCard;