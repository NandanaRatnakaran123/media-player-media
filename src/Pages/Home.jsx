import React, { useState } from 'react'
import View from '../Components/View'
import Category from '../Components/Category'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'


function Home() {

  const [uploadVideoResponse, setUploadVideoResponse] = useState({})
  const [dropVideoResponse,setDropVideoResponse]=useState({})
  return (
  <>
    <div className='container mt-3 mb-3 d-flex justify-content-between align-items-center'>

      <div className="add-videos">
        <Add setUploadVideoResponse={setUploadVideoResponse}/>
      </div>

      <div>
        <Link to={'/watch-history'} style={{textDecoration:'none',color:'blue', fontSize:'30px'}}> Watch History  <i className="fa-solid fa-clock-rotate-left fa-spin fa-spin-reverse"></i>  </Link>

      </div>
    </div> 

      <div className="container-fluid mt-5 mb-3 w-100 row d-flex align-items-center">
          <div className="all-videos col-lg-9">
            <h5 className='text-info'>All Videos</h5>
            <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse}/>
          </div>
          
          <div className="category col-lg-3">
            
            <Category dropVideoResponse={dropVideoResponse}/>

          </div>
      </div>

    </>
  )
}

export default Home
