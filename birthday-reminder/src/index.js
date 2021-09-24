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
// 

// const firstBook = {
//     img: 'https://m.media-amazon.com/images/I/51YAf2LzdwL.jpg',
//     title: 'Based on a True Story: Not a Memoir',
//     author: 'Norm Macdonald'
// }

// my variables
const title = 'Peril';
const author = 'Bob Woodward';
const img = 'https://images-na.ssl-images-amazon.com/images/I/41ZN75rnLLL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg';

function BookList () {
    return (
    <section className="book">
        <Book title="Peril" number={22} />
        <Book author="BOBBY"/>
    </section>
    );
}

function Book (props) {
    console.log(props);
    return <article>
        <img src={img} alt="uh" />
        <h1>{title}</h1>
        <h4>{author}</h4>
        <p>{props.title}</p>
        <p>{props.number}</p>
    </article>;
}

ReactDom.render(<BookList />, document.getElementById("root"));
