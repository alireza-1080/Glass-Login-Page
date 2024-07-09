import "./App.css"
import React from 'react'
import LoginForm from "./components/LoginForm/LoginForm"
import BgBall from "./components/BgBall/BgBall"

function App() {
  return (
    <>
      <div className="body">
      <BgBall />
        <div className="project-container">
          <LoginForm />
        </div>
      </div>
    </>
  )
}

export default App
