import React from "react"


export const Loterias = () =>{
    const Disponibles = [
    {
        id: 1,
        nombre: "VALLE"
    
    },
    {
        id: 2,
        nombre: "CAUCA"
    },
    {
        id: 3,
        nombre: "Caldas"
    }];

    const handleOnChange = (selectedOption) => {
        console.log("handleChange", selectedOption)
      }
      return(
        <>
         <h1>Loterias</h1>
         <Select options={Loterias} onChange={handleOnChange}/>
        </>
       
      )
    
   /* return (
        <div>
            
            <select>
                <option> {value} </option>
                {<option>  </option>}
            </select>
            
        </div>
    )*/
}
