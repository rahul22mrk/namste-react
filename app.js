import React from "react";
import ReactDOM from "react-dom/client"; // React 18+ import


//React.createElement => Object => HTMLElement (render)
const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Namaste React !"
);

//React Element
const heading2 = (
    <h1 className="head" tabIndex="5">Namaste React using JSX</h1>
);
console.log(heading);
//jsx : is not a html in js,
//jsx : HTML/XML like Syntax
//JSX: Babel transpile it to React.createElement => ReactElement - Js Object => HTMLElement  
const jsxHeading = (<h1 id="heading" className="head" 
tabIndex="5">Namaste React using JSX!</h1>);

//React Component
// Class Based Component - OLD
// Functional Component - NEW

//React Functional Component : normal javascript function
const HeadingComponent1 = ()=>{
    return <h1 className="heading">Namaste React Functional HeadingComponent</h1>
};



const fn = ()=>true;
const fn2= ()=>{
    return true;
}
//fn and fn2 both are same
//functional component
const Title = () =>(
    <h1 id="heading">Namaste React Using JSX</h1>
);

const elem = <span>React Element</span>
//react element
const title = (
    <h1 id="head">
        {elem}
        Namaste React using JSX - React Element
    </h1>
);
//in jsx 
// {} - inside this curly braces is js code 
// <> - inside this consider as jsx
//component composition
const HeadingComponent2 = () => (
    <div id="container">
        <Title/>
        {Title()}
        <Title></Title>
        
        {title}
        <h2>{10-"1"}</h2>
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);
//heading component rendering
root.render(<HeadingComponent2/>);