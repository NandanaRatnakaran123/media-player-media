import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';


function Footer() {
  return (
    <div className=''> <br />
      
        <Row style={{backgroundColor:'black',} }>
         
          <Col md={5}  style={{padding:'24px', marginLeft:'10px'}}>
         <span style={{fontSize:'20px',fontWeight:'bold', color:'white'}}> <i className="fa-brands fa-youtube " style={{}}></i>
         </span> <span style={{fontSize:'20px',fontWeight:'bold', color:'white',marginLeft:'10px'}}>Media Player</span><br /> <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident est eos modi fuga voluptatibus 
            totam sunt alias fugiat? Distinctio asperiores maxime ipsa enim, perferendis quibusdam 
            accusamus molestiae aspernatur fuga voluptatem!</p>
          </Col>
          <Col >
            <p style={{color:'white',paddingTop:'30px',fontSize:'21px'}}>Links</p>
            <ul  style={{listStyle:'none'}}>
              <li> <a style={{textDecoration:'none',color:'white'}} href="/">Landing Page</a></li>
              <li style={{paddingTop:'5px' }}> <a style={{textDecoration:'none',color:'white'}} href="./Home">Home Page</a> </li>
              <li style={{paddingTop:'5px'}}> <a style={{textDecoration:'none',color:'white'}} href="/watch-history">Watch History</a> </li>
            </ul>
          </Col>
          <Col >
          <p style={{color:'white',paddingTop:'30px',fontSize:'21px'}}>Guides</p>
            <ul  style={{listStyle:'none'}}>
              <li> <a style={{textDecoration:'none',color:'white'}} href="">React</a></li>
              <li style={{paddingTop:'5px' }}> <a style={{textDecoration:'none',color:'white'}} href="">React Bootstrap</a> </li>
              <li style={{paddingTop:'5px'}}> <a style={{textDecoration:'none',color:'white'}} href="">Bootswatch</a> </li>
            </ul>
          </Col>
          <Col md={3}>
          <p style={{color:'white',paddingTop:'30px',fontSize:'26px'}}>Contact Us</p>
          <Form>
            <Form.Group className="" controlId="exampleForm.ControlInput1">
        
            <div className='d-flex ms-2'>
            <Form.Control style={{width:'200px'}} type="email" placeholder="enter your email ID" />
            <Button style={{marginLeft:'10px'}} variant="warning">Subscribe</Button>
            </div> <br />
            <ul style={{listStyle:'none',fontSize:'32px' ,display:'flex',color:'white',justifyContent:'space-evenly',marginRight:'60px'}}>
              <li><i className="fa-brands fa-instagram" ></i></li>
              <li><i className="fa-brands fa-twitter"></i></li>
              <li><i className="fa-brands fa-linkedin"></i></li>
              <li><i className="fa-brands fa-facebook"></i></li>
            </ul>
         </Form.Group>
      
    </Form>
          </Col>
          
        </Row>
        <p style={{textAlign:'center',backgroundColor:'rgb(64, 59, 42)',width:'100.8%', marginBottom: '0' }} >CopyRight © 2025 Media Player. Built with raect </p>
      </div>
    
  )
}

export default Footer
