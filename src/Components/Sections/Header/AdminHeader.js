import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import {Speedometer, List, Person, Search, Cart, Bag, Heart , PersonCircle} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function AdminHeader() {
  const navigate = useNavigate();
  const [profileModal, setProfileModal] = useState(false);

  const goToHomePage = () => {
    navigate('/');
  }

  const goToProfile = () => {
    navigate('/shop/profile');
    setProfileModal(false);
  }

  return (<>
    <div style={{cursor: "pointer"}} onClick={() => goToHomePage()} >
      <h1 className='text-center my-2'>ADMIN PANEL</h1>
      {/* <Button onClick={() => handleLogout()}></Button> */}
      {/* <PersonCircle onClick={() => setProfileModal(true)} className='mx-1' size={28} />
      <li style={{listStyle: "none", fontSize: "20px"}} className='fw-bold' onClick={() => goToProfile()} >Profile</li> */}

    </div>


    <Modal className="modal-right scroll-out-negative" show={profileModal} onHide={() => setProfileModal(false)} scrollable dialogClassName="full">
    <Modal.Header closeButton>
  <Modal.Title className='fw-bold' as="h5">Profile</Modal.Title>
    </Modal.Header>
    <Modal.Body className='mx-0 px-0'>
      <ul> 
       {userRole === "admin" && <li style={{listStyle: "none", fontSize: "20px"}} className='fw-bold' onClick={() => goToAdmin()} >Admin Dashboard</li>}
        <li style={{listStyle: "none", fontSize: "20px"}} className='fw-bold' onClick={() => goToProfile()} >Profile</li>
        <li style={{listStyle: "none", fontSize: "20px"}} className='fw-bold'  onClick={() => goToOrderPage()}>Order</li>
      </ul>

     {!loggedIn && <Button style={{backgroundColor: "black", color: "white", border: "1px solid black"}} className='mb-1 fs-5 fw-bold w-100' onClick={() => goToLoginPage()} >LOGIN</Button> }
     {loggedIn && <Button style={{backgroundColor: "black", color: "white", border: "1px solid black"}} className='mt-1 fs-5 fw-bold w-100' onClick={() =>{ logout(); setProfileModal(false)}} >LOGOUT</Button>} 

    </Modal.Body>
    <Modal.Footer className="border-0"></Modal.Footer>
  </Modal>
  </>);
}

export default AdminHeader;