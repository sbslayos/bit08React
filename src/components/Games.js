 import React from 'react'

export const Games = ({games}) => {
    const parts = games.map(game => 
    <table>
        <tr>
            <th>Juego</th>
            <th>Temática</th>
        </tr>
        {game.name} {game.category}

        </table> )
 
    //  console.log(parts);
  return (
    
    <div>{parts}</div>
  )
}

