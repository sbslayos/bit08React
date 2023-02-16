 import React, { useState, useEffect } from 'react';
 import { v4 as uuidv4 } from 'uuid';


export const CrudForm = ({game, setGame, setGames, games}) => {
  

  const handleInputName = (e) => {
    setGame({...game, id: uuidv4(), name: e.target.value})
     
  }

  const handleInputCategory = (e) => {
    setGame({...game, category: e.target.value })
  }

 
  const handleBut = (e) => {
     e.preventDefault()
    setGames([...games, game])

  }

  
  return (
    <div>
      <form>
      <input type= 'text' placeholder='Ingrese el nombre del Juego...' onInput={handleInputName} />
      <input type= 'text' placeholder='Ingrese la temática...' onInput={handleInputCategory} />
      <button onClick={handleBut}>Agregar</button>
      </form>
    </div>
  )
}









































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
