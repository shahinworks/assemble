import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { Button, Form, Card, Modal, Row, Col, Badge } from 'react-bootstrap';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { PencilSquare, HouseAdd } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function Profile() {

  const USER_ID = "6528f5218feba9442ff0f2d2";

    // Edit User Profile
    const [editModal, setEditModal] = useState(false);
    // const [id, setId] = useState('');
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState(null);


    const [addressModal, setAddressModal] = useState(false);

  const GET_PROFILE = gql`
    query GetProfile {
      getProfile {
        id
        firstName
        lastName
        email
        profilepic
        mobileNo
        role
      }
    }
  `;

  const {data } = useQuery(GET_PROFILE);

  if(data){
    console.log("Profile", data);
  }
  
  const phoneRegExp = /^(\+91)?(-)?\s*?(91)?\s*?(\d{3})-?\s*?(\d{3})-?\s*?(\d{4})$/;
  const pincodeRegExp = /^[0-9]*$/;
  
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Enter firstName'),
    lastName: Yup.string().required('Enter lastName'),
    mobileNo: Yup.string().matches(phoneRegExp, 'Mobile No is invalid').required('Enter Mobile No'),
    address: Yup.string().required('Enter Address'),
    address2: Yup.string().required('Enter Landmark'),
    city: Yup.string().required('Enter your City name'),
    pincode: Yup.string().matches(pincodeRegExp, 'Pincode is not valid').required('Enter Pincode'),
    state: Yup.string().required('Enter your State'),
    country: Yup.string().required('Country Name is required'),
  });

  const initialValues = {
    address: '',
    address2: '',
    city: '',
    pincode: '',
    state: '',
    country: 'India',
    firstName: '',
    lastName: '',
    mobileNo: '',
  };

  const CREATE_ADDRESS = gql`
    mutation CreateAddress($addressLine1: String!, $city: String!, $state: String!, $postalCode: String!, $country: String!, $firstName: String, $lastName: String, $mobileNo: String, $addressLine2: String) {
      createAddress(addressLine1: $addressLine1, city: $city, state: $state, postalCode: $postalCode, country: $country, firstName: $firstName, lastName: $lastName, mobileNo: $mobileNo, addressLine2: $addressLine2) {
        id
      }
    }
  `;

  const [createAddress,  {data : addressData}] = useMutation(CREATE_ADDRESS, {
    onCompleted : () => {
      toast.success("Address Saved Successfully");
    },
    onError : (error) => {
      toast.error("Error ");
      console.error(error.message);
    }
  });
    
  const onSubmit = async (values, { resetForm }) => {
    await createAddress({
      variables: {
        addressLine1: values.address,
        addressLine2: values.address2,
        postalCode: values.pincode,
        ...values,
      },
    });
    
        // setTimeout(() => {
        //   resetForm({ values: '' });
        // }, 10);
    
       
  };
    
  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, values, touched, errors } = formik;

  const EDIT_USER_PROFILE = gql`
    mutation Profileedit($firstName: String, $lastName: String, $email: String, $file: Upload, $mobileNo: String) {
      profileedit(firstName: $firstName, lastName: $lastName, email: $email, file: $file, mobileNo: $mobileNo) {
        id
        firstName
        lastName
        email
        mobileNo
        password
        profilepic
        role
      }
    }
  `;

  const [editUser, {data : profileData}] = useMutation(EDIT_USER_PROFILE, {
    onCompleted : () => {
      toast.success("Profile Updated");
    }, 
    onError : (error) => {
      console.log("ERROR ", error.message);
    }
  });

  if(profileData){
    console.log("profileData", profileData);
  }

  function handleEditValues(firstname, lastname, mobileno, mails, dp) {
    setEditModal(true);
    // setId(ID);
    setfName(firstname);
    setlName(lastname);
    setPhone(mobileno);
    setMail(mails);
    setImage(dp);
  }

  const handleSave = () => {
    editUser({
      variables: {
        firstName: fName,
        lastName: lName,
        mobileNo: phone,
        email: mail,
        file: image,
      },
    });
    setEditModal(false);
  }

  // Change Password
  const [passwordModal, setPasswordModal] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const CHANGE_PASSWORD = gql`
    mutation ChangePassword($changePasswordId: ID!, $oldPassword: String!, $newPassword: String!) {
      changePassword(id: $changePasswordId, oldPassword: $oldPassword, newPassword: $newPassword) {
        id
      }
    }
  `;

  const [changePassword,  {data : passwordData } ]= useMutation(CHANGE_PASSWORD);

  if(passwordData){
    console.log("passwordData", passwordData);
  }

  const handleUpdatePassword = async () => {
    await changePassword({
      variables: {
        changePasswordId: '643e477fc4c40564b39705a0',
        oldPassword,
        newPassword,
      },
    });
  }

  // ORDERS

    const USER_ORDERS = gql`
      query GetUserAllOrder($userId: ID) {
        getUserAllOrder(userId: $userId) {
          id
          user {
            id
            firstName
            lastName
            email
            profilepic
            mobileNo
            password
            addresses {
              id
              firstName
              lastName
              mobileNo
              addressLine1
              addressLine2
              city
              state
              postalCode
              country
            }
            role
          }
          paymentMethod
          totalAmount
          orderProducts {
            productId {
              id
              productName
              priveiwName
              sellingPrice
              images
              size
              color
              gender
              discount
              gst
              description
              stock
            }
            price
            quantity
            packedImage
            shippedImage
            shippedBy
            trackingNo
            trackingUrl
          }
          shippingAddress {
            id
            firstName
            lastName
            mobileNo
            addressLine1
            addressLine2
            city
            state
            postalCode
            country
          }
          billingAddress {
            id
            firstName
            lastName
            mobileNo
            addressLine1
            addressLine2
            city
            state
            postalCode
            country
          }
          status
          paymentStatus
          paymentProof
          paymentId
        }
      }
    `;

    const [getUserAllOrder, {data: orderData}] = useLazyQuery(USER_ORDERS);

    useEffect(() => {
      getUserAllOrder({
        variables: {
          userId: USER_ID
        }
      })
    }, []);

    if(orderData){
      console.log("UserOrders", orderData);
    }

  return (<>
    <div style={{marginTop: "10%"}}>
      <Row>
        <Col className="col-6 mx-2">
        <h2>Hi {data?.getProfile?.firstName}, This is your Profile.</h2>
        {data && data?.getProfile && <Card style={{border: "none"}}>
          <Card.Body>
          <h5>Name :  {data?.getProfile?.firstName} { data?.getProfile?.lastName}</h5>
          <h5>Email :  {data?.getProfile?.email}</h5>
          <h5>Phone :  {data?.getProfile?.mobileNo}</h5>
          <h5>Role :  {data?.getProfile?.role.join(", ")}</h5>

          {/* style={{backgroundColor: "white", border: "1px solid white"}} */}
          <Button className='btn btn-sm' variant='outline-dark'   onClick={() => handleEditValues( 
           data.getProfile.firstName, data.getProfile.lastName, data.getProfile.mobileNo, data.getProfile.email, data.getProfile.profilepic) }> Edit Profile <PencilSquare  size={20} /></Button>
            <Button className='btn btn-sm mx-1'  variant='outline-dark' 
            onClick={() => setAddressModal(!addressModal)}> 
            Add Address <HouseAdd  size={20} />
            </Button>
            <Button className='btn btn-sm'  variant='outline-dark'  
             onClick={() => setPasswordModal(true)}> 
              Reset Password
            </Button>
          </Card.Body>
        </Card>}

       
       

        </Col>
        <Col className="col-5 mx-2">

          <h2>Orders</h2>
        <Row className="g-0 align-content-center d-none d-lg-flex ps-5 pe-5 mb-2 custom-sort" style={{ backgroundColor: "black", color: "white", border: "1px solid black"}}>
        <Col  md="2" className="d-flex flex-column mb-lg-0 pe-1 justify-content-center">
          <div className=" text-md cursor-pointer sort" >
           Order ID
          </div>
        </Col>
        <Col  md="3" className="d-flex flex-column pe-1 justify-content-center ">
          <div className=" text-md cursor-pointer sort" >
            NAME
          </div>
        </Col>
        <Col  md="2" className="d-flex flex-column pe-1 justify-content-center">
          <div className=" text-md cursor-pointer sort"  >
           Amount
          </div>
        </Col>
        <Col md="2" className="d-flex flex-column pe-1 justify-content-center">
          <div className=" text-md cursor-pointer sort"  >
            Date
          </div>
        </Col>

        <Col md="2" className="d-flex flex-column pe-1 justify-content-center">
          <div className=" text-md cursor-pointer sort"  >
           Status
          </div>
        </Col>
        {/* <Col lg="1" className="d-flex flex-column pe-1 justify-content-center align-items-lg-center">
          <div className=" text-md cursor-pointer ">Check</div>
        </Col> */}
      </Row>

   {orderData && orderData?.getUserAllOrder?.length > 0 ?
        orderData?.getUserAllOrder?.map((order, index) => (
          <Card key={index} className="mb-2 hover-border-primary mx-2" style={{ backgroundColor: "black", color: "white", border: "1px solid black"}}>
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-8 my-3" style={{ backgroundColor: "black", color: "white", border: "1px solid black"}}>
              <Row className="g-0 align-content-center cursor-default">
                <Col xs="11" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <div className="text-muted text-small d-md-none">Id</div>
                  <Link to={`/admin/order/detail/${order?.id}`} className="text-truncate h-100 d-flex align-items-center">
                    <span maxLength={2}>{order?.id?.substring(0, 12)}...</span>
                  </Link>
                </Col>
                <Col xs="6" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-muted text-small d-md-none">Name</div>
                  <div className="text-alternate">
                    {order?.user?.firstName} {order?.user?.lastName}
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-muted text-small d-md-none">Purchase</div>
                  <div className="text-alternate">
                    <span>
                      <span className="text-small">₹ </span>
                      {order?.totalAmount}
                    </span>
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-muted text-small d-md-none">Date</div>
                  <div className="text-alternate">13.09.2023</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                  <div className="text-muted text-small d-md-none">Status</div>
                  <div>
                    <Badge className="badge bg-dark">{order?.status}</Badge>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ) )  : <h2 className='text-center my-4 py-4'>Order Not Found</h2>}
        
        </Col>

      </Row>
      



      {/* <Card className="mb-5">
        <Card.Body>
          <form id="sellerForm" className="tooltip-end-bottom" onSubmit={handleSubmit}>
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" autoComplete="firstName" name="firstName" onChange={handleChange} placeholder="Enter First Name" value={values.firstName} />
          </form>
        </Card.Body>
      </Card> */}

   
      {addressModal && <Card className="mb-5">
        <Card.Body className='text-center'>
          <form id="sellerForm" className="tooltip-end-bottom" onSubmit={handleSubmit}>
            <div className="mb-3 filled form-group tooltip-end-top">
              <Form.Control type="text" autoComplete="firstName" name="firstName" onChange={handleChange} placeholder="Enter First Name" value={values.firstName} />
              {errors.firstName && touched.firstName && <div className="d-block invalid-tooltip">{errors.firstName}</div>}
            </div>
            <div className="mb-3 filled form-group tooltip-end-top">
              <Form.Control type="text" autoComplete="lastName" name="lastName" onChange={handleChange} placeholder="Enter Last Name" value={values.lastName} />
              {errors.lastName && touched.lastName && <div className="d-block invalid-tooltip">{errors.lastName}</div>}
            </div>
            <div className="mb-3 filled form-group tooltip-end-top">
              <Form.Control type="text" autoComplete="mobileNo" name="mobileNo" maxLength={10} onChange={handleChange} placeholder="Enter Mobile No" value={values.mobileNo} />
              {errors.mobileNo && touched.mobileNo && <div className="d-block invalid-tooltip">{errors.mobileNo}</div>}
            </div>
            <div className="mb-3 filled form-group tooltip-end-top">
              <Form.Control type="text" autoComplete="street-address" name="address" onChange={handleChange} placeholder="Enter House No, Colony name" value={values.address} />
              {errors.address && touched.address && <div className="d-block invalid-tooltip">{errors.address}</div>}
            </div>
            <div className="mb-3 filled form-group tooltip-end-top">
              <Form.Control type="text" name="address2" onChange={handleChange} placeholder="Enter Street No, Area, Landmark" value={values.address2} />
              {errors.address2 && touched.address2 && <div className="d-block invalid-tooltip">{errors.address2}</div>}
            </div>
            <div className="mb-3 filled form-group tooltip-end-top">
              <Form.Control type="text" name="city" onChange={handleChange} placeholder="Enter City" value={values.city} />
              {errors.city && touched.city && <div className="d-block invalid-tooltip">{errors.city}</div>}
            </div>
            <div className="mb-3 filled form-group tooltip-end-top">
              <Form.Control type="text" name="pincode" onChange={handleChange} placeholder="Enter Pincode" value={values.pincode} maxLength={6} />
              {errors.pincode && touched.pincode && <div className="d-block invalid-tooltip">{errors.pincode}</div>}
            </div>
            <div className="mb-3 filled form-group tooltip-end-top">
              <Form.Select name="state" onChange={handleChange} aria-label="Default select example">
                        <option>Select State</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
              </Form.Select>
            </div>
            <div className="mb-3 filled form-group tooltip-end-top">
              <Form.Control type="text" name="country" onChange={handleChange} placeholder="Enter Country" value={values.country} />
              {errors.country && touched.country && <div className="d-block invalid-tooltip">{errors.country}</div>}
            </div>
            <div className="text-center">
              <Button variant='outline-dark' className='mx-2' onClick={() => setAddressModal(false)}>Cancel</Button>
              <Button variant="dark" className="btn-icon btn-icon-start" type="submit"> Submit Address </Button>
            </div>
          </form>
        </Card.Body>
      </Card>}
    </div>


   {/* Edit User Detail Modal Start */}
   {data && data.getProfile && (
        <Modal className="modal-right scroll-out-negative" show={editModal} onHide={() => setEditModal(false)} scrollable dialogClassName="full">
          <Modal.Header closeButton>
            <Modal.Title as="h5">User Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form>
                <div className="mb-3">
                  <Form.Label htmlFor="userEditPicture">Profile Picture</Form.Label>
                  <Form.Control id="userEditPicture" type="file" onChange={(e) => setImage(e.target.files[0])} />
                  <img style={{ height: '70px', width: '70px', borderRadius: '35px' }} className="mx-2 my-2 " src={image} alt="dp" />
                </div>
                <div className="mb-3">
                  <Form.Label htmlFor="userEditFirstName">First Name</Form.Label>
                  <Form.Control id="userEditFirstName" type="text" value={fName} onChange={(e) => setfName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <Form.Label htmlFor="userEditLastName">Last Name</Form.Label>
                  <Form.Control id="userEditLastName" type="text" value={lName} onChange={(e) => setlName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <Form.Label htmlFor="userEditMail">Email</Form.Label>
                  <Form.Control id="userEditMail" type="text" value={mail} onChange={(e) => setMail(e.target.value)} />
                </div>
                <div className="mb-3">
                  <Form.Label htmlFor="userEditPhone">Mobile no.</Form.Label>
                  <Form.Control id="userEditPhone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
              </Form>
          </Modal.Body>
          <Modal.Footer className="border-0">
            <Button variant="primary" className="btn-icon" onClick={() => setEditModal(false)}>
              <span>Cancel</span>  
            </Button>
            <Button variant="primary" className="btn-icon btn-icon-start" type="button" onClick={() => handleSave()}>
              <span>Save</span>  
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      {/* Edit User Detail Modal End */}

      {data && data.getProfile && (
        <Modal className="modal-right scroll-out-negative" show={passwordModal} onHide={() => setPasswordModal(false)} scrollable dialogClassName="full">
          <Modal.Header closeButton>
            <Modal.Title as="h5">Change Password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form>
                <div className="mb-3">
                  <Form.Label htmlFor="oldPassword">Old Password</Form.Label>
                  <Form.Control id="oldPassword" type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                </div>
                <div className="mb-3">
                  <Form.Label htmlFor="newPassword">New Password</Form.Label>
                  <Form.Control id="newPassword" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                </div>
              </Form>
          </Modal.Body>
          <Modal.Footer className="border-0">
            <Button variant="primary" className="btn-icon" onClick={() => setPasswordModal(false)}>
              <span>Go Back</span>
            </Button>
            <Button variant="primary" className="btn-icon btn-icon-start" type="button" onClick={() => handleUpdatePassword()}>
              <span>Update Password</span>
            </Button>
          </Modal.Footer>
        </Modal>
      )}

  </>);
}

export default Profile;