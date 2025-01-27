import About from './Components/FunctionalComponent/About'
import Gallery from './Components/FunctionalComponent/Gallery'
import Home from './Components/FunctionalComponent/Home'
import Contact from './Components/FunctionalComponent/Contact'
import Navbar from './Components/FunctionalComponent/Navbar'
import Signup from './Components/FunctionalComponent/Signup'
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import UseState from './Components/FunctionalComponent/Hooks/UseState'
import UseEffect from './Components/FunctionalComponent/Hooks/UseEffect'
import UseEffectApi from './Components/FunctionalComponent/Hooks/UseEffectAPI'
import UseEffectAPIimage from './Components/FunctionalComponent/Hooks/UseEffectAPIimage'
import UseRef from './Components/FunctionalComponent/Hooks/UseRef'
import UseMemo from './Components/FunctionalComponent/Hooks/UseMemo'
import UseCallback from './Components/FunctionalComponent/Hooks/UseCallback'
import Student from './Components/FunctionalComponent/Hooks/UseContext'
import Memo from './Components/FunctionalComponent/Memoization/Memo'
import ReactLifecycleMethods from './Components/ClassComponents/ReactLifecycleMethods'
import LazyLoadingWithSuspense from './Components/FunctionalComponent/Memoization/LazyLoadingWithSuspense'
import UseLocalStorage from './Components/FunctionalComponent/Hooks/UseLocalStorage'
import HoC from './Components/FunctionalComponent/HoC/HoC'
import DarkModeToggle from './Components/FunctionalComponent/Hooks/CustomHooks/DarkModeToggle'

function App() {
  return (   
      <BrowserRouter>
      <Navbar/>
      <Routes>

    <Route path="/Home" element={<Home />}></Route>
    <Route path="/About" element={<About />}></Route>
    <Route path="/gallery" element={<Gallery page="Gallery" img="SECE Logo"/>}></Route>
    <Route path="/reactlifecyclemethods" element={<ReactLifecycleMethods />}></Route>
    <Route path="/Contact" element={<Contact />}></Route>
    <Route path="/UseState" element={<UseState />}></Route> 
    <Route path="/Signup" element={<Signup />}></Route>
    <Route path="/UseEffect" element={<UseEffect />}></Route>
    <Route path="/UseEffectApi" element={<UseEffectApi />}></Route>
    <Route path="/useimg" element={<UseEffectAPIimage/>}></Route>
    <Route path="/Useref" element={<UseRef/>}></Route>
    <Route path="/Usememo" element={<UseMemo/>}></Route>
    <Route path="/Usecallback" element={<UseCallback/>}></Route>
    <Route path="/usecontext" element={<Student/>}></Route>
    <Route path="/memo" element={<Memo/>}></Route>
    <Route path="/lazy" element={<LazyLoadingWithSuspense/>}></Route>
    <Route path="/use-custom" element={<UseLocalStorage/>}></Route>
    <Route path="/hoc" element={<HoC />}></Route>
    <Route path="/customhooks2" element={<DarkModeToggle/>}></Route>
    </Routes>
    </BrowserRouter>
   

)
}

export default App;