import React, { Component } from 'react'
import { animated, useSpring } from 'react-spring';

const C2 = ()=> {
  const props = useSpring( { from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <animated.div style={props}>
    <div style={c2Style}>
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
     <C2 />
    )
  }
}

export default Component2

const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem"
};

//rce to create class based component, need to pass child components
