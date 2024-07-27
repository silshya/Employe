import React, { useState } from 'react'
import { useContext } from 'react'
import { Form } from 'react-bootstrap'
import { test } from '../App'
import { useNavigate } from 'react-router-dom'

const EditProduct = () => {
  const {edit,setedit,employe,setemploye} =useContext(test)
  const [data, setdata] = useState({
    id:edit.id,
    title:edit.title
  })
  

  const getinput=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
  console.log(data);
  }
  const navigate=useNavigate()
  const Update=(e)=>{
    e.preventDefault();
    const newArray=[...employe]
    if(edit)
    {
      const index=employe.findIndex(item=>item.id===edit.id)
      
        if(index!==-1)
        {
          newArray[index]={...edit,...data}
        }
      }
        else{
          newArray.push(data)
        }
      
    setemploye(newArray)
    navigate('/')
  }
  return (
    <div>
      <Form style={{width:"50%",margin:"auto"}}  >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>ID</Form.Label>
        <Form.Control type="text" defaultValue={edit.id} name='id' onChange={getinput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Title</Form.Label>
        <Form.Control as="textarea" rows={3} defaultValue={edit.title} name='title' onChange={getinput}/>
      </Form.Group>
    </Form>
    <button style={{backgroundColor:"blue",color:"white",width:"110px" }} onClick={Update} >Edit</button>
    </div>
  )
}

export default EditProduct