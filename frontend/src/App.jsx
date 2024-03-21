// import router
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import COMPONENTS
import { LoginPage,SignUpPage} from './Routes'




function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/login' element={<LoginPage/>} />
    <Route path='/sign-up' element={<SignUpPage/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
