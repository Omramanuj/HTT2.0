import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer(){
    return(
        <div className = "Footer section mt-[12rem]">
            <div className='sb__footer-links section__padding'>
                <div className='sb__footer-links'>
                <div className='sb__footer-links-div'>
                    <h4>For Buisness</h4>
                    <a href="">
                        <p>
                            Employer
                        </p>
                    </a>
                    <a href="">
                        <p>
                            Health Plan
                        </p>
                    </a>
                    <a href="">
                        <p>
                            individual
                        </p>
                    </a>
                </div>
                <div className='sb__footer-links-div'>
                    <h4>For Buisness</h4>
                    <a href="">
                        <p>
                            Employer
                        </p>
                    </a>
                    <a href="">
                        <p>
                            Health Plan
                        </p>
                    </a>
                    <a href=" ">
                        <p>
                            individual
                        </p>
                    </a>
                </div>
                <div className='sb__footer-links-div'>
                    <h4>For Buisness</h4>
                    <a href=" ">
                        <p>
                            Employer
                        </p>
                    </a>
                    <a href=" ">
                        <p>
                            Health Plan
                        </p>
                    </a>
                    <a href=" ">
                        <p>
                            individual
                        </p>
                    </a>
                </div>
                
                <div className='sb__footer-links-div'>
                    <h4>Social Media</h4>
                    <div className='Social Media'>
                        <a href="https://www.facebook.com/fattoslimmbd" className='mr-2'><FacebookIcon/></a>
                        <a href="https://api.whatsapp.com/send?phone=919897717000&text=I%20am%20interested" className='mr-2'><YouTubeIcon/></a>
                        <a href="https://www.instagram.com/Fat_to_slim_sas_mbd/" className='mr-2'><InstagramIcon/></a>
                        <a href="https://api.whatsapp.com/send?phone=919897717000&text=I%20am%20interested" className='mr-2'><WhatsAppIcon/></a>
                    </div>
                </div>
                </div>

                <div className='divider'>.</div>

                <div className="sb_footer-below">
                    <div className="sb_footer-copyright m-1">
                        <p>{new Date().getFullYear()} CodeInn. All right reserved.</p>
                    </div>
                    <div className="sb_footer-below-links">
                        <a href="">
                        <div>
                            <p className='m-2'>Terms & Conditions</p>
                        </div>
                        </a>
                        <a href="">
                        <div>
                            <p className='m-2'>Privacy</p>
                        </div>
                        </a>
                        <a href="">
                        <div>
                            <p className='m-2'>Security</p>
                        </div>
                        </a>
                        <a href="">
                        <div>
                            <p className='m-2'>Cookie Declaration</p>
                        </div>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}
