import { gql, useMutation } from '@apollo/client';
import React from 'react'
import { Button, Form, Card } from 'react-bootstrap';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';

function Profile() {
  
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

  const [createAddress,  {data}] = useMutation(CREATE_ADDRESS, {
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

  const {data : profileData} = useMutation(EDIT_USER_PROFILE, {
    onCompleted : () => {
      toast.success("Profile Updated");
    }, 
    onError : (error) => {
      console.log("ERROR ", error.message);
    }
  });

  return (<>
    <div style={{marginTop: "10%"}}>
      <h2>Profile</h2>

      <h5> Address Section </h5>
      <Card className="mb-5">
        <Card.Body>
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
              <Button variant="primary" className="btn-icon btn-icon-start" type="submit"> Submit Address </Button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  </>);
}

export default Profile;