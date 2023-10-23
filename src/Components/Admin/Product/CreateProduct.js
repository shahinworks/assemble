import React, { useState } from "react";
import { Card, Col, Row, Button, Form } from "react-bootstrap";
import { gql, useMutation, useQuery } from "@apollo/client";
import toast from "react-hot-toast";

function CreateProduct() {

  function handleColorBox(e) {
    if (e.target.checked) {
      setAllcolor([...allcolor, e.target.value]);
    }
    else {
      setAllcolor(allcolor.filter((item) => item !== e.target.value));
    }
  }


  function handleGenderChange(e) {
    if (e.target.checked) {
      setGender([...gender, e.target.value]);
    }
    else {
      setGender(gender.filter((item) => item !== e.target.value));
    }
  }

  function handleSizeChange(e) {
    if (e.target.checked) {
      setSize([...size, e.target.value]);
    }
    else {
      setSize(size.filter((item) => item !== e.target.value));
    }
  }


  const [productName, setProductName] = useState("");
  const [previewName, setPreviewName] = useState("");
  const [images, setImages] = useState([]);
  const [discount, setDiscount] = useState("");
  const [stock, setStock] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [gst, setGST] = useState("");
  const [gender, setGender] = useState([]);
  const [allcolor, setAllcolor] = useState([]);
  const [size, setSize] = useState([]);
  const [description, setDescription] = useState("");


  const CREATE_PRODUCT_MUTATION = gql`
    mutation CreateProduct($productName: String, $priveiwName: String, $size: [String], $color: [String], $gender: [String], $sellingPrice: Float, $discount: Float, $gst: Float, $description: String) {
      createProduct(productName: $productName, priveiwName: $priveiwName, size: $size, color: $color, gender: $gender, sellingPrice: $sellingPrice, discount: $discount, gst: $gst, description: $description) {
        id
        productName
        priveiwName
        sellingPrice
        size
        color
        gender
        discount
        gst
        description
      }
    }
  `;

  const [createProduct] = useMutation(CREATE_PRODUCT_MUTATION, {
    onCompleted: () => {
      toast.success("Product Created Successfully");
      setProductName("");
      setDescription("");
      setSize([]);
      setAllcolor([]);
      setGender([]);
      setImages([]);
      setGST("");
      setSellingPrice("");
      setStock("");
      setDiscount("");
      setPreviewName("");
    },
    onError: (error) => {
      toast.error("Error Occured");
      console.error("ERROR: ", error.message);
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createProduct({
        variables: {
          productName,
          priveiwName: previewName,
          size,
          color: allcolor,
          gender,
          sellingPrice: parseFloat(sellingPrice),
          discount: parseFloat(discount),
          gst: parseFloat(gst),
          description: description,
        },
      });

    

    } catch (err) {
      console.error(err);
    }
  };


  const GET_ALL_COLOUR = gql`
    query GetAllColor {
      getAllColor {
        id
        colorName
      }
    }
  `;

  const { data: color } = useQuery(GET_ALL_COLOUR);

  const GET_ALL_SIZE = gql`
    query GetAllSize {
      getAllSize {
        id
        sizeName
      }
    }
  `;

  const { data: sizedata } = useQuery(GET_ALL_SIZE);

  return (
    <Row className="mx-auto my-5">
      <Col>
        <Card style={{ backgroundColor: "black", color: "white"}}>
          <Card.Body style={{ backgroundColor: "black", color: "white"}}>
            <h2>Add Product</h2>
            <Form onSubmit={handleSubmit}>

                <Form.Label className="my-1">Product Full Name</Form.Label>
                <Form.Control type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
              
                <Form.Label className="my-1">Product Preview Name</Form.Label>
                <Form.Control type="text" value={previewName} onChange={(e) => setPreviewName(e.target.value)} />
                           
                <Form.Label className="my-1">Discount</Form.Label>
                <Form.Control type="text" value={discount} onChange={(e) => setDiscount(e.target.value)} />
              
                <Form.Label className="my-1">Selling Price</Form.Label>
                <Form.Control type="text" value={sellingPrice} onChange={(e) => setSellingPrice(e.target.value)} />
             
                <Form.Label className="my-1">GST</Form.Label>
                <Form.Control type="text" value={gst} onChange={(e) => setGST(e.target.value)} />
            
              <Form.Group>
                  <Form.Label className="my-1">Gender : </Form.Label>
                  <input className="mx-1" value="Men" type="checkbox" onChange={handleGenderChange} />
                  <span>Men</span>
                  <input className="mx-1" value="Women" type="checkbox" onChange={handleGenderChange} />
                  <span>Women</span>
                  </Form.Group>
                  <Form.Group>
                <Form.Label className="my-1">Color : </Form.Label> 
                {color?.getAllColor && color?.getAllColor?.map((colors) => 
                <div key={colors.id} className="d-inline">
                <input className="mx-1" value={colors?.colorName} type="checkbox" 
                  onChange={handleColorBox} />
                <span>{colors?.colorName}</span></div>
                )}
                  </Form.Group>
                  <Form.Group>

                <Form.Label className="my-1">Size : </Form.Label> 
                {sizedata?.getAllSize && sizedata?.getAllSize?.map((size) => 
              <div key={size.id} className="d-inline">
                <input className="mx-1" value={size?.sizeName} type="checkbox" 
                  onChange={handleSizeChange} />
                <span>{size?.sizeName}</span> </div>
                )}
                  </Form.Group>


              <Form.Group className="my-1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" value={description} onChange={(e) => setDescription(e.target.value)} />
              </Form.Group>
              <Button variant="outline-light"  type="submit" className="mt-2">
                Save Product
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default CreateProduct;

