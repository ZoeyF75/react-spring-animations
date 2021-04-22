import { Spring } from 'react-spring';

export default function Component1() {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
    >
      {props => (
        <div style={props}>
          <div style={c1Style}>
          <h1>Component 1</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget. Facilisis volutpat est velit egestas dui id ornare arcu. Nunc sed velit dignissim sodales ut eu sem integer vitae. Morbi tristique senectus et netus et malesuada. Convallis a cras semper auctor. A diam sollicitudin tempor id eu nisl. Quam id leo in vitae turpis massa. Tellus cras adipiscing enim eu. Elementum facilisis leo vel fringilla.</p>
          </div>
        </div>
      )}
    </Spring>
  )
}

const c1Style = {
  background: 'steelblue',
  color: 'white',
  padding: '1.5rem'
}