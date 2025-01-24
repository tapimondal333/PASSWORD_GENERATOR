import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import { faCopy, faSearch } from '@fortawesome/free-solid-svg-icons';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { LC, NC, SC, UC } from './passchar';

function App() {
  let [uppercase, setUppercase] = useState(false)
  let [lowercase, setLowercase] = useState(false)
  let [number, setNumber] = useState(false)
  let [symbol, setSymbol] = useState(false)
  let[passlength,setPasslength]=useState()
  let [password,setPassword]=useState()
  const createPassword =()=>{
    let charSet='';
    let finalPass = '';
    if(uppercase||lowercase||number||symbol){
       if(uppercase) charSet+=UC;
       if(lowercase) charSet+=LC;
       if(number) charSet+=NC;
       if(symbol) charSet+=SC;
          for(let i=1; i<=passlength;i++){
            finalPass+=charSet.charAt(Math.round(Math.random()*charSet.length))
          }
          setPassword(finalPass);
    }
    else{
      toast.error('please select atleast one checkbox')
    }
  
  }
  const copyPass =()=>{
    navigator.clipboard.writeText(password)
  }

  return (
    <div className="passwordBox">
      <ToastContainer/>
      <h1 className='text-white text-2xl font-bold  bg-sky-800 text-center h-8 my-2 mb-4'>Password Generator</h1>
      <input type='text' className='w-72 bg-slate-950 p-1 text-white' readOnly value={password}></input>
      <button className='bg-sky-900 w-8 p-1' onClick={copyPass} ><FontAwesomeIcon icon={faCopy} /></button>
      <div>
        <ul>
          <li className='flex mt-4'>
            <p className='w-64 text-white text-xl'>Password length</p>
            <input type='number' max={20} min={4} className='w-20' value={passlength} onChange={(evt)=>{setPasslength(evt.target.value)}}></input>
          </li>
          <li className='flex mt-4'>
            <p className='w-80 text-white text-xl'>Include uppercase letters</p>
            <input type='checkbox' checked={uppercase} onChange={() => setUppercase(!uppercase)} className='w-10'></input>
          </li>
          <li className='flex mt-4'>
            <p className='w-80 text-white text-xl'>Include lowercase letters</p>
            <input type='checkbox' checked={lowercase} onChange={() => setLowercase(!lowercase)} className='w-10'></input>
          </li>
          <li className='flex mt-4'>
            <p className='w-80 text-white text-xl'>Include numbers</p>
            <input type='checkbox' checked={number} onChange={() => setNumber(!number)} className='w-10'></input>
          </li>
          <li className='flex mt-4'>
            <p className='w-80 text-white text-xl'>Include symbols</p>
            <input type='checkbox' checked={symbol} onChange={() => setSymbol(!symbol)} className='w-10'></input>
          </li>
        </ul>
      </div>
      <button className='bg-sky-900 w-full mt-4 p-1 text-white text-xl font-bold' onClick={createPassword} >Generate Password</button>
    </div>
  );
}

export default App;
