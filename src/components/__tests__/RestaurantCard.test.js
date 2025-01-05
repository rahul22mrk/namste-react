import { render,screen } from "@testing-library/react";
import RestaurantCard,{withPromotedLabel} from "../RestaurantCard";
import resList from "../../utils/mockData";
import "@testing-library/jest-dom";
describe("Restaurant Card Test Cases",()=>{
    it("should render restaurant cards with props data",()=>{
        const restLists = resList;
        render(
            <RestaurantCard resData={restLists[0]}/>
        );
        const restName=screen.getByText("Punjabi Angithi (Vegorama Group)");
        expect(restName).toBeInTheDocument();
    });

    it("should render with Promoted Label",()=>{
        const restLists = resList;
        const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
        render(
            <RestaurantCardPromoted resData={restLists[0]}/>
        );
        const promotedRest=screen.getByText("Promoted");
        expect(promotedRest).toBeInTheDocument();
    });
});