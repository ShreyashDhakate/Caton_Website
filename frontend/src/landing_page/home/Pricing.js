import React from 'react';

function Pricing() {
    
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <div className='col-md-4'>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p className='mb-4 text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <div className='mt-2'>
                        <a href='#'style={{textDecoration:"none"}}>See pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className='col-md-2'></div>
                <div className='col-md-6'>
                    <div className='row text-center'>
                        <div className='col border p-3'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivery and <br/>direct mutual funds</p>
                        </div>
                        <div className='col border p-3'>
                            <h1 className='mb-3'>₹20</h1>
                            <p>Intraday and F&O</p>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;