import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingUp from './routes/Signup'
import Profile from './routes/Profile'
import Reason from './routes/Reason'
import Email from './routes/Email'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<SingUp />} path='/' />
          <Route element={<Profile />} path='/profile' />
          <Route element={<Reason />} path='/reason' />
          <Route element={<Email />} path='/email' />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
