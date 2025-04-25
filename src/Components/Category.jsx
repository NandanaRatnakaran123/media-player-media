import React, { useEffect, useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getCategoryAPI, updateCategoryAPI } from '../Services/allAPI';
import Videocart from './Videocart';


function Category({dropVideoResponse}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [categoryName, setCategory] = useState("")
  const [allCategories, setAllCategories] = useState([])

  const getCategories = async () => {
    const { data } = await getCategoryAPI()
    setAllCategories(data)
  }
  useEffect(() => {
    getCategories()
  }, [dropVideoResponse])
  // console.log(categoryName);
  const handleAdd = async () => {
    if (categoryName) {

      const result = await addCategoryAPI({ categoryName, allVideos: [] })
      // console.log(result);
      if (result.status >= 200 && result.status < 300) {
        handleClose()
        setCategory("")
        getCategories()
      }
      else {
        console.log(result.message);

      }

    } else {
      console.log('Please fill field');

    }
  }

  const removeCategory = async (id) => {
    await deleteCategoryAPI(id)
    getCategories()
  }


  const dragOver = (e) => {
    console.log("video are drag over the category");
    e.preventDefault()

  }
  const videoDrop = async (e, categoryId) => {
    console.log("video dropped");
    const videoId = e.dataTransfer.getData("videoId")
    console.log("videoId" + videoId + "dropped into " + categoryId);

    const { data } = await getAVideoAPI(videoId)
    // console.log(data);

    const selectedCategory = allCategories.find(item => item.id == categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    const res = await updateCategoryAPI(categoryId, selectedCategory)
    // console.log(res);
    getCategories()



  }

  const videoDragStarted=async(e,videoId,categoryId) =>{
    let dataShare = {videoId,categoryId}
    // console.log(dataShare);
    e.dataTransfer.setData("data",JSON.stringify(dataShare))
    
  }

  return (
    <div>
      <div className="d-grid">
        <button onClick={handleShow} className='btn btn-info'>Add-Category</button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <input type="text" className='form-control' placeholder='category name' onChange={e => setCategory(e.target.value)} />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Create</Button>
        </Modal.Footer>
      </Modal>
      {
        allCategories?.length > 0 ? allCategories.map(Category => (
          <div className="border rounded p-3 m-3" draggable="true" onDragOver={e => dragOver(e)} onDrop={e => videoDrop(e, Category?.id)} >
            <div className="d-flex justify-content-between align-items-center">
              <h4>{Category?.categoryName}</h4>
              <button className='btn btn-link' onClick={() => removeCategory(Category?.id)}>  <i className="fa-solid fa-trash" style={{ color: 'rgb(172, 52, 71)' }}></i> </button>

            </div>

            <Row>
              {
              Category?.allVideos.length > 0 ? Category.allVideos.map(card => (
                <Col sm={12} className='mb-2' draggable onDragStart={e =>videoDragStarted(e,card.id,Category.id)}>
                  <Videocart video={card} insideCategory={true} />
                </Col>
              )) : null

              }

            </Row>
          </div>
        )) : <p className='text-danger fw-bolder'>Nothing to display</p>
      }
    </div>
  )
}

export default Category
