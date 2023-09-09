import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import Search from './components/Search';
import Delete from './components/Delete';

function App() {
  return (
    <div>
      <Home/>
      <Register/>
      <Search/>
      <Delete/>
     
    </div>
  );
}

export default App;
