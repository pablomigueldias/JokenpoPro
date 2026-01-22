// src/components/Header.jsx
import React from 'react'
import logo from '../img/logoEmblema1.png'
import logoLetra from '../img/rpsArena.png'

const Header = ({ playerScore, opponentScore }) => {
    return (
        <header className='
            bg-azulEscuro border-b-2 border-neon-cyan/30 
            flex flex-col md:flex-row justify-between items-center 
            p-6 rounded-b-3xl mb-8 shadow-[0_10px_50px_rgba(0,0,0,0.8)] gap-6
        '>
            
            <div className='logo flex items-center gap-4'>
                <img src={logo} alt="logo" className="w-10 h-10 md:w-16 md:h-16 drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]" />
                <img src={logoLetra} alt="logo letra" className="h-6 md:h-10 drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]" />
            </div>

            <div className="
                bg-black/40 border-2 border-neon-cyan/50 
                w-full md:w-96 h-20 md:h-24 rounded-2xl 
                flex justify-around items-center backdrop-blur-sm 
                shadow-[inset_0_0_15px_rgba(0,243,255,0.2)]
            ">
                
                <div className='flex flex-col items-center'>
                    <h2 className='text-neon-cyan text-[10px] md:text-sm font-bold tracking-widest italic'>VOCÊ</h2>
                    <p className='text-white text-3xl md:text-4xl font-black drop-shadow-[0_0_10px_#00f3ff]'>{playerScore}</p>
                </div>

                {/* Divisor */}
                <div className="w-0.5 h-10 md:h-12 bg-neon-pink shadow-[0_0_10px_#ff00ff] opacity-80"></div>

                <div className="flex flex-col items-center">
                    <h2 className='text-neon-pink text-[10px] md:text-sm font-bold tracking-widest italic'>MÁQUINA</h2>
                    <p className='text-white text-3xl md:text-4xl font-black drop-shadow-[0_0_10px_#ff00ff]'>{opponentScore}</p>
                </div>
            </div>
        </header>
    )
}

export default Header