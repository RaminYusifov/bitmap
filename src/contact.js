import React, { Component } from 'react';
import "./contact.css";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FaHome, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Main4 from './main4';
import Footer from './footer';
import Header2 from './header2';


export default class Contact extends Component {
    render() {

        // const mapStyles = {
        //     height: '100%',
        //     width: '100%'
        // };

        // const defaultCenter = {
        //     lat: 34.0195,
        //     lng: -118.4912
        // };

        // const santaMonicaBoulevard = {
        //     lat: 34.0522,
        //     lng: -118.2437
        // };

        return (
            <>
                <Header2 title={"Contact"} desc={"Contact"} />
                <div className='container2'>
                    {/* <div> */}
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.5209291646986!2d-118.49738738478452!3d34.04680278060159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4ee0f2555bf%3A0x4d9b5e42ff676d17!2sSanta%20Monica%20Blvd%2C%20Los%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1649153063336!5m2!1sen!2sus" allowfullscreen>
                    </iframe>
                    {/* </div> */}
                    <div className='container3'>
                        <div>
                            <div className='info2'>
                                <FaHome className='icon' />
                                <div className='info3'>
                                    <h6>California, United States</h6>
                                    <p>Santa monica bullevard</p>
                                </div>
                            </div>
                            <div className='info2'>
                                <FaPhoneAlt className='icon' />
                                <div className='info3'>
                                    <a href="">00 (440) 9865 562</a>
                                    <p>Mon to Fri 9am to 6 pm</p>
                                </div>
                            </div>
                            <div className='info2'>
                                <FaEnvelope className='icon' />
                                <div className='info3'>
                                    <a href="">support@colorlib.com</a>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                        <div className='info3'>
                            <form>
                                <div className='input'>
                                    <div>
                                        <input type='text' placeholder='Enter your name' className='form-control' />
                                    </div>
                                    <div>
                                        <input type='email' placeholder='Enter email address' className='form-control two' />
                                    </div>
                                    <div>
                                        <input type='text' placeholder='Enter Subject' className='form-control two' />
                                    </div>
                                </div>
                                <div>
                                    <textarea placeholder='Enter Message' className='em'></textarea>
                                </div>
                            </form>
                            <div className='btn-sm'>
                                <button>Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Main4 />
                <Footer />
            </>
        )
    }
}