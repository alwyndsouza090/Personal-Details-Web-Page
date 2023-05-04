import './App.css';
import Home from './Pages/Home';
import {Route,Routes,BrowserRouter} from "react-router-dom"

function App() {
  return (
   <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
  </Routes> 
  </BrowserRouter>
   </>
  )
}

export default App;
