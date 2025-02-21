import { useState } from 'react'
import { PiVibrateFill } from "react-icons/pi";
import { PiVibrateLight } from "react-icons/pi";
import { GrPowerReset } from "react-icons/gr";
import Tooltip from './Tooltip';

function App() {
  const [count, setCount] = useState(0)
  const [isVibrating, setIsVibrating] = useState(false);

  const vibrate = () => {
    if (isVibrating && navigator.vibrate) {
      navigator.vibrate([70]);
    }
  }
  const vibrateOn = () => {
    if (navigator.vibrate) {
      navigator.vibrate([70]);
    }
  }

  const toggleVibrate = () => {
    setIsVibrating((prev) => !prev);
    vibrateOn();
  };


  const beep = () => {
    const audioContext = new (window.AudioContext || window.AudioContext)();
    const oscillator = audioContext.createOscillator();
    oscillator.type = "sine"; // Beep sound type
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // Frequency of the beep (440 Hz for standard tone)
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.2); // Play beep for 200ms
  };

  const handleIncrement = () => {
    const newCount = count + 1;
    if (newCount % 100 === 0) {
      beep();
    }
    setCount(newCount);
    vibrate();
  };


  return (
    <>
      <div className="main bg-black flex flex-col h-fit items-center">

        <img className='absolute invert mt-2' src="./img.png" alt="" width={300} />
        {/* <h1 className='absolute mt-10 text-white text-3xl font-semibold'>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h1> */}
        <h1 className='text-9xl mt-20  text-white'>{count}</h1>

        {/* Increment */}
        <button className='my-10 bg-green-950 active:bg-green-900 border-8 border-black active:border-[#22c55e] p-5 rounded-full' onClick={handleIncrement}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            width="200"
            height="200"
            fill="none"
            stroke="#22c55e"
            strokeWidth="5"
          >
            <polyline points="40,120 100,60 160,120" />
          </svg>
        </button>

        {/* Decrement */}
        <button className='my-10 absolute top-[26rem] bg-green-950 active:bg-green-900 border-8 border-black active:border-[#22c55e] p-5 rounded-full' onClick={() => { if (count > 0) { setCount((count) => count - 1) } }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50"
            height="50"
            fill="none"
            stroke="#22c55e"
            strokeWidth="5"
          >
            <polyline points="10,15 25,30 40,15" />
          </svg>
        </button>

        {/* Utilities Buttons */}
        <div className="funtionbtn my-10 flex gap-32">
          <button className='bg-neutral-800 active:bg-neutral-600 p-5 active:animate-spin-full text-white rounded-full' onClick={() => setCount((count) => count - count)}><GrPowerReset size={35} /></button>
          <button className={`p-5 text-white rounded-full ${isVibrating ? 'bg-green-500' : 'bg-neutral-800'}`} onClick={toggleVibrate}>{isVibrating ? <PiVibrateFill size={35} /> : <PiVibrateLight size={35} />}</button>
        </div>
        <p className="text-neutral-800">TechTabish </p>
        <div className='flex w-full justify-center py-5'>
          <Tooltip />
        </div>
      </div>
    </>
  )
}

export default App