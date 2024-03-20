import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'

import Signup from './pages/Signup'

import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'




export default function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
         <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/projects' element={<Projects/>}/>
         <Route path='/Home' element={<Home/>}/>

     </Routes>
    
    
    </BrowserRouter>
    
  )
}
