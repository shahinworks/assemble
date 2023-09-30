import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

function Clients() {
  return (
    <>
        <Row style={{paddingTop: "100px", marginTop: "30px"}}>
            <Col className='col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center' style={{paddingLeft: "80px", marginRight: "25px", fontSize: "24px"}}> 
            <Row>
            <h4 style={{fontSize: "20px", fontWeight: "bold", fontFamily: "raleway" , letterSpacing: "2px"}} className='mx-4 text-left'>UNIQUE & UNISEX</h4>
            <h5 style={{fontSize: "50px", fontFamily: "league gothic"}} className='mx-4 text-left'>Hipster Series</h5>
           <p style={{ fontFamily: "raleway", fontSize: "20px"}} className='mx-4 text-left'> The Hipster Series compliments all your quirks and crazines. Explore Playful prints, Fun colors and Unique designs that flatters your every move.
            </p> 
            <Col className='ms-4 text-left'>
            <Button  style={{backgroundColor: "black", color: "white", fontWeight: "bolder", borderRadius: "0px"}}>
                Shop Hipster Series</Button> </Col>
               <Col   className='me-4 text-left'> <Button  style={{backgroundColor: "black", color: "white", fontWeight: "bolder", borderRadius: "0px"}}>
                Shop ALL</Button> </Col>
                </Row>
            </Col>
            <Col className='col-lg-6 col-md-6 col-sm-12  justify-content-right'>
            <img src="assets/img/HD-wallpaper-d-red-model-shopping-yellow-woman-laptop-girl-funny-white-thumbnail.jpg" alt="" />
            </Col>
        </Row>
        <Row style={{paddingTop: "100px", marginTop: "30px"}}>
        <Col className='col-lg-6 col-md-6 col-sm-12  justify-content-center'>
            <img src="assets/img/HD-wallpaper-d-red-model-shopping-yellow-woman-laptop-girl-funny-white-thumbnail.jpg" alt="" />
            </Col>
            <Col className='col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center' style={{paddingRight: "80px", marginRight: "25px", fontSize: "24px"}}> 
            <Row>
            <h4 style={{fontSize: "20px", fontWeight: "bold", fontFamily: "raleway", letterSpacing: "2px"}} className='mx-4 text-left'>#BEDRESSPONSIBLE</h4>
            <h5 style={{fontSize: "50px", fontFamily: "league gothic"}} className='mx-4 text-left'>The Vagabond</h5>
           <p style={{ fontFamily: "raleway", fontSize: "20px"}} className='mx-4 text-left'> 
           Inspired from the earthy roots of Bohemian Culture, The vagabond collection transcends the realm of ordinary fashion with bewitching bohemian harem pants.
            </p> 
            <Col className='ms-4 text-left'>
            <Button  style={{backgroundColor: "black", color: "white", fontWeight: "bolder", borderRadius: "0px"}}>
                Shop The Vagabond</Button> </Col>
               <Col   className='me-4 text-left'> <Button  style={{backgroundColor: "black", color: "white", fontWeight: "bolder", borderRadius: "0px"}}>
                Shop ALL</Button> </Col>
                </Row>
            </Col>
        </Row>  
    </>
  )
}

export default Clients;