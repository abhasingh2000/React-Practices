import React , {useState}from 'react'
import Readonlyrow from './Readonlyrow'
import EditableRow from './EditableRow'

const Edittabledata = () => {
    const[info ,setInfo] = useState({
        name:'',
        Email_id:'',
        Address:'',
        Phone_no:'',
        College_Name:''
    })
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
const[edit , setEdit] = useState(null);
  const[editdata , setEditdata] = useState({
    name:'',
    Email_id:'',
    Address:'',
    Phone_no:'',
    College_Name:''
  })
  const[editarray,setEditarray] = useState([]);
const handlechange = (e) =>{
    setEditdata({...editdata, [e.target.name]:e.target.value})
    console.log(editdata , "data---->")
}

const handlesave = (e) =>{
    setEditarray([...editarray, {name , Address , Email_id , Phone_no , College_Name}])
    console.log(editarray ,"duhw8yu")
}
const handleedit = (e , item) =>{
    setEdit(item.id)
}
const handlevalue = (e) =>{
    setInfo({...info ,[e.target.name]:e.target.value })
    // console.log(info)
}
const[list , setList] = useState(data);
const[inputarr , setInputarr] = useState([]);

const{name , Address , Email_id , Phone_no , College_Name} = info;
const adddata =() =>{
setInputarr([...inputarr , {name , Address , Email_id , Phone_no , College_Name}])

// setList(inputarr)

setInfo({name:'' , Address:'' , Email_id:'' , Phone_no :'' , College_Name:''})
const newdta = [...list , info];
setList(newdta);
}

  return (
    <div>
     Table I which we will Perform some Actions 
     <table>
        <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No</th>
            <th> Address</th>
            <th>College</th>
            <th>Actions</th>
        </thead>
        <tbody>
        { list.length > 0 && list.map((item , index) => 
//    {edit === item.id ? (<EditableRow/>):(<Readonlyrow item = {item}/>) }
        <>{edit === item.id ?(<EditableRow handlechange = {handlechange} handlesave = {handlesave}/>) :
       (<Readonlyrow item ={item} handleedit ={handleedit} />)}</>

    )}
        </tbody>
     </table>
     <h2>Add Data</h2>
     <input type ="text" name = "name" value = {info.name}required='required' placeholder='Enter Your Name' onChange={handlevalue}/>
     <input type ="text" name = "Email_id" value ={info.Email_id} required='required' placeholder='Enter Your Email' onChange={handlevalue}/>
     <input type ="text" name = "Phone_no" value = {info.Phone_no} required='required' placeholder='Enter Your Phoneno'  onChange={handlevalue}/>
     <input type ="text" name = "Address" value = {info.Address} required='required' placeholder='Enter Your Name'  onChange={handlevalue}/>
     <input type ="text" name = "College_Name" value = {info.College_Name} required='required' placeholder='Enter Your Name'  onChange={handlevalue}/>
     <button onClick={() =>adddata()}>Add Data in the Table</button>
    
    </div>
  )
}

export default Edittabledata
