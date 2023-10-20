import React, { useState , useEffect} from 'react';
import {Speedometer, List, Person, Search, Cart, Bag, Heart , PersonCircle} from 'react-bootstrap-icons';
import { Button, Modal, Card } from 'react-bootstrap';
// import './Header.css';
import logo1 from './Images/logo-TRP.jpg';
import logo2 from './Images/logo-TRP.png';
import { useMediaQuery } from 'react-responsive';
import MediaQuery from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { gql, useQuery, useLazyQuery } from '@apollo/client';
import CartPage from '../../Home/CartSection/CartPage';
import CartPop from '../../Home/CartSection/CartPop';

function Header() {
  const navigate = useNavigate();

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
  const [profileModal, setProfileModal] = useState(false)
;
  const [nav, setNav] = useState(false);

  const goToLoginPage = () => {
    navigate('/login');

  }
  
  // GETTING CART ITEMS
  const CART = gql`
    query Cart {
      cart {
        _id
        cartProducts {
          productId {
            id
            priveiwName
            productName
            images
            sellingPrice
          }
          quantity
        }
      }
    }
  `;

  const [getCartData, {data: cartData}] = useLazyQuery(CART);

  useEffect(() => {
    getCartData();
  }, []);

  // const goToHomePage = () => {
  //   navigate('/');
  // }

  
  // const handleNavbar = () => {
  //   console.log("handleNavbar");
  // }

  const goToWishList = () => {
    navigate('/wishlist');
  }


  const goToProfile = () => {
    navigate('profile');
  }

  return (   
    <>
    <header className={header}>
    <div className="d-flex justify-content-between align-items-center">
   
  <MediaQuery minWidth={1200}>
  <div id="logo" className='logo'>
    <a href="index.html">
      <img className='mt-2 logo-img' style={{ height: "80px", width: "80px", borderRadius: "15px"}} src={logo1} alt='Logo'/>
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
      <li onClick={() => goToLoginPage()}> <Person className=' mx-1' color='black' size={34} /></li>
      <li> <Search className='  mx-1' color='black' size={28} /> </li>
      <li> <Bag onClick={() => setEditModal(true)}  className='mx-1' color='black' size={28} /></li>
      <li> <Heart onClick={() => goToWishList()}  className='mx-1' color='black' size={28} /></li>
      <li> <PersonCircle onClick={() => setProfileModal(true)} className='mx-1' color='black' size={28} /></li>
    </ul>   
  </div> 
  </nav> 
  </MediaQuery>
    <MediaQuery minWidth={1035} maxWidth={1199}>
    <div id="logo" className='logo'>
    <a href="index.html">
      <img className='mt-2 logo-img' style={{ height: "100px", width: "100px", borderRadius: "15px"}} src={logo1} alt='Logo'/>
    </a>
  </div>
   
  {/* <div className="logo">Logo</div> */}
  <nav id="navbar" className="navbar mx-2" >
    <ul className="links" >
      <li> <a style={{fontSize: "16px"}} className="link-item nav-link scrollto" href="/"  > Home </a> </li>
      <li> <a style={{fontSize: "16px"}} className="link-item nav-link scrollto" href="/shop" >  Shop </a> </li>
      <li> <a style={{fontSize: "16px"}} className="link-item nav-link scrollto" href="services.html" > Returns/Exchange </a> </li>
      <li> <a style={{fontSize: "16px"}} className="link-item nav-link scrollto" href="book.html" > Track </a> </li>
      <li> <a style={{fontSize: "16px"}} className="link-item nav-link scrollto" href="photo.html"> FAQ's </a> </li>
      <li> <a style={{fontSize: "16px"}} className="link-item nav-link scrollto" href="/about">  About US </a> </li>
    </ul>
  <div className="nav-item d-flex mx-2">
    <ul>
      <li onClick={() => goToLoginPage()}> <Person className=' mx-1' color='black' size={20} /></li>
      <li> <Search  className='  mx-1' color='black' size={20} /> </li>
      <li> <Bag  onClick={() => setEditModal(true)}  className='mx-1' color='black' size={20} /></li>
      <li> <Heart  onClick={() => goToWishList()}  className='mx-1' color='black' size={20} /></li>
      <li> <PersonCircle onClick={() => setProfileModal(true)} className='mx-1' color='black' size={20} /></li>
    </ul>   
  </div> 
  </nav>
  </MediaQuery>
  <MediaQuery minWidth={769} maxWidth={800}>
  <div id="logo" className='logo'>
    <a href="index.html">
      <img className='mt-2 logo-img' style={{ height: "60px", width: "60px", borderRadius: "15px"}} src={logo1} alt='Logo'/>
    </a>
  </div>
   
   {/* <div className="logo">Logo</div> */}
   <nav id="navbar" className="navbar mx-2" >
     <ul className="links" >
       <li> <a style={{fontSize: "0.75rem"}} className="link-item nav-link scrollto" href="/"  > Home </a> </li>
       <li> <a style={{fontSize: "0.75rem"}} className="link-item nav-link scrollto" href="/shop" >  Shop </a> </li>
       <li> <a style={{fontSize: "0.75rem"}} className="link-item nav-link scrollto" href="services.html" > Returns/Exchange </a> </li>
       <li> <a style={{fontSize: "0.75rem"}} className="link-item nav-link scrollto" href="book.html" > Track </a> </li>
       <li> <a style={{fontSize: "0.75rem"}} className="link-item nav-link scrollto" href="photo.html"> FAQ's </a> </li>
       <li> <a style={{fontSize: "0.75rem"}} className="link-item nav-link scrollto" href="/about">  About US </a> </li>
     </ul>
   <div className="nav-item d-flex ">
     <ul>
       <li onClick={() => goToLoginPage()}> <Person className=' mx-1' color='black' size={20} /></li>
       <li> <Search  className='  mx-1' color='black' size={20} /> </li>
       <li> <Bag  onClick={() => setEditModal(true)}  className='mx-1' color='black' size={20} /></li>
       <li> <Heart  onClick={() => goToWishList()}  className='mx-1' color='black' size={20} /></li>
       <li> <PersonCircle onClick={() => setProfileModal(true)} className='mx-1' color='black' size={20} /></li>
     </ul>   
   </div> 
   </nav>
   </MediaQuery>
   <MediaQuery minWidth={801} maxWidth={875}>
  <div id="logo" className='logo'>
    <a href="index.html">
      <img className='mt-2 logo-img' style={{ height: "60px", width: "60px", borderRadius: "15px"}} src={logo1} alt='Logo'/>
    </a>
  </div>
   
   {/* <div className="logo">Logo</div> */}
   <nav id="navbar" className="navbar"  style={{margin: "2px", paddingLeft: "2px"}}>
     <ul className="links" >
       <li style={{ paddingLeft: "0px"}}> <a style={{fontSize: "0.85rem", paddingLeft: "0px", marginLeft: "0px"}} className="link-item nav-link scrollto" href="/"  > Home </a> </li>
       <li style={{ paddingLeft: "0px"}}> <a style={{fontSize: "0.85rem"}} className="link-item nav-link scrollto" href="/shop" >  Shop </a> </li>
       <li style={{ paddingLeft: "0px"}}> <a style={{fontSize: "0.85rem"}} className="link-item nav-link scrollto" href="services.html" > Returns/Exchange </a> </li>
       <li style={{ paddingLeft: "0px"}}> <a style={{fontSize: "0.85rem"}} className="link-item nav-link scrollto" href="book.html" > Track </a> </li>
       <li style={{ paddingLeft: "0px"}}> <a style={{fontSize: "0.85rem"}} className="link-item nav-link scrollto" href="photo.html"> FAQ's </a> </li>
       <li style={{ paddingLeft: "0px"}}> <a style={{fontSize: "0.85rem"}} className="link-item nav-link scrollto" href="/about">  About US </a> </li>
     </ul>
   <div className="nav-item d-flex ">
     <ul>
       <li onClick={() => goToLoginPage()}> <Person className=' mx-1' color='black' size={20} /></li>
       <li> <Search  className='  mx-1' color='black' size={20} /> </li>
       <li> <Bag  onClick={() => setEditModal(true)}  className='mx-1' color='black' size={20} /></li>
       <li> <Heart  onClick={() => goToWishList()}  className='mx-1' color='black' size={20} /></li>
       <li> <PersonCircle onClick={() => setProfileModal(true)} className='mx-1' color='black' size={20} /></li>
     </ul>   
   </div> 
   </nav>
   </MediaQuery>
   <MediaQuery minWidth={876} maxWidth={950}>
  <div id="logo" className='logo'>
    <a href="index.html">
      <img className='mt-2 logo-img' style={{ height: "60px", width: "60px", borderRadius: "15px"}} src={logo1} alt='Logo'/>
    </a>
  </div>
   
   {/* <div className="logo">Logo</div> */}
   <nav id="navbar" className="navbar"  style={{margin: "2px", paddingLeft: "2px"}}>
     <ul className="links" >
       <li style={{ paddingLeft: "0px"}}> <a style={{fontSize: "1rem", paddingLeft: "0px", marginLeft: "0px"}} className="link-item nav-link scrollto" href="/"  > Home </a> </li>
       <li style={{ paddingLeft: "0px"}}> <a style={{fontSize: "1rem"}} className="link-item nav-link scrollto" href="/shop" >  Shop </a> </li>
       <li style={{ paddingLeft: "0px"}}> <a style={{fontSize: "1rem"}} className="link-item nav-link scrollto" href="services.html" > Returns/Exchange </a> </li>
       <li style={{ paddingLeft: "0px"}}> <a style={{fontSize: "1rem"}} className="link-item nav-link scrollto" href="book.html" > Track </a> </li>
       <li style={{ paddingLeft: "0px"}}> <a style={{fontSize: "1rem"}} className="link-item nav-link scrollto" href="photo.html"> FAQ's </a> </li>
       <li style={{ paddingLeft: "0px"}}> <a style={{fontSize: "1rem"}} className="link-item nav-link scrollto" href="/about">  About US </a> </li>
     </ul>
   <div className="nav-item d-flex ">
     <ul>
       <li onClick={() => goToLoginPage()}> <Person className=' mx-1' color='black' size={20} /></li>
       <li> <Search  className='  mx-1' color='black' size={20} /> </li>
       <li> <Bag  onClick={() => setEditModal(true)}  className='mx-1' color='black' size={20} /></li>
       <li> <Heart  onClick={() => goToWishList()}  className='mx-1' color='black' size={20} /></li>
       <li> <PersonCircle onClick={() => setProfileModal(true)} className='mx-1' color='black' size={20} /></li>
     </ul>   
   </div> 
   </nav>
   </MediaQuery>

   <MediaQuery minWidth={951} maxWidth={1034}>
  <div id="logo" className='logo'>
    <a href="index.html">
      <img className='mt-2 logo-img' style={{ height: "60px", width: "60px", borderRadius: "15px"}} src={logo1} alt='Logo'/>
    </a>
  </div>
   
   {/* <div className="logo">Logo</div> */}
   <nav id="navbar" className="navbar"  style={{margin: "2px", paddingLeft: "2px"}}>
     <ul className="links" >
       <li style={{ paddingLeft: "0px"}}> <a style={{fontSize: "1.1rem", paddingLeft: "0px", marginLeft: "0px"}} className="link-item nav-link scrollto" href="/"  > Home </a> </li>
       <li style={{ paddingLeft: "0px"}}> <a style={{fontSize: "1.1rem"}} className="link-item nav-link scrollto" href="/shop" >  Shop </a> </li>
       <li style={{ paddingLeft: "0px"}}> <a style={{fontSize: "1.1rem"}} className="link-item nav-link scrollto" href="services.html" > Returns/Exchange </a> </li>
       <li style={{ paddingLeft: "0px"}}> <a style={{fontSize: "1.1rem"}} className="link-item nav-link scrollto" href="book.html" > Track </a> </li>
       <li style={{ paddingLeft: "0px"}}> <a style={{fontSize: "1.1rem"}} className="link-item nav-link scrollto" href="photo.html"> FAQ's </a> </li>
       <li style={{ paddingLeft: "0px"}}> <a style={{fontSize: "1.1rem"}} className="link-item nav-link scrollto" href="/about">  About US </a> </li>
     </ul>
   <div className="nav-item d-flex ">
     <ul>
       <li onClick={() => goToLoginPage()}> <Person className=' mx-1' color='black' size={20} /></li>
       <li> <Search className='  mx-1' color='black' size={20} /> </li>
       <li> <Bag onClick={() => setEditModal(true)} className='mx-1' color='black' size={20} /></li>
       <li> <Heart onClick={() => goToWishList(true)} className='mx-1' color='black' size={20} /></li>
       <li> <PersonCircle onClick={() => setProfileModal(true)} className='mx-1' color='black' size={20} /></li>
     </ul>   
   </div> 
   </nav>
   </MediaQuery>
</div>

   
  <MediaQuery maxWidth={768}>
  <div className="justify align-items-left" style={{alignContent: "left", justifyItems: "left", marginRight: "60px"}}>
  <div id="logo" className='logo'>
    <a href="index.html">
      <img className='mt-2 logo-img' style={{ height: "60px", width: "60px", borderRadius: "15px"}} src={logo1} alt='Logo'/>
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
  <ul  className="links nav-item d-flex"  style={{listStyle: "none", textAlign: "left"}}>
       <li> <Person  onClick={() => goToLoginPage()} className=' mx-1' color='black' size={30} /></li>
       <li> <Search className='  mx-1' color='black'  size={30} /> </li>
       <li> <Bag onClick={() => setEditModal(true)} className='mx-1' color='black'  size={30} /></li>
       <li> <Heart onClick={() => goToWishList(true)} className='mx-1' color='black' size={30} /></li>
       <li> <PersonCircle onClick={() => setProfileModal(true)} className='mx-1' color='black' size={30}  /></li> </ul> 
</Modal.Header>
<Modal.Body  style={ice} className='px-0 mx-0 modalBod'>
  
<ul className="links nav-item"  style={{listStyle: "none", textAlign: "left"}}>
      <li> <a style={{fontSize: "20px", fontWeight: "bold"}} className="link-item nav-link" href="/"  > Home </a> </li> <hr/>
      <li> <a style={{fontSize: "20px", fontWeight: "bold"}} className="link-item nav-link" href="/shop" >  Shop </a> </li><hr/>
      <li> <a style={{fontSize: "20px", fontWeight: "bold"}} className="link-item nav-link" href="services.html" > Returns/Exchange </a> </li><hr/>
      <li> <a style={{fontSize: "20px", fontWeight: "bold"}} className="link-item nav-link" href="book.html" > Track </a> </li><hr/>
      <li> <a style={{fontSize: "20px", fontWeight: "bold"}} className="link-item nav-link" href="photo.html"> FAQ's </a> </li><hr/>
      <li> <a style={{fontSize: "20px", fontWeight: "bold"}} className="link-item nav-link" href="/about">  About US </a> </li><hr/>
      <li> <a style={{fontSize: "20px", fontWeight: "bold"}} className="link-item nav-link" href="/profile">Profile</a> </li><hr/>
      <li> <a style={{fontSize: "20px", fontWeight: "bold"}} className="link-item nav-link" href="/wishlist">Wishlist</a> </li><hr/>
      <li> <a style={{fontSize: "20px", fontWeight: "bold"}} className="link-item nav-link" href="/cart">Cart</a> </li><hr/>
      <li> <a style={{fontSize: "20px", fontWeight: "bold"}} className="link-item nav-link" href="/login">Login</a> </li><hr/>
  </ul>
</Modal.Body>
<Modal.Footer className="border-0">
</Modal.Footer>
</Modal>
</MediaQuery>

 <CartPop show={editModal} onHide={() => setEditModal(false)}  />

  {/* <Modal className="modal-right scroll-out-negative" show={editModal} onHide={() => setEditModal(false)} scrollable dialogClassName="full">
    <Modal.Header closeButton>
  <Modal.Title className='fw-bold' as="h5">Cart</Modal.Title>
    </Modal.Header>
    <Modal.Body className='mx-0 px-0'>
      {cartData?.cart?.cartProducts?.length > 0 ? 
      <CartPage /> 
     :  <div>
      <p className='fs-6'> Your Cart is Currently Empty </p> <Button className='btn-dark' onClick={() => goToHomePage()}>Shop Now</Button></div>}
    </Modal.Body>
    <Modal.Footer className="border-0"></Modal.Footer>
  </Modal> */}

   <Modal className="modal-right scroll-out-negative" show={profileModal} onHide={() => setProfileModal(false)} scrollable dialogClassName="full">
    <Modal.Header closeButton>
  <Modal.Title className='fw-bold' as="h5">Profile</Modal.Title>
    </Modal.Header>
    <Modal.Body className='mx-0 px-0'>
      <ul>
        <li style={{listStyle: "none", fontSize: "20px"}} className='fw-bold' onClick={() => goToProfile()} >Profile</li>
        <li style={{listStyle: "none", fontSize: "20px"}} className='fw-bold' >Order</li>
      </ul>

      <Button style={{backgroundColor: "black", color: "white", border: "1px solid black"}} className='mb-1 fs-5 fw-bold w-100' onClick={() => goToLoginPage()} >LOGIN</Button> 
      <Button style={{backgroundColor: "black", color: "white", border: "1px solid black"}} className='mt-1 fs-5 fw-bold w-100' onClick={() => goToLoginPage()} >LOGOUT</Button> 


    {/* <Button onClick={() => goToLoginPage()}  style={{borderRadius: "50px", backgroundColor: "black", border: "1px solid black"}} > 
     <Person onClick={() => goToLoginPage()} color='white' size={34} />  
      </Button>
      <br />
      THIS is your Profile Modal
      <Button onClick={() => goToLoginPage()}>Login</Button>
      <Button onClick={() => goToProfile()}>Profile Section</Button> */}
    </Modal.Body>
    <Modal.Footer className="border-0"></Modal.Footer>
  </Modal>
</>
  )
}

export default Header;