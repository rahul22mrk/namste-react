import { fireEvent, render,screen } from "@testing-library/react";
import Cart from "../Cart";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react";
import { json } from "express";
import MockRestMenu from "../../utils/MockRestMenu.json";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router";
global.fetch = jest.fn(()=>
     Promise.resolve({
        ok :true,
        json: () => Promise.resolve(MockRestMenu),
    })
);
describe("Cart Component Test Cases",()=>{

    it("should load restaurant menu component",async()=>{
        await act(async ()=> render(
            <RestaurantMenu/>
        ));
        const restMenuLoaded = screen.getByText("Hyderabadi Point");
        expect(restMenuLoaded).toBeInTheDocument();
        
       
    });

    it("should item add in cart",async()=>{
        await act(async ()=> render(
            <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/>
                <Cart/>
            </Provider>
            </BrowserRouter>
        ));
        const accordionFind = screen.getByText("Indian(14)");
        fireEvent.click(accordionFind);
        const findRestItems = screen.getAllByTestId("restItems");
        //expect(findRestItems.length).toBe(14);
        const addBtns = screen.getAllByRole("button",{name:'Add +'})
        fireEvent.click(addBtns[0]);
       // fireEvent.click(addBtns[0]);
        const checkCartItem = screen.getByText("Cart(1)");
        //expect(checkCartItem).toBeInTheDocument();
        //check cart items
       const findCartItems = screen.getAllByTestId("restItems");
        //expect(findCartItems.length).toBe(16);
        const clearCartBtn = screen.getByRole("button",{name:"Clear Cart"});
        fireEvent.click(clearCartBtn);
        
        const afterCartClear =  screen.getAllByTestId("restItems");
        expect(afterCartClear.length).toBe(14);
    });
    
  
});