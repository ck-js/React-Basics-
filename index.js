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

// setting react state

class App2 extends React.Component {
constructor(props) {
super(props);
this.state = {count:0};
}

componentDidMount() {
  this.setState (
    {count:1}
  );
}

updateCount = () => {
this.setState({
  count: this.state.count+1
});
}
render() {
  return (
<div>
  <h1>Hello, React State</h1>
<button onClick={this.updateCount}>
  Click Me</button>
<p>Our count is currently {this.state.count}</p>
</div>

  )
}
}
// react state 2

class App3 extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
    }
  }
  componentDidMount() {
    this.setState({
      loaded: false
    }) 
  }

  render() {
    if (this.state.loaded) {
      return <p>Load complete</p>
    }
    return <p>Load not complete...</p>
  }
}

class App4 extends React.Component {
  constructor() {
    super();
    this.state = {power:100}
  }

clickHandle = () => {
  if (this.state.power < 10) return;
  this.setState({
    power: this.state.power - 10
  }); 
}

render() {
  return (
    <div>
      <img src="https://mimo.app/i/car.png" alt="Car" />
      <h1>My Car</h1>
      <p>Its currently at {this.state.power}%</p>
    <button onClick={this.clickHandle}>Drive Further
    </button>
    </div>
  );
}
}
  
class App5 extends React.Component {
  constructor() {
    super();
    this.state = {game: "Grand Theft Auto 5"};
  }

  setGrandTheftAuto4 = () => {
    this.setState({game: "Grand Theft Auto 4"});
  }
setWWE = () => {
  this.setState({game: "WWE"});
  
}

render() {
return (
  <div>
    <h1>My favorite game was... {this.state.game}</h1>
    <p>and currently my favorite is...</p>
    <button onClick={this.setGrandTheftAuto4}>Grand Theft Auto 4</button>
    <button onClick={this.setWWE}>WWE</button>
  </div>
)

}
}

ReactDOM.render(
    <App5
    />,
    document.getElementById("root")
    );





