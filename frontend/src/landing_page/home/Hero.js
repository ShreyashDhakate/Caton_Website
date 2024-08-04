import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row mt-5 p-5'>
                <div className='col-6 d-flex mt-5'>
                    <img src='media/images/CatonLogo.png'  alt='Logo' className=' align-items-center mb-5' style={{width:"100%"}} />
                </div>
                <div className='col-6'>
                <img src='media/images/Hero.png' alt='Hero Image' style={{width:"100%"}} />
                </div>
                    
                    
            </div>
            <div className='row'>
                
                <div className='col text-center'>
                    
                    
                    <h1 className='mt-5'>Preserve Your Health</h1>
                    <p>Online platform to Secure Your Medical Records Today for a Healthier Tomorrow.</p>
                    <button className='p-2 btn fs-5' style={{width: "15%", margin:" 0 auto", color: "white", backgroundColor: " #057A85"}}>Signup Now</button>
                
                </div>
            </div>
        </div>
     );
}

export default Hero;