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

const firstBook = {
    img: 'https://images-na.ssl-images-amazon.com/images/I/41ZN75rnLLL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'Peril',
    author: 'Bob Woodward'
}
const secondBook = {
    img: 'https://m.media-amazon.com/images/I/51YAf2LzdwL.jpg',
    title: 'Based on a True Story: Not a Memoir',
    author: 'Norm Macdonald'
}

// ! // my variables
// const title = 'Peril';
// const author = 'Bob Woodward';
// const img = 'https://images-na.ssl-images-amazon.com/images/I/41ZN75rnLLL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg';

function BookList () {
    return (
    <section className="book">
        {/* how to display props */}
        <Book 
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author} 
        >
            <p>lorem ipsum bitch</p>
        </Book>
        
        <Book 
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author} />
    </section>
    );
}

// instead of props use {img, title, author, children}
function Book (props) {
    // console.log(props);
    const {img, title, author, children} = props;
    return <article>
        <img src={img} alt="" />
        <h1>{title}</h1>
        <h4>{author}</h4>
        {children}
    </article>;
}

ReactDom.render(<BookList />, document.getElementById("root"));
