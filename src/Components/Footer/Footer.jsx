import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col md:grid grid-cols-5 mx-[5%] md:mx-[15%]'>
                
                <div className='col-span-2 '>
                    <h1 className='text-4xl font-bell m-10 mt-0'>IWAN HOUSE</h1>
                    <p className='m-10'>It is a long established fact that a reader will be distracted lookings</p>
                    <div className='flex gap-10 m-10'>
                        <i className='custom-hover-no-rotate'><AiFillInstagram /></i>
                        <i className='custom-hover-no-rotate'><FaTwitter /></i>
                        <i className='custom-hover-no-rotate'><FaFacebook /></i>
                        <i className='custom-hover-no-rotate'><FaYoutube /></i>
                    </div>
                </div>
                <div className='col-span-3 flex flex-col gap-[10%] text-center sm:text-start sm:flex-row justify-around'>
                    <div className='col-span-1 mt-10 sm:mt-0 mb-16 sm:mb-0'>
                        <h1 className='text-3xl sm:text-2xl font-bell text-main'>Pages</h1>
                        <br />
                        <Link className='font-acumin' to="/project">Projects</Link>
                    </div>
                    <div className='col-span-1 mb-16 sm:mb-0'>
                        <h1 className='text-3xl sm:text-2xl font-bell text-main'>Services</h1>
                        <br />
                        <p className='font-acumin'>Kitchen</p>
                        <br />
                        <p className='font-acumin'>Living Area</p>
                        <br />
                        <p className='font-acumin'>Bathroom</p>
                        <br />
                        <p className='font-acumin'>Dinning Hall</p>
                        <br />
                        <p className='font-acumin'>Bedroom</p>
                    </div>
                    <div className='col-span-1 '>
                        <h1 className='text-3xl sm:text-2xl font-bell text-main'>Contact</h1>
                        <br />
                        <p>55 East Birchwood Ave.</p>
                        <p>Brooklyn, New York 11201</p>
                        <br />
                        <p>contact@selhono.com</p>
                        <br />
                        <p>(123) 456 - 7890</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer