import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Games } from "./Games";

export const CrudForm = ({
  game,
  setGame,
  setGames,
  games,
  update,
  setUpdate,
}) => {

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
    setGames([...games, game]);
    setGame({ id: null, name: "", category: "" });
   
  };
  if (games.length > 0) {
    localStorage.setItem('games',JSON.stringify(games));
  }

  

  const handleUpdateName = (e) => {
    setedit({ ...edit, name: e.target.value});

  }
  const handleUpdateCategory = (e) => {
    setedit({ ...edit, category: e.target.value});

  }
  const handleUpdate = (e) =>{
    e.preventDefault();
    console.log(edit);
    const arr = [...games]
    const i = arr.findIndex((item) => item.id === edit.id)
    arr[i].name = edit.name;
    arr[i].category = edit.category;
    setGames(arr);
    setUpdate(null);
    setedit(null);
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
          <button onClick={handleBut}>Agregar</button>
        </form>
      )}
    </>
  );
};

// {update && edit === true ? (

//   <form className='form'>
//   <input type= 'text'  onInput={handleUpdateName} value={edit.name}/>
//   <input type= 'text'  onInput={handleUpdateCategory} value={edit.category} />
//   <button onClick={handleInputUpdate}>Renombrar Tarea</button>
//   </form>

// const initialForm = {
//   name:"",
//   category:"",
//   id: null,
// };

// const CrudForm = (createData, updateData, dataEdit, setdataEdit) => {
//   const [form, setForm] = useState(initialForm);

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if(!form.name || !form.category ){
//       alert("Datos Incompletos");
//       return;
//     }

//     if(form.id === null){
//       createData(form);
//     }else{
//       updateData(form);
//     }

//     handleReset();

//   };

//   const handleReset = () => {
//     setForm(initialForm);
//     setdataEdit(null);
//   }

//   return (
//     <div>
//       <h3>Agregar</h3>
//       <form onSubmit={handleSubmit}>
//         <input
//         type='text'
//         name='name'
//         placeholder='Nombre'
//         onChange={handleChange}
//         value={form.name}
//         />
//         <input
//         type='text'
//         name='category'
//         placeholder='Temática'
//         onChange={handleChange}
//         value={form.category}
//         />
//         <input type="submit" value="Enviar"  />
//         <input type="reset" value="Limpiar" onClick={handleReset}/>
//       </form>
//     </div>
//   )
// };
// export default CrudForm;
