import React, {useState} from 'react'
import Header from './Header/Header'
import Profile from './Profile/profile'
import Footer from './Footer/Footer'
import "./Home.css";

export default function Home() {
  const [modal, setModal] = useState(false)
  return (
    <div className='home-container'>
        <Header modal={modal} setModal={setModal}/>
        <Profile modal={modal} setModal={setModal} />
        <Footer/>
    </div>
  )
}
