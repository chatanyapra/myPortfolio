import './TimeLine.css'
import football from "../svg_images/footballsvg.svg"

export default function Hobbies() {

  return (
    <>
        <div className="hobbies_main_box">
            <header className="hobbie_header">
                <h1 className='timeline_header' style={{margin: '0 20px'}}>Hobbies</h1>
            </header>
            <div className='hobbie_container'>
                <span>
                    <div className='hobbie_box'><img src={football} alt='Logo'></img></div>
                    <h4 style={{paddingTop: '40px'}}>Football</h4>
                </span>
                <span>
                    <div className='hobbie_box'>
                    <svg width="80" height="76" viewBox="0 0 80 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M78.2917 7.29329L72.7084 1.70996C71.1667 0.084961 68.4583 0.084961 66.8333 1.70996L29.5 39.0433L40.9583 50.5016L78.2917 13.1683C79.9167 11.5433 79.9167 8.83496 78.2917 7.29329ZM21.1667 46.335C17.8515 46.335 14.672 47.6519 12.3278 49.9961C9.98364 52.3403 8.66668 55.5198 8.66668 58.835C8.66668 64.2933 3.83334 67.1683 0.333344 67.1683C4.16668 72.2516 10.75 75.5016 17 75.5016C21.4203 75.5016 25.6595 73.7457 28.7851 70.6201C31.9107 67.4945 33.6667 63.2552 33.6667 58.835C33.6667 55.5198 32.3497 52.3403 30.0055 49.9961C27.6613 47.6519 24.4819 46.335 21.1667 46.335Z" fill="rgba(193, 71, 233, 1)"></path>
                    </svg>
                    </div>
                    <h4 style={{paddingTop: '40px'}}>Painting</h4>
                </span>
                <span>
                    <div className='hobbie_box'>
                        <svg width="57" height="87" viewBox="0 0 57 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.25 74.25C31.25 81.1562 24.25 86.75 15.625 86.75C7 86.75 0 81.1562 0 74.25C0 67.3438 7 61.75 15.625 61.75C24.25 61.75 31.25 67.3438 31.25 74.25Z" fill="rgba(193, 71, 233, 1)"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M31.25 11.75V74.25H25V11.75H31.25Z" fill="rgba(193, 71, 233, 1)"></path>
                        <path d="M25 10.6256C25.0009 9.18129 25.502 7.78185 26.418 6.66522C27.3341 5.54859 28.6087 4.78371 30.025 4.50062L48.775 0.750621C49.6814 0.569454 50.6167 0.591583 51.5135 0.815415C52.4103 1.03925 53.2463 1.45921 53.9613 2.04504C54.6762 2.63088 55.2523 3.368 55.6481 4.20331C56.0439 5.03861 56.2494 5.9513 56.25 6.87562V18.0006L25 24.2506V10.6256Z" fill="rgba(193, 71, 233, 1)"></path>
                        </svg>
                    </div>
                    <h4 style={{paddingTop: '40px'}}>Music</h4>
                </span>
                <span>
                    <div className='hobbie_box'>
                        <svg width="100" height="86" viewBox="0 0 100 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M64.5833 16.9167C69.1667 16.9167 72.9167 13.1667 72.9167 8.58333C72.9167 4 69.1667 0.25 64.5833 0.25C60 0.25 56.25 4 56.25 8.58333C56.25 13.1667 60 16.9167 64.5833 16.9167ZM20.8333 44C9.16667 44 0 53.1667 0 64.8333C0 76.5 9.16667 85.6667 20.8333 85.6667C32.5 85.6667 41.6667 76.5 41.6667 64.8333C41.6667 53.1667 32.5 44 20.8333 44ZM20.8333 79.4167C12.9167 79.4167 6.25 72.75 6.25 64.8333C6.25 56.9167 12.9167 50.25 20.8333 50.25C28.75 50.25 35.4167 56.9167 35.4167 64.8333C35.4167 72.75 28.75 79.4167 20.8333 79.4167ZM45 37.75L55 27.75L58.3333 31.0833C63.75 36.5 70.8333 39.8333 79.5833 39.8333V31.5C73.3333 31.5 68.3333 29 64.5833 25.25L56.6667 17.3333C54.5833 15.6667 52.5 14.8333 50 14.8333C47.5 14.8333 45.4167 15.6667 44.1667 17.3333L32.5 29C30.8333 30.6667 30 32.75 30 34.8333C30 37.3333 30.8333 39.4167 32.5 40.6667L45.8333 52.3333V73.1667H54.1667V47.3333L45 37.75ZM79.1667 44C67.5 44 58.3333 53.1667 58.3333 64.8333C58.3333 76.5 67.5 85.6667 79.1667 85.6667C90.8333 85.6667 100 76.5 100 64.8333C100 53.1667 90.8333 44 79.1667 44ZM79.1667 79.4167C71.25 79.4167 64.5833 72.75 64.5833 64.8333C64.5833 56.9167 71.25 50.25 79.1667 50.25C87.0833 50.25 93.75 56.9167 93.75 64.8333C93.75 72.75 87.0833 79.4167 79.1667 79.4167Z" fill="rgba(193, 71, 233, 1)"></path>
                        </svg>
                    </div>
                    <h4 style={{paddingTop: '40px'}}>Cycling</h4>
                </span>
            </div>
        </div>
    </>
  )
}