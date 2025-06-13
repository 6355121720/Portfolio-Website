import { Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import { LeetcodeProvider } from "./context/LeetcodeContext"

function App() {
  

  return (
    <>
      <LeetcodeProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path = "/about" element={<About/>}/>
            <Route path = "/portfolio" element={<Portfolio/>}/>
            <Route path = "/contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </LeetcodeProvider>
    </>
  )
}

export default App
