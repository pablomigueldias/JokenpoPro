import React, { useState, useEffect } from 'react'

const Countdown = ({ onComplete }) => {
    const [count, setCount] = useState(3);

    useEffect(() => {
        if (count === 0) {
            onComplete();
            return;
        }

        const timer = setTimeout(() => {
            setCount(count - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [count, onComplete]);

    return (
        <div className="flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500">
            <h3 className="text-neon-cyan text-2xl font-bold tracking-[0.5em] mb-4 italic">PREPARE-SE</h3>
            <div className="relative">
                <div className="absolute inset-0 rounded-full border-4 border-neon-cyan opacity-20 animate-ping"></div>
                <h2 className="text-white font-black text-9xl drop-shadow-[0_0_20px_rgba(0,243,255,0.8)]">
                    {count > 0 ? count : "GO!"}
                </h2>
            </div>
        </div>
    );
}

export default Countdown