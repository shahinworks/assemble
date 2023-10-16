import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import toast from 'react-hot-toast';

function HomePageSlider() {

  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const [images, setImages] = useState(null);

  const CREATE_SLIDER = gql`
    mutation CreateHomePageSlider($sliderimages: Upload, $content: String, $url: String) {
      createHomePageSlider(sliderimages: $sliderimages, content: $content, url: $url) {
        id
        images
        content
        url
      }
    }
  `;

  const [createSlider, {data: dataSlider}] = useMutation(CREATE_SLIDER, {
    onCompleted: () => {
      toast.success("Added Successfully");
    },
    onError: (error) => {
      toast.error("Something went wrong");
      console.error("ERROR: ", error.message);
    }
  });
  const handleSlider = () => {
    createSlider({
      variables: {
        sliderimages: images,
        content: content,
        url: url
      }
    })
  }

  if(dataSlider){
    console.log(dataSlider);
  }

  return (<>
    <h2 className='text-center my-2'>Add Home Page Slider</h2>
    <Card style={{ backgroundColor: "black", color: "white"}}>
      <Card.Body>
      <h5>Slider Images</h5>
      <Form.Control type='file' onChange={(e) => setImages(e.target.files[0])}/>
      <Button  className='my-2 btn btn-light' onClick={() => handleSlider()}>Submit</Button>
      </Card.Body>
    </Card>
  </>)
}

export default HomePageSlider;