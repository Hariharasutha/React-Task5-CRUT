import React from 'react'
import '../styles/home.css'
import { useNavigate } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa';
import img from './images/it.avif'
import Footer from './Footer';
const Home = () => {
    const navigate = useNavigate()
  return (
    <div className='container-fluid p-0 homehead'>
        <img src={img} alt="" className='homeimg' />
        <div className="container homecontainer">
            <div role='button' onClick={() => navigate('/create')} className='newuser container'>
            </div>
        </div>
          <Footer />
    </div>
  )
}

export default Home