import React from "react";
import ReactDOM from "react-dom/client"; // React 18+ import
import logo from './images/logo.jpg';
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

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt='logo'/>
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
const RestaurantCard = (props) => {
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-logo" src={props.imgSrc} />
            <h3>{props.resName} </h3>
            <h4>{props.cuisine}</h4>
            <h5>{props.starRating}</h5>
            <h5>{props.deliveryTimes}</h5>
        </div>
    )
}
const Body = () =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard 
                    resName="Meghana Foods" 
                    cuisine="Hyderabadi Veg Biryani" 
                    starRating="4.4 Stars" 
                    deliveryTimes="38 mins"
                    imgSrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/zajzlb10h1bnvrcz7wg0"
                />
                
                <RestaurantCard 
                    resName="KFC" 
                    cuisine="Veg Dum Hyderabadi Biryani" 
                    starRating="4.2 Stars" 
                    deliveryTimes="25-30 mins" 
                    imgSrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/2380b9e8ee23f594ae181610af93bdf4"
                />
                
                
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