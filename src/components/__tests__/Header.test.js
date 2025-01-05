import { fireEvent, render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router";
describe("Header Component Test Cases ",()=>{
    it("should render Header Component with login button ",()=>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
           );

           const loginBtn = screen.getByRole("button",{name:'Login'});
           //const loginBtn = screen.getByText("Login");
           expect(loginBtn).toBeInTheDocument();

    });
    it("should change Login Button to Logout onCLick ",()=>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
           );
           
           const loginBtn = screen.getByRole("button",{name:'Login'});
          fireEvent.click(loginBtn);
           const logoutBtn = screen.getByRole("button",{name:'Logout'});
           expect(logoutBtn).toBeInTheDocument();

    });
    it("should render Header Component with a cart 0 items ",()=>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
           );

           const cartItems =  screen.getByText("Cart(0)");
           expect(cartItems).toBeInTheDocument();

    })
    it("should render Header Component with a cart ",()=>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
           );

           const cartItems =  screen.getByText(/Cart/);
           expect(cartItems).toBeInTheDocument();

    })
});
