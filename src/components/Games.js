import { SiEslgaming } from "react-icons/si";
import { BsFillDice5Fill } from "react-icons/bs";
import { TbWriting } from "react-icons/tb"
import { RiDeleteBinFill } from "react-icons/ri"

export const Games = ({ games, setGames, setUpdate }) => {
  const deleteGame = (id) => {
    const eliminate = games.filter((i) => i.id !== id);
    setGames(eliminate);
    if (eliminate.length === 0) localStorage.removeItem("games");
  };

  const parts = games.map((game) => (
    <li key={game.id}>
      <div>
        <ul>
          <li>{game.name}</li>
          <li>{game.category}</li>
        </ul>
        <div>
          <button className="button-32" onClick={() => setUpdate(game.id)}> <TbWriting/> Editar</button>{" "}
          <button className="button-32" onClick={() => deleteGame(game.id)}><RiDeleteBinFill/>Eliminar</button>
        </div>
      </div>
    </li>
  ));

  let out = null;
  if (games.length > 0) {
    out = (
      <>
        {" "}
        
          <h2 className="tittle_1">
            <SiEslgaming />
            Lista de Videojuegos <BsFillDice5Fill />
          </h2>
        <ol className="list" >{parts}</ol>
      </>
    );
  } else {
    out = (
      <>
        <h2 className="tittle_1">
          <SiEslgaming />!Ingresa tus Videojuegos Favoritos!<BsFillDice5Fill />
        </h2>
      </>
    );
  }

  return (
    <>
      <div>{out}</div>
    </>
  );
};
