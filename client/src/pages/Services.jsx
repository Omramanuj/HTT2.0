import React from 'react'
import BMI from '../components/BMI'
import MainNavbar from '../components/MainNavbar'
import ImageSlider from '../components/ImageSlider'
import ServiceList from '../components/Service/ServiceList';
import ServiceColumn from '../components/Service/ServiceColumn';

export default function Services() {
    const slides = [{url:"https://images.unsplash.com/photo-1606902965551-dce093cda6e7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",title:"fit"},
    {url:"https://cdn.telanganatoday.com/wp-content/uploads/2022/06/Shika-Sharma.jpg",title:"shikhaji-1"},
    

];

const diseases = [
    'Diabetes',
    'Thyroid',
    'BP (Blood Presure)',
    'PCOD',
    'Overweight',
    'Deficiencies of vitamins',
    'Depression',
    'Anxiety',
    'Fatigue',
    'Constipation',
    'Anemia',
    'Lactation',
    'Kids diet',
    'Hair Issues',
    'Skin Issues',
    'Pre bridal',
    'Lose Body Fat',
    'Healthy Gut'
  ];
  

    const containerStyles = {
        width: "500px",
    height: "1000px",
        margin:"0 100px"
};

    return (
        <>

            <div className="akhu flex flex-col pt-[6rem]">
                <div className="flex flex-row ">
                    <div className="Services w-3/5"><ServiceList/></div>
                    <div style={containerStyles} className='w-2/5 m-4'> <ServiceColumn diseases={diseases}/> </div>
                </div>

   {/*        <ImageSlider slides={slides} /> */}
                <div className="bmi "><BMI /></div>
            </div>


        </>
    )
}
