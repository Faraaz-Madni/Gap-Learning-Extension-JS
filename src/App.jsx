import { useState } from 'react'
import './index.css'


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div className="grid grid-cols-2 max-h-[28px] place-items-center bg-gradient-to-r from-cyan-100 to-blue-200 rounded-xl">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-100 to-blue-300 rounded-md px-10 shadow-xl shadow-orange-500/40 ">Opuntia</h1>
        <h2 className="text-[.7em] px-[3em] place-self-center">A Productivity Extension. </h2>
    </div>

    <div className="grid grid-cols-2 place-items-center ">

        <span className="text-3xl font-bold rounded-md min-h-min max-h-40 px-10 grid grid-rows-1 place-items-center marquee shadow shadow-blue-500/40 hover:shadow-indigo-500/40" >
          
        </span>
        
        <div className="rounded-md content-center p-5 my-5">
            <form method="POST" nonce="rAnd0m">
                <label htmlFor="minutes" className="pb-5 text-[.9em]">How long do you wish to study?</label> 
                <select id="minutes" name="minutes" defaultValue={90} className="rounded-md font-semibold mt-5 min-w-full px-[10%] py-2">
                <option value="60" className="text-sm"> 60 Minutes</option>
                <option value="75" className="text-sm"> 75 Minutes</option>
                <option value="90" className="text-sm" > 90 Minutes </option>
                <option value="125" className="text-sm"> 125 Minutes</option>
                
                </select>
                
                    <input className="items-center rounded-md bg-cyan-100 text-black mt-[10%] min-w-full shadow shadow-blue-500/40 hover:shadow-indigo-500/50 px-[10%] py-2 mb-0 text-sm font-semibold text-gray-900 " type="submit" id="minutes_submit" value="Let's Go!"/>

            </form>

        </div>
        
        {/* <!-- <h1> Insert Cactus here! </h1> --> */}

    </div>
    <div className="grid grid-cols-1 place-items-center">
        {/* <!-- <h1 className="text-[.5em] m-2 min-w-full"> &nbsp;</h1> --> */}
        {/* <!-- <h1 className="text-[.5em] m-2 min-w-full">&nbsp;</h1> --> */}
        <span className="grid grid-cols-2 text-[.7em] mb-5 min-w-full place-items-center">
            {/* <!-- <h2 className="text-gray-500">by Faraaz Madni </h2> --> */}
            <h1 className="grid grid-cols-1 place-items-center min-w-full text-gray-700 ">
                <a className=" " href="https://www.linkedin.com/in/faraaz-madni/"> Cactus </a>
            </h1>
            <h1 className="grid grid-cols-1 place-items-center min-w-full text-gray-700 ">
                <a className=" " href="https://www.linkedin.com/in/faraaz-madni/"> Settings </a>
            </h1>
        </span>

    </div>
  </>
  )
}

export default App
