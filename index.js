import React from 'react';
import ReactDOM from 'react-dom';
import {
  CustomButtons,
MyImage
} from "./buttons"; 

import "./App.css"


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
class App6 extends React.Component {
  constructor() {
    super();
    this.state = {count: 1};
  }

  componentDidMount() {
    this.setState({
      count: 1
    });
  }
updateCount = () => {
  const newCount = this.state.count + 1;
  this.setState({
    count: newCount
  });
}

  render() {
    return (
      <div>
        <h1>Loader</h1>
        <p>Ive been loaded {this.state.count} times</p>
      <button onClick={this.updateCount}>Click Me</button>
      </div>
    )
  }
}

// event handling in react 

class App7 extends React.Component {
  constructor(props) {
super(props);
this.state={text: ""};
  }

  handleInput = (event) => {
const val = event.target.value;
this.setState({
  text: val
})
  }

render() {
  return (
    <div>
      <h1>Hello, {this.props.name}</h1>
      <input
      type="text"
      placeholder="Type Here"
      value={this.state.text}
      onChange={this.handleInput}
/>
<p><strong>You entered</strong> {
this.state.text}</p>
      </div>
  )
} 
}

class TextInput extends React.Component {
  constructor() {
    super();
    this.state={value: ""}
  }

updateText = (e) => {
this.setState({
  value: e.target.value
});  
}

validateText = () => {}

render() {
  return (
   <input
   type="text"
   value={this.state.value}
    onChange={this.updateText}
  />
  );
}
}

class App8 extends React.Component {
  constructor() {
  super();
  this.state={name: ""}
}

handleInput = (event) => {
  this.setState({
    name:event.target.value
  });
}

render() {
  return (
    <input
    name="name"
    value={this.state.name}
    onChange={this.handleInput}
    />
  );
}
}

class App9 extends React.Component {
  constructor() {
    super();
    this.state = {
      email: ""
    }
  }

  handleEmailInput = (e) => {
   this.setState({
    email:e.target.value
   }); 
  }

  render() {
    return (
      <div>
        <h1>Another Event Handler example in React</h1>
        <input 
        type="email"
        placeholder="Email"
        value={this.state.email}
        onChange={this.handleEmailInput}
      />
        <h5> You input email: <u>{this.state.email}</u></h5>
        </div>
    )
  }
}

// reusing multiple components 

class App10 extends React.Component {
constructor() {
  super();
  this.state={count:0}
}
countdown = () => {
  this.setState({
    count:this.state.count-1
  });
}

countUp = () => {
  this.setState({
    count:this.state.count+1
  });
}

render() {
  return (
    <div>
      <h1>Welcome to my multiple components React App</h1>
      <p>Ive been clicked {this.state.count} times</p>
      <CustomButtons
text="Count down"
handleClick={this.countdown}
/>      
<CustomButtons
text="Count Up"
handleClick={this.countUp}
/>
    </div>
  )
}
}

const App11 = () => {
  return (
    <div>
      <h1>Welcome to my multiple component React App</h1>
      <MyImage
      name="backpack"
      />
      <MyImage
      name="camera"
      />
    </div>
  )
}

// css in react components 

const App12 = () => {
  return (
    <div>
      <h1 style={
        {
          textDecoration:"underline"
        }
      }>
        First inline styled css component in React
      </h1>
    <p>This is normal text</p>
    </div>
  )
}

const App13 = () => {
const styles = {
header:{
  textDecoration:"underline"

},
paragraph:{
  color:"blue",
  fontWeight:"bold"
}
}

return (
  <div>
    <h1 style={styles.header}>
      First styled component using objects
    </h1>
    <p style={styles.paragraph}>
      This should be blue bold text
    </p>
  </div>
)
}

const App14 = () => {
  return (
    <div className="container">
      <h1 className="div h1">
        Styled react component using css file
      </h1>
      <p className="div p">This text should be bold and green</p>
    </div>
  )
}

ReactDOM.render(
  <App14
  />,
    document.getElementById("root")
    );
