import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { test } from '../App'
import { useNavigate } from 'react-router-dom'

const CreateProduct = () => {
  const {employe,setemploye}=useContext(test)
    const [create, setcreate] = useState({
      id:"",
      title:""
    })
    const navigate=useNavigate()
    const Submit=(e)=>{
      e.preventDefault();
      const newArray=[...employe,create]
      setemploye(newArray)
      navigate('/')
    }
    const getInput=(e)=>{
      setcreate({...create,[e.target.name]:e.target.value})
    }
  return (
    <div>
        <Form style={{width:"50%",margin:"auto"}}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>ID</Form.Label>
        <Form.Control type="text"  name='id' onChange={getInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Title</Form.Label>
        <Form.Control as="textarea" rows={3} name='title' onChange={getInput}/>
      </Form.Group>
    </Form>
    <button style={{backgroundColor:"blue",color:"white",width:"110px"}} onClick={Submit}>Create</button>
    </div>
  )
}

export default CreateProduct