import React, { useState, useEffect, useRef } from 'react'
import pedra from '../img/pedraSemCirculo1.png'
import papel from '../img/papelSemCirculo1.png'
import tesoura from '../img/tesouraSemCirculo1.png'

const Game = ({ myChoice, setScore, setGameState }) => {
    const [houseChoice, setHouseChoice] = useState('');
    const [playerWin, setPlayerWin] = useState('');

    const gameRan = useRef(false);

    const getImg = (choice) => {
        if (choice === 'rock') return pedra;
        if (choice === 'paper') return papel;
        if (choice === 'scissors') return tesoura;
    }

    const newHousePick = () => {
        const choices = ['rock', 'paper', 'scissors'];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    const Result = (player, house) => {
        if (player === house) return 'draw';
        if (
            (player === 'rock' && house === 'scissors') ||
            (player === 'paper' && house === 'rock') ||
            (player === 'scissors' && house === 'paper')
        ) {
            return 'win';
        } else {
            return 'lose';
        }
    }

    useEffect(() => {
        if (gameRan.current === true) return;

        gameRan.current = true;

        const newHouseChoice = newHousePick();
        setHouseChoice(newHouseChoice);

        const result = Result(myChoice, newHouseChoice);
        setPlayerWin(result);

        if (result === 'win') {
            setScore(prev => ({ ...prev, player: prev.player + 1 }))
        } else if (result === 'lose') {
            setScore(prev => ({ ...prev, opponent: prev.opponent + 1 }))
        }
    }, [])

    return (
        <div className="flex flex-col items-center mt-8 md:mt-12 animate-in fade-in duration-700 pb-10">

            <div className="flex flex-col md:flex-row gap-12 md:gap-32 text-center relative z-10 items-center">

                <div className="flex flex-col items-center gap-4 md:gap-8 order-1">
                    <h3 className="text-white text-sm md:text-lg tracking-widest font-bold z-20">VOCÊ ESCOLHEU</h3>
                    <div className={`
                        rounded-full flex items-center justify-center 
                        
                        /* 2. BORDAS E TAMANHOS RESPONSIVOS */
                        border-8 md:border-12
                        w-36 h-36 p-6        /* Mobile */
                        md:w-64 md:h-64 md:p-8 /* Desktop */

                        ${playerWin === 'win' ? 'shadow-[0_0_50px_rgba(255,255,255,0.2)] animate-pulse' : ''}
                        ${myChoice === 'rock' ? 'border-rosa' : myChoice === 'paper' ? 'border-azul' : 'border-branca'}
                        bg-azulEscuro
                    `}>
                        {myChoice && <img src={getImg(myChoice)} alt="Minha escolha" className="w-2/3 drop-shadow-lg" />}
                    </div>
                </div>

                {/* --- LADO DA MÁQUINA --- */}
                <div className="flex flex-col items-center gap-4 md:gap-8 order-2">
                    <h3 className="text-white text-sm md:text-lg tracking-widest font-bold z-20">A CASA ESCOLHEU</h3>
                    <div className={`
                        rounded-full flex items-center justify-center 
                        
                        /* Tamanhos Iguais ao Jogador */
                        border-8 md:border-12
                        w-36 h-36 p-6
                        md:w-64 md:h-64 md:p-8

                        ${playerWin === 'lose' ? 'shadow-[0_0_50px_rgba(255,255,255,0.2)] animate-pulse' : ''}
                        ${houseChoice === 'rock' ? 'border-rosa' : houseChoice === 'paper' ? 'border-azul' : 'border-branca'}
                        bg-azulEscuro
                    `}>
                        {houseChoice && <img src={getImg(houseChoice)} alt="Escolha da casa" className="w-2/3 drop-shadow-lg" />}
                    </div>
                </div>
            </div>
            <div className="mt-10 md:mt-16 flex flex-col items-center z-50 order-3 text-center px-4">
                <h1 className="text-white text-4xl md:text-6xl font-black drop-shadow-lg mb-6 uppercase">
                    {playerWin === "win" && "VOCÊ GANHOU"}
                    {playerWin === "lose" && "VOCÊ PERDEU"}
                    {playerWin === "draw" && "EMPATE"}
                </h1>

                <button
                    onClick={() => setGameState('idle')}
                    className="
                        bg-white text-azulEscuro px-8 py-3 md:px-12 md:py-3 rounded-lg 
                        font-bold tracking-widest hover:scale-105 transition-transform
                        shadow-[0_0_20px_rgba(255,255,255,0.5)] cursor-pointer text-sm md:text-base
                    ">
                    JOGAR NOVAMENTE
                </button>
            </div>
        </div>
    )
}

export default Game