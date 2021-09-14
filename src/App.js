import React, {useState} from "react";
import './App.css';

function App() {

  const [user] = useState(
    {
      name: "Estudiante",
      password: "Enter"
    }
  );

  const [logger, setLogger] = useState(
    {
      name: "",
      password: ""
    }
  );
 
  const [done, setDone] = useState(false);
  

  const Log = () => {
    console.log(logger)
    console.log(user)
    console.log(done)
    if(logger.name === user.name && logger.password === user.password){
      setDone(true);
    }
  }
  return (
    <div className={`flex bg-green-300 h-screen justify-center items-center ${done ? "bg-purple-600 " : "bg-green-300"}`}> 
      <form className="flex w-full justify-center items-center" >
          <div className={`w-1/2 py-60 opacity-90 border-4 border-red-400 rounded-full ${done ? "bg-green-300" : "bg-purple-600"}`}>
            <div className={`${done ? "hidden" : ""}`} > 
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-green-300 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                    Full Name
                  </label>
                </div>
                <div className="md:w-1/2">
                  <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="User" 
                  onChange={(e)=>{setLogger({...logger,name: e.target.value})}}>
                  </input>
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-green-300 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                    Password
                  </label>
                </div>
                <div className="md:w-1/2">
                  <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************"
                  onChange={(e)=>{setLogger({...logger,password: e.target.value})}}>
                  </input>
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/2"></div>
                <div className="md:w-2/3 mt-20">
                  <button className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-purple-100 font-bold py-2 px-8 rounded" type="button" onClick={() => Log()}>
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div className={`${done ? "" : "hidden"}`}> 
              <p className={`text-6xl text-center text-white`}>Congratulations!</p>
            </div>
          </div>
      </form>
    </div>
  );
}
/*<div className="grid grid-flow-col grid-rows-6 grid-cols-6 gap-1 bg-green-300 h-screen w-screen">
      <div className={`opacity-90 row-start-2 col-start-2 row-end-6 border-4 border-red-400 rounded-full 
                    ${expanded ? 
                      'col-span-4 bg-yellow-400' 
                    : 'col-span-2 bg-purple-600'}`}> 
        <div class="w-1/3">
          <label class="text-green-500 font-bold  mb-1 pr-4" for="inline-full-name">
            Full Name
          </label>
        </div>
        <div class="w-2/3">
          <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="User">
          </input>
        </div>
      </div>
    </div>*/
export default App;