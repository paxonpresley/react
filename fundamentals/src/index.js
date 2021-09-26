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
        id: 1,
        img: 'https://images-na.ssl-images-amazon.com/images/I/41ZN75rnLLL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
        title: 'Peril',
        author: 'Bob Woodward'
    },
    {
        id: 2,
        img: 'https://m.media-amazon.com/images/I/51YAf2LzdwL.jpg',
        title: 'Based on a True Story: Not a Memoir',
        author: 'Norm Macdonald'
    },
    {
        id: 3,
        img: 'https://m.media-amazon.com/images/I/51zjOxWs0GS.jpg',
        title: 'Finding Martin Eden: Travels to find myself',
        author: 'Marika'
    },
];

// * display function
function BookList () {
    // returns each book
    return (
    // component div
    <section className="booklist">
        {/* goes through each item in the array -- each item is called 'book' - */}
        {books.map((book) => {
            {/* the arrow function returns component, gets the id from array and then spreads the props with rhe info from the array */}
            return <Book key={book.id} {...book}></Book>;
        })}
    </section>
    );
}
// * display function END

// * book component
// instead of props use {img, title, author, children}
function Book ({img, title, author}) {
    // const {img, title, author} = props;
    // todo: attribute, eventHandler
    // todo: onClich, onMouseOver

    // returns a string in the browser alert
    const clickAlert = (e) => {
        console.log(e);
        console.log(e.target);
        alert('hello you fucked up');
    }

    // returns the author in the console
    const complexClickAlert = (author) => {
        console.log(author);
    }    

    // returning the html -- it's wrapped in an article tag- 
    return <article className="book">
        {/* plugs the img in the books array into an html attribute */}
        <img src={img} alt="" /> 

        {/* plugs the title string from the books array into an html attribute */}
        <h1>{title}</h1>

        {/* plugs the author string from the books array into an html attribute */}
        <h4>{author}</h4>

        {/* calls back to the clickAlert function in order to actually return that alert via ' onClick '  -- same alert for every button */}
        <button type="button" onClick={clickAlert}>1</button> 

        {/* when a user clicks the arrow function will callback to the complexClickAlert and return the author in the console for that book only */}
        <button type="button" onClick={() => complexClickAlert(author)}>2</button>

    </article>;
} 
// * book component END

// renders the components, compiles them, 
ReactDom.render(<BookList />, document.getElementById("root"));
