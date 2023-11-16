import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Envelope } from 'react-bootstrap-icons';
import { useWindowSize } from '../../../hooks/useWindowSize';
import MediaQuery from 'react-responsive';

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
    <section style={{ paddingBottom: "0% !important" }}>
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 text-start">
            <h4>Footer Menu</h4>
            <ul>
              <li>
                <a href="#">Search</a>
              </li>
              <li>
                <a href="#">The TEAM</a>
              </li>
              <li>
                <a href="#">
                  Registered Address : 695A, Sadhasiva Nagar, Vandiyur, Madurai -
                  625020
                </a>
              </li>
              <li>
                <a href="#">
                  Email Address :<br /> operations@theveshticompany.com
                </a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Refund | Cancellation | Shipping Policy</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 text-start">
            <h4>Main Menu</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">All Products</a>
              </li>
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li>
                <a href="#">The Vagabond</a>
              </li>
              <li>
                <a href="#">Hipster Series</a>
              </li>
              <li>
                <a href="#">BoHo Shorts (Out of Stock)</a>
              </li>
              <li>
                <a href="#">The TEAM</a>
              </li>
              <li>
                <a href="#">Track My Order</a>
              </li>
              <li>
                <a href="#">Returns Center</a>
              </li>
              <li>
                <a href="#">Help Centre</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <h4>Sign up and save</h4>
            <br />
            <p>
              Subscribe to get special offers, free giveaways, and once in a
              lifetime deals.
            </p>
            <br />
            <div className="start-info">
              <div className="input text-center" style={{textAlign: "center"}}>
                <div className="input1 d-flex " style={{width: "100%"}}>
                <Envelope color='white' size={20}/>
                  <input type="email" placeholder="Enter Your Email" id="" />
                </div>
              </div>
            </div>
            <br />
            <div className="d-flex">
              <a href="#" style={{ paddingRight: 15 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="white"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              <a href="#" style={{ paddingRight: 15 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="White"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="white"
                  className="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
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
                <a href="#" style={{color: "white"}}>About us</a>
              </li>
              <li className='my-2'>
                <a href="#" style={{color: "white"}}>Terms and Conditions</a>
              </li>
              <li className='my-2'>
                <a href="#" style={{color: "white"}}>Privacy Policy</a>
              </li>
              <li className='my-2'>
                <a href="#" style={{color: "white"}}>Refund | Cancellation | Shipping Policy</a>
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
      <div style={{backgroundColor: "black", color: "white"}} className="accordion-body">
        <strong style={{backgroundColor: "black", color: "white"}}>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
        <strong style={{backgroundColor: "black", color: "white"}}>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
</MediaQuery >

  </>)
}

export default Footer;