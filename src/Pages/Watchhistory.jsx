import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../Services/allAPI'

function Watchhistory() {

  const [history,setHistory] =useState([])

  const getHistory=async() =>{
    const result = await getHistoryAPI ()
    // console.log(result);
    if (result.status == 200){
      setHistory(result.data)
    }else{
      console.log("API failed");
      setHistory([])
      
    }
     
  }
  console.log(history);
  const removeHistory= async(id) =>{
   await deleteHistoryAPI(id)
    getHistory()
    
  }
  
  useEffect (() =>{
    getHistory()
  },[])
  return (
    <div>
      <div className="container d-flex justify-content-between mt-5">
        <h1 className='text-info'>Watch History</h1>

        <Link to={'/home'} Style={{textDecoration:'none',color:'blueviolet',fontSize:'30px'}} >
        Back to home  <i class="fa-solid fa-arrow-rotate-left ms-2" ></i></Link>

      </div>

    <table className='container shadow '>
      <thead  className='text-light'>
        <tr >
          <th>#</th>
          <th>Video Title</th>
          <th>URL</th>
          <th>TimeStamp</th>
          <th  >Action</th>
        </tr>
      </thead>
      <tbody>
        { 
        history?.length>0?history.map((video,index) =>(
          <tr >
          <td>{index+1}</td>
          <td>{video.title}</td>
          <td>
            <a href={video.link}>{video.link}</a>
          </td>
          <td>{video.timeStamp}</td>
          <td> <button className='btn' onClick={(e) =>removeHistory(video?.id)} ><i className="fa-solid fa-trash text-danger"></i></button></td>
          
        </tr>

        )): <p className='text-danger fw-bolder'>Nothing to display</p>
          
      }
      </tbody>
    </table>

    </div>
  )
}

export default Watchhistory
