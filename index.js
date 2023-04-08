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

ReactDOM.render(
<div>
<h1>Embedded Expression</h1>
<h2>See below</h2>
{embeddedExpression}
</div>,
  document.getElementById("root")
);