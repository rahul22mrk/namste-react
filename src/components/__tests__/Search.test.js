import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom"
import { json } from "express";
import MockSwiggyRestaurants  from "../../utils/MockSwiggyRestaurants.json";
import { act } from "react";
import { BrowserRouter } from "react-router";
global.fetch=jest.fn(()=>{
    return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(MockSwiggyRestaurants),
        
    });
});
describe("Body Component Test Cases : ",()=>{
    it("should render body component",async()=>{
        await act(async ()=> render(
            <BrowserRouter>
        <Body/>
        </BrowserRouter>
        ));

        const searchBtn = screen.getByRole("button",{name:"Search"});
        const searchInput = screen.getByTestId("searchInput");
        fireEvent.change(searchInput,{target:{value:"Biryani Blue"}});
        fireEvent.click(searchBtn);
        const searchDataList= screen.getAllByTestId("restCard");
        expect(searchDataList.length).toBe(2);
    });
});