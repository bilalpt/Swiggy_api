import React from "react"
const RestorentCard=(props)=>{  
    
    return(
      <div className='res-card' style={{background:'#f0f0f0'}}>
        <img alt='' className='res-logo' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/91560094B.png'/>
        <h3>{props.name}</h3>
        <h4>{props.cuisines}</h4>
        <h4>{props.avgRating}</h4>
        <h4>38 minutes</h4>
        
      </div>
  
    )
  }

  export const Withpromoted=(RestorentCard)=>{
    return (props)=>{
      return (
        <div>
          <label>Promoted</label>
          <RestorentCard {...props}/>
        </div>
      )
    }
  }

export default RestorentCard