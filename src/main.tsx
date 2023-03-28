import React from 'react'
import ReactDOM from 'react-dom/client'
import Lottie from 'react-lottie'
import animationData from './assets/coming-soon-animation.json'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div style={{ height: '100vh' }}>
      <Lottie options={{ animationData: animationData }} />
    </div>
  </React.StrictMode>,
)
