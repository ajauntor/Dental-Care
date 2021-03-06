import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarked, faPhone } from '@fortawesome/free-solid-svg-icons'
const infoData = [
    {
        title:'Opening Hour',
        description: 'We are open 7 days',
        icon:faClock,
        background: 'primary'
    },
    {
        title:'Visit Our Location',
        description: 'Booklyn, NY-4511, USA',
        icon:faMapMarked,
        background: 'dark'
    },
    {
        title:'Call Us Now',
        description: '+488054889',
        icon:faPhone,
        background: 'primary'
    }

]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            
            <div className="row w-75">
            {
                infoData.map(info => <InfoCard info={info}></InfoCard>)
            }
            </div>

        </section>
    );
};

export default BusinessInfo;