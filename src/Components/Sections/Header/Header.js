import React, { useState , useEffect} from 'react';
import {Speedometer, List, Person, Search, Cart, Bag} from 'react-bootstrap-icons';
import { Button, Modal, Card } from 'react-bootstrap';
import './Header.css';
import logo1 from './logo-TRP.jpg';
import logo2 from './logo-TRP.png';


function Header() {

  const ice = {
    maxWidth: "1000px",
    margin: "0 auto"
  }

  const [header, setHeader] = useState("header");
   const [logo, setLogo] = useState(logo2);

  const listenScrollEvent = event => {
    if (window.scrollY < 73) {
      return setHeader("header"), setLogo(logo2);

    } else if (window.scrollY > 70) {
      return setHeader("header2"), setLogo(logo1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const [ editModal, setEditModal] = useState(false);

  const [nav, setNav] = useState(false);
   
  // const handleNavbar = () => {
  //   console.log("handleNavbar");
  // }

  return (   
    <>
    <header className={header}>
    <div className="d-flex justify-content-between align-items-center">
    <div id="logo" className='logo'>
    <a href="index.html">
      {/* <h2 className="text-dark" style={{ textDecoration: "none" }}> LOGO </h2> */}
      <img className='mt-2 logo-img' style={{ height: "100px", width: "100px", borderRadius: "25px"}} src={logo} alt='Logo'/>
    </a>
    {/* Uncomment below if you prefer to use a text logo */}
    {/*<h1><a href="index.html">Regna</a></h1>*/}
  </div>
  {/* <div className="logo">Logo</div> */}
  <nav id="navbar" className="navbar mx-2" >
    <ul className="links" >
      <li> <a style={{fontSize: "20px"}} className="link-item nav-link scrollto" href="/"  > Home </a> </li>
      <li> <a style={{fontSize: "20px"}} className="link-item nav-link scrollto" href="/shop" >  Shop </a> </li>
      <li> <a style={{fontSize: "20px"}} className="link-item nav-link scrollto" href="services.html" > Returns/Exchange </a> </li>
      <li> <a style={{fontSize: "20px"}} className="link-item nav-link scrollto" href="book.html" > Track </a> </li>
      <li> <a style={{fontSize: "20px"}} className="link-item nav-link scrollto" href="photo.html"> FAQ's </a> </li>
      <li> <a style={{fontSize: "20px"}} className="link-item nav-link scrollto" href="/about">  About US </a> </li>
    </ul>
  <div className="nav-item d-flex mx-2">
    <ul>
      <li> <Person className=' mx-1' color='black' size={28} /></li>
      <li> <Search  className='  mx-1' color='black' size={28} /> </li>
      <li> <Bag  onClick={() => setEditModal(true)}  className='mx-1' color='black' size={28} /></li>
    </ul>   
  </div> 
  </nav>
  </div>

  {/* <Button style={{marginRight: "1px", paddingRight: "0px", textAlign: "right"}} type="button" variant="outline-link"> */}
    {!nav &&  <List onClick={() => setNav(true)} className='me-4 mt-0 pt-0 d-lg-none ' color='black' size={28}  />}
    {/* </Button> */}
</header> 




<Modal    className="px-0 mx-0 modal-right scroll-out-negative" show={nav} onHide={() => setNav(false)} scrollable dialogClassName="full">
<Modal.Header closeButton>
  <Modal.Title className='fw-bold' as="h5">MENU ITEMS</Modal.Title>
</Modal.Header>
<Modal.Body style={ice} className='px-0 mx-0'>
<ul className="links nav-item"  style={{listStyle: "none", textAlign: "left"}}>
      <li> <a style={{fontSize: "20px"}} className="link-item nav-link" href="/"  > Home </a> </li>
      <li> <a style={{fontSize: "20px"}} className="link-item nav-link" href="/shop" >  Shop </a> </li>
      <li> <a style={{fontSize: "20px"}} className="link-item nav-link" href="services.html" > Returns/Exchange </a> </li>
      <li> <a style={{fontSize: "20px"}} className="link-item nav-link" href="book.html" > Track </a> </li>
      <li> <a style={{fontSize: "20px"}} className="link-item nav-link" href="photo.html"> FAQ's </a> </li>
      <li> <a style={{fontSize: "20px"}} className="link-item nav-link" href="/about">  About US </a> </li>
  </ul>
</Modal.Body>
<Modal.Footer className="border-0">
</Modal.Footer>
</Modal>

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