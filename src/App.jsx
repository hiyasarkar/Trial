import './App.css'
import Front from './valentine/Front'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Think from './valentine/Think'
import Last from './valentine/Last'
import Success from './valentine/Success'
import Gifts from './valentine/gifts'
import Gift1 from './valentine/Gift1'
import Gift2 from './valentine/Gift2'
import Regret from './valentine/Regret'
import Gift3 from './valentine/Gift3'
import Thanks from './valentine/Thanks'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path = "/" element = {<Front/>}/>
          <Route path = "/think" element = {<Think/>}/>
          <Route path = "/last" element = {<Last/>}/>
          <Route path = "/success" element = {<Success/>}/>
          <Route path = "/gifts" element = {<Gifts/>}/>
          <Route path = "/gift1" element = {<Gift1/>}/>
          <Route path = "/gift2" element = {<Gift2/>}/>
          <Route path = "/gift3" element = {<Gift3/>}/>
          <Route path = "/regret" element = {<Regret/>}/>
          <Route path = "/thanks" element = {<Thanks/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
