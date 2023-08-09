import React from 'react';

import {BiLogoFacebook
        ,BiLogoTwitter
        ,BiLogoInstagram} from 'react-icons/bi'
import {FaLinkedinIn} from 'react-icons/fa'
export default function Footer()
{
    return(
        <footer>

            <div className='phase1 row-1'>
                <div className='col-1 col'>
                    <div><p className='title'>Customer Service</p></div>
                    <div className='content'>
                        <p>FAQs</p>
                        <p>Contact us</p>
                        <p>Store Locator</p>
                    </div>
                </div>

                <div className='col-2 col'>
                    <p className='title'>About HyperOne</p>
                    <div className='content'>
                        <p>About us</p>
                        <p>Membership</p>
                    </div>
                </div>

                <div className='col-3 col'>
                    <p className='title'>More From Shoperz</p>
                    <div className='content'>
                    <p>Return Policy</p>
                    <p>Terms and Conditions</p>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Give us your feedback</p>
                    </div>
                </div>

                <div className='col-4 col'>
                    <p className='title'>Download Mobile App</p>
                    <div className='content'>
                        <img alt='google-play' className='google--play'
                         src='https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg' />
                        <img alt='play-store' className='google--play'
                         src='https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg' />

                    </div>
                </div>

                <div className='col-5 col'>
                    <p className='title'>Follow Our Social Media</p>
                    <div className='content'>
                        <div className='icon--container'><BiLogoFacebook size={30} /></div>
                        <div className='icon--container'><BiLogoTwitter size={25} /></div>
                        <div className='icon--container'><BiLogoInstagram size={25} /></div>
                        <div className='icon--container'><FaLinkedinIn size={19} /></div>
                    </div>
                </div>

            </div>
            <div className='row-1 phase2'>

                <div className='phase2--row'>
                <div className='phase2--col'>

                <div className='col-1 col'>
                    <div><p className='title'>Customer Service</p></div>
                    <div className='content'>
                        <p>FAQs</p>
                        <p>Contact us</p>
                        <p>Store Locator</p>
                    </div>
                </div>

                <div className='col-3 col'>
                    <p className='title'>More From Shoperz</p>
                    <div className='content'>
                    <p>Return Policy</p>
                    <p>Terms and Conditions</p>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Give us your feedback</p>
                    </div>
                </div>

                </div>

                <div className='phase2--col'>

                <div className='col-2 col'>
                    <p className='title'>About HyperOne</p>
                    <div className='content'>
                        <p>About us</p>
                        <p>Membership</p>
                    </div>
                </div>

                <div className='col-4 col'>
                    <p className='title'>Download Mobile App</p>
                    <div className='content'>
                        <img alt='google-play' className='google--play'
                         src='https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg' />
                        <img alt='play-store' className='google--play'
                         src='https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg' />

                    </div>
                </div>

                </div>

                
                
                </div>

                <div className='col-5 col'>
                    <p className='title'>Follow Our Social Media</p>
                    <div className='content'>
                        <div className='icon--container'><BiLogoFacebook size={30} /></div>
                        <div className='icon--container'><BiLogoTwitter size={25} /></div>
                        <div className='icon--container'><BiLogoInstagram size={25} /></div>
                        <div className='icon--container'><FaLinkedinIn size={19} /></div>
                    </div>
                </div>

            </div>



            <div className='row-2'>
            <div>
            <p>©2023 Shoperz | All Rights Reserved</p>
            </div>
            </div>

        </footer>
    )
}