import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Program from './component/Program'
import Companies from './component/Companies '
import Services from './component/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Program name = {"Abdalazez"} languages = {"JS, CSS, HTML, PHP"} experience = {4} company = {"Apple"}/>
      <Program name = {"Ahmd"} languages = {"C++, CSS, HTML"} experience = {7} company = {"Microsoft"}/>
      <Program name = {"Ali"} languages = {"C#, CSS, HTML, PHP"} experience = {1} company = {"Twitter"}/>

      <Companies name = {"Apple"} employees = {300} founded = {1973} />
      <Companies name = {"Microsoft"} employees = {400} founded = {1924} />
      <Companies name = {"Twitter"} employees = {500} founded = {1973} />

      <Services service = {"Maintenance"} price = {1.300}  />
      <Services service= {"Development"} price = {1.400}  />
      <Services service= {"After-sales service"} price = {2.500}  />
    </div>
  )
}

export default App
