// radhe radhe

import "./fonts/fonts.css"
import { Route, Routes } from "react-router"
import Home from "./pages/home/Home"


function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>    
  )
}

export default App