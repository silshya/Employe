import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import { IoEyeSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import {Modal} from 'antd';
import { useContext } from 'react';
import { test } from '../App';
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom';


const Main = () => {
   
  const {employe,setemploye,ismodalopen,setismodalopen,rows,setrows,viewmodal,setviewmodal,edit,setedit}=useContext(test)

  const showDelete=(item)=>{
    setrows(item)
    setismodalopen(true)
  }
  const view=(item)=>{
    setviewmodal(true)
    setrows(item)
  }
  const handleDelete=(e)=>{
    e.preventDefault()
    const updatedarray=employe.filter((row)=>row.id!==rows?.id)
    setemploye(updatedarray)
    setismodalopen(false)
    toast("Successfully deleted");
   
  }
  const handleCancel=()=>{
    setismodalopen(false)
    setviewmodal(false)
  }
  
  const handleOK=()=>{
    setviewmodal(false)
  }
  const navigate=useNavigate()
  const navigateToEdit=(item)=>{
    navigate('/edit')
    setedit(item)
    console.log(edit);
  }
  const navigateToCreate=()=>{
    navigate('/create')
  }
  return (
    <div>
      <div style={{ width:"10%",margin:'10px'}}>
     <button style={{color:"white", backgroundColor:'blue'}} onClick={navigateToCreate}>Create Empolye</button>
      </div>
        <Table striped bordered hover>
      <thead>
        <tr>
        <th>UserID</th>
          <th>Id</th>
          <th>Title</th>
          <th>Action</th>
           </tr>
      </thead>
      {employe.map((item)=>{
        return(
            <tbody>
            <tr>
            <td>{item.userId}</td> 
              <td>{item.id}</td>
              <td>{item.title}</td>
             <td><IoEyeSharp onClick={()=>view(item)}/>&nbsp;&nbsp;
             <MdEdit onClick={()=>navigateToEdit(item)}/>&nbsp;&nbsp;
             <RiDeleteBin5Fill onClick={()=>showDelete(item)}/>&nbsp;&nbsp;</td> 
            
            </tr>
            </tbody>
            
        )
      } )}
     
        
      
    </Table>
    <Modal title="Delete" visible={ismodalopen} onOk={handleDelete} onCancel={handleCancel} >
        <p>Are You Sure You Want to delete....?</p>
        
      </Modal>
      <Modal title="View" visible={viewmodal} onOk={handleOK} onCancel={handleCancel} >
      <center> <h3>ID:{rows.id}</h3>
        <h3>TITLE:{rows.title}</h3>
        </center> 
        
      </Modal>
      <ToastContainer/>
    </div>
  )
}

export default Main