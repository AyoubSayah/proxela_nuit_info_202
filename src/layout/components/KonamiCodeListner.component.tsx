import React, { useEffect, useState } from 'react';
import {Countdown} from "./Fireworks";
import KonamiCodeComponent from "./KonamiCode.component";

const KonamiCodeListener = () => {
    let konamiCode=[]
    const [isCorrectKC,setIsCorrectKC] = useState(false)
    const [showSun,setShowSun] = useState(false)
    const [audio] = useState(new Audio('src/assets/success.wav'));
    const konamiSequence = ['ArrowUp','ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight','b','a'];

    useEffect(() => {
        const handleKeyDown = async (event) => {

            konamiCode.push(event.key)
            console.log('====',event)
            console.log('konamiCode',konamiCode)
            console.log('isCorrectKC',isCorrectKC)
            // Check if the entered code matches the Konami sequence
            if (konamiCode.join('') === konamiSequence.join('')) {
                konamiCode=[];
                // Konami Code activated! Add your custom logic here.
                console.log('Konami Code activated!');

                audio.play();
                setIsCorrectKC(true)
                setShowSun(true)
                const timer = setTimeout( ()=> {
                    setIsCorrectKC(false)

                    clearTimeout(timer);
                },5000);

            }
        };

        // Attach event listener
        window.addEventListener('keydown', handleKeyDown);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [konamiCode]);

    return (
        <div>
            {isCorrectKC && <>
                <Countdown/>

            </>}
            {showSun && <KonamiCodeComponent/>}
        </div>
    );
};

export default KonamiCodeListener;