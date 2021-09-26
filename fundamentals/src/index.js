import React from "react";
import ReactDom from "react-dom";
// CSS here:
import './index.css';
// import array:
import { books } from './books';
// import Book Component:
import { Book } from './Book';

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

// renders the components, compiles them, 
ReactDom.render(<BookList />, document.getElementById("root"));
