import React, { useState , useEffect} from 'react';
import {Speedometer, List, Person, Search, Cart, Bag} from 'react-bootstrap-icons';
import { Button, Modal, Card } from 'react-bootstrap';
import './Header.css';
import logo1 from './logo-TRP.jpg';
import logo2 from './logo-TRP.png';
import { useMediaQuery } from 'react-responsive';
import MediaQuery from 'react-responsive';

function Header() {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

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
   
  <MediaQuery minWidth={1200}>
  <div id="logo" className='logo'>
    <a href="index.html">
      <img className='mt-2 logo-img' style={{ height: "100px", width: "100px", borderRadius: "25px"}} src={logo} alt='Logo'/>
    </a>
  </div>
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
  </MediaQuery>


    <MediaQuery minWidth={1021} maxWidth={1199}>
    <div id="logo" className='logo'>
    <a href="index.html">
      <img className='mt-2 logo-img' style={{ height: "100px", width: "100px", borderRadius: "25px"}} src={logo} alt='Logo'/>
    </a>
  </div>
   
  {/* <div className="logo">Logo</div> */}
  <nav id="navbar" className="navbar mx-2" >
    <ul className="links" >
      <li> <a style={{fontSize: "12px"}} className="link-item nav-link scrollto" href="/"  > Home </a> </li>
      <li> <a style={{fontSize: "12px"}} className="link-item nav-link scrollto" href="/shop" >  Shop </a> </li>
      <li> <a style={{fontSize: "12px"}} className="link-item nav-link scrollto" href="services.html" > Returns/Exchange </a> </li>
      <li> <a style={{fontSize: "12px"}} className="link-item nav-link scrollto" href="book.html" > Track </a> </li>
      <li> <a style={{fontSize: "12px"}} className="link-item nav-link scrollto" href="photo.html"> FAQ's </a> </li>
      <li> <a style={{fontSize: "12px"}} className="link-item nav-link scrollto" href="/about">  About US </a> </li>
    </ul>
  <div className="nav-item d-flex mx-2">
    <ul>
      <li> <Person className=' mx-1' color='black' size={20} /></li>
      <li> <Search  className='  mx-1' color='black' size={20} /> </li>
      <li> <Bag  onClick={() => setEditModal(true)}  className='mx-1' color='black' size={20} /></li>
    </ul>   
  </div> 
  </nav>
  </MediaQuery>

  <MediaQuery minWidth={769} maxWidth={1020}>
  <div id="logo" className='logo'>
    <a href="index.html">
      <img className='mt-2 logo-img' style={{ height: "60px", width: "60px", borderRadius: "15px"}} src={logo} alt='Logo'/>
    </a>
  </div>
   
   {/* <div className="logo">Logo</div> */}
   <nav id="navbar" className="navbar mx-2" >
     <ul className="links" >
       <li> <a style={{fontSize: "8px"}} className="link-item nav-link scrollto" href="/"  > Home </a> </li>
       <li> <a style={{fontSize: "8px"}} className="link-item nav-link scrollto" href="/shop" >  Shop </a> </li>
       <li> <a style={{fontSize: "8px"}} className="link-item nav-link scrollto" href="services.html" > Returns/Exchange </a> </li>
       <li> <a style={{fontSize: "8px"}} className="link-item nav-link scrollto" href="book.html" > Track </a> </li>
       <li> <a style={{fontSize: "8px"}} className="link-item nav-link scrollto" href="photo.html"> FAQ's </a> </li>
       <li> <a style={{fontSize: "8px"}} className="link-item nav-link scrollto" href="/about">  About US </a> </li>
     </ul>
   <div className="nav-item d-flex ">
     <ul>
       <li> <Person className=' mx-1' color='black' size={20} /></li>
       <li> <Search  className='  mx-1' color='black' size={20} /> </li>
       <li> <Bag  onClick={() => setEditModal(true)}  className='mx-1' color='black' size={20} /></li>
     </ul>   
   </div> 
   </nav>
   </MediaQuery>

</div>

   
  <MediaQuery maxWidth={768}>
  <div className="justify align-items-left" style={{alignContent: "left", justifyItems: "left", marginLeft: "0px", paddingLeft: "0px"}}>
  <div id="logo" className='logo'>
    <a href="index.html">
      <img className='mt-2 logo-img' style={{ height: "60px", width: "60px", borderRadius: "15px"}} src={logo} alt='Logo'/>
    </a>
  </div>
  </div>
  <div style={{marginRight: "0px", paddingRight: "0px"}}>
    {!nav &&  <List onClick={() => setNav(true)} className='me-4 mt-0 pt-0' color='black' size={28}  />}
  </div>
  </MediaQuery>
</header> 

{/* modal-right scroll-out-negative   */}

<MediaQuery maxWidth={768}>
<Modal className="px-0 mx-0 toggle" show={nav} onHide={() => setNav(false)} scrollable dialogClassName="full">
<Modal.Header closeButton className='modalHead'>
  {/* <Modal.Title className='fw-bold' as="h5">MENU ITEMS</Modal.Title> */}
</Modal.Header>
<Modal.Body  style={ice} className='px-0 mx-0 modalBod'>
<ul className="links nav-item"  style={{listStyle: "none", textAlign: "left"}}>
      <li> <a style={{fontSize: "20px", fontWeight: "bold"}} className="link-item nav-link" href="/"  > Home </a> </li> <hr/>
      <li> <a style={{fontSize: "20px", fontWeight: "bold"}} className="link-item nav-link" href="/shop" >  Shop </a> </li><hr/>
      <li> <a style={{fontSize: "20px", fontWeight: "bold"}} className="link-item nav-link" href="services.html" > Returns/Exchange </a> </li><hr/>
      <li> <a style={{fontSize: "20px", fontWeight: "bold"}} className="link-item nav-link" href="book.html" > Track </a> </li><hr/>
      <li> <a style={{fontSize: "20px", fontWeight: "bold"}} className="link-item nav-link" href="photo.html"> FAQ's </a> </li><hr/>
      <li> <a style={{fontSize: "20px", fontWeight: "bold"}} className="link-item nav-link" href="/about">  About US </a> </li><hr/>
  </ul>
</Modal.Body>
<Modal.Footer className="border-0">
</Modal.Footer>
</Modal>
</MediaQuery>

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