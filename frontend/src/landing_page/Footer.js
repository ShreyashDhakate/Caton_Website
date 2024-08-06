import React from 'react';

function Footer() {
    return ( 
        <footer style={{backgroundColor:"#F4F9F9"}}>
            <div className='container-fluid p-5 border-top mt-5'>
                <div className='row p-5'>
                    <div className='col-md-3 padding'>
                        <img src="media/images/CatonLogo.png" alt="Logo" style={{width:"50%"}} className='mb-4'/>
                        <p style={{fontSize:"0.9rem"}}>© 2024, Caton.<br/>
                            All rights reserved.</p>
                    </div>
                    <div className='col-md-3 padding'>
                        <p>Company</p>
                        <a href='#about' className='text-muted'>About Us</a><br />
                        <a href='#products' className='text-muted'>Products</a><br />
                        <a href='#pricing' className='text-muted'>Pricing</a><br />
                        <a href='#careers' className='text-muted'>Careers</a><br />
                        <a href='#press' className='text-muted'>Press & Media</a><br />
                        <a href='#csr' className='text-muted'>CSR</a><br />
                        <a href='#tech' className='text-muted'>Tech Blog</a><br />
                    </div>
                    <div className='col-md-3 padding'>
                        <p>Support</p>
                        <a href='#contact' className='text-muted'>Contact Us</a><br/>
                        <a href='#support' className='text-muted'>Support Portal</a><br />
                        <a href='#blog' className='text-muted'>Blog</a><br />
                        <a href='#resources' className='text-muted'>Resources</a><br />
                        <a href='#videos' className='text-muted'>Videos</a><br />
                    </div>
                    <div className='col-md-3 padding'>
                        <p>Account</p>
                        <a href='#open-account' className='text-muted'>Open an Account</a><br />
                        <a href='#fund-transfer' className='text-muted'>Fund Transfer</a><br />
                    </div>
                </div>
                <div className='row padding p-5 text-muted' style={{fontSize:"0.7rem"}}>
                    <p>Caton Pvt. Ltd. Registered Address: Caton Pvt. Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
                        Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
                        For any complaints, please write to complaints@caton.com. Please ensure
                        you carefully read the Data Privacy and Security Policy.</p>

                    <p>
                        Caton is committed to providing a seamless and efficient healthcare experience. 
                        Our platform allows patients to book appointments, track their medical history, and avoid long waiting times in hospitals.
                        We ensure that your medical data is securely stored and easily accessible for your convenience.</p>

                    <p>
                        Patient data privacy and security are our top priorities. We adhere to stringent data protection regulations 
                        and utilize advanced encryption methods to safeguard your personal information. If you have any concerns or need assistance, 
                        please contact our support team.</p>

                    <p>
                        For any health-related emergencies, please contact your nearest healthcare provider immediately. 
                        Caton is dedicated to supporting your healthcare journey by providing tools and resources to manage your health effectively.</p>

                    <p>
                        Stay informed about your health and wellness. Visit our blog for the latest updates and tips on managing your health.
                        Subscribe to our newsletter for exclusive insights and health resources tailored to your needs.</p>
                </div>
            </div>
        </footer>
     );
}

export default Footer;
