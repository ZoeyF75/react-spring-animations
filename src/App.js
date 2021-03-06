import React, { Component, useState } from 'react'
import { animated, useSpring } from 'react-spring';
import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';

function Component3Effect() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    delay: 200,
    config: { duration: 1000 },
  })

  return <animated.h1 style={props}>
    <Component3 />
  </animated.h1>
}

class App extends Component {
  state = {
    showComponent3: false
  }

  toggle = e => this.setState( { showComponent3: !this.state.showComponent3 })

  render() {
    return (
      <div className="App">
        <Component1 />
        <Component2 toggle={this.toggle} />
        { this.state.showComponent3 ? <Component3Effect /> : console.log("no show") }
      </div>
    );
  }
}

export default App;
