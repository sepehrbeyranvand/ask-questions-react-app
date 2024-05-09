import './App.css';
import NavBar from './components/nav';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Addquestion from './components/addquestion';
import Questions from './components/questions';
import Contact from './components/contact';
import Account from './components/account';
import View from './components/view';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path='/addQuestion' element={<Addquestion/>}/>
          <Route path='/questions' element={<Questions/>}/>
          <Route path='/contactUs' element={<Contact/>}/>
          <Route path='/view/:id' element={<View/>}/>
          <Route path='/account' element={<Account/>}/>
        <Route path='*'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
