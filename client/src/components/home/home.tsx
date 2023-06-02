import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home: React.FC = () => {

    const image = "https://images.unsplash.com/photo-1656274404460-14427bdd5fff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1992&q=80"
  return (
    <div><Row>
        <Col lg={6}>
            <div style={{background: `url(${image})`}}></div>
        </Col>
        <Col lg={6}>
            <div style={{background: "gray"}}>
                <h1>Login form</h1>
                <h2>Registration form</h2>
            </div>
        </Col>
        </Row>
    </div>
  )
}

export default Home