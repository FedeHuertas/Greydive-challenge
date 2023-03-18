import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Header from './components/Header';
import Answers from './components/Answers';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="">
      <Header />
      <Container className='pt-5'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route exact path='/answers' element={<Answers />} />
        </Routes>
      </Container>
    </div>
  )
}

export default App
