import { useState } from "react";
import { motion } from "framer-motion";
import { PiVibrateFill, PiVibrateLight } from "react-icons/pi";
import { GrPowerReset } from "react-icons/gr";
import Tooltip from "./Tooltip";

function App() {
  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(null);
  const [isVibrating, setIsVibrating] = useState(false);

  const vibrate = () => {
    if (isVibrating && navigator.vibrate) {
      navigator.vibrate([70]);
    }
  };
  
  const vibrateOn = () => {
    if (navigator.vibrate) {
      navigator.vibrate([70]);
    }
  };

  const toggleVibrate = () => {
    setIsVibrating((prev) => !prev);
    vibrateOn();
  };

  const beep = () => {
    const audioContext = new (window.AudioContext || window.AudioContext)();
    const oscillator = audioContext.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.2);
  };

  const handleIncrement = () => {
    setPrevCount(count);
    const newCount = count + 1;
    if (newCount % 100 === 0) {
      beep();
    }
    setCount(newCount);
    vibrate();
  };

  const handleDecrement = () => {
    if (count > 0) {
      setPrevCount(count);
      setCount(count - 1);
    }
  };

  const getDigits = (num) => {
    return num.toString().split("").map(Number);
  };

  const prevDigits = prevCount !== null ? getDigits(prevCount) : [];
  const currentDigits = getDigits(count);

  return (
    <div className="main bg-black flex flex-col h-lvh items-center">
      <img className="absolute invert mt-5" src="./img.png" alt="" width={300} />
      <h1 className="text-9xl mt-28 text-white flex gap-2">
        {currentDigits.map((digit, index) => (
          <div key={index} className="relative w-16 h-28 overflow-hidden flex justify-center items-center">
            {prevDigits[index] !== undefined && prevDigits[index] !== digit && (
              <motion.div
                key={`${prevDigits[index]}-${index}`}
                initial={{ y: count > prevCount ? 0 : 0 }}
                animate={{ y: count > prevCount ? -50 : 50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute"
              >
                {prevDigits[index]}
              </motion.div>
            )}
            <motion.div
              key={`${digit}-${index}`}
              initial={{ y: count > prevCount ? 50 : -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute"
            >
              {digit}
            </motion.div>
          </div>
        ))}
      </h1>
      
      {/* Increment Button */}
      <button className="mt-10 bg-green-950 active:bg-green-900 border-8 border-black active:border-[#22c55e] p-5 rounded-full" onClick={handleIncrement}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200" fill="none" stroke="#22c55e" strokeWidth="5">
          <polyline points="40,120 100,60 160,120" />
        </svg>
      </button>

      {/* Decrement Button */}
      <button className="my-10 absolute top-[26rem] bg-green-950 active:bg-green-900 border-8 border-black active:border-[#22c55e] p-5 rounded-full" onClick={handleDecrement}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50" fill="none" stroke="#22c55e" strokeWidth="5">
          <polyline points="10,15 25,30 40,15" />
        </svg>
      </button>

      {/* Utility Buttons */}
      <div className="funtionbtn my-10 flex gap-14">
        <button className="bg-neutral-800 active:bg-neutral-600 p-5 active:animate-spin-full text-white rounded-full" onClick={() => setCount(0)}>
          <GrPowerReset size={35} />
        </button>
        <div className="pt-5">
          <Tooltip />
        </div>
        <button className={`p-5 text-white rounded-full ${isVibrating ? "bg-green-500" : "bg-neutral-800"}`} onClick={toggleVibrate}>
          {isVibrating ? <PiVibrateFill size={35} /> : <PiVibrateLight size={35} />}
        </button>
      </div>
      <p className="text-neutral-800">TechTabish</p>
    </div>
  );
}

export default App;