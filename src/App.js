import React from "react";
import { useState, useEffect } from "react";
import { CrudForm } from "./components/CrudForm";
import { Games } from "./components/Games";



function App() {
  const [game, setGame] = useState ({id: null ,name:'', category:'' })
  const [games, setGames] = useState ([])
  const [update, setUpdate] = useState(null);
 useEffect(() => {
   if (localStorage.getItem('games')) {
    setGames(JSON.parse(localStorage.getItem('games')))
   }
 }, [])
 
  return (
    <>
    
    <CrudForm game={game} setGame={setGame} setGames={setGames} games={games} setUpdate={setUpdate} update={update}/>
    <Games games={games} setGames={setGames} game={game} setGame={setGame} setUpdate={setUpdate} update={update} />
    </>
  );
}

export default App;
