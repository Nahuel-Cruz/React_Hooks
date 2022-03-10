import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import ExampleNavegacion from "./examplenavegacion.js";

import "./miscss.css";

ReactDOM.render(<ExampleNavegacion />, document.getElementById("root"));



/*ReactDOM.render(
  <ExampleReactBoostrap />,
  document.getElementById('root')
);*/

/*ReactDOM.render(<TodoApp />, document.getElementById("root"));*/

/*
----------------
ReactDOM.render(
  <Timer />,
  document.getElementById('root')
);/*
----------------

const comment = {
  date: "11/11/2022",
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

coment
ReactDOM.render(
  <Comment 
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  document.getElementById('root')
);


*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
