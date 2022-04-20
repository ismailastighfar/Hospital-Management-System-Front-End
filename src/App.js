
import './App.css';
import {Navbar} from './components';
import {Specialities , Steps , News} from './pages/landingPage';



function App() {
  return (
    <div className="App">
       <Navbar />
       <Steps />
       <Specialities />
       <News />
    </div>
  );
}

export default App;
