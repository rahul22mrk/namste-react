import { CDN_IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const ItemList = ({items})=>{
    const dispatch = useDispatch();
    const addItemToCart =(item)=>{
        dispatch(addItem( item ));
    }
    return (
        <div>
                {items.map((item)=>(
                    <div data-testid="restItems" key={item?.card?.info?.id} 
                    className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                        
                        <div className="p-2 w-9/12">
                        <div >
                            <span>{item?.card?.info?.name}</span>
                            <span> - ₹{item?.card?.info?.price?item?.card?.info?.price/100:item?.card?.info?.defaultPrice/100}</span>
                        </div>
                        <div>
                            <p className="text-xs">{item?.card?.info?.description}</p>
                        </div>
                        </div>
                        <div className="w-3/12">
                            <div className="absolute">
                              <button className="p-2 mx-16 bg-black text-white shadow-lg rounded-lg" 
                              onClick={()=>addItemToCart(item)}>Add +</button>
                            </div>
                            <img className="w-full rounded-lg" alt="" src={CDN_IMG_URL+item?.card?.info?.imageId}></img>
                            
                        </div>
                    </div>
                ))}
        </div>
    );
};
export default ItemList;