import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases : ",()=>{
    test("should load contact us Component",()=>{
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        // Assertion
        expect(heading).toBeInTheDocument();
    });
    
    test("should load button inside contact  Component",()=>{
        render(<Contact/>);
        const button = screen.getByRole("button");
        // Assertion
        expect(button).toBeInTheDocument();
    });
    
    test("should load 2 input box inside contact  Component",()=>{
        render(<Contact/>);
        const textBoxes = screen.getAllByRole("textbox");
        // Assertion
        expect(textBoxes.length).toBe(2);
    });
});