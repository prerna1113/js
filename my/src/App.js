import logo from './logo.svg';
import './App.css';
// import Component from './Component/Component.js'
import Gallery from './Component/Gallery';
import TodoList from './Component/TodoList';
import Card from './Component/Card';

function App() {
  return (
    <div className="App">
      {/* <Component /> */}
      <Gallery />
      {/* <TodoList /> */}
      <Card />
    
    </div>
  );
}

export default App;
