import './App.css';
import Home from './pages/Home';
import {Routes,BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
       </Routes>
    </BrowserRouter> 
  );
}

export default App;
