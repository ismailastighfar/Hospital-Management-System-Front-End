
import './App.css';
import {Navbar ,  Footer} from './components';
import {Specialities , Steps , News } from './pages/landingPage';



function App() {
  return (
    <div className="App">
       <Navbar />
       <Steps />
       <Specialities />
       <News />
       <Footer />
    </div>
  );
}

export default App;
