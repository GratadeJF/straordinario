import './App.css';
import {Routes, Route} from 'react-router-dom';
import Pilotes from './screens/Pilotes'
import Dates from './components/Dates'
import Contact from './components/Contact'
import Circuits from './components/Circuits'
import Constructeurs from './components/Constructeurs'
import Header from './components/Header';
import Accueil from './screens/Accueil';



function App() {
  return (
    <div className="App">
    <Header />
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/Pilotes' element={<Pilotes />} />
        <Route path='/Dates' element={<Dates />} />
        <Route path='/Circuits' element={<Circuits />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Constructeurs' element={<Constructeurs />} />
      </Routes>
    </div>
  );
}

export default App;
