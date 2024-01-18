import logo from './logo.svg';
import './App.css';
import Card from './Card';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { TiTick } from "react-icons/ti";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faHippo,faCheck } from '@fortawesome/free-solid-svg-icons'

function App() {
  const element = <FontAwesomeIcon icon={faHippo} />

  var check =   [
    {
      top:"FREE",
       name:"$0/month",
      features:[
        {
          change :"Unlimited Private Projects",
          enabled :true,
        },
        {
         change:"Dedicated Phone Support",
         enabled :true,
        },{
          change:"Free Subdomain",
          enabled :true,
        },{
          change:"Monthly Status Report",
          enabled :true,
        }
      ]  
    },{
      top:"PLUS",
      name:"$9/month" ,
   features :[
    {
    change:"Unlimited Private Projects",
    },
    {
      change:"Dedicated Phone Support",
    },
    {
      change:"Free Subdomain",
    },{
      change:"Monthly Status Report",
      enabled :true,
    }
   ]
    
    },{
      top:"PRO",
      name:"$49/month",

      features:[
        {
          change:  "Unlimited Private Projects",
        },
        {
         change:"Dedicated Phone Support",
         
        },
        {
          change:"Free Subdomain",
        },
        {
          change:"Monthly Status Report"
        }
      ]
     
     
    
    }
  ]

  return (
    <div className="container mt-5 p-3">
  <div className='row '>
  

  {check.map((card)=>{
    return <Card data = {card}/>
  })}

   </div>
  </div>
   
  );
}

export default App;
