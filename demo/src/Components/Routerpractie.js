import React from 'react'
import {Card , Form , Input , Select , Button , Checkbox, DatePicker} from 'antd'
const Routerpractie = () => {
  function onFinish(value){
    console.log(value , "form data")
  }
  return (
    <div>
         <h1>Form With Validation</h1> 
         <Form onFinish = {onFinish} autoComplete='off' labelCol={{span:5}} wrapperCol={{span:14}}>
          <Form.Item label ="Full Name" name = "fullname"
             rules ={[{
              required:'true',
              message:'Enter Your Full Name'
             },
            {min:3},
          {whitespace:true}]}
          hasFeedback
          >
            <Input type ="text" placeholder = "Type your Name"/>
          </Form.Item>
          <Form.Item label ="Email" name = "email"
           rules ={[{
            required:'true',
            message:'Enter Your Email'
           },
          {type:'email'}]}
         hasFeedback >
            <Input type ="email" placeholder = "Type your Email"/>
          </Form.Item>
          <Form.Item label ="Password" name = "password"
           rules ={[{
            required:'true',
            message:'Enter Your Password'
           },
          {min:6},
       ]}
        hasFeedback  >

            <Input.Password placeholder = "Enter Your Password"/>
          </Form.Item>
          <Form.Item label ="Confirm Password" name = "cnfpassword"
           dependencies={['password']}
           rules ={[{
            required:'true',
            message:'Enter Your Confirm Password'
           },
          ({getFieldValue}) => ({
            validator(_,value){
              if(!value || getFieldValue("password") === value){
              return Promise.resolve();}
              return Promise.reject("Your password is not matched with the previous Password")
            }
          })
          ]}
         hasFeedback >
            <Input.Password placeholder = "Enter Your Confirm Password"/>
          </Form.Item>
          <Form.Item label ="Gender" name = "gender"
       requiredMark = 'optional'
        
          >
            <Select placeholder ="Select your gender">
            <Select.Option value ="male"> Male</Select.Option>
            <Select.Option value ="female"> FeMale</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label = "Date of Birth" 
           rules ={[{
            required:'true',
            message:'Enter you DOB'
           }]}
          >
            <DatePicker picker='date'  style ={{width:'100%'}}></DatePicker>
          </Form.Item>
          <Form.Item label = "website" name ="website"
           rules ={[{
            required:'true',
            message:'Enter Your Website'
           }]}
          >
            <Input placeholder='Add your website url'/>
          </Form.Item>
          <Form.Item name ="agreement" wrapperCol={{span:24}}
          valuePropName='checked'
           rules ={[{
            validator:(_,value) =>
            value?Promise.resolve():Promise.reject("To Proceed you need to agree the terms  and conditions")
           }]}
          >
            <Checkbox>{" "}Agree to our <a href="#">Terms and Conditions</a></Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{span:24}}>
            <Button type = "primary" htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
         </Form>
        
    </div>
  )
}

export default Routerpractie
