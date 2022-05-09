
import './App.css';
import {Navbar ,  Footer} from './components';
import {Header,Question, Feedback, Services, Specialities , Steps , News } from './pages/landingPage';



function App() {
  return (
    <div className="App">
        
       <Navbar />
       <Header/>
       <Steps />
       <Services/>
       <Specialities />
       <Question/>
       <News />
       <Feedback/>
       <Footer />

    </div>
  );
}

export default App;
