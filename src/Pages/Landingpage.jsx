import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Landingpage() {

  const navigateByUrl = useNavigate()

  return (
    <>
      <Row className='mt-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
            <h1 style={{color:'blueviolet',fontSize:'40px'}}>Welcome to <span className='text-danger'>Media Player</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magnam blanditiis, nihil modi harum pariatur aperiam incidunt magni accusantium. Porro quo in autem laboriosam
                 saepe distinctio quisquam ipsa esse veniam.</p>

                 <Button onClick={() => navigateByUrl ('/home')}>Get Started</Button>
        
        </Col>
        <Col lg={5}>
            <img src="https://i.gifer.com/CH7i.gif" style={{width:'450px',paddingLeft:'10px'}} alt="" />
        </Col>
        <Col></Col>
      </Row>

    <div className="container mb-5 mt-5 d-flex flex-column align-items-center justify-content-center w-100">

      <h5 className='text-warning' style={{fontSize:"40px"}}>Features</h5>
      <div className='cards mb-5 mt-5 d-flex  align-items-center justify-content-between w-100 '>
      <Card style={{ width: '18rem' ,backgroundColor:'rgba(73, 89, 130, 0.58)', }}>
      <Card.Img variant="top" src="https://i.pinimg.com/474x/f3/fd/02/f3fd029316dc49ace89dabbd12dc9a95.jpg"  width={'300px'} height={'300px'}/>
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
      <Card style={{ width: '18rem', marginLeft:'20px',backgroundColor:'rgba(73, 89, 130, 0.58)' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOmtekvD21fevzDyDe8I_9ycNvMJ4qylvQgg&s" width={'300px'} height={'300px'}/>
      <Card.Body>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
      <Card style={{ width: '18rem',marginLeft:'20px',backgroundColor:'rgba(73, 89, 130, 0.58)' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/d6/68/ab/d668abc72809303852c27275e6a56775.gif" width={'300px'} height={'300px'}/>
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>

      </div>

    </div>

    <div className="container border rounded p-4 border-light mt-5 d-flex justify-content-center align-items-center">

    <div className="col-lg-5">
      <h4 className='text-warning'>Simple, Powerful & Fast</h4>
      <h6 className='mb-5 mt-4'> <span className='text-warning'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quae doloremque. Mollitia blanditiis cum aliquam et corrupti! Nostrum laborum amet labore a,
       tempora asperiores illum possimus dolor doloribus placeat hic?

      </h6>
      <h6 className='mb-5 mt-4'> <span className='text-warning'>Categorize Videos</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quae doloremque. Mollitia blanditiis cum aliquam et corrupti! Nostrum laborum amet labore a,
       tempora asperiores illum possimus dolor doloribus placeat hic?

      </h6>
      <h6 className='mb-5 mt-4'> <span className='text-warning'>Managing Videos</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quae doloremque. Mollitia blanditiis cum aliquam et corrupti! Nostrum laborum amet labore a,
       tempora asperiores illum possimus dolor doloribus placeat hic?

      </h6>
    </div>
    <div className="col-lg-5">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ro59iCBNBdI?si=wbyCpiRuTVicg5lm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </div>
    </>
  )
}

export default Landingpage
