import { useCallback, useEffect, useState, useRef } from 'react';
import { Button } from './components/ui/button';

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [pass, setPass] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let passw = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += "0123456789";
    if (char) str += "!@#$%^&*-_[]{}~`";

    for (let i = 0; i < length; i++) {
      let chare = Math.floor(Math.random() * str.length);
      passw += str.charAt(chare);
    }

    setPass(passw);
  }, [length, num, char]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select("copid");
    passwordRef.current?.setSelectionRange(0, 4);
    window.alert("Copied to clipboard!"); // 
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  useEffect(() => {
    passwordGenerator();
  }, [length, num, char, passwordGenerator]);

  return (
    <>
      <h1 className="text-center text-white bg-slate-950 font-bold text-3xl ">
        Password Generator
      </h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg py-7 px-7 my-16  text-orange-500 bg-gray-700 ">
        <div className="flex shadow-sm rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <Button onClick={copyPasswordToClipboard} className="bg-slate-200 text-orange-400 ml-3">
            Copy
          </Button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(parseInt(e.target.value, 10))}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              id="numInput"
              checked={num}
              className="cursor-pointer"
              onChange={() => setNum((prev) => !prev)}
            />
            <label htmlFor="numInput">Number: 
              {/* {num ? 'Yes' : 'No'} */}
              </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="charInput"
              checked={char}
              className="cursor-pointer"
              onChange={() => setChar((prev) => !prev)}
            />
            <label htmlFor="charInput">Character: 
              {/* {char ? 'Yes' : 'No'} */}
              </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
