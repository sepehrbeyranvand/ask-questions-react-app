import './App.css';
import NavBar from './components/nav';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Addquestion from './components/addquestion';
import Questions from './components/questions';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path='/addQuestion' element={<Addquestion/>}/>
          <Route path='/questions' element={<Questions/>}/>
        <Route path='*'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
