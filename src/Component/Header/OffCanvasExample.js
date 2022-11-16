import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaShoppingBag } from "react-icons/fa";
import './cart.css';
import data from '../../datacart';
function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <FaShoppingBag  onClick={handleShow} />

      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {data.length === 0 ? <p>You have no items yet..</p> : 
         data.map((d)=>(
          <div className='cart'>
             <img src={d.img}/>

           <div>
           <h5>{d.desc}</h5>
           <div className='d-flex justify-content-between'>
           <p>{d.price}</p>
            <button    onClick={() => delete(d.id)}>remove</button>
           </div>
           </div>
          </div>
        ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default OffCanvasExample;