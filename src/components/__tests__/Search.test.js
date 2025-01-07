import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom"
import { json } from "express";
import MockSwiggyRestaurants  from "../../utils/MockSwiggyRestaurants.json";
import { act } from "react";
import { BrowserRouter } from "react-router";
import { after } from "dom/lib/mutation";
global.fetch=jest.fn(()=>{
    return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(MockSwiggyRestaurants),
        
    });
});
describe("Body Component Test Cases : ",()=>{
    beforeAll(()=>{
       // console.log("Before All...");
    });
    beforeEach(()=>{
       // console.log("Before Each...");
    });

    afterAll(()=>{
        //console.log("After All...");
    });

    afterEach(()=>{
        //console.log("after Each");
    })

    it("should search list for biryani blue text input",async()=>{
        await act(async ()=> render(
            <BrowserRouter>
        <Body/>
        </BrowserRouter>
        ));
        //const beforeSearch = screen.getAllByTestId("restCard");
        //expect(beforeSearch.length).toBe(102);
        const searchBtn = screen.getByRole("button",{name:"Search"});
        const searchInput = screen.getByTestId("searchInput");
        fireEvent.change(searchInput,{target:{value:"Biryani Blue"}});
        fireEvent.click(searchBtn);
        const searchDataList= screen.getAllByTestId("restCard");
        expect(searchDataList.length).toBe(2);
    });

    it("should filter Top Rated Restaurants",async()=>{
        await act(async ()=> render(
            <BrowserRouter>
        <Body/>
        </BrowserRouter>
        ));
        const topRatedFilterBtn = screen.getByRole("button",{name:"Top Rated Restaurants"});
        fireEvent.click(topRatedFilterBtn);
        const filteredList= screen.getAllByTestId("restCard");
        expect(filteredList.length).toBe(23);
    });
});