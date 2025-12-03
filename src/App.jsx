import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function HelloReact() {
  return (
    <div>
      <a href="https://react.dev/learn" target="_blank">
        <img src="/src/assets/react.svg" className="logo" title="About React" alt="React Logo"></img>
      </a>
      <h1>Hello React World</h1>
      <h2 >Nice to meet you<span className="heart">♥</span></h2>
    </div>
  )
}

export default HelloReact
