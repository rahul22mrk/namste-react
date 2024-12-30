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
        <div className="m-4 p-4 w-[300px] "style={{backgroundColor:"#fofofo"}}>
            <img className="res-logo" alt="res-logo" src={CDN_IMG_URL+cloudinaryImageId} />
            <h3>{name} </h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} mins</h4>
			<h4>₹{costForTwo /100} FOR TWO</h4>
        </div>
    )
}

export default RestaurantCard;