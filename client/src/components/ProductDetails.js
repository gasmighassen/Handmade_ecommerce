import React from 'react'
import Navbar from './Navbar'
import ReactStars from "react-rating-stars-component";
import "./style/productdetails.css";
import Dropdown from 'react-bootstrap/Dropdown';
import Unique from "./Unique";

const ProductDetails = () => {
  return (
    <div>
        <Navbar />
        <div className='product-container'>
            <img src='https://i.etsystatic.com/18570320/r/il/bf20f5/3425857125/il_794xN.3425857125_lheo.jpg'/>
            <div className='wasleft'>
            <div className='semi-container'>
                <button>BlankEarthCeramics</button>
                <ReactStars
    count={5}
    
    size={24}
    activeColor="#ffd700"
  />,
            </div>
           <button className='btn-btn-las'>Handmade custom initial mug | personalised pottery mug [Made to Order]</button>
           <h5>€44.95</h5>
           <h6>€56.19 Original Price €56.19(20% off)</h6>
           <button style={{backgroundColor:"transparent",borderRadius:'30px',width:"30%",marginTop:'2%',padding:'2%'}}>Shop this item</button>
            </div>

        </div>
        <div className='product-top'>
            
            <button style={{backgroundColor:"transparent",borderRadius:"30px",width:"12%",padding:"0%"}} >All fillers</button>
            <div style={{display:"flex",gap:"6%",alignItems:"center",width:"26%"}}>
            <p style={{marginBottom:"0"}}>6,663 results,
with Ads</p>
<Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
        </div>
        <Unique />
    </div>
  )
}

export default ProductDetails