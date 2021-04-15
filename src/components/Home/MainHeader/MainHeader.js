import React from 'react';
import chair from '../../../images/chair.png'
import './MainHeader.css'

const MainHeader = () => {
    return (
        <main style={{height:"600px"}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your pathway to a <br/> bright new smile.</h1>

                <p className="text-secondary">Dentists love the effortless handling of patient relationships. Submit and track 
                    claims, view member benefits and reach new patients through the provider directory.</p>

                    <button type="button" class="btn btn-bg btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
               <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default MainHeader;