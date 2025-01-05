import { render } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import resList from "../../utils/mockData";

describe("Restaurant Card Test Cases",()=>{
    it("should render restaurant cards with props data",()=>{
        const restLists = resList;
        render(
            <RestaurantCard resData={restLists[0]}/>
        );
    });
});