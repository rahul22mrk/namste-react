import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = ()=>{
    const dispatch = useDispatch();
    const clearCartHandle = ()=>{
        dispatch(clearCart());
    };
    const cartItems = useSelector((store)=>store.cart.items);
    return (
        <div className="m-5 p-5 text-center">
            <h1 className="font-bold text-center text-2xl">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black text-white rounded-lg"
                 onClick={clearCartHandle}>Clear Cart</button>
                 {cartItems.length===0 && <h1>Cart is empty, Add Items to the cart</h1>}
                <ItemList items={cartItems}></ItemList>
            </div>
        </div>
    );
}

export default Cart;