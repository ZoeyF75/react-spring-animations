import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';

function App() {
  const state = {
    showComponent3: false
  }

  return (
    <div className="App">
      <Component1 />
      <Component2 />
    </div>
  );
}

export default App;
