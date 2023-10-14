import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
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
    <div>Home Page Slider</div>
    <Form.Control type='file' onChange={(e) => setImages(e.target.files[0])}/>
    <Button onClick={() => handleSlider()}>Submit</Button>
  </>)
}

export default HomePageSlider;