import { createContext, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList/todolist'
import Profile from './components/OnlyTest/test'
import Learn from './components/Understanding/learn'
import Timer from './components/Timer/timer'

const tema = {
  dark:{
    color:"white",
    backgroundColor: "#000"
  },
open:{
  color:"black",
  backgroundColor: "white"
}
}

export const ThemeSeries = createContext()

 function App(){
  const [value, setValue] = useState(tema.open)
function ThemeMode(){
  if (tema.dark===value) {
    setValue(tema.open)
  }
  else{
    setValue(tema.dark)
  }
}
  return(
    <div className="app">
<button onClick={ThemeMode}>
  {tema.dark===value ? "ACIQ" : "TUND"}
</button>
    <ThemeSeries.Provider value={value}>
<Learn/>
<Timer/>

    </ThemeSeries.Provider>
       </div>
  )
}
export default App