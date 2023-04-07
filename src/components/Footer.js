import React from 'react'
import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
    <div className="footer">
      <div className="container d-flex justify-content-center align-items-center  flex-wrap">
        <div className="first_div  mx-4">
          <h2 className='text-center'>Ankit Rahi</h2>
          <p># {year} Ankit Rahi All rights reserved</p>
          <p className=' d-flex'>
          <a href="https://www.instagram.com/"><i className='fa-brands fa-instagram mx-3' ></i></a>
          <a href="https://www.linkedin.com/feed/"><i className='fa-brands fa-linkedin mx-3'></i></a>
          <a href="https://github.com/"><i className='fa-brands fa-github mx-3'></i></a>
          </p>
        </div>

        <div className="second_div mt-5 mx-4">
          <h2 className='text-center'>Web Developer</h2>
          <p>you can connect to me with the help of this email address and my conntect no.</p>
          <div className="text-center">
          <p>rahiankitrahi@gmail.com</p>
          <p>+7828092738</p>
          </div>
        </div>

        <div className="third_div mx-4 ">
          <h2 className='text-center'>About</h2>
          <p>Resume</p>
        </div>

      </div>
    </div>
    </>
  )
}

export default Footer