import React, { useState } from "react";
import { Card, Col, Row, Button, Form } from "react-bootstrap";
import { gql, useMutation, useQuery } from "@apollo/client";
import toast from "react-hot-toast";

function CreateProduct() {
  const [productName, setProductName] = useState("");
  const [previewName, setPreviewName] = useState("");
  const [images, setImages] = useState([]);
  const [discount, setDiscount] = useState("");
  const [stock, setStock] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [gst, setGST] = useState("");
  const [gender, setGender] = useState("");
  const [allcolor, setAllcolor] = useState([]);
  const [size, setSize] = useState("");
  const [description, setDescription] = useState("");




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


  const CREATE_PRODUCT_MUTATION = gql`
    mutation CreateProduct($productName: String, $priveiwName: String, $size: [String], $color: [String], $gender: [String], $sellingPrice: Float, $discount: Float, $gst: Float, $description: String, $productImages: [Upload], $stock: Int) {
      createProduct(productName: $productName, priveiwName: $priveiwName, size: $size, color: $color, gender: $gender, sellingPrice: $sellingPrice, discount: $discount, gst: $gst, description: $description, productImages: $productImages, stock: $stock) {
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
    }
  `;


  const [createProduct] = useMutation(CREATE_PRODUCT_MUTATION, {
    onCompleted: () => {
      console.log("Data sent Successfully");
      toast.success("Product Created Successfully");
      setProductName("");

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
            productImages: images,
            stock: parseInt(stock),
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

  return (
    <Row className="mx-auto my-5">
      <Col>
        <Card>
          <Card.Body>
            <h2>Add Product</h2>
            <Form onSubmit={handleSubmit}>

              <Form.Group>
                <Form.Label>Product Full Name</Form.Label>
                <Form.Control type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
              </Form.Group>
              
              <Form.Group>
                <Form.Label>Product Preview Name</Form.Label>
                <Form.Control type="text" value={previewName} onChange={(e) => setPreviewName(e.target.value)} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Product Images</Form.Label>
                <Form.Control type="file" multiple onChange={(e) => setImages(e.target.files[0])} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Discount</Form.Label>
                <Form.Control type="text" value={discount} onChange={(e) => setDiscount(e.target.value)} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Stock</Form.Label>
                <Form.Control type="text" value={stock} onChange={(e) => setStock(e.target.value)} />
              </Form.Group>
              
              <Form.Group>
                <Form.Label>Selling Price</Form.Label>
                <Form.Control type="text" value={sellingPrice} onChange={(e) => setSellingPrice(e.target.value)} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Purchase Price</Form.Label>
                <Form.Control type="text" value={purchasePrice} onChange={(e) => setPurchasePrice(e.target.value)} />
              </Form.Group>

              <Form.Group>
                <Form.Label>GST</Form.Label>
                <Form.Control type="text" value={gst} onChange={(e) => setGST(e.target.value)} />
              </Form.Group>

              <div className="mt-3">
                <Form.Group>
                  <Form.Label>gender : </Form.Label>
                  <input className="mx-1" value="Men" type="checkbox" onChange={handleGenderChange} />
                  <span>Men</span>

                  <input className="mx-1" value="Women" type="checkbox" onChange={handleGenderChange} />
                  <span>Women</span>

                </Form.Group>

              </div>




              <Form.Group>
                <Form.Label>color : </Form.Label> 
                {color?.getAllColor && color?.getAllColor?.map((colors) => 
              <div key={colors.id}>
                <input className="mx-1" value={colors?.colorName} type="checkbox" 
               onChange={handleColorBox} />
                <span>{colors?.colorName}</span> </div>
                )}
              </Form.Group>



              <Form.Group>
                <Form.Label>size : </Form.Label>


                <input className="mx-1" value="Small" type="checkbox" onChange={handleSizeChange} />
                <span>Small</span>

                <input className="mx-1" value="Medium" type="checkbox" onChange={handleSizeChange} />
                <span>Medium </span>

                <input className="mx-1" value="Large" type="checkbox" onChange={handleSizeChange} />
                <span>Large</span>

                <input className="mx-1" value="X-Large" type="checkbox" onChange={handleSizeChange} />
                <span>X-Large</span>

              </Form.Group>


              <Form.Group>
                <Form.Label>description</Form.Label>
                <Form.Control as="textarea" value={description} onChange={(e) => setDescription(e.target.value)} />
              </Form.Group>

              <Button variant="success" type="submit" className="mt-2">
                ADD
              </Button>

            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default CreateProduct;

