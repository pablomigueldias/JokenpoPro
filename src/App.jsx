import { useState } from 'react'
import Header from './components/Header'
import Play from './pages/Play'
import Game from './pages/Game'
import Countdown from './components/Countdown'

function App() {

  const [playerScore, setPlayerScore] = useState(0)
  const [opponentScore, setOpponentScore] = useState(0)
  const [playerChoice, setPlayerChoice] = useState(null)

  const [gameState, setGameState] = useState('idle')

  const handleChoice = (choice) => {
    setPlayerChoice(choice)
    setGameState('counting')
  }


  return (
    <div className="container mx-auto p-4 min-h-screen flex flex-col">

      <Header playerScore={playerScore} opponentScore={opponentScore} />

      <main className="grow flex flex-col justify-center">

        {gameState === 'idle' && (
          <Play setPlayerChoice={handleChoice} />
        )}

        {gameState === 'counting' && (
          <Countdown onComplete={() => setGameState('result')} />
        )}

        {gameState === 'result' && (
          <Game
            myChoice={playerChoice}
            setGameState={setGameState}
            setScore={(updateFunc) => {
              const currentScores = { player: playerScore, opponent: opponentScore };
              const newScores = updateFunc(currentScores);
              setPlayerScore(newScores.player);
              setOpponentScore(newScores.opponent);
            }}
          />
        )}
      </main>
    </div>
  )
}

export default App