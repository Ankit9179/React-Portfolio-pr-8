import React from 'react'
import '../components/About.css'

const About = () => {
  return (
    <>
      <div className="container mb-3 about_container" style={{ minHeight: '100%' }}>
        <div className="container main_container d-flex jstify-content-around flex-wrap ">
          <div className="left_container mt-5" style={{ width: 500 }}>
            <h2>Meet Ankit Rahi</h2>
            <p style={{ color: '#666', letterSpacing: '.5px', marginTop: 2, lineHeight: 2 }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde sapiente laboriosam tempore laborum deleniti, alias accusamus vero architecto. Illum, quis a! Assumenda earum doloremque impedit aspernatur minus quibusdam, esse magnam molestiae libero iste, corporis inventore non ducimus mollitia ex saepe?</p>

          </div>
          <div className="right_container mt-3">
            <img src="ankitt.jpg" alt="" />
          </div>

        </div>

      </div>
    </>
  )
}

export default About