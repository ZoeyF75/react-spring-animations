import { animated, useSpring } from 'react-spring';

export default function Component1() {
  const props = useSpring( { from: { opacity: 0, marginTop: -500}, to: { opacity: 1, marginTop: 0 } });
  const propsTimer = useSpring( { from: { number: 0 }, to: { number: 10 } } );
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
        <animated.div style={propsTimer}>
          <h1 style={counter}>
            {/* {propsTimer.number} */}
          </h1>
        </animated.div>
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