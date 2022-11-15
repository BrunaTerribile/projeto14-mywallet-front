import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Extract from './pages/Extract';
import Login from './pages/Login';
import NewEntry from './pages/NewEntry';
import NewOutput from './pages/NewOutput';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/cadastro' element={<SignUp />}/>
        <Route path='/extrato' element={<Extract />}/>
        <Route path='/novaentrada' element={<NewEntry />}/>
        <Route path='/novasaida' element={<NewOutput />}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App;