import React, { useState } from 'react'
import Modal from '../components/Modal.jsx'
import pedra from '../img/pedraSemCirculo1.png'
import papel from '../img/papelSemCirculo1.png'
import tesoura from '../img/tesouraSemCirculo1.png'

const Play = ({ setPlayerChoice }) => {

    const [modalOpen, setModalOpen] = useState(false);

    const options = [
        { id: 'rock', img: pedra, color: 'border-rosa', glow: 'hover:shadow-[0_0_30px_#981b88]' },
        { id: 'paper', img: papel, color: 'border-azul', glow: 'hover:shadow-[0_0_30px_#23629e]' },
        { id: 'scissors', img: tesoura, color: 'border-branca', glow: 'hover:shadow-[0_0_30px_#d9d9d9]' }
    ]

    return (
        <div className="flex flex-col items-center justify-center mt-10 px-4">

            <div className="jogo flex flex-wrap justify-center items-center gap-8 md:gap-20 mb-10 md:mb-20 mt-8 md:mt-32">
                {options.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => setPlayerChoice(option.id)}
                        className={`
                            relative bg-azulEscuro/40 backdrop-blur-md 
                            border-4 ${option.color} rounded-full 
                            p-4 w-32 h-32
                            md:p-10 md:w-52 md:h-52 

                            flex items-center justify-center
                            transition-all duration-300 transform hover:scale-110
                            ${option.glow} shadow-lg
                        `}
                    >
                        <img
                            src={option.img}
                            alt={option.id}
                            className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                        />
                    </button>
                ))}
            </div>

            <div className="w-full max-w-4xl flex justify-center md:justify-end mt-4 md:mt-12 mb-6">
                <button className="
                    bg-transparent border-2 border-azul text-azul font-bold 
                    py-2 px-8 rounded-full uppercase tracking-widest
                    hover:bg-azul hover:text-white hover:shadow-[0_0_20px_#23629e] 
                    transition-all duration-300 text-sm md:text-base
                " onClick={() => setModalOpen(true)}>
                    Regras
                </button>
            </div>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    )
}

export default Play