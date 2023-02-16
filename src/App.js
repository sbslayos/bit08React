import React from "react";
import { useState, useEffect } from "react";
import { CrudForm } from "./components/CrudForm";
import { Games } from "./components/Games";



function App() {
  const [game, setGame] = useState ({id: null ,name:'', category:''})
  const [games, setGames] = useState ([])
  useEffect(() => {
     console.log(games);
  }, [games])
  
 
  return (
    <>
    
    <CrudForm game={game} setGame={setGame} setGames={setGames} games={games}/>
    <Games games={games} />
    </>
  );
}

export default App;
