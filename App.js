import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    'h1', { id: 'heading' },
    'Hello from React!'
);

const parent = React.createElement(
    'h1', { id: 'heading' }, [React.createElement(
        'div', { id: 'child1' }, 'Im in div1'
    ), React.createElement(
        'div', { id: 'child2' }, 'Im in div2'
    )]
);

console.log(heading); // Root.createElement returns an object, it does not create the specified element.

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent); // render will take the object and create an element based on the information in the object and create it on the root element.