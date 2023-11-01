import React from 'react'

export default function Footer() {
  return (
    <div>
        <svg id="wave" style={{transform:"rotate(0deg)", transition: "0.3s"}} viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"></linearGradient></defs><path style={{transform:"translate(0, 0px)", opacity:"1"}} fill="rgb(206, 60, 254)" d="M0,80L24,68.3C48,57,96,33,144,25C192,17,240,23,288,30C336,37,384,43,432,43.3C480,43,528,37,576,38.3C624,40,672,50,720,46.7C768,43,816,27,864,31.7C912,37,960,63,1008,68.3C1056,73,1104,57,1152,45C1200,33,1248,27,1296,35C1344,43,1392,67,1440,71.7C1488,77,1536,63,1584,58.3C1632,53,1680,57,1728,55C1776,53,1824,47,1872,41.7C1920,37,1968,33,2016,28.3C2064,23,2112,17,2160,16.7C2208,17,2256,23,2304,23.3C2352,23,2400,17,2448,26.7C2496,37,2544,63,2592,65C2640,67,2688,43,2736,35C2784,27,2832,33,2880,30C2928,27,2976,13,3024,20C3072,27,3120,53,3168,56.7C3216,60,3264,40,3312,30C3360,20,3408,20,3432,20L3456,20L3456,100L3432,100C3408,100,3360,100,3312,100C3264,100,3216,100,3168,100C3120,100,3072,100,3024,100C2976,100,2928,100,2880,100C2832,100,2784,100,2736,100C2688,100,2640,100,2592,100C2544,100,2496,100,2448,100C2400,100,2352,100,2304,100C2256,100,2208,100,2160,100C2112,100,2064,100,2016,100C1968,100,1920,100,1872,100C1824,100,1776,100,1728,100C1680,100,1632,100,1584,100C1536,100,1488,100,1440,100C1392,100,1344,100,1296,100C1248,100,1200,100,1152,100C1104,100,1056,100,1008,100C960,100,912,100,864,100C816,100,768,100,720,100C672,100,624,100,576,100C528,100,480,100,432,100C384,100,336,100,288,100C240,100,192,100,144,100C96,100,48,100,24,100L0,100Z"></path></svg>    
        <footer className='footer_main'>
            <div className='footer_internal_box' style={{color: 'white'}}>
                <div>
                    <h1 className='timeline_header'>Encourage to contact</h1>
                    <p style={{maxWidth: '400px', marginBottom: '40px'}}>Here you can write something that will convince the employer to contact you. Here you can write something
                         that will convince the employer to contact you.</p>
                    <span style={{textAlign: 'left'}}>
                        <div><span className="material-symbols-outlined icon_footer text-primary">phone_iphone</span><span className='fs-5'>+1 234 567 890</span></div>
                        <div><span className="material-symbols-outlined icon_footer text-primary">mail</span><span className='fs-5'>chatanya@gmail.com</span></div>
                        <div><span className="material-symbols-outlined icon_footer text-primary">location_on</span><span className='fs-5'>Balajipuram Mathura, Mathura</span></div>
                    </span>
                </div>
                <div className='contact_box'>
                    <input id='name' className='input_box_contact form-control' type='text' placeholder='Full name' autoComplete='on'/>
                    <input id='email' className='input_box_contact form-control' type='email' placeholder='Enter Email' autoComplete='on'/>
                    <textarea id='message' className='input_box_contact form-control' style={{resize: 'none'}} row='3' type='text' placeholder='Leave a message'></textarea>
                    <button className='contact_button btn-primary' type='submit' onClick={()=>{alert('Thankyou for the message')}}>Send</button>
                </div>
            </div>
        </footer>
    </div>
  )
}
