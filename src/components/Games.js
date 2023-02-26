 import { useEffect, useState } from 'react';

export const Games = ({games, setGames, game, setGame, setUpdate}) => {
  
 
  // const [upgames, setupgames] = useState("")
  // useEffect(() => {
   
  // }, [upgames])
  
  

  // const setDate = (id, name, category) => {
  //   if (games.filter(i => i.id === id )){
  //   setupgames[id, name, category]
  // }

  // }




   const deleteGame = (id) => {
    const eliminate = games.filter( i => i.id !== id )
    setGames(eliminate)
   }
    
  const parts = games.map(game =>
      <li key={game.id}>{game.name}    {game.category}
      <button onClick={ () =>setUpdate(game.id)} >Editar</button> <button onClick={ () => deleteGame(game.id)} >Eliminar</button>
      </li>)

      let out = null;
      if (games.length > 0 ) {
        out = <> <h2>Lista de videoJuegos</h2><ol>{parts}</ol>
        </>
      } else {
        out = <> <h2>!Ingresa tus Video Juegos Favoritos!</h2></>
      }

      
  return (
    <>
    <div>
      {out}
    </div>
    </>
    
  )
}
