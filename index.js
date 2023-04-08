import React from 'react';
import ReactDOM from 'react-dom';

const header =
  <h1>Arigato React</h1>;
var name = "React Smith";
var url = "https://mimo.app/i/lori.png";

var embeddedExpression = 
<p>This is embedded expression</p>;

const app = (
  <div>
    <img src={url} alt="loris profile"></img>
    </div>
);

// functional componenets 
const App = (props) => {
  const name = props.name;
  return (
    <div>
    <h1>Hello, {name}</h1>
    <p>Welcome to my first React component</p>
    </div>
  );
  }
  const element = <App/>;


  ReactDOM.render(
    <App name="React Trump" />,
    document.getElementById("root")
    );





