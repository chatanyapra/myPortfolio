import React from 'react'
import imageUser from '../assets/images/student_boy_laptop.png';

export default function UserImagePage() {
    var num;
    function mouseEvent(event) {
        var x= event.clientX;
        var y= event.clientY;
        num= Math.floor((Math.atan2(y, x) * 180) / Math.PI);
        console.log(num);
        // return styleShadow;
    };
    var shadowImage= <img src={imageUser} alt='Logo' style={{filter: "drop-shadow(10px -12px rgb(117, 109, 252)) drop-shadow(-10px -12px rgb(255, 73, 182)) brightness(1.2)" }}/>

  return (
    <div className='move_area' onMouseOver={mouseEvent}>
        <div className='userMain_block'>
            <div className='userimage_main'>
                <div className='user_slogan' style={{width: '40%', zIndex: '2'}}>
                    <h6 style={{fontFamily: 'monospace', paddingTop: '80px'}}>HEY THERE!</h6>
                    <h1 style={{ paddingTop: '50px'}}>I 'm CHATANYA <br></br>PRATAP</h1>
                    <h5 style={{fontFamily: 'monospace'}}>Looking for opportunites as an web developer</h5>
                </div>
                <div className='user_slogan user_image_outer' style={{width: '40%'}}>
                    {shadowImage}
                </div>
            </div>
            <div>
                <svg id="wave1" style={{transform:"rotate(0deg)", transition: "0.3s"}} viewBox="0 0 1440 110" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="rgba(193, 71, 233, 1)" offset="0%"></stop><stop stopColor="rgba(117, 109, 250, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px)", opacity:"1"}} fill="url(#sw-gradient-0)" d="M0,88L30,88C60,88,120,88,180,73.3C240,59,300,29,360,23.8C420,18,480,37,540,47.7C600,59,660,62,720,66C780,70,840,73,900,78.8C960,84,1020,92,1080,93.5C1140,95,1200,92,1260,91.7C1320,92,1380,95,1440,95.3C1500,95,1560,92,1620,91.7C1680,92,1740,95,1800,91.7C1860,88,1920,77,1980,69.7C2040,62,2100,59,2160,47.7C2220,37,2280,18,2340,11C2400,4,2460,7,2520,18.3C2580,29,2640,48,2700,49.5C2760,51,2820,37,2880,27.5C2940,18,3000,15,3060,20.2C3120,26,3180,40,3240,55C3300,70,3360,84,3420,80.7C3480,77,3540,55,3600,53.2C3660,51,3720,70,3780,64.2C3840,59,3900,29,3960,22C4020,15,4080,29,4140,34.8C4200,40,4260,37,4290,34.8L4320,33L4320,110L4290,110C4260,110,4200,110,4140,110C4080,110,4020,110,3960,110C3900,110,3840,110,3780,110C3720,110,3660,110,3600,110C3540,110,3480,110,3420,110C3360,110,3300,110,3240,110C3180,110,3120,110,3060,110C3000,110,2940,110,2880,110C2820,110,2760,110,2700,110C2640,110,2580,110,2520,110C2460,110,2400,110,2340,110C2280,110,2220,110,2160,110C2100,110,2040,110,1980,110C1920,110,1860,110,1800,110C1740,110,1680,110,1620,110C1560,110,1500,110,1440,110C1380,110,1320,110,1260,110C1200,110,1140,110,1080,110C1020,110,960,110,900,110C840,110,780,110,720,110C660,110,600,110,540,110C480,110,420,110,360,110C300,110,240,110,180,110C120,110,60,110,30,110L0,110Z"></path></svg>
            </div>
        </div>
        <div>
            <div className='aboutme_box'>
                <h1 className='timeline_header'>About me</h1>
                <p>Write a short and concise text about yourself that will encourage the employer to download your CV 
                    and browse the website. Write a short and concise text about yourself that will encourage the employer to download 
                    your CV and browse the website. Write a short and concise text about yourself that will encourage...</p>
            </div>
            <svg id="wave2" style={{transform: "rotate(180deg)", transition: "0.3s", marginTop: '-4px'}} viewBox="0 0 1440 110" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="rgba(117, 109, 205, 1)" offset="0%"></stop><stop stopColor="rgba(193, 71, 233, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:'translate(0, 0px)', opacity:'1'}} fill="url(#sw-gradient-0)" d="M0,88L30,88C60,88,120,88,180,73.3C240,59,300,29,360,23.8C420,18,480,37,540,47.7C600,59,660,62,720,66C780,70,840,73,900,78.8C960,84,1020,92,1080,93.5C1140,95,1200,92,1260,91.7C1320,92,1380,95,1440,95.3C1500,95,1560,92,1620,91.7C1680,92,1740,95,1800,91.7C1860,88,1920,77,1980,69.7C2040,62,2100,59,2160,47.7C2220,37,2280,18,2340,11C2400,4,2460,7,2520,18.3C2580,29,2640,48,2700,49.5C2760,51,2820,37,2880,27.5C2940,18,3000,15,3060,20.2C3120,26,3180,40,3240,55C3300,70,3360,84,3420,80.7C3480,77,3540,55,3600,53.2C3660,51,3720,70,3780,64.2C3840,59,3900,29,3960,22C4020,15,4080,29,4140,34.8C4200,40,4260,37,4290,34.8L4320,33L4320,110L4290,110C4260,110,4200,110,4140,110C4080,110,4020,110,3960,110C3900,110,3840,110,3780,110C3720,110,3660,110,3600,110C3540,110,3480,110,3420,110C3360,110,3300,110,3240,110C3180,110,3120,110,3060,110C3000,110,2940,110,2880,110C2820,110,2760,110,2700,110C2640,110,2580,110,2520,110C2460,110,2400,110,2340,110C2280,110,2220,110,2160,110C2100,110,2040,110,1980,110C1920,110,1860,110,1800,110C1740,110,1680,110,1620,110C1560,110,1500,110,1440,110C1380,110,1320,110,1260,110C1200,110,1140,110,1080,110C1020,110,960,110,900,110C840,110,780,110,720,110C660,110,600,110,540,110C480,110,420,110,360,110C300,110,240,110,180,110C120,110,60,110,30,110L0,110Z"></path></svg>    
        </div>
    </div>
  )
}
