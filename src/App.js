// src/App.js
import React, { useState } from 'react';
import { CSCAN } from './cscan';
import SeekChart from './Components/SeekChart';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [seekSequence, setSeekSequence] = useState([]);
  const [head, setHead] = useState(50);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requests = input.split(',').map(Number);
    const result = CSCAN(requests, head);
    setSeekSequence(result.seek_sequence);
  };

  return (
    <div className='Body'>
      <div className="w-full h-screen grid grid-cols-2">
        <div className='border-r-2 border-white flex flex-col items-center justify-center text-center gap-9'>
          <h1 className="text-center font-extrabold text-5xl text-white">C-SCAN Disk Scheduling</h1>
          <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-1'>
            <label className='text-white text-2xl '>
              Request Sequence (comma separated):
              <input
                className="rounded-xl text-black px-2 ml-2"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </label>
            <br />
            <label className='text-white text-2xl'>
              Initial Head Position:
              <input
               className="rounded-xl text-black px-2 ml-2"
                type="number"
                value={head}
                onChange={(e) => setHead(Number(e.target.value))}
              />
            </label>
            <br />
            <button className="text-white text-2xl border-2 border-white rounded-xl p-2" type="submit">Calculate</button>
          </form>
        </div>
        <div className='flex flex-col items-center justify-center'>
          {seekSequence.length > 0 && <SeekChart seekSequence={seekSequence} />}
        </div>

      </div>
    </div>

  );
}

export default App;
