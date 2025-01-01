import React,{lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client"; // React 18+ import
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

const Grocery = lazy(()=>import("./components/Grocery"));
const AppLayout = ()=>{
    const [userName,setUserName]=useState();

    useEffect(()=>{
        const userData={
            name:'rahul22mrk',
        }
        setUserName(userData.name);
    },[])
    return (
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
            <div className="app">
            <Header/>
            <Outlet/>
            </div>
        </UserContext.Provider>
    )
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element : <AppLayout/>,
        children:[
            {
                path:"/",
                element : <Body/>
            },
            {
                path:"/about",
                element : <About/>
            },{
                path:"/contact",
                element : <Contact/>
            },{
                path:"/grocery",
                element : <Suspense fallback={<h1>Testing</h1>}><Grocery/></Suspense>
            },{
                path:"/restaurants/:restId",
                element : <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);