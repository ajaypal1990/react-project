/**
 *  <div id="parent">
 *      <div id = "child">
 *          <h1>I'm in h1 tag</h1>
 *      </div>
 *  </div> 
 * 
 * 
 */

const parent1=React.createElement("div",{id:"parent"}
,[React.createElement("div",{id:"child"},React.createElement("h1",{},"Hi I am in h2 Tag"))]);

const parent = React.createElement("div",
    { id: "parent" }, [React.createElement("div",
        { id: "child1" }, [React.createElement("h1", {}, "I am in H1 Tag")
        , React.createElement("h2", {}, "I am in H2 Tag")]
    ), React.createElement("div",
        { id: "child2" }, [React.createElement("h1", {}, "I am in H1 Tag")
        , React.createElement("h2", {}, "I am in H2 Tag")]
    )]);


const heading = React.createElement("h1",
    { id: "heading", xyz: "abc" }, "Hello world from React!");

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);