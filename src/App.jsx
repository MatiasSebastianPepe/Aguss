import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Container } from 'react-bootstrap';
import './App.css'
import SearchBar from '../src/components/SearchBar'
import ToolsArticle from './components/ToolsArticle'
import HeyBanner from './components/HeyBanner'
import NavBar from './components/NavBar'
import NotificationNav from './components/NotificationNav'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from './components/SideBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <Container fluid className='principalContainer p-0'>
        <Row className='d-flex col-12'>
          <Col className='col-2 col-xxl-1 sideNavApp p-0'>
            <SideBar></SideBar>
          </Col>
          <Col className='col-10 p-0 flex-fill'>
            <Row className='p-0'>
              <Col className='col-8 navBarContainerApp p-0'>
                <NavBar></NavBar>
              </Col>
              <Col className='col-4 navBarContainerApp p-0'>
                <NotificationNav></NotificationNav>
              </Col>
            </Row>

            <HeyBanner></HeyBanner>
            <SearchBar id="searchBarMobile"></SearchBar>
            <ToolsArticle></ToolsArticle>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default App
