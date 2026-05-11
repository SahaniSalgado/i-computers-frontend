
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProductCard from './components/productCard'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import AdminPage from './pages/adminPage'




function App() {

  return (
    <>
      <div className="w-full h-screen bg-amber-800">
        <Routes>

          <Route path='/' element={<HomePage/>}/>
          <Route path='/signin' element={<LoginPage/>}/>
          <Route path='/signup' element={<RegisterPage/>}/>
          <Route path='/admin/*' element={<AdminPage />} />


        </Routes>
    
      </div>
    
    </>
  )
}

export default App

