import React from 'react'
import  { useState,useEffect } from 'react';
import { items } from '../utils/constants';
import { useParams } from 'react-router-dom';


const ResList = () => {

    const {resid}=useParams();
    

    const [reslist,setreslist]=useState([])
    

    useEffect(()=>{
        setreslist(items)
    },[])



    return (
        <div>
          {reslist.map((res) => {
            return resid === res.id ? (
              <div key={res.id}>{res.name}</div>
            ) : null;  // Optionally return null or handle non-matching cases
          })}
        </div>
      );
      
}

export default ResList
