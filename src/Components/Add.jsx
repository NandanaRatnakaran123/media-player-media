import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { uploadVideoAPI } from '../Services/allAPI';


function Add({setUploadVideoResponse}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[uploadVideo,setUploadVideo]=useState({id:"",title:"",url:"",link:""})
  // console.log(uploadVideo);


  const getYouTubeLink=(e)=>{
    const {value} = e.target
    // console.log(value)
    if(value.includes("v=")){
      let VID=value.split("v=")[1].slice(0,11)
      // console.log(`https://www.youtube.com/embed/${VID}`);
      

      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${VID}`})
    }else{
      setUploadVideo({...uploadVideo,link:""})
    }
  }


  const handleADD=async()=>{

    const{id,title,url,link}=uploadVideo;
    console.log(uploadVideo);
    

    if(!id || !title ||!url || !link){
      alert("please fill missing fields")
    }
    else{
      // upload video to json server
      const result = await uploadVideoAPI(uploadVideo)
      console.log(result);                                                                                                                                                                                                                                                                                                              
      if(result.status>=200 && result.status<300){
        alert("video uploaded")
        handleClose()
        setUploadVideo({id:"",title:"",url:"",link:""})
        setUploadVideoResponse(result.data)
      }else{
        alert(result.message)
      }
    }
  }

  return (
    <div>
      <div className='d-flex mb-5 mt-5 align-items-center'>
        <h2>Upload Videos</h2>
        <button className='btn btn-link' onClick={handleShow}><i className='fa-solid fa-arrow-up-from-bracket fa-beat fa-2x mb-2'></i></button>
     

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>
         <FloatingLabel
        controlId="floatingInput1"
        label="Video id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video id" onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})}/>
      </FloatingLabel>
         <FloatingLabel
        controlId="floatingInput2"
        label="Video name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video name" onChange={(e)=>setUploadVideo({...uploadVideo,title:e.target.value})}/>
      </FloatingLabel>
         <FloatingLabel
        controlId="floatingInput3"
        label="image Url"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="image Url" onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})} />
      </FloatingLabel>
         <FloatingLabel
        controlId="floatingInput4"
        label="video url"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video Url" onChange={getYouTubeLink}/>
        
        
      </FloatingLabel>
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleADD}>Upload</Button>
        </Modal.Footer>
      </Modal>

      </div>
    </div>
  )
}

export default Add