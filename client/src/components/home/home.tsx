import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home: React.FC = () => {

    const image = "https://images.unsplash.com/photo-1656274404460-14427bdd5fff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1992&q=80"
  return (
    <div><Row style={{height:"100vh"}} className='m-0 p-0'> 
        <Col lg={6} className='p-0'>
            <div style={{backgroundImage: `url(${image})`, height:"100vh", backgroundPosition:"center"}}></div>
        </Col>
        <Col lg={6} className='p-0'>
            <div style={{background: "gray", height:"100vh"}} className='p-5'>
                <h1>Login form</h1>
                <h2>Registration form</h2>
            </div>
        </Col>
        </Row>
    </div>
  )
}

export default Home