import React, { useEffect, useState } from 'react';
import {Countdown} from "./Fireworks";
import KonamiCodeComponent from "./KonamiCode.component";
import TextKonami from './TextKonami';

const KonamiCodeListener = () => {
    let konamiCode=[]
    const [isCorrectKC,setIsCorrectKC] = useState(false)
    const [showSun,setShowSun] = useState(false)
    const [audio] = useState(new Audio('src/assets/success.wav'));
    const konamiSequence = ['ArrowUp','ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight','b','a'];
    const [audio2] = useState(new Audio('src/assets/thunder.wav'));
    const [audio3] = useState(new Audio('src/assets/police.mp3'));

    useEffect(() => {
        const handleKeyDown = async (event) => {

            konamiCode.push(event.key)

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
useEffect(()=>{
    if(isCorrectKC){
            const element = document.getElementById('app')
       if(element){
   element.classList.add("animation-body");
        }
        setInterval(() => {
            audio2.play()
            audio3.play()
        }, 1000);
    }
},[isCorrectKC])
    return (
        <div>
            {isCorrectKC && <>
                <Countdown/>
            </>}
            {showSun && <>     <KonamiCodeComponent/>           <TextKonami/>
</>}
        </div>
    );
};

export default KonamiCodeListener;