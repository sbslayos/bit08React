// import React, { useState } from 'react';






// import  CrudForm  from './CrudForm'
// import  CrudTable  from './CrudTable'

// const initialData = [
// {
//     id: 1,
//     name: "Uncharted",
//     category: "Aventura",
// },
// {
//     id: 2,
//     name: "Fall Guys",
//     category: "Multijugador",
// },
// {
//     id: 3,
//     name: "Guitar Hero",
//     category: "Música",
// },
// {
//     id: 4,
//     name: "Crash Bandicot",
//     category: "Aventura",
// },
// {
//     id: 5,
//     name: "Need For Speed",
//     category: "Autos",
// }
// ];


// const CrudApp = () => {
// const [dataBase, setdataBase] = useState(initialData);
// const [dataEdit, setdataEdit] = useState(null);

// const createData = (data) => {
//     data.id = Date.now();
//     setdataBase([...dataBase, data]);
// };

//     const updateData = (data) => {};

//     const deleteData = (id) => {};

//   return (
//     <div>
//         <h2>CRUD</h2>
        
//         <CrudForm 
//         createData = {() => createData}
//         updateData={updateData}
//         dataEdit={dataEdit} 
//         setdataEdit={setdataEdit} 
//         />
//         <CrudTable 
//         data={dataBase} 
//         setdataEdit={setdataEdit}
//         deleteData={deleteData} 
//         />
        
//     </div>
//   )
// }
// export default CrudApp