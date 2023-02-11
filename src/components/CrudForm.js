import React, { useState, useEffect } from 'react';


const initialForm = {
  name:"",
  category:"",
  id: null,
};

const CrudForm = (createData, updateData, dataEdit, setdataEdit) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!form.name || !form.category ){
      alert("Datos Incompletos");
      return;
    }

    if(form.id === null){
      createData(form);
    }else{
      updateData(form);
    }

    handleReset();

  };

  const handleReset = () => {
    setForm(initialForm);
    setdataEdit(null);
  }

  return (
    <div>
      <h3>Agregar</h3>
      <form onSubmit={handleSubmit}>
        <input 
        type='text' 
        name='name' 
        placeholder='Nombre' 
        onChange={handleChange} 
        value={form.name}
        />
        <input 
        type='text' 
        name='category' 
        placeholder='Temática' 
        onChange={handleChange} 
        value={form.category}
        />
        <input type="submit" value="Enviar"  />
        <input type="reset" value="Limpiar" onClick={handleReset}/>
      </form>
    </div>
  )
};
export default CrudForm;
