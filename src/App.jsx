import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import './App.css'
import Play from './pages/Play'

function App() {
  const [playerScore, setPlayerScore] = useState(0)
  const [opponentScore, setOpponentScore] = useState(0)
  return (
    <div className="container mx-auto p-4">
      <Header playerScore={playerScore} opponentScore={opponentScore} />
      <Play />
    </div>


  )
}

export default App