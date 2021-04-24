import { animated, useSpring } from 'react-spring';
import { useState } from 'react';

const Text = () => {
  const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip),
  })

  return <animated.h1 style={props}>hello</animated.h1>
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
        <Text style={counter} />
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