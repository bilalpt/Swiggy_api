import React, { useEffect } from 'react';
import RestorentCard from './RestorentCard';
import { reslist } from '../utils/constants';
import { useState} from 'react';

const Body=()=>{
  const [listdata,setlistdata]=useState([]);
  // console.log(listdata,'listdata');


  useEffect(()=>{
    setlistdata(reslist)
  },[]);

  const fetchData=async()=>{
    const data=await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    )
  const json=await data.json();
  console.log(json);
  }

  if(listdata.length ===0){
    return <h1> loading ......</h1>
  }
  
  
    return(
      <div className='body'>
          <div className='filter' >
            <button className='filter-btn' 
             onClick={()=>{
              let filterdata=listdata.filter((res)=>{
                return  res.avgRating >3.8 
              })
              
              setlistdata(filterdata)
              
            }}> filter here </button>
            
          </div>
          <div className='res-container'>
            {
              listdata.map((resd)=>
                 <RestorentCard key={resd.id} name={resd.name} cuisines={resd.cuisines} avgRating={resd.avgRating}  />
              )
            }

          </div>
      </div>
    )
    }

export default Body    