
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() { 
  return (
    <div className="App">
      <div className="content">
        <Navbar/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
