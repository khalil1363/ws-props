import React, { Component } from "react";
import propTypes from "prop-types"
const HandleName =(props)=>{
    return(
        <div>
           <h2>{props.fullName}</h2>
          <h2>{props.bio}</h2> 
        <h2>{props.profession}</h2>
 <img src={props.src} alt=''/> 
{props.children}
    <button onClick={()=>{  
props.alertMyInput('hello my name is fray khalil')    
}}>
click me
</button>
</div>
    )
}
HandleName.defaultProps={fullName:'enter your name',bio:'enter your bio',profession:'enter your profsion'}
Component.propTypes={
    fullName:propTypes.string.isRequired,
     bio:propTypes.string.isRequired,
      profession:propTypes.string.isRequired}
export default HandleName;