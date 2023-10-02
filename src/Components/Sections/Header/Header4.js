import React, { useState , useEffect} from 'react';
import {Speedometer, List} from 'react-bootstrap-icons';
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
  return (<>
   {/* <header className={header}>
      <div className="logo">Logo</div>
        <ul className="links">
        <li className="link-item">Home</li>
        <li className="link-item">Shop</li>
        <li className="link-item">Returns/Exchange</li>
      </ul>
    </header> */}
    <header   className="fixed-top d-flex  header header2 align-items-center header-transparent" >
    <div className="container d-flex justify-content-between align-items-center">
    <div id="logo" className='logo'>
      <a href="index.html">
        <h2 className="text-dark" style={{ textDecoration: "none" }}> LOGO </h2>
      </a>
      {/* Uncomment below if you prefer to use a text logo */}
      {/*<h1><a href="index.html">Regna</a></h1>*/}
    </div>
    <nav id="navbar" className="navbar">
      <ul className='links'>
        <li> <a className="link-item nav-link scrollto" href="index.html"> Home </a> </li>
        <li> <a className="link-item nav-link scrollto" href="shop.html">  Shop </a> </li>
        <li> <a className="link-item nav-link scrollto" href="services.html"> Returns/Exchange </a> </li>
        <li> <a className="link-item nav-link scrollto" href="book.html"> Track </a> </li>
        <li> <a className="link-item nav-link scrollto" href="photo.html"> FAQ's </a> </li>
        <li> <a className="link-item nav-link scrollto" href=" contact.html">  About US </a> </li>
      </ul>
      <div className="d-flex">
        <svg style={{ marginRight: 10 }} xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16" >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
        </svg>
        <svg style={{ marginRight: 10 }} xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        {/* <button onClick={() => setEditModal(true)} >Open Modal</button> */}
        <svg 
        // onClick="openModal()" 
        onClick={() => setEditModal(true)} 
        style={{ marginRight: 10 }} xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16" >
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
        </svg>
        <List color='#22262a' size={28} />
        {/* <i className="bi bi-list mobile-nav-toggle" /> */}
      </div>
    </nav>
    {/* .navbar */}
  </div>
  {/* Modal container */}


  <div className="modal-container" id="myModal">
    <div className="modal-content">
      <div className="d-flex justify-content-end" style={{ height: 60 }}>
        {/* <button  onClick={() => setEditModal(false)}> close</button> */}
        <svg 
       // onClick="closeModal()" 
       onClick={() => setEditModal(false)} 
        xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16" >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </div>
      <h1>Add To Cart</h1> 
      <p>No Product Added</p>
      <hr />
    </div>
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