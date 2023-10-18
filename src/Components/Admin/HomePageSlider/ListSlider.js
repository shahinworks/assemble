import { gql, useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { useState } from 'react';
import { Col, Button , Modal, Form } from 'react-bootstrap';
import { Pencil, Trash } from 'react-bootstrap-icons';

function ListSlider() {

  const GET_SLIDER = gql`
    query GetAllHomePageSlider {
      getAllHomePageSlider {
        id
        images
        content
        url
      }
    }
  `;

  const {data} = useQuery(GET_SLIDER);

  // UPDATE
  
  const [editId, setEditId] = useState(""); 
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const [images, setImages] = useState(null);
  const [modal, showModal] = useState(false);


  const EDIT_SLIDER = gql`
    mutation UpdateHomePageSlider($sliderimages: Upload, $content: String, $url: String, $updateHomePageSliderId: ID) {
      updateHomePageSlider(sliderimages: $sliderimages, content: $content, url: $url, id: $updateHomePageSliderId) {
        id
        images
        content
        url
      }
    }
  `;

  const [editSlider, {data: dataEdit} ]= useMutation(EDIT_SLIDER);

  const handleEdit = (id, content, url) => {
    showModal(true);
    setEditId(id);
    setContent(content);
    setUrl(url);
  }

  const handleSlider = async () => {
    await editSlider({
      variables : {
        sliderimages: images,
        content: content,
        url: url,
        updateHomePageSliderId: editId
      }
    })

  }

  // DELETE 
  const DELETE = gql`
    mutation DeleteHomePageSlider($deleteHomePageSliderId: ID) {
      deleteHomePageSlider(id: $deleteHomePageSliderId) {
        id
        images
        content
        url
      }
    }
  `;
  
  const [deleteSlider, {data : dataDel} ]= useMutation(DELETE);

  const handleDelete = async (id)  => {
   await deleteSlider({
      variables : {
        deleteHomePageSliderId: id
      }
    });
  }






  return (<>
    <h2 className='text-center my-2'>List of Slider Images</h2>
   
    {data?.getAllHomePageSlider && data?.getAllHomePageSlider?.map((item, index) => index > 0 &&
       <div key={item.id} className='d-flex'>
        <Col className='col-2'>
        <img style={{height: "40px", width: "70px"}} src={item.images} aly="pic"/> 
        </Col> 
        <Col className='col-8'>
          <p>Content: {item.content}</p>
          <p>URL: {item.url}</p> 
          </Col>
          <Col className='col-2'>
          <Button className="btn btn-sm btn-light" onClick={() => handleEdit(item.id, item.content, item.url )}>
            <Pencil size={20} color="black"/>
          </Button>{" "}
          <Button className="btn btn-sm btn-light" onClick={() => handleDelete(item.id)}>
            <Trash size={20} color="black" />
          </Button>
          </Col>
    </div> )}
   <ul>
    {/* {data?.getAllHomePageSlider && data?.getAllHomePageSlider?.map((item) => 
     <li><img style={{height: "40px", width: "70px"}} src={item.images} aly="pic"/>
     <p>{item.content}</p>
     <p>{item.url}</p>
     </li>
    )} */}
   </ul>
    
   <Modal style={{width: "100%"}} className="modal-right scroll-out-negative" show={modal} onHide={() => showModal(false)}
       scrollable dialogClassName="full" >
      <Modal.Header closeButton>
        <Modal.Title as="h5">Edit Product Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <h5>Slider Images</h5>
      <Form.Control type='file' onChange={(e) => setImages(e.target.files[0])}/>
      <h5>Slider Content</h5>
      <Form.Control type='text' value={content} onChange={(e) => setContent(e.target.value)}/>
      <h5>Slider URL</h5>
      <Form.Control type='text' value={url} onChange={(e) => setUrl(e.target.value)}/>
      <Button className='my-2 btn btn-light' onClick={() => handleSlider()}>Submit</Button>
      </Modal.Body>
    </Modal>

    

  </>)
}

export default ListSlider;