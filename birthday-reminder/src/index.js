import React from "react";
import ReactDom from "react-dom";
// CSS here:
import './index.css'

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

function BookList () {
    return (
    <section className="booklist">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
    </section>
    );
}

function Book () {
    return <article className="book">
        <Image />
        <Title />
        <Author />
    </article>;
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/41ZN75rnLLL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"/>

const Title = () => <h1>Peril</h1>;
const Author = () => <h4>Bob Woodward</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
