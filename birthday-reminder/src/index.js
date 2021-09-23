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

//! idk
// function Greeting() {
//     return <div>
//         <h1>This is like how the fuck</h1>
//     </div>
// }

function Greeting () {
    return (
    <div>
        <Person />
        <Message />
    </div>
    );
}

const Person = () => <h2>Ben Dover</h2>;
const Message = () => {
    return <p>hello would you bend the fuck over</p>
}

ReactDom.render(<Greeting />, document.getElementById("root"));
