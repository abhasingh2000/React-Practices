import React from 'react'

const EditableRow = ({handlechange , handlesave , editdata}) => {
    // console.log(editdata , "ufheurh")
  return (
    <div>
        <tr>
     <td><input type ="text" name = "name"required='required' value = {editdata?.name} placeholder='Enter Your Name'  onChange={handlechange} /></td>  
    <td> <input type ="email" name = "Email_id" required='required'value = {editdata?.Email_id} placeholder='Enter Your Email' onChange={handlechange} /></td>
  <td>   <input type ="text" name = "Phone_no"  required='required' value = {editdata?.Phone_no} placeholder='Enter Your Phoneno'onChange={handlechange}   /></td>
   <td>  <input type ="text" name = "Address"  required='required' value = {editdata?.Address}placeholder='Enter Your Address' onChange={handlechange}  /></td>
   <td>  <input type ="text" name = "College_Name"  required='required' value = {editdata?.College_Name} placeholder='Enter Your College Name' onChange={handlechange}  /></td>
     </tr>
     <button onClick = {()=>handlesave()}>Save</button>
    </div>
  )
}

export default EditableRow
