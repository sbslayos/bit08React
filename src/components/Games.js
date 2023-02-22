 import React from 'react'

export const Games = ({games}) => {
    const parts = games.map(game =>
      <li key={game.id}>{game.name}    {game.category}
      <button>Editar</button><button>Eliminar</button>
      </li>)

      const updateGame = () =>{



      }
      const deleteGame = () => {
        

      }

    

  return (
    <div>
      <h2>Lista de videoJuegos</h2>
      <ol>{parts}</ol>
    </div>

  )
}
