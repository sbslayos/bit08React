import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { BsCardChecklist } from "react-icons/bs";

export const CrudForm = ({ game, setGame, setGames, games, update, setUpdate}) => {

  const [edit, setedit] = useState(null);

  useEffect(() => {
    const arr = games.filter((item) => item.id === update);
    setedit(arr[0]);
  }, [update]);

  const handleInputName = (e) => {
    setGame({ ...game, id: uuidv4(), name: e.target.value });
  };

  const handleInputCategory = (e) => {
    setGame({ ...game, category: e.target.value });
  };

  const handleBut = (e) => {

    e.preventDefault();
    if (!game.name || !game.category) {
      alert("Datos incompletos.");
      return;
    }
    setGames([...games, game]);
    setGame({ id: null, name: "", category: "" });
   
   
  };
  if (games.length > 0) {
    localStorage.setItem('games',JSON.stringify(games));
  }


  const handleUpdateName = (e) => {
    setedit({ ...edit, name: e.target.value.trim() });
  }
  const handleUpdateCategory = (e) => {
    setedit({ ...edit, category: e.target.value.trim() });
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    if (!edit.name.trim() || !edit.category.trim()) {
      alert("Datos Incompletos") 
      return;
    }
    const arr = [...games]
    const i = arr.findIndex( (i) => i.id === edit.id )
    arr[i].name = edit.name;
    arr[i].category = edit.category;
    setGames(arr)
    setUpdate(null)
    setedit(null)
  }

  return (
    <>
      {update && edit ? (
        <form className="form">
          <input
            type="text"
            
            onInput={handleUpdateName}
            value={edit.name}
          />
          <input
            type="text"
            
            onInput={handleUpdateCategory}
            value={edit.category}
          />
          <button onClick={handleUpdate}>Editar tarea</button>
        </form>
      ) : (
        <form   className="form">
          <input
            type="text"
            placeholder="Ingrese el nombre del Juego..."
            onInput={handleInputName}
            value={game.name}
          />
          <input
            type="text"
            placeholder="Ingrese la temática..."
            onInput={handleInputCategory}
            value={game.category}
          />
          <button  onClick={handleBut}>Agregar Videojuego<BsCardChecklist className="icon" /> </button>
        </form>
      )}
    </>
  );
}
