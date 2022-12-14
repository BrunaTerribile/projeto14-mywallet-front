import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyle from './assets/styles/GlobalStyle';
import AuthProvider from './context/auth';
import Extract from './pages/Extract';
import Login from './pages/Login';
import NewEntry from './pages/NewEntry';
import NewOutgo from './pages/NewOutgo';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <AuthProvider>
        <Routes>
          <Route path='/sign-in' element={<Login />}/>
          <Route path='/sign-up' element={<SignUp />}/>
          <Route path='/extract' element={<Extract />}/>
          <Route path='/new-entry' element={<NewEntry />}/>
          <Route path='/new-outgo' element={<NewOutgo />}/>
        </Routes>
      </AuthProvider>

    </BrowserRouter>
  )
}

export default App;