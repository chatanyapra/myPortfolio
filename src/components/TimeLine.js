import React from 'react'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function TimeLine() {
  useEffect(()=>{
    Aos.init({duration: 3000,
      easing: 'ease-in-sine',});
      Aos.refresh();
  }, []);

    const arrow= <svg width="126" height="36" viewBox="0 0 226 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_701_77)">
                      <rect width="36" height="36"></rect>
                      <circle cx="18" cy="18" r="17" stroke="#6320EE" strokeWidth="2"></circle>
                      <circle cx="18" cy="18" r="8" fill="#6320EE"></circle>
                    </g>
                    <line x1="47" y1="17" x2="225" y2="17" stroke="#6320EE" strokeWidth="2" strokeLinecap="round" strokeDasharray="10 10"></line>
                    <defs>
                    <clipPath id="clip0_701_77">
                    <rect width="36" height="36" fill="white"></rect>
                    </clipPath>
                    </defs>
                  </svg>

  return (
    <div className='timeline_main'>
      <header className='timeline_header' date-aos="fade-up">
          <h1>Timeline</h1>
      </header>
      <div className='header_internal' date-aos="fade-left">
        <span className='fs-2' style={{color: '#ff53a9'}}>Development Skills</span>
        <span className='fs-2' style={{color:'#6846ff'}}>Professional Skills</span>
      </div>
        <svg className='imageShadow' style={{zIndex:'-3', position: 'absolute', left: '-60', bottom: '-60' ,width: '250px', height: 'auto'}} id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0"><stop id="stop1" stopColor="rgba(193, 71, 233, 1) " offset="0%"></stop><stop id="stop2" stopColor="rgba(247, 185, 255, 1)" offset="100%"></stop></linearGradient></defs><path fill="url(#sw-gradient)" d="M19.4,-22.5C25.2,-18.2,29.9,-12.2,33.6,-4C37.3,4.1,39.9,14.3,36.6,22.1C33.3,29.9,24,35.1,15.1,35.9C6.2,36.8,-2.2,33.1,-11.5,30.3C-20.7,27.5,-30.7,25.5,-34.6,19.6C-38.5,13.7,-36.2,3.8,-34.5,-6C-32.7,-15.9,-31.4,-25.9,-25.7,-30.2C-20,-34.5,-10,-33.1,-1.6,-31.2C6.8,-29.3,13.6,-26.8,19.4,-22.5Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{transition: "all 0.3s ease 0s"}}></path></svg>
        <svg className='imageShadow' style={{zIndex:'-3', position: 'absolute', right: '-60', top: '-60' ,width: '250px', height: 'auto', rotate: '180deg'}} id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0"><stop id="stop1" stopColor="rgba(193, 71, 233, 1)" offset="0%"></stop><stop id="stop2" stopColor="rgba(247, 185, 255, 1)" offset="100%"></stop></linearGradient></defs><path fill="url(#sw-gradient)" d="M19.4,-22.5C25.2,-18.2,29.9,-12.2,33.6,-4C37.3,4.1,39.9,14.3,36.6,22.1C33.3,29.9,24,35.1,15.1,35.9C6.2,36.8,-2.2,33.1,-11.5,30.3C-20.7,27.5,-30.7,25.5,-34.6,19.6C-38.5,13.7,-36.2,3.8,-34.5,-6C-32.7,-15.9,-31.4,-25.9,-25.7,-30.2C-20,-34.5,-10,-33.1,-1.6,-31.2C6.8,-29.3,13.6,-26.8,19.4,-22.5Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{transition: "all 0.3s ease 0s"}}></path></svg>
        <svg style={{zIndex:'-3', position: 'absolute', transform: 'translateY(40px)', right: '30%', width: '490px', height: 'auto', opacity: '0.8'}} id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0"><stop id="stop1" stopColor="rgba(193, 71, 233, 1)" offset="0%"></stop><stop id="stop2" stopColor="rgba(247, 185, 255, 1)" offset="100%"></stop></linearGradient></defs><path fill="url(#sw-gradient)" d="M19.2,-35C24.5,-30.2,28.2,-24.3,31.9,-18.3C35.5,-12.3,39.1,-6.1,39.7,0.4C40.4,6.9,38,13.7,33.1,17.6C28.2,21.4,20.8,22.3,14.9,25.7C8.9,29.1,4.5,35,-1.9,38.3C-8.2,41.5,-16.4,42.1,-20.2,37.4C-24,32.8,-23.4,23,-27.3,15.9C-31.2,8.8,-39.6,4.4,-40.4,-0.5C-41.2,-5.3,-34.4,-10.6,-29.5,-16.1C-24.7,-21.6,-21.8,-27.2,-17.2,-32.5C-12.6,-37.8,-6.3,-42.7,0.3,-43.2C6.9,-43.7,13.9,-39.9,19.2,-35Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{transition: "all 0.3s ease 0s"}}></path></svg>
      <div className='skills_main_box'>
        <div className='skills_box' date-aos="fade-left">
          <div className='skills_box_content'>
            <h5>Language name</h5>
            <small>In this programming language i have created many project </small>
          </div>
          <span style={{transform: 'scaleX(-1)',rotate: '0deg', zIndex:'4'}}>{arrow}</span>
        </div>
        <div className='skills_box' date-aos="fade-right">
          <div className='skills_box_content'>
            <h5>Language name</h5>
            <small>In this programming language i have created many project </small>
          </div>
          <span style={{zIndex:'2'}}>{arrow}</span><span className='odd_arrow_line' style={{transform: "translate(0, 120px)", zIndex:'-2'}}></span>
        </div>
        <div className='skills_box' date-aos="fade-left">
          <div className='skills_box_content'>
            <h5>Language name</h5>
            <small>In this programming language i have created many project </small>
          </div>
          <span style={{transform: 'scaleX(-1)',rotate: '0deg', zIndex:'2'}}>{arrow}</span><span className='even_arrow_line'></span>
        </div>
        <div className='skills_box' date-aos="fade-right">
          <div className='skills_box_content'>
            <h5>Language name</h5>
            <small>In this programming language i have created many project </small>
          </div>
          <span style={{zIndex:'4'}}>{arrow}</span><span className='odd_arrow_line'></span>
        </div>
        <div className='skills_box' date-aos="fade-left">
          <div className='skills_box_content'>
            <h5>Language name</h5>
            <small>In this programming language i have created many project </small>
          </div>
            <span style={{transform: 'scaleX(-1)',rotate: '0deg', zIndex:'2'}}>{arrow}</span><span className='even_arrow_line'></span>
        </div>
        <div className='skills_box' date-aos="fade-right">
          <div className='skills_box_content'>
            <h5>Language name</h5>
            <small>In this programming language i have created many project </small>
          </div>
          <span style={{zIndex:'4'}}>{arrow}</span><span className='odd_arrow_line'></span>
        </div>
      </div>
    </div>
  )
}  