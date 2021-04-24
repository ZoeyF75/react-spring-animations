import React, { Component } from 'react';
import { animated, useSpring } from 'react-spring';

const C2 = ()=> {
  const props = useSpring( { 
    from: { opacity: 0 }, 
    to: { opacity: 1 },
    config: { delay: 1000, duration: 1000 } 
  })

  return (
    <animated.div style={props}>
    <div>
      <h1>Component 2</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          nobis adipisci eum minima deserunt at porro, veritatis officia
          commodi itaque voluptates vel suscipit assumenda soluta ipsa
          voluptatibus laudantium labore harum?
        </p>
    </div>
    </animated.div>
  )
}

export class Component2 extends Component {
  render() {
    return(
      <div style={c2Style}>
        <C2 />
        <button style={btn} onClick={this.props.toggle}>Toggle Component 3</button>
      </div>
    )
  }
}

export default Component2

const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem"
};

const btn = {
  background: '#333',
  color: '#fff',
  padding: '1rem 2rem',
  border: 'none',
  textTransform: 'uppercase',
  margin: '15px 0'
};

//rce to create class based component, need to pass child components
