import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyle from './assets/styles/GlobalStyle';
import Extract from './pages/Extract';
import Login from './pages/Login';
import NewEntry from './pages/NewEntry';
import NewOutgo from './pages/NewOutgo';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/cadastro' element={<SignUp />}/>
        <Route path='/extrato' element={<Extract />}/>
        <Route path='/novaentrada' element={<NewEntry />}/>
        <Route path='/novasaida' element={<NewOutgo />}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App;