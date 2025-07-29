import { useState } from 'react'
import './App.css'
import Pt from './Pt.jsx'

function App() {
  const [count, setCount] = useState(0)


  const paragraphStyle = {
    padding: '20px',
    backgroundColor: '#ffffff',
    color: '#333333',
    textAlign: 'center',
    borderRadius: '10px',
    maxWidth: '800px',
    margin: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    lineHeight: '1.6'
  }


  return (
    <>
   
      
      <Pt/>
      <div style={{backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', alignItems: 'center' }}> my name is mihir</div>
      <Pt/>
      
    </>
  )
}

export default App
