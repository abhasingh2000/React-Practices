import React from 'react'

const Readonlyrow = ({item , handleedit , handlesave}) => {
    // console.log(Object.values(item))
let data = Object.values(item);
console.log()
  return (
    <div>
      
      <tr>
            <td>{item.name}</td>
            <td>{item.Email_id}</td>
            <td>{item.Phone_no}</td>
            <td>{item.Address}</td>
            <td>{item.College_Name}</td>
            <td>
           <button onClick ={(e)=>handleedit(e,item)}>Edit</button>
           
           
            </td>
        </tr>

    </div>
  )
}

export default Readonlyrow
