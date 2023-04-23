import React , {useState}from 'react'

const About = () => {
  const[inputdata , setInputdata] = useState({
    name:'',
    rollno:'',
    email:''
  })
  const[inputarr , setInputarray] = useState([]);

  const handlechange =(e) => {
    setInputdata({...inputdata ,[e.target.name] :e.target.value})
    // console.log(inputdata)
  }
  let{name , rollno , email} = inputdata;
  const handlevalue =() =>{
    setInputarray([...inputarr , {name , rollno , email}])
    // console.log(inputarr);
    // console.log(inputdata , "ddtaat")
    setInputdata({name:'' , rollno:'' , email:''})  
    /*After filling the data in 
    the input when we add that data it 
    will clear the data from the input fills*/
  }
  return (
    <div>
      About
      <input type='text' name = "name" value ={inputdata.name} onChange={handlechange}/><br/><br/>
      <input type='text' name = "rollno" value ={inputdata.rollno} onChange={handlechange}/><br/><br/>
      <input type='text' name = "email" value ={inputdata.email} onChange={handlechange}/><br/><br/>
      <button onClick = {()=> handlevalue()}>Add Item</button>

      <table>
        <tr>
        <th>Name</th>
        <th>Roll no</th>
        <th>Email Id</th>
        </tr>

        {inputarr.length>0 && inputarr.map((item) =>
         <tr>
          <td>{item.name}</td>
          <td>{item.rollno}</td>
          <td>{item.email}</td>
         </tr>
        )}
     
      </table>
    </div>
  )
}

export default About
