import React from 'react'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './page/Home'
import Success from './page/Success'
import Error from './page/Error'
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
            <Route path="/success" element={<Success />}></Route>
            <Route path="/*" element={<Error/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App