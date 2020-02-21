import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles.css';
import App from './App';
import Wel from './welFile';
import JsxJscript from './JsxJscript';
import ExternalComponent from './ParentChildComponent';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<div><h1>Hello React</h1><p>This is a paragraph</p></div>,document.getElementById("root"))

ReactDOM.render(
    <div>
        <h1>Exercise 1</h1>
        <ul>
            <li>Tomatoes</li>
            <li>Oranges</li>
            <li>Apple</li>
        </ul>
    </div>,
    document.getElementById("variable")
)

 //functional component
 function NewRules(){
     return (
        <div>
            <hr/>
            <h1>Functional Component</h1>
            <ul>
                <li>Toy</li>
                <li>Car</li>
                <li>House</li>
            </ul>
        </div>
    )
 }

 ReactDOM.render(<NewRules />,document.getElementById("ex1"))

  //functional component
  function Exercise2(){
    return (
       <div>
           <hr/>
           <h1>Exercise 2</h1>
           <h1>Abdulraheem Sherif A.</h1>
           <p>I am Mathematician, a Programmer and a Lover Of Peace and Justice !!!</p>
           <ul>
               <li>Saudi Arabia </li>
               <li>England</li>
               <li>Dubai</li>
           </ul>
           <ol>
               <li>Saudi Arabia </li>
               <li>England</li>
               <li>Dubai</li>
           </ol>
       </div>
   )
}

ReactDOM.render(<Exercise2 />,document.getElementById("ex2"))

//External FUnctional Component
ReactDOM.render(<Wel />,document.getElementById("ex3"))

//Nesting Components - Parent Child Component
ReactDOM.render(<ExternalComponent />,document.getElementById("ex4"))

//jsxJavascript and Styling with css
ReactDOM.render(<JsxJscript />,document.getElementById("ex5"))












// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();
