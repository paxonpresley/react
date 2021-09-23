import React from "react";
import ReactDom from "react-dom";

// ! stateless function
// function Greeting() {
//   return <h4>Fuck you lil dickhead</h4>;
// }

// ! i wouldn't use arrow functions lmao
// const Greeting = () => {
//     return React.createElement('h1', {}, 'yo what' );
// };

function Greeting() {
    return <div>
        <h1>This is like how the fuck</h1>
    </div>
}

ReactDom.render(<Greeting />, document.getElementById("root"));
