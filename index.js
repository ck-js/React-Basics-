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

  const App1 = (props) => {
return (
<div>
<h3>Query: {props.search}</h3>
<p>Category: {props.category}</p>
<p>Page: {props.page}</p>

</div>

);
  }

  const Calender = (props) => {
    return (
      <div>
        <h3>Todays date is</h3>
        <p><strong>{props.date}</strong></p>
      </div>
    );
  }

  // class componenets

class Counter extends React.Component {
constructor(props) {
  super(props);
}

render() {
  const src = this.props.src;
  const alt = this.props.alt;
  const description = this.props.description;
  return (
   <div>
    <h2>Image Container</h2>
    <img src={this.props.src} alt={this.props.alt} />
    <p>{this.props.description}</p>
   </div> 
  );
}
}

  ReactDOM.render(
    <Counter
    src="https://mimo.org"
    alt="The best learning site"
    description="Welcome class of 2023"
    />,
    document.getElementById("root")
    );





