import { LOGO_URL } from "../utils/constants";
import { use, useState,useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () =>{
    const [btnNameReact,setBtnNameReact]= useState("Login");
    const onlineStatus =useOnlineStatus();
    const {loggedInUser}=useContext(UserContext);
    const cartItems= useSelector((store)=>store.cart.items);
    return (
        <div className="flex justify-between shadow-lg bg-pink-50 sm:bg-yellow-100 lg:bg-green-100">
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL} alt='logo'/>
            </div>
            <div className="flex items-center ">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status : {onlineStatus? "✅" :"🔴"}
                    </li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold text-xl"><Link to="/cart">Cart({cartItems.length})</Link></li>
                    <button className="login" onClick={()=>{
                      btnNameReact==='Login'?setBtnNameReact("Logout"):setBtnNameReact("Login") ;
                    }}>{btnNameReact}</button>
                    <li className="font-bold px-4">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;