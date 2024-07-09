import "./App.css"
import React from 'react'
import BgBall from "./components/BgBall/BgBall"
import LoginForm from "./components/LoginForm/LoginForm"

function App() {
  return (
    <div className="body">
      <div className="project-container">
        {/* <BgBall /> */}
        <LoginForm />
      </div>
    </div>
  )
}

export default App
