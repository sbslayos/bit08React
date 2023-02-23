 import React from 'react'

export const Games = ({games, setGames, game, setGame}) => {
  
  
  const updateGame = (id) =>{ 

    console.log('id', id);
  }
   const deleteGame = () => {
    console.log('eliminar');
    

   }
    
  const parts = games.map(game =>
      <li key={game.id}>{game.name}    {game.category}
      <button onClick={ () => updateGame(game.id)} >Editar</button> <button onClick={deleteGame} >Eliminar</button>
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
