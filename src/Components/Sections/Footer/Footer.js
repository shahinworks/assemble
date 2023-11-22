import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Envelope } from 'react-bootstrap-icons';
import { useWindowSize } from '../../../hooks/useWindowSize';
import MediaQuery from 'react-responsive';
import { Form } from 'react-bootstrap';

function Footer() {

  // const { themeValues } = useSelector((state) => state.settings);
  // const xlBreakpoint = parseInt(themeValues.xl.replace('px', ''), 10);
  // const { width } = useWindowSize();
  // const [isXlScreen, setIsXlScreen] = useState(false);
  // const [isOpenCategoriesModal, setIsOpenCategoriesModal] = useState(false);

  // useEffect(() => {
  //   if (width) {
  //     if (width >= xlBreakpoint) {
  //       if (!isXlScreen) setIsXlScreen(true);
  //       if (isOpenCategoriesModal) setIsOpenCategoriesModal(false);
  //     } else if (isXlScreen) setIsXlScreen(false);
  //   }
  //   return () => {};
  //   // eslint-disable-next-line
  // }, [width]);


  // useEffect(() => {}, []);



  return (<>
  <MediaQuery minWidth={769} >
    <section style={{ paddingBottom: "0", marginBottom: "0" }} >
    <footer>
      <div className='mx-5'>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 text-start">
            <h4>Footer Menu</h4>
            <ul>
              <li style={{fontSize: "16px"}}>
                <a href="#">Search</a>
              </li>
              <li style={{fontSize: "16px"}}>
                <a href="#">The TEAM</a>
              </li>
              <li style={{fontSize: "16px"}}>
                <a href="#">
                  Registered Address : 695A, Sadhasiva Nagar, Vandiyur, Madurai -
                  625020
                </a>
              </li>
              <li style={{fontSize: "1rem"}}>
                <a href="#">
                  Email Address :<br /> operations@theveshticompany.com
                </a>
              </li>
              <li style={{fontSize: "16px"}}>
                <a href="/shop/about">About us</a>
              </li>
              <li style={{fontSize: "16px"}}>
                <a href="/shop/contact">Contact us</a>
              </li>
              <li style={{fontSize: "16px"}}>
                <a href="/shop/terms">Terms and Conditions</a>
              </li>
              <li style={{fontSize: "16px"}}>
                <a href="/shop/privacy">Privacy Policy</a>
              </li>
              <li style={{fontSize: "16px"}}>
                <a href="/shop/refund">Refund | Cancellation | Shipping </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 text-start">
            <h4>Main Menu</h4>
            <ul>
              <li style={{fontSize: "16px"}}>
                <a href="#">Home</a>
              </li>
              <li style={{fontSize: "16px"}}>
                <a href="#">All Products</a>
              </li>
              <li style={{fontSize: "16px"}}>
                <a href="#">New Arrivals</a>
              </li>
              <li style={{fontSize: "16px"}}>
                <a href="#">The Vagabond</a>
              </li>
              <li style={{fontSize: "16px"}}>
                <a href="#">Hipster Series</a>
              </li>
              <li style={{fontSize: "16px"}}>
                <a href="#">BoHo Shorts (Out of Stock)</a>
              </li>
              <li style={{fontSize: "16px"}}>
                <a href="#">The TEAM</a>
              </li>
              <li style={{fontSize: "16px"}}>
                <a href="#">Track My Order</a>
              </li>
              <li style={{fontSize: "16px"}}>
                <a href="#">Returns Center</a>
              </li>
              <li style={{fontSize: "16px"}}>
                <a href="#">Help Centre</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <h4>Sign up and save</h4>
            <br />
            <p style={{fontSize: "16px"}}>
              Subscribe to get special offers, free giveaways, and once in a
              lifetime deals.
            </p>
            <br />
            <div style={{border: "1px solid white", borderRadius: "3px"}} className='pb-1 d-flex flex-wrap'>
            <span className='ms-1 me-0'>  <Envelope color='white' size={20} className='mx-0 px-0'/> </span>
            <input type="email" placeholder="Enter Your Email here" className='pe-2' />
            </div>
            {/* <div className="start-info">
              <div className="input text-center" style={{textAlign: "center"}}>
                <div className="input1 d-flex " style={{width: "100%"}}>
                  <Envelope color='white' size={20}/>
                  <input type="email" placeholder="Enter Your Email here" />
                </div>
              </div>
            </div> */}
            <br />
            <div className="d-flex">
              <a href="https://instagram.com/asemble_trp?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr" style={{ paddingRight: 15 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="white" className="bi bi-instagram" viewBox="0 0 16 16" >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              <a href="https://wa.me/918829999060?text=" style={{ paddingRight: 15 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-whatsapp" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg> 
              </a>
              <a href="https://www.youtube.com/@trp_fits_official">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-youtube" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </section>
  </MediaQuery>

  <MediaQuery maxWidth={768} >
  <div className="accordion" id="accordionExample" style={{backgroundColor: "black", color: "white"}}>
  <div className="accordion-item"  style={{backgroundColor: "black", color: "white", border: "2px solid black"}}>
    <h2 className="accordion-header"  style={{backgroundColor: "black", color: "white"}}>
      <button style={{backgroundColor: "black", color: "white"}} className="fs-3 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Main Menu
      </button>
    </h2>
    <div style={{backgroundColor: "black", color: "white"}} id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div style={{backgroundColor: "black", color: "white", listStyle: "none"}} className="accordion-body">
      <ul style={{ listStyle: "none", color: "white", fontSize: "20px", fontWeight: "600" }} className='text-white'>
              <li className='my-2'>
                <a style={{color: "white"}} href="#">Search</a>
              </li>
              <li className='my-2'>
                <a style={{color: "white"}} href="#">The TEAM</a>
              </li>
              <li className='my-2'>
                <a  style={{color: "white"}} href="#">
                  Registered Address : 695A, Sadhasiva Nagar, Vandiyur, Madurai -
                  625020
                </a>
              </li>
              <li className='my-2'>
                <a href="#" style={{color: "white"}}>
                  Email Address :<br /> operations@theveshticompany.com
                </a>
              </li>
              <li className='my-2'>
                <a href="/shop/about" style={{color: "white"}}>About us</a>
              </li>
              <li className='my-2'>
                <a href="/shop/contact" style={{color: "white"}}>Contact us</a>
              </li>
              <li className='my-2'>
                <a href="/terms" style={{color: "white"}}>Terms and Conditions</a>
              </li>
              <li className='my-2'>
                <a  href="/shop/privacy" style={{color: "white"}}>Privacy Policy</a>
              </li>
              <li className='my-2'>
                <a href="/shop/refund" style={{color: "white"}}>Refund | Cancellation | Shipping Policy</a>
              </li>
            </ul>
      </div>
    </div>
  </div>
  <div style={{backgroundColor: "black", color: "white", border: "2px solid black"}} className="accordion-item ">
    <h2 style={{backgroundColor: "black", color: "white"}} className="accordion-header">
      <button style={{backgroundColor: "black", color: "white"}} className="fs-3 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
       Footer Menu
      </button>
    </h2>
    <div style={{backgroundColor: "black", color: "white"}} id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div style={{backgroundColor: "black", color: "white", listStyle: "none"}} className="accordion-body">
      <ul style={{ listStyle: "none", color: "white", fontSize: "20px", fontWeight: "600"}} className='text-white'>
        <li className='my-2'>
          <a style={{color: "white"}} href="#">Home</a>
        </li>
        <li className='my-2'>
          <a style={{color: "white"}} href="#"> All Products</a>
        </li>
        <li className='my-2'>
          <a style={{color: "white"}} href="#">New Arrivals</a>
        </li>
        <li className='my-2'>
          <a style={{color: "white"}} href="#">The Vagabond</a>
        </li>
        <li className='my-2'>
          <a style={{color: "white"}} href="#">Hipster Series</a>
        </li>
        <li className='my-2'>
          <a style={{color: "white"}} href="#">BoHo Shorts (Out of Stock)</a>
        </li>
        <li className='my-2'>
          <a style={{color: "white"}} href="#">The TEAM</a>
        </li>
        <li className='my-2'>
          <a style={{color: "white"}} href="#">Track My Order</a>
        </li>
        <li className='my-2'>
          <a style={{color: "white"}} href="#">Returns Center</a>
        </li>
        <li className='my-2'>
          <a style={{color: "white"}} href="#">Help Centre</a>
        </li>
      </ul>
      </div>
    </div>
  </div>
  <div style={{backgroundColor: "black", color: "white", border: "2px solid black"}} className="accordion-item">
    <h2 style={{backgroundColor: "black", color: "white"}} className="accordion-header">
      <button style={{backgroundColor: "black", color: "white"}} className="fs-3 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Sign up and Save
      </button>
    </h2>
    <div style={{backgroundColor: "black", color: "white"}} id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div style={{backgroundColor: "black", color: "white"}} className="accordion-body">
      <br />
      <p> Subscribe to get special offers, free giveaways, and once in a lifetime deals.</p>
            <br />
          
        <div className='pb-1 mb-3  mx-3'>
            <span className='mx-1'>  <Envelope color='white' size={20}/> </span>
            <input type="email" placeholder="Enter Your Email here" />
            </div>
            <br />
            <div className="d-flex mx-4">
            <a href="https://instagram.com/asemble_trp?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr" style={{ paddingRight: 15 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="white" className="bi bi-instagram" viewBox="0 0 16 16" >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              <a href="https://wa.me/918829999060?text=" style={{ paddingRight: 15 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-whatsapp" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg> 
              </a>
              <a href="https://www.youtube.com/@trp_fits_official">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-youtube" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                </svg>
              </a>
            </div>
      </div>
    </div>
    </div>
            </div>
 
  </MediaQuery >

  </>)
}

export default Footer;