import React, { useState , useEffect} from 'react';
import {Speedometer, List, Person, Search, Cart, Bag} from 'react-bootstrap-icons';
import { Button, Modal, Card } from 'react-bootstrap';
import './Header.css';

function Header() {
  const [header, setHeader] = useState("header");

  const listenScrollEvent = event => {
    if (window.scrollY < 73) {
      return setHeader("header");
    } else if (window.scrollY > 70) {
      return setHeader("header2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const [ editModal, setEditModal] = useState(false);

  return (   
    <>
    <header className={header}>
    <div className="d-flex justify-content-between align-items-center">
    <div id="logo" className='logo'>
    <a href="index.html">
      <h2 className="text-dark" style={{ textDecoration: "none" }}> LOGO </h2>
    </a>
    {/* Uncomment below if you prefer to use a text logo */}
    {/*<h1><a href="index.html">Regna</a></h1>*/}
  </div>
  {/* <div className="logo">Logo</div> */}
  <nav id="navbar" className="navbar">
    <ul className="links">
      <li><a className="link-item nav-link scrollto" href="/"> Home </a> </li>
      <li> <a className="link-item nav-link scrollto" href="/shop">  Shop </a> </li>
      <li> <a className="link-item nav-link scrollto" href="services.html"> Returns/Exchange </a> </li>
      <li> <a className="link-item nav-link scrollto" href="book.html"> Track </a> </li>
      <li> <a className="link-item nav-link scrollto" href="photo.html"> FAQ's </a> </li>
      <li> <a className="link-item nav-link scrollto" href="/about">  About US </a> </li>
  </ul>
  <div className="d-flex">
    
  <Person className='mx-1' color='black' size={28} />
 
  <Search  className='mx-1' color='black' size={28} />
  <Bag  onClick={() => setEditModal(true)}  className='mx-1' color='black' size={28} />

    </div>
  </nav>
  </div>
</header> 

<Modal className="modal-right scroll-out-negative" show={editModal} onHide={() => setEditModal(false)} scrollable dialogClassName="full">
<Modal.Header closeButton>
  <Modal.Title className='fw-bold' as="h5">Cart</Modal.Title>
</Modal.Header>
<Modal.Body>
 <p > Your Cart is Currently Empty </p> 
</Modal.Body>
<Modal.Footer className="border-0">
</Modal.Footer>
</Modal>
</>
  )
}

export default Header;