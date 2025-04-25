import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from '../Components/Videocart'
import { getAllUploadVideoAPI, getCategoryAPI, updateCategoryAPI } from '../Services/allAPI'

function View({uploadVideoResponse,setDropVideoResponse}) {

  const [allVideos,setAllVideos]=useState([])
  const [deleteVideoResponse, setdeleteVideoResponse] = useState(false)
  
  useEffect(() =>{
    getAllVideos()
    setdeleteVideoResponse(false)
  },[uploadVideoResponse,deleteVideoResponse])

  const getAllVideos=async()=>{
    const result=await getAllUploadVideoAPI()
    console.log(result);

    if (result.status==200){
      setAllVideos(result.data)
    }else{
      console.log("API FAILED");
      setAllVideos([])
      
    }
    
  }
  // console.log(allVideos);
  const dragOver=(e) =>{
    e.preventDefault();
  }
  const videoDroped=async(e)=>{
    const {videoId, categoryId}=JSON.parse(e.dataTransfer.getData('data'))
    const{data} =await getCategoryAPI ()
    const selectedCategory=data.find(item =>item.id == categoryId)
    // console.log(selectedCategory);
    let result = selectedCategory.allVideos.filter(video => video.id!== videoId)
    console.log(result);
    let {id,categoryName} =selectedCategory
    let newCategory={id,categoryName,allVideos:result}
    console.log(newCategory);
    const res= await updateCategoryAPI(categoryId,newCategory)
    setDropVideoResponse(res);
    
    
    
  }
  return (
    <>
      <Row droppable="true" onDragOver={e =>dragOver(e)} onDrop={e=>videoDroped(e)}>
      {
        allVideos?.length>0?allVideos.map(video =>(
          <Col key={video.id} sm={12} md={4} lg={3}>
          <Videocard video={video} setdeleteVideoResponse={setdeleteVideoResponse}/>
          </Col>
  
        )

        
        ):<p className='text-danger fw-bolder'>Nothing to display</p>
      }
        
      </Row>
    </>
  )
}

export default View
