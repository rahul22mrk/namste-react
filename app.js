/**
 * <div id="parent">
 *      <div id="child">
 *          <h1> I'm a h1 tag</h1>
 *          <h2> I'm a h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h3> I'm a h3 tag</h3>
 *          <h4> I'm a h4 tag</h4>
 *      </div>
 * </div>
 * 
 * ReactElement(Obect) => HTML(Browser Understands)
 */

//First Create Parent
const parent = React.createElement("div",
     { id: "parent" },
     
     [
        React.createElement("div",{id:"child"},
        [
            //First children
            React.createElement("h1",
            {id:"heading"},"I'm a H1 tag"),

            //2nd child
            React.createElement("h2",{},"I'm sibling of h1")
        
        ]), //First Child of Parent
        React.createElement("div",{id:"child2"},
        [
            //First children
            React.createElement("h3",
            {},"I'm a H3 tag"),

            //2nd child
            React.createElement("h4",{},"I'm sibling of h3")
        
        ]), //2nd Child of Parent
    ]//children of parent close
);

//JSX - above code is too complex so make it easy and readable we will use jsx
//above is core jx fundamentals

     const root2 = ReactDOM.createRoot(document.getElementById("root"));
    root2.render(parent);
    console.log(parent);
//<!--Print Hello World using React-->

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React"
);
console.log("heading", heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("root", root);
//root.render(heading);
