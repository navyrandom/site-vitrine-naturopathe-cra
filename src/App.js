import logo from './logo.svg';
import './App.css';
import "tailwindcss/tailwind.css"
import Navigation from './components/Navigation';
import Description from './components/Description';
import Aboutme from './components/Aboutme';
import Rdv from './components/Rdv';

function App() {
  return (
    <div className="App">
     <Navigation />
     <Description />
     <Aboutme />
     <Rdv />
    </div>
  );
}

export default App;
