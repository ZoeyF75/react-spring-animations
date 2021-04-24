import { animated, useSpring } from 'react-spring';
import { useState } from 'react';

const Number = () => {
  const [flip, set] = useState(false)
  const { number } = useSpring({
    reset: true,
    reverse: flip,
    from: { number: 0 },
    number: 10,
    delay: 200,
    config: { duration: 10000 },
    onRest: () => set(!flip),
  })
    return <animated.div>{number.to(n => n.toFixed(0))}</animated.div>
  }

export default function Component1() {
  const props = useSpring( { from: { opacity: 0, marginTop: -500}, to: { opacity: 1, marginTop: 0 } });
  
  return (
    <animated.div style={props}>
      <div style={c1Style}>
        <h1>Component 1</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          nobis adipisci eum minima deserunt at porro, veritatis officia
          commodi itaque voluptates vel suscipit assumenda soluta ipsa
          voluptatibus laudantium labore harum?
        </p>
        <div style={counter}>
          <Number />
        </div>
        
      </div>
    </animated.div>
  ); 
}

const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem"
};

const counter = {
  background: "#333",
  textAlign: "center",
  width: "100px",
  borderRadius: "50%",
  margin: "1rem auto"
};