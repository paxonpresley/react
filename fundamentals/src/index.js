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

const books = [

    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/41ZN75rnLLL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
        title: 'Peril',
        author: 'Bob Woodward'
    },
    {
        img: 'https://m.media-amazon.com/images/I/51YAf2LzdwL.jpg',
        title: 'Based on a True Story: Not a Memoir',
        author: 'Norm Macdonald'
    },
    {
        img: 'https://m.media-amazon.com/images/I/51zjOxWs0GS.jpg',
        title: 'Finding Martin Eden: Travels to find myself',
        author: 'Marika'
    },
];

// ! // my variables
// const title = 'Peril';
// const author = 'Bob Woodward';
// const img = 'https://images-na.ssl-images-amazon.com/images/I/41ZN75rnLLL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg';

function BookList () {
    return (
    <section className="book">
        {books.map((book) => {
            const {img, title, author } = book;
            console.log(book);
            return (
                <Book book={book}></Book>
            )
        })}
    </section>
    );
}

// instead of props use {img, title, author, children}
function Book (props) {
    console.log(props);
    const {img, title, author} = props.book;
    return <article>
        <img src={img} alt="" />
        <h1>{title}</h1> 
        <h4>{author}</h4> 
    </article>;
}

ReactDom.render(<BookList />, document.getElementById("root"));
