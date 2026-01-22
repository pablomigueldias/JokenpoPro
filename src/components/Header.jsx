import React from 'react'
import logo from '../img/logoEmblema1.png'
import logoLetra from '../img/rpsArena.png'

const Header = ({ playerScore, opponentScore }) => {
    return (

        <header className='bg-azulEscuro border-b-2 border-neon-cyan/30 flex justify-around items-center p-4 rounded-t-lg mb-8 shadow-[0_10px_50px_rgba(0,0,0,0.8)]'>


            <div className='logo flex items-center gap-4'>
                <img src={logo} alt="logo" className="drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]" />
                <img src={logoLetra} alt="logo letra" className="drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]" />
            </div>

            <div className="bg-black/40 border-2 border-neon-cyan/50 p-2 w-80 h-24 rounded-2xl flex justify-around items-center backdrop-blur-sm shadow-[inset_0_0_15px_rgba(0,243,255,0.2)]">

                <div className='flex flex-col items-center'>
                    <h2 className='text-neon-cyan text-sm font-bold tracking-widest italic'>VOCÊ</h2>
                    <p className='text-white text-4xl font-black drop-shadow-[0_0_10px_#00f3ff]'>{playerScore}</p>
                </div>

                <div className="w-px h-12 bg-linear-to-b from-transparent via-neon-pink to-transparent"></div>

                <div className="flex flex-col items-center">
                    <h2 className='text-neon-pink text-sm font-bold tracking-widest italic'>MÁQUINA</h2>
                    <p className='text-white text-4xl font-black drop-shadow-[0_0_10px_#ff00ff]'>{opponentScore}</p>
                </div>
            </div>
        </header>
    )
}

export default Header