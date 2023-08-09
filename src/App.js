import {React, useState, useEffect } from "react";
import { CrudForm } from "./components/crudForm.js";
import { Games } from "./components/Games";
import { GrGamepad } from "react-icons/gr";
import { BiGame } from "react-icons/bi";

function App() {
  const [game, setGame] = useState ({id: null ,name:'', category:'' });
  const [games, setGames] = useState ([]);
  const [update, setUpdate] = useState(null);
  
 useEffect(() => {
   if (localStorage.getItem('games')) {
    setGames(JSON.parse(localStorage.getItem('games')))
   }
 }, [])
 
  return (
    <>
    <h1 className="tittle" > <BiGame/> TO-DO LIST DE TUS VIDEO JUEGOS FAVORITOS <GrGamepad/> </h1>

    <CrudForm game={game} setGame={setGame} setGames={setGames} games={games} setUpdate={setUpdate} update={update}/>
    <Games games={games} setGames={setGames} game={game} setGame={setGame} setUpdate={setUpdate} update={update} />
    </>
  );
}

export default App;
