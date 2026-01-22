import React from 'react';

const Modal = ({ isOpen, onClose }) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            ></div>
            
            <div className="relative bg-azulEscuro border-2 border-neon-cyan/50 p-8 rounded-3xl max-w-md w-full shadow-[0_0_50px_rgba(0,243,255,0.2)] animate-in fade-in zoom-in duration-300">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-neon-cyan font-black text-2xl tracking-widest italic">REGRAS</h2>
                    <button
                        onClick={onClose}
                        className="text-white/50 hover:text-white transition-colors text-2xl"
                    >
                        &times;
                    </button>
                </div>

                <div className="space-y-4 text-white/80 font-medium">
                    <p>🔹 <span className="text-neon-cyan font-bold">PEDRA</span> quebra tesoura.</p>
                    <p>🔹 <span className="text-neon-pink font-bold">TESOURA</span> corta papel.</p>
                    <p>🔹 <span className="text-white font-bold font-white">PAPEL</span> embrulha pedra.</p>
                    <p className="mt-6 pt-4 border-t border-white/10 text-xs text-white/40 italic">
                        *Regra de Ouro: Não é permitido mostrar pedra duas vezes seguidas.
                    </p>
                </div>

                <button
                    onClick={onClose}
                    className="mt-8 w-full py-3 bg-neon-cyan/20 border border-neon-cyan text-neon-cyan font-bold rounded-xl hover:bg-neon-cyan hover:text-azulEscuro transition-all"
                >
                    ENTENDIDO
                </button>
            </div>
        </div>
    );
};

export default Modal;