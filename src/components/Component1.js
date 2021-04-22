import { Spring } from "react-spring";

export default function Component1() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div style={c1Style}>
            <h1>Component 1</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              nobis adipisci eum minima deserunt at porro, veritatis officia
              commodi itaque voluptates vel suscipit assumenda soluta ipsa
              voluptatibus laudantium labore harum?
            </p>
          </div>
        </div>
      )}
    </Spring>
  );
}

const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem"
};