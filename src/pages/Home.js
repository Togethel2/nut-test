import React, { useEffect, useState } from "react";
import NavbarComp from '../components/NavbarComp';
import Detail from '../components/Detail';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  const [activeData, setActive] = useState();
  const handleActive = (data) => {
    setActive(data)
  }
  return (
    <>
      <h1>home</h1>
      <Container>
        <Row>
          <Col><NavbarComp handleActive={handleActive} /></Col>
          <Col xs={8}><Detail data={activeData} /></Col>
        </Row>
      </Container>

    </>
  )
}

export default Home;