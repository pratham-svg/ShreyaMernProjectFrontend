import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Home from './Component/Home';
import SignUp from './Component/SignUp';
import LogIn from './Component/LogIn';


function App() {
  return (
    <div >
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/LogIn' element={<LogIn/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
