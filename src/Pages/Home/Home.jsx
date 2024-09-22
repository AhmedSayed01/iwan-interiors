import servImg1 from '../../assets/serv1.png';
import servImg2 from '../../assets/serv2.png';
import servImg3 from '../../assets/serv3.png';
import buildImage from '../../assets/buildImage.png';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook, FaPhoneVolume, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SlEnvolopeLetter } from 'react-icons/sl';
import { FaLocationDot } from 'react-icons/fa6';
import "./Home.css";
// import project1_1 from '../../assets/project1_1.jpg';
// import project1_2 from '../../assets/project1_2.jpg';
// import project2_1 from '../../assets/project2_1.jpg';
// import project2_2 from '../../assets/project2_2.jpg';
// import project3_1 from '../../assets/project3_1.jpg';
// import project3_2 from '../../assets/project3_2.jpg';
// import project4_1 from '../../assets/project4_1.jpg';
// import project4_2 from '../../assets/project4_2.jpg';
// import project5_1 from '../../assets/project5_1.jpg';
// import project5_2 from '../../assets/project5_2.jpg';
// import project6_1 from '../../assets/project6_1.jpg';
// import project6_2 from '../../assets/project6_2.jpg';
// import project7_1 from '../../assets/project7_1.jpg';
// import project7_2 from '../../assets/project7_2.jpg';
// import project8_1 from '../../assets/project8_1.jpg';
// import project8_2 from '../../assets/project8_2.jpg';

const Home = () => {
    return (
        <div className='md:mt-32 m-5 sm:m-12'>
            <div className='lg:flex justify-center items-center'>
                <div>
                    <h1 className='text-clampHeader2 font-abel text-nowrap'>
                        Who We Are
                    </h1>
                </div>
                <hr className='lg:rotate-90 mb-5 lg:mb-0 w-[130px] clear-both block border-0 h-[2px] bg-black' />
                <div>
                    <h1 className='max-w-3xl font-abel' style={{ fontSize: "1.2rem" }}>
                        Inspired by the iconic building that shouts for elegance and  beauty, we started IWAN Design House to influence society  more from the artistic point of view.  In the last few years, we had over +100 projects in Egypt,  Saudi Arabia, Kuwait, Qatar, Lebanon, Bahrain, UAE, and  Germany.  We are providing an integrated solution for our clients in in terior design, architectural design, urban design, landscape  design, and fit-out.
                    </h1>
                </div>
            </div>

            <div className='my-32'>
                <h1 className='text-6xl font-abel text-center'>Services</h1>
                <br />
                <br />
                <br />
                <div className='xl:mx-20 flex flex-wrap flex-1 justify-center'>
                    <div className='p-10 my-auto flex flex-col items-center'>
                        <img src={servImg1} className='w-40 aspect-[3/2] mb-5 ' alt="" />
                        <h1 className='font-abel text-nowrap text-3xl'>Interior Design</h1>
                    </div>
                    <div className='p-10 my-auto flex flex-col items-center'>
                        <img src={servImg2} className='w-40 aspect-[3/2] mb-5 ' alt="" />
                        <h1 className='font-abel text-nowrap text-3xl'>Architectural Design</h1>
                    </div>
                    <div className='p-10 my-auto flex flex-col items-center'>
                        <img src={servImg3} className='w-40 aspect-[3/2] mb-5 ' alt="" />
                        <h1 className='font-abel text-nowrap text-3xl'>Urban Design</h1>
                    </div>
                </div>
            </div>
            <div className='my-32'>
                <h1 className='text-6xl font-abel text-center'>Commercial Spaces</h1>
                <br />
                <br />
                <br />
                <div className='xl:mx-20 flex flex-wrap justify-center'>
                    <div className='p-10 my-auto flex flex-col items-center' style={{ flex: "0 0 calc(33.33% - 20px)" }}>
                        <img src={servImg1} className='w-40 aspect-[3/2] mb-5 ' alt="" />
                        <h1 className='font-abel text-nowrap text-3xl'>Interior Design</h1>
                    </div>
                    <div className='p-10 my-auto flex flex-col items-center' style={{ flex: "0 0 calc(33.33% - 20px)" }}>
                        <img src={servImg2} className='w-40 aspect-[3/2] mb-5 ' alt="" />
                        <h1 className='font-abel text-nowrap text-3xl'>Architectural Design</h1>
                    </div>
                    <div className='p-10 my-auto flex flex-col items-center' style={{ flex: "0 0 calc(33.33% - 20px)" }}>
                        <img src={servImg3} className='w-40 aspect-[3/2] mb-5 ' alt="" />
                        <h1 className='font-abel text-nowrap text-3xl'>Urban Design</h1>
                    </div>
                    <div className='p-10 my-auto flex flex-col items-center' style={{ flex: "0 0 calc(33.33% - 50px)" }}>
                        <img src={servImg1} className='w-40 aspect-[3/2] mb-5 ' alt="" />
                        <h1 className='font-abel text-nowrap text-3xl'>Urban Design</h1>
                    </div>
                    <div className='p-10 my-auto flex flex-col items-center' style={{ flex: "0 0 calc(33.33% - 50px)" }}>
                        <img src={servImg3} className='w-40 aspect-[3/2] mb-5 ' alt="" />
                        <h1 className='font-abel text-nowrap text-3xl'>Urban Design</h1>
                    </div>
                </div>
            </div>
            <div className='flex flex-col-reverse justify-center items-center flex-wrap lg:grid grid-cols-2 gap-10 '>
                <div className='mx-auto text-center sm:text-start max-w-[600px]'>
                    <h1 className='text-4xl font-abel'>Administrative Offices</h1>
                    <br />
                    <p className='text-main font-abel text-2xl'>Our office designs focus on</p>
                    <br />
                    <ul className='font-abel text-start list-disc ml-5 text-md'>
                        <li>Efficiency & Functionality: Optimized layouts, ergonomic furniture, and integrated technology for productivity.</li>
                        <li>Brand Representation: Designs that reflect your brand’s culture and impress clients.</li>
                        <li>Employee Well-being: Comfortable, well-lit spaces that boost morale and productivity.</li>
                        <li>Flexibility: Future-proof designs that can adapt as your business grows.</li>
                        <li>Compliance: Ensuring safety and regulatory adherence.</li>
                    </ul>
                </div>
                <div className='mx-auto'>
                    {/* <img src={buildImage} className='w-min' alt="" /> */}
                    <div className="imageChange bg-[url('/project4_1.jpg')] hover:bg-[url('/project3_1.jpg')] transition-all"></div>
                </div>
            </div>
            <br /><br /><br />
            <div className='flex flex-col-reverse justify-center items-center flex-wrap lg:grid grid-cols-2 gap-10 '>
                <div className='mx-auto text-center sm:text-start max-w-[600px]'>
                    <h1 className='text-4xl font-abel'>Hospitality Venues</h1>
                    <br />
                    <p className='text-main font-abel text-2xl'>We create guest-centric hospitality spaces that balance luxury and efficiency</p>
                    <br />
                    <ul className='font-abel text-start list-disc ml-5 text-md'>
                        <li>Guest Comfort: Tailored room designs with luxury elements.</li>
                        <li>Brand Identity: Cohesive, memorable designs that set you apart.</li>
                        <li>Operational Efficiency: Streamlined layouts for smooth operations.</li>
                        <li>Sustainability: Eco-friendly materials and energy-efficient solutions.</li>
                        <li>Cultural Integration: Designs that connect guests to local culture.</li>
                    </ul>
                </div>
                <div className='mx-auto'>
                    <div className="imageChange bg-[url('/project5_1.jpg')] hover:bg-[url('/project7_1.jpg')] transition-all"></div>
                    {/* <img src={buildImage} className='w-min' alt="" /> */}
                </div>
            </div>
            <br /><br /><br />
            <div className='flex flex-col-reverse justify-center items-center flex-wrap lg:grid grid-cols-2 gap-10 '>
                <div className='mx-auto text-center sm:text-start max-w-[600px]'>
                    <h1 className='text-4xl font-abel'>Restaurants <span className='text-main'>&</span> Cafés</h1>
                    <br />
                    <p className='text-main font-abel text-2xl'>Our restaurant designs enhance ambiance and customer experience </p>
                    <br />
                    <ul className='font-abel text-start list-disc ml-5 text-md'>
                        <li>Guest Comfort: Tailored room designs with luxury elements.</li>
                        <li>Brand Identity: Cohesive, memorable designs that set you apart.</li>
                        <li>Operational Efficiency: Streamlined layouts for smooth operations.</li>
                        <li>Sustainability: Eco-friendly materials and energy-efficient solutions.</li>
                        <li>Cultural Integration: Designs that connect guests to local culture.</li>
                    </ul>
                </div>
                <div className='mx-auto'>
                    <div className="imageChange bg-[url('/project1_2.jpg')] hover:bg-[url('/project1_1.jpg')] transition-all"></div>
                    {/* <img src={buildImage} className='w-min' alt="" /> */}
                </div>
            </div>
            <br /><br /><br />
            <div className='flex flex-col-reverse justify-center items-center flex-wrap lg:grid grid-cols-2 gap-10 '>
                <div className='mx-auto text-center sm:text-start max-w-[600px]'>
                    <h1 className='text-4xl font-abel'>Exhibitions <span className='text-main'>&</span> Trade Shows</h1>
                    <br />
                    <p className='text-main font-abel text-2xl'>Our exhibition booths are designed to capture attention and engage visitors:</p>
                    <br />
                    <ul className='font-abel text-start list-disc ml-5 text-md'>
                        <li>Brand Consistency: Designs that reflect your brand’s identity.</li>
                        <li>Visual Impact: Bold, innovative designs that stand out.</li>
                        <li>Engagement: Interactive elements and functional layouts for a seamless visitor experience.</li>
                        <li>Flexibility: Modular designs for easy setup and reconfiguration.</li>
                    </ul>
                </div>
                <div className='mx-auto'>
                    <div className="imageChange bg-[url('/project8_1.jpg')] hover:bg-[url('/project4_2.jpg')] transition-all"></div>
                    {/* <img src={buildImage} className='w-min' alt="" /> */}
                </div>
            </div>
            <br /><br /><br />
            <div className='flex flex-col-reverse justify-center items-center flex-wrap lg:grid grid-cols-2 gap-10 '>
                <div className='mx-auto text-center sm:text-start max-w-[600px]'>
                    <h1 className='text-4xl font-abel'>Automotive Spaces</h1>
                    <br />
                    <p className='text-main font-abel text-2xl'>We create showrooms and service centers that reflect your brand and enhance the customer journey</p>
                    <br />
                    <ul className='font-abel text-start list-disc ml-5 text-md'>
                        <li>Brand Consistency: Designs that reflect your brand’s identity.</li>
                        <li>Visual Impact: Bold, innovative designs that stand out.</li>
                        <li>Engagement: Interactive elements and functional layouts for a seamless visitor experience.</li>
                        <li>Flexibility: Modular designs for easy setup and reconfiguration.</li>
                    </ul>
                </div>
                <div className='mx-auto'>
                <div className="imageChange bg-[url('/project5_2.jpg')] hover:bg-[url('/project7_2.jpg')] transition-all"></div>
                    {/* <img src={buildImage} className='w-min' alt="" /> */}
                </div>
            </div>
            <br /><br /><br />
            <br /><br /><br />
            <div className='bg-[#2e2e2e]  xl:mx-32 rounded-3xl lg:grid grid-cols-2 gap-4'>

                <div className='mx-10 sm:mx-20 sm:py-10'>
                    <h1 className='text-white font-bold text-3xl pt-5 text-center sm:text-start sm:text-4xl'>Get In Touch</h1>
                    <br />
                    <hr className='w-full sm:w-1/2 bg-main h-[3px] border-0' />
                    <br /><br />
                    <br />
                    <form className="mb-10 m-auto sm:m-0 max-w-sm">
                        <div className="mb-5">
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-[#2e2e2e] dark:border-[#5e5e5e] dark:placeholder-[#5e5e5e] dark:text-white " placeholder="Your Name" required />
                        </div>
                        <div className="mb-5">
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-[#2e2e2e] dark:border-[#5e5e5e] dark:placeholder-[#5e5e5e] dark:text-white " placeholder="Your Email" required />
                        </div>
                        <div className="mb-5">
                            <label for="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
                            <textarea id="content" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-[#2e2e2e] dark:border-[#5e5e5e] dark:placeholder-[#5e5e5e] dark:text-white " placeholder="Your Content" required />
                        </div>
                        <br />
                        <button type="submit" className="custom-hover-no-rotate text-white bg focus:ring-4 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center bg-main">Submit</button>
                        
                    </form>

                </div>
                <div className='bg-white rounded-b-3xl lg:rounded-b-none rounded-r-none rounded-ee-3xl lg:rounded-ee-3xl lg:rounded-r-3xl border-2 border-[#2e2e2e]'>
                    <p className='text-lg m-7'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, ad quisquam qui recusandae explicabo assumenda tempora distinctio labore harum placeat iste inventore nam quod molestias vero repudiandae, sed non eveniet.</p>
                    <br /><br />
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.33663495364!2d31.217264868941292!3d30.059556316546193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1726684978103!5m2!1sen!2seg" className='w-clampW h-[250px]' style={{ marginLeft: "30px", marginRight: '30px', border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <br />
                    <br />
                    <div className='ml-5'>
                        <section className='flex gap-5 items-center'>
                            <i className='flex'><FaLocationDot /></i>
                            <h1>NYC, United State</h1>
                        </section>
                        <section className='flex gap-5 items-center'>
                            <i><FaPhoneVolume /></i>
                            <h1>0111023222</h1>
                        </section>
                        <section className='flex gap-5 items-center'>
                            <i><SlEnvolopeLetter /></i>
                            <h1>somebody@gmail.com</h1>
                        </section>
                    </div>
                    <br />
                    <br />
                    <div className='flex gap-4 text-2xl m-10 justify-end'>
                        <i className='custom-hover-no-rotate'><AiFillInstagram /></i>
                        <i className='custom-hover-no-rotate'><FaTwitter /></i>
                        <i className='custom-hover-no-rotate'><FaFacebook /></i>
                        <i className='custom-hover-no-rotate'><FaYoutube /></i>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home