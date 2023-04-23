import React, { useState } from 'react'

const Home = () => {

    const data = [{
        id:"1",
        name:'Neha',
        Email_id :'neha@gmail.com',
        Phone_no :'9878686842',
        Address :'Jaitpur Kalan',
        College_Name:'Banaras Hindu University',

    },
    {    id:"2",
        name:'Ramesh',
        Email_id :'ramesh@gmail.com',
        Phone_no :'897886842',
        Address :'Agra',
        College_Name:'GLA',

    },
    {    id:"3",
        name:'Neeta',
        Email_id :'neeta@gmail.com',
        Phone_no :'7856878538',
        Address :'Jaipur',
        College_Name:'Galgotia',

    },
    {    id:"4",
        name:'Saurab Sharma',
        Email_id :'saurab@gmail.com',
        Phone_no :'785789538',
        Address :'Mumbai',
        College_Name:'Doon University',

    },
]
const[list , setList] = useState(data);
const handledelete = (id) => {
    console.log(id)
    
    const newlist = list.filter(item => item.id !== id);
    setList(newlist);
 }
  return (
    <div>
    <table style ={{border:"1px solid black"}}>
       
            <tr>
                <th >Name</th>
                <th>Email Id</th>
                <th>Phone No</th>
                <th>Address</th>
                <th>College Name</th>
                <th>Actions</th>
            </tr>
   <tbody>
   { list.length > 0 && list.map((item , index) => 
        <tr key = {index}>
            <td>{item.name}</td>
            <td>{item.Email_id}</td>
            <td>{item.Phone_no}</td>
            <td>{item.Address}</td>
            <td>{item.College_Name}</td>
            <td>
           <button>Edit</button>
            <button onClick = {() => handledelete(item.id)}>Delete</button>
            </td>
        </tr>
    )}
   </tbody>
    </table>
    </div>
  )
}

export default Home
