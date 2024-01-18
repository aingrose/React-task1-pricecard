import React from 'react'
import './Card.css'
function Card(props){
    return(
        
      
   <div className="col">
    <div className="card">
      <div className="card-body ">
       <h6 className='top'>{props.data.top}</h6>
        <h1 className="card-title">{props.data.name}</h1>
        <hr></hr>
        <p className="card-text "><i class="bi bi-check"></i>Single user</p>
        <p className="card-text "><i class="bi bi-check"></i>50Gb Storage</p>
        <p className="card-text "><i class="bi bi-check"></i>Unlimite Public Projects</p>
        <p className="card-text "><i class="bi bi-check"></i>Communitity Access</p>

        {props.data.features.map((card)=>{
          return card.enabled ?  <p style={{color:"grey"}} className='card-text'><i class="bi bi-x"></i>{card.change}</p> : <p className='card-text'><i class="bi bi-check"></i>{card.change}</p>
        }) 
        }

     
        <a href="https://getbootstrap.com/docs/5.3/components/card/" target='blank' className="btn btn-primary">Button</a>
      </div>
    </div>
  </div>

  




    )
}
export default Card