import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [searchT, setSearchT] = useState('');

  return (
    <>
      <main>
        <div className='pattern'/>
        <div className='wrapper'> 
          <header>
            <img src="./photo.png" alt="Hero" />
            <h1>Explore Great <span className="text-gradient">Movies</span>  Without the Guesswork</h1>
          </header>

          
          <Search searchT={searchT} setSearchT={setSearchT}/>

          <h1 className="text-white">{searchT}</h1>
        </div>
      </main>
    </>
  );
}

export default App;
