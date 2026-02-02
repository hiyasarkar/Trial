import './App.css'
import Front from './valentine/Front'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Think from './valentine/Think'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path = "/" element = {<Front/>}/>
          <Route path = "/think" element = {<Think/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
