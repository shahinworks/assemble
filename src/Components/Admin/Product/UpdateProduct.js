import React, { useEffect, useState } from 'react';
import { gql, useMutation, useQuery } from "@apollo/client";
import {Pencil, Trash, Image, PlusLg, ImageFill} from 'react-bootstrap-icons';
import { Button, Col } from 'react-bootstrap';

function UpdateProduct() {
  const [productId, setProductId] = useState("");
  const [imageModal, setImageModal] = useState(false);
  const [stockModal, setStockModal] = useState(false);

  const GET_ALL_PRODUCT = gql`
    query GetAllProducts {
      getAllProducts {
        id
        color
        description
        discount
        gender
        gst
        priveiwName
        productName
        sellingPrice
        size
        stock {
          quantity
          gender
          color
          size
        }
        images {
          imagePath
          color
          gender
        }
      }
    }
  `;

  const { data, refetch } = useQuery(GET_ALL_PRODUCT);

  useEffect(() => {
    refetch();
  }, []);

  // ADD_IMAGE
  const ADD_IMAGE = gql`
  mutation AddImagetoProduct($productId: ID, $productImages: [Upload], $color: String, $gender: String) {
    addImagetoProduct(productId: $productId, productImages: $productImages, color: $color, gender: $gender) {
      massage
    }
  }
  `;
  const [addImagetoProduct, {data: dataImage}] = useMutation(ADD_IMAGE);

  const handleImages = async (id) => {
    setProductId(id);
    setImageModal(true);

    await addImagetoProduct({
        variables: {
            productId: "6532475210fad881da96cfc2",
            productImages: null,
            color: "blue",
            gender: "Women"
          }
    });
  }

  // ADD_STOCK
  const ADD_STOCK = gql`
    mutation AddStocktoProduct($productId: ID, $quantity: Int, $gender: String, $color: String, $size: String) {
      addStocktoProduct(productId: $productId, quantity: $quantity, gender: $gender, color: $color, size: $size) {
        massage
      }
    }
  `;

  const [addStocktoProduct, {data: dataStock}] = useMutation(ADD_STOCK);
  const handleStock = async (id) => {
    setProductId(id);
    await setStockModal(true);
    addStocktoProduct({
        variables: {
            productId: "6532475210fad881da96cfc2",
            quantity: 2,
            gender: "Men",
            color: "Pink",
            size: "XS"
          }
    });
  }

  return (<>
    <div>UpdateProduct</div>
   {data && data.getAllProducts.map((item, index) => 
    <div className='d-flex'  key={item.id}>
         <Col className="col-8">
        <p className='fs-6'>{index+1}. {item?.productName}</p> </Col>
        <Col className="col-4">
    <Button className="btn btn-sm mx-1 btn-dark d-inline" 
     onClick={() => handleImages(item.id)}> Add Image </Button>
    <Button className="btn btn-sm mx-1 btn-dark  d-inline" onClick={() => handleStock(item.id)}>
    Add Stock </Button>
    </Col>
    <hr/>
    </div>)}

  </>)
}

export default UpdateProduct;