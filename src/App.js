import React from "react";
import { useState, useEffect } from "react";
import { CrudForm } from "./components/CrudForm";



function App() {
  const [game, setGame] = useState ({name:'', category:''})
  const [games, setGames] = useState ([])
  useEffect(() => {
    console.log(games);
  }, [games])
  
 
  return (
    <>
    
    <CrudForm game={game} setGame={setGame} setGames={setGames} games={games}/>
    
    </>
  );
}

export default App;
