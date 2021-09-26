import React from 'react';

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
    return <article className="book" onMouseOver={() => {
        console.log(title);
    }}>
        {/* plugs the img in the books array into an html attribute */}
        <img src={img} alt="" /> 

        {/* plugs the title string from the books array into an html attribute */}
        <h1 onClick={() => console.log(title)}>{title}</h1>

        {/* plugs the author string from the books array into an html attribute */}
        <h4>{author}</h4>

        {/* calls back to the clickAlert function in order to actually return that alert via ' onClick '  -- same alert for every button */}
        <button type="button" onClick={clickAlert}>1</button> 

        {/* when a user clicks the arrow function will callback to the complexClickAlert and return the author in the console for that book only */}
        <button type="button" onClick={() => complexClickAlert(author)}>2</button>

    </article>;
} 
// * book component END

export default Book