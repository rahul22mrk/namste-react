import React from "react";
import ReactDOM from "react-dom/client";
/*Chapter 03 - Laying the Foundation
Topics
● JSX
● React.createElement vs JSX
● Benefits of JSX
● Behind the Scenes of JSX
● Babel & parcel role in JSX
● Components
● Functional Components
○ Composing Components


Assignment
● What is JSX?
● Superpowers of JSX
● Role of type attribute in script tag? What options can I use there?
● {TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX



Coding Assignment:
● Create a Nested header Element using React.createElement(h1,h2,h3 inside a
div with class “title”)
○ Create the same element using JSX
○ Create a functional component of the same with JSX
○ Pass attributes into the tag in JSX
○ Composition of Component(Add a component inside another)
○ {TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX */




/* Create a Nested header Element using React.createElement(h1,h2,h3 inside a
    div with class “title”)*/

    const reactHeading = React.createElement(
        "div",
        {class:"title"},
        [
            React.createElement("h1",{id:"heading"},"H1 Heading..."),
            React.createElement("h2",{id:"heading"},"This is h2 heading"),
            React.createElement("h3",{id:"heading"},"This is h3 heading")
        ]);


      /*  ○ Create the same element using JSX*/
      const jsxHeading3 = (<div className="title">
        <h1>This is h1 tag</h1>
        <h2>This is h2 tag</h2>
        <h3>This is h3 tag</h3>
      </div>);

    /*Create a functional component of the same with JSX */
    const HeadingComponent3 = () => (
        <div className="title2">
            <h1 id="heading31">This is h1 tag</h1>
            <h2 id="heading32">This is h2 tag</h2>
            <h3 id="heading33">This is h3 tag</h3>
        </div>
    );

    /*Pass attributes into the tag in JSX */
    const HeadingComponent4 = () => {
        return (
            <div className="title">
                <h1>This is h1 through pass attributes</h1>
                <h2>This is h2 through pass attributes</h2>
                <h3>This is h3 through pass attributes</h3>
            </div>
        )
    };

    /*Composition of Component(Add a component inside another)*/
    const ChildComponentH1=()=>(
        <h1>This is h1 compo.</h1>
    );
    const ChildComponentH2=()=>(
        <h1>This is h2 compo.</h1>
    );
    const ChildComponentH3=()=>(
        <h1>This is h3 compo.</h1>
    );

    const ParentComponent = ()=>(
        <div className="title">
            <ChildComponentH1></ChildComponentH1>
            <ChildComponentH2/>
            {ChildComponentH3()}
        </div>
    );


    /*○ {TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX*/
/**
 * 1. {TitleComponent} - ERROR: (Each child in a list should have a unique "key" prop.

Check the top-level render call using <div>. See https://react.dev/link/warning-keys for more information. index.js:1:37330
Functions are not valid as a React child. This may happen if you return Title instead of <Title /> from render. Or maybe you meant to call this function rather than return it.
  <div>{Title}</div>)
 * 
 * 2. {<TitleComponent/>}
 * 3.{<TitleComponent></TitleComponent>}
 * 
 * 
 */

  const ParentComponent2 = ()=>(
    <div className="title">
        {ChildComponentH2}
        {<ChildComponentH2></ChildComponentH2>}
        {<ChildComponentH2/>}
    </div>
);

/*Create a Header Component from scratch using Functional Components with
JSX
○ Add a Logo on left
○ Add a search bar in middle
○ Add User icon on right
○ Add CSS to make it look nice*/

/*Create a Header Component from scratch using Functional Components with
JSX*/
const LeftLogoComponent =()=>(
     /* Logo on the left */
     <div className="logo">
        <img src="logo.png" alt="Logo" />
    </div>
);

const SearchBarComponent =()=>(
    /* Search Bar in the middle */
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
    </div>
);

const UserIconComponent =()=>(
     /* User Icon on the right */
     <div className="user-icon">
     <img src="user-icon.png" alt="User Icon" />
   </div>
);
const HeaderComponentNew = ()=>(
    <div className="header">
        <LeftLogoComponent></LeftLogoComponent>
        {SearchBarComponent()}
        <UserIconComponent/>
    </div>
);












      /*Rendering the data */
        const episode3Root = ReactDOM.createRoot(document.getElementById("episode3"));
       // episode3Root.render(reactHeading);
       // episode3Root.render(jsxHeading3);
       // episode3Root.render(<HeadingComponent3/>);
        episode3Root.render(<HeaderComponentNew/>);
        
       /* References
        ● Babel: https://babeljs.io/
        ● Attribute Type:
        https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type
        ● JS Modules:
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
        ● Babel Playground: https://babeljs.io/repl#
        ● React without JSX: https://reactjs.org/docs/react-without-jsx.html*/