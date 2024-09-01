import { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');

  // Character pools
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

  // State for checkboxes
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const createPassword = (length) => {
    let charSet = '';
    if (includeUppercase) charSet += uppercaseChars;
    if (includeLowercase) charSet += lowercaseChars;
    if (includeNumbers) charSet += numberChars;
    if (includeSymbols) charSet += symbolChars;

    if (charSet === '') {
      alert('Please select at least one character type.');
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const handleCopyClick = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      alert('Password copied to clipboard!');
    } else {
      alert('Please generate a password first.');
    }
  };

  return (
    <>
      <div className="container h-screen bg-slate-700 w-full flex justify-center items-center">
        <div className="bg-black p-6 h-90 w-90 flex flex-col justify-between items-center rounded-lg">
          <div className="text-center">
            <h1 className="text-white">Your Password</h1>
            <input
              type="text"
              className="w-full h-10 bg-slate-800 text-white mb-6 text-center focus:outline-none"
              placeholder="Generate Password"
              readOnly
              value={password}
            />
            <div className="flex justify-center gap-4 items-center">
              <button
                onClick={() => createPassword(8)}
                className="bg-white text-black font-semibold h-10 w-32 rounded-md hover:bg-gray-300 transition-all"
              >
                Generate
              </button>
              <button
                onClick={handleCopyClick}
                className="bg-white text-black font-semibold h-10 w-32 rounded-md hover:bg-gray-300 transition-all"
              >
                Copy
              </button>
            </div>

            <div className="gap-2 flex mt-10 justify-center items-center">
              <button
                className="bg-white text-black h-10 w-10 rounded-md hover:bg-gray-300 transition-all"
                onClick={() => createPassword(4)}
              >
                4
              </button>
              <button
                className="bg-white text-black h-10 w-10 rounded-md hover:bg-gray-300 transition-all"
                onClick={() => createPassword(6)}
              >
                6
              </button>
              <button
                className="bg-white text-black h-10 w-10 rounded-md hover:bg-gray-300 transition-all"
                onClick={() => createPassword(8)}
              >
                8
              </button>
              <button
                className="bg-white text-black h-10 w-10 rounded-md hover:bg-gray-300 transition-all"
                onClick={() => createPassword(10)}
              >
                10
              </button>
            </div>

            <div className="flex">
              <div className="mt-5 p-2">
                <label className="text-white p-2">Add Uppercase</label>
                <input
                  type="checkbox"
                  checked={includeUppercase}
                  onChange={() => setIncludeUppercase(!includeUppercase)}
                />
                <br />
                <label className="text-white p-2">Add Lowercase</label>
                <input
                  type="checkbox"
                  checked={includeLowercase}
                  onChange={() => setIncludeLowercase(!includeLowercase)}
                />
                <br />
              </div>
              <div className="mt-5 p-2">
                <label className="text-white p-2">Add Numbers</label>
                <input
                  type="checkbox"
                  checked={includeNumbers}
                  onChange={() => setIncludeNumbers(!includeNumbers)}
                />
                <br />
                <label className="text-white p-2">Add Symbols</label>
                <input
                  type="checkbox"
                  checked={includeSymbols}
                  onChange={() => setIncludeSymbols(!includeSymbols)}
                />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
