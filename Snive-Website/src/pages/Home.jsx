import React, { useState, useEffect, useRef } from 'react';
import "../index.css";


import './Home.css';
import { FaArrowDown } from 'react-icons/fa';
import logo from '../assets/Logo.png';
import head from '../assets/head.png';
import graph from '../assets/graph.png';
import graph2 from '../assets/graph2.png';
import speaker from '../assets/speaker.png';
import web from '../assets/web.png';
import search from '../assets/search.png';
import screen from '../assets/screen.png';
import dott from '../assets/dotted graph.png';

import { BiPlay } from 'react-icons/bi';
import { BsStars } from 'react-icons/bs';
import { FaEnvelope, FaInfoCircle } from 'react-icons/fa';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaCircle } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';
import { MdVideoCall } from 'react-icons/md';
import "./Testimonials.css";
import { HiMiniSpeakerWave } from 'react-icons/hi2';
import { FaPaperPlane } from "react-icons/fa";

import { FaCheckCircle } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaSquareYoutube } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';


const Home = () => {
    const [activeTab, setActiveTab] = useState('framework');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };



    const handleScrollClick = () => {
        const section = document.querySelector('.second-container');
        section?.scrollIntoView({ behavior: 'smooth' });
    };

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/services')
            .then((res) => res.json())
            .then((data) => {
                setServices(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching services:", err);
                setLoading(false);
            });
    }, []);
    const bgColors = {
        purple: "bg-[#A855F7]",
        black: "bg-[#121212]"
    };

    const icons = {
        graph,
        graph2,
        speaker,
        web,
        search,
        screen,
    };
    const testimonials = [
        {
            name: "Priyanka",
            text: "Snive keeps us a step ahead in the digital game.",
            rating: 4,
        },
        {
            name: "Harsh Pareek",
            text: "Snive's AI solutions have elevated our brand's presence effortlessly.",
            rating: 5,
        },
        {
            name: "Shreya",
            text: "Snive combines AI and aesthetics like no other!",
            rating: 4,
        },
        {
            name: "Gautham",
            text: "With Nexa AI, our customer engagement has skyrocketed!",
            rating: 4,
        },
        {
            name: "Aishwarya",
            text: "Our visuals have never been better, thanks to Snive!",
            rating: 5,
        },
        {
            name: "Rahul",
            text: "Snive’s innovative tools have transformed our workflow!",
            rating: 5,
        },
    ];

    const StarRating = ({ rating }) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} className="text-[#FFD700] inline" />);
            } else if (i - rating === 0.5) {
                stars.push(<FaStarHalfAlt key={i} className="text-[#FFD700] inline" />);
            } else {
                stars.push(<FaStar key={i} className="text-gray-400 inline" />);
            }
        }
        return <div className="flex gap-1 mt-2">{stars}</div>;
    };

    const ServiceCard = ({ title, tags, iconUrl, bg }) => {
        return (
            <div
                className={`${bgColors[bg]} rounded-[16px] p-[32px] text-[#FFFFFF] flex flex-col justify-between  w-[280px] h-[280px] shadow-[0_10px_15px_rgba(0,0,0,0.1)]`}
            >
                <div>
                    <div className="w-[64px] h-[64px] mb-[16px] flex items-center justify-center rounded-full bg-[#FFFFFF33] backdrop-blur-[16px]">
                        <img src={`${icons[iconUrl]}`} alt="Snive Logo" className="w-[2.5rem] h-[2.5rem] object-contain" />
                    </div>


                  
                    <h2 className="text-[18px] font-[400] text-left leading-[1.25] mb-[12px]">{title}</h2>

                    <div className="flex flex-wrap items-center justify-center gap-[3px]">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="bg-[#FFFFFF] text-[#000000] mt-[10px] text-[6px] px-[5px] py-[2px] rounded-[2px] "
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <button className="absolute mt-[13rem] bg-gradient-to-r from-[#A855F7] to-[#3B82F6] text-[10px] px-4 py-1 rounded-full font-normal hover:opacity-90 transition-all">
                    KNOW MORE →
                </button>
            </div>
        );
    };




    return (
        <div>
            <div className="font-sans min-h-screen text-white  bg-[radial-gradient(circle_at_bottom_left,rgba(130,0,255,0.2)_0%,transparent_40%),linear-gradient(160deg,#0a0014_0%,#1b0033_100%)] px-[3rem]">
                <nav className="flex justify-between items-center pt-[1.5rem]">
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="Snive Logo" className="h-[32px] w-[32px]" />
                        <span className="font-[800] text-[1.5rem]">Snive</span>
                    </div>
                    <ul className="flex gap-[1.8rem] list-none">
                        <li>PRODUCT</li>
                        <li>SOLUTION</li>
                        <li>COMPANY</li>
                        <li>PLATFORMS</li>
                        <li>RESOURCE</li>
                        <li>PRICING</li>
                    </ul>
                    <button className="demo-btn">BOOK A DEMO</button>
                </nav>

                <section className="flex justify-between items-center pt-[3rem] flex-wrap">
                    <div className="flex-[1] max-w-[40%]">
                        <h1 className='text-[3.5rem] leading-[1.7] font-[400]'>
                            Empower With <span className="bg-gradient-to-r from-[#ff00cc] to-[#3333ff] bg-clip-text text-transparent font-[400]">Nexa AI</span>
                        </h1>
                        <p className='my-[1rem] text-[0.9rem] text-[#ccc] leading-[1.7] max-w-[500px]'>
                            Unleash Creativity with AI Precision: Save Time, Enhance Accuracy, and Optimize Efficiency.
                            Snive’s AI Architecture & Generative AI Platform unlock your data’s full potential safely.
                        </p>
                        <div className="flex gap-[1.5rem] mt-[1.5rem]">
                            <button className="get-started">GET STARTED TODAY</button>
                            <button className="craft-shop">CRAFT YOUR E-SHOP</button>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-center items-center pt-8">
                        <img className='w-[90%] max-w-[500px]' src="/snive-diagram.png" alt="Nexa AI Architecture" />
                    </div>
                </section>

                <div className="text-center py-[6rem]">
                    <div className="w-[40px] h-[40px] border border-[#9a9999] rounded-full flex items-center justify-center mx-auto text-white transition-all duration-300 ease-in-out" onClick={handleScrollClick}>
                        <FaArrowDown size={18} />
                    </div>
                </div>
            </div>

            <div className="second-container">
                <h1 className="snive">Snive</h1>
                <div className="video">
                    <BiPlay size={80} color="#fff" />
                </div>

                <h3 className="h3">
                    SNIVE AI ARCHITECTURE <span className="star"><BsStars size={15} /></span>
                </h3>

                <h1 className="font-[400] items-center mt-[30px] text-[3rem] px-[250px] mb-[100px] left-align">AI Driven Solution for Modern Enterprise</h1>

                <div className="basis-[60%] min-h-[10rem]">
                    <div className="tabtitles">
                        <p
                            className={`tab ${activeTab === 'framework' ? 'activetab' : ''}`}
                            onClick={() => handleTabClick('framework')}
                        >
                            FRAMEWORK
                        </p>
                        <p
                            className={`tab ${activeTab === 'collaboration' ? 'activetab' : ''}`}
                            onClick={() => handleTabClick('collaboration')}
                        >
                            COLLABORATION
                        </p>
                        <p
                            className={`tab ${activeTab === 'infusion' ? 'activetab' : ''}`}
                            onClick={() => handleTabClick('infusion')}
                        >
                            INFUSION
                        </p>
                    </div>

                    <div className={`tab-content ${activeTab === 'framework' ? 'active-content' : ''}`}>
                        <h1 className="left-align">Tailored AI <span>Framework</span></h1>
                        <p className="left-align">Snive creates bespoke AI models, aligning with business needs and data landscape for a harmonious tech-business fusion.</p>
                    </div>

                    <div className={`tab-content ${activeTab === 'collaboration' ? 'active-content' : ''}`}>
                        <h1 className="left-align">Tailored AI <span>Collaboration</span></h1>
                        <p className="left-align">Snive creates bespoke AI models, aligning with business needs and data landscape for a harmonious tech-business fusion.</p>
                    </div>

                    <div className={`tab-content ${activeTab === 'infusion' ? 'active-content' : ''}`}>
                        <h1 className="left-align">Tailored AI <span>Infusion</span></h1>
                        <p className="left-align">Snive creates bespoke AI models, aligning with business needs and data landscape for a harmonious tech-business fusion.</p>
                    </div>
                </div>

                <div className="basis-[35%] min-h-[10rem]">
                    {/* image lgaani hai */}

                </div>
            </div>

            <div className="fourth-container mb-[80px]">
                <h3 className="h4">
                    FUSION AI <span className="star"><BsStars size={15} /></span>
                </h3>

                <h1 className="font-[400] mt-[30px] text-[3rem] pl-[100px]">Unlock Effortless Ad Creation</h1>
                <p className='pt-[10px] pl-[100px] left'>Skip the hassle and Cost with our AI-Powered Ad Generator: Create Stunning Ads Instantly.</p>
                <div className='flex border border-white rounded-[40px] m-[80px_50px_30px_80px] p-[80px_0_10px_100px]  gap-[30px]  bg-gradient-to-b    from-[#000000]   via-[#1e0032]   via-80%   to-[#33205f]'>

                    <div className="basis-full md:basis-1/2">

                        <div className="border border-white  rounded-[5px]   w-[500px]   h-[300px]  bg-[#000000]  box-border   py-[10px]   overflow-hidden  ml-[-135px] pb-[40px]  mt-8">

                            <div className="circles">
                                <FaCircle size={10} color='red' />
                                <FaCircle size={10} color='yellow' />
                                <FaCircle size={10} color='green' />


                            </div>
                            <div>
                               <img src={dott} alt="Snive Logo" className=" ml-[40px] h-[250px] w-[400px]" />
                            </div>





                        </div>

                    </div>
                    <div className="basis-full md:basis-1/2">
                        <h2 className='small-heading  ml-[-120px] '>Fusion AI</h2>
                        <p className='left1 ml-[-120px]  mr-[80px] '>Elevate your Marketing needs with AI-Generated Models and Seamless Product Integration.
                            Meeting Effortless marketing needs by combining Human models and standout products. </p>
                        <div className="hero-buttons ml-[-105px]  mr-[50px] btm">
                            <button className="get-started"> <span className="star"><BsStars size={20} /></span>EXPLORE FUSION AI</button>
                            <button className="craft-shop">CHECK PRICING</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="third-container">

                <h3 className="h4">

                    HUMAN AI <span className="star"><BsStars size={15} /></span>
                </h3>
                <h1 className="font-[400] mt-[30px] text-[3rem] pl-[100px]">Redifining Customer Connections</h1>
                <p className=' pt-[10px] pl-[100px]  left'>Human AI ensures each customer feels uniquely understood and valued.</p>
                <div className='bg-gradient-to-b from-[#000000] via-[#1e0032] via-40% via-[#211338] via-80% to-[#33205f] border border-white flex m-[80px_80px_30px_50px] p-[80px_0_10px_100px] gap-[30px] rounded-[40px]'>
                    <div className="basis-[60%]">
                        <h2 className='small-heading'>Human AI</h2>
                        <p className='left1'>Snive's Human AI, combining humanized virtual assistants with genrative
                            solutions, transform communication and customer support, offering unique, scalable solutions
                            that fuse tradition with innovation, elevating business models in today's digital era. </p>
                        <div className="hero-buttons btm">
                            <button className="get-started"> <span className="star"><BsStars size={20} /></span>EXPLORE HUMAN AI</button>
                            <button className="craft-shop">CHECK PRICING</button>
                        </div>
                    </div>
                    <div className="section2">
                        <div className="container2">
                            <div className="navvv">
                                <div className="circles">
                                    <FaCircle size={10} color='red' />
                                    <FaCircle size={10} color='yellow' />
                                    <FaCircle size={10} color='green' />
                                    <div className="circle-logo">
                                        <div className="circle"></div>
                                        <div className="circle"></div>
                                        <div className="circle"></div>
                                        <div className="circle"></div>

                                    </div>
                                    <h6 className='h6'>Chat</h6>
                                    <h6 className='h7'> Human AI</h6>
                                    <div className='icons'>
                                        <MdVideoCall size={10} color='gray' />
                                        <MdCall size={10} color='gray' />
                                        <HiMiniSpeakerWave size={10} color='gray' />

                                    </div>

                                </div>

                            </div>
                            <div className="chat-body">
                                <div className="user">
                                    <FaCircle size={20} color='white' />
                                    <p className='p'>Andrew <span className='subp'>6 mins</span></p>
                                </div>
                                <div className='chat'>
                                    <p className='p2'>  I need a help with technical issue.</p>
                                </div>
                                <div className='chat1'>
                                    <p className='p2'>Please tell me more about the issue.</p>
                                </div>
                                <div className='chat'>
                                    <p className='p2'>My internet Connection keeps droping. Can you troubleshoot?</p>
                                </div>
                                <div className='chat1'>
                                    <p className='p2'>Let's start by checking few things.</p>
                                </div>

                                <div className="chat2">
                                    <div className="snive-content">
                                        <div className="text-side">
                                            <p className="snive-name">Snive</p>
                                            <div className="status">
                                                <FaCircle size={7} color='limegreen' />
                                                <span className="available-text">Available Now</span>
                                            </div>
                                            <div className="join-btn">JOIN</div>
                                        </div>

                                        <div className="image">
                                            <img src={logo} alt="Snive Logo" className="logo-img imgg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-input">
                                    <input
                                        type="text"
                                        name="text"
                                        id="text"
                                        placeholder="Type your message..."
                                    />
                                    <button className="send-btn">
                                        <FaPaperPlane size={16} color="white" />
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>


            <div className="fifth-container mt-[120px] text-center bg-black py-12">
                <p className="text-sm h3 font-medium  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 tracking-wide uppercase mb-[20px]">
                    Our Services
                </p>
                <h1 className="text-4xl md:text-5xl mt-[20px] font-semibold text-white">
                    Sky Rocket Your Business With
                </h1>
                <span className="bg-gradient-to-r from-[#ff00cc] text-[40px] to-[#3333ff] bg-clip-text text-transparent font-[400]">Nexa AI</span>



                {loading ? (
                    <div className="text-center text-lg font-medium text-white">Loading...</div>
                ) : (
                    <div className="min-h-screen flex flex-wrap gap-[24px] justify-center items-center p-[2.5rem] ">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="p-[24px] rounded-lg w-[300px] shadow-lg"
                            // removed bg-[#1E1E1E] here because ServiceCard already has background color
                            >
                                <ServiceCard
                                    iconUrl={service.iconUrl}
                                    title={service.title}
                                    tags={service.tags}
                                    bg={service.bg}
                                />
                            </div>
                        ))}
                    </div>



                )}



            </div>




            <div className="sixth-container  bg-gradient-to-r from-[#1E1E1E] to-[#000000] pt-[4rem] pb-[5rem] pl-[100px] flex">
                <div className='basis-[60%]'>
                    <h3 className="h44">

                        WHY SNIVE<span className="star"><BsStars size={15} /></span>
                    </h3>
                    <p className=' mb-[5rem] mt-[30px] text-[gray]'> Choose Snive for unmatched AI-powered marketing solutions that seamlessly blend innovation and simplicity. Elevate your brand with our AI-driven approach to streamline <em>customer engagement</em> and transform your marketing landscape.
                    </p>
                    <div className="flex flex-wrap gap-[2rem] text-white text-sm font-medium">
                        <div className="flex items-center gap-[15px] ">
                            <FaCheckCircle size={15} color="white" />
                            Effortless Marketing
                        </div>
                        <div className="flex items-center gap-[15px] ">
                            <FaCheckCircle size={15} color="white" />
                            Everyday AI Integration
                        </div>
                        <div className="flex items-center gap-[15px] ">
                            <FaCheckCircle size={15} color="white" />
                            Tailored Content
                        </div>
                        <div className="flex items-center gap-[15px] ">
                            <FaCheckCircle size={15} color="white" />
                            Future Ready Solution
                        </div>
                        <div className="flex items-center gap-[15px] ">
                            <FaCheckCircle size={15} color="white" />
                            Visual Depth & Appeal
                        </div>
                        <div className="flex gap-[1.5rem] mt-[1.5rem]">
                            <button className="get-started">CONTACT US</button>
                            <button className="craft-shop">KNOW MORE ABOUT US</button>
                        </div>
                    </div>

                </div>
                <div className='basis-[40%] '>
                    <h1 className="m-[3rem] mt-[6rem] text-[50px] font-[400]">
                        Your Singular Choice For <br />
                        <span className="bg-gradient-to-r from-[#ff00cc] to-[#3333ff] bg-clip-text text-transparent font-[400]">AI Marketing</span> <br />
                        Success.
                    </h1>
                </div>

            </div>
            <div className="seventh-container text-center">
                <img src={head} className="inline-block w-[70rem] h-[130px] m-[90px]" alt="Snive Logo" />
            </div>

            <div className="eighth-container text-center">
                <h3 className="h44 ">

                    METRICS
                </h3>
                <div className="bg-black text-white py-12 px-6 md:px-16">
                    <h2 className="font-[600] items-center mt-[30px] text-[3rem] px-[250px] mb-[30px] left-align">
                        Measuring Tomorrow, Today.
                    </h2>

                    <div className="flex flex-wrap gap-[7rem] m-[8rem] mt-[-20px] text-white text-sm font-medium ">
                        <div className='flex mt-[5rem] '>
                            <div className='basis-1/3 ml-[4rem]'>
                                <p className="text-[4rem] text-left font-[500] ">77%</p>
                                <p className=" mr-[4rem] font-[2rem] text-left text-lg">Experience unparalleled cost savings with our innovative approach.</p>
                            </div>

                            <div className='basis-1/3 ml-[4rem] '>
                                <p className="text-[4rem] text-left font-[500] ">25%</p>
                                <p className="text-left mr-[4rem]  text-lg">Maximize revenue through personalized strategies and recommendations.</p>
                            </div>

                            <div className='basis-1/3 ml-[4rem] '>
                                <p className="text-[4rem]  text-left font-[500] ">21%</p>
                                <p className="text-left  text-lg">Elevate brand visibility for enhanced discovery and engagement.</p>
                            </div>
                        </div>
                        <div className='flex ml-[12em] mt-[4rem]'>
                            <div className='basis-1/2'>
                                <p className="text-[4rem] text-left font-[500] ">81%</p>
                                <p className="text-left mr-[9rem]  text-lg">Supercharge your edge with streamlined AI solutions, evident in our substantial GTM time reduction.</p>
                            </div>

                            <div className='basis-1/3'>
                                <p className="text-[4rem] text-left  font-[500] ">13%</p>
                                <p className="text-left  mr-[4rem]  text-lg">Boost ad performance with higher conversion rates and recall.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ninth-container bg-gradient-to-r from-[#1E1E1E] to-[#000000]">
                <h3 className="h44 text-center">

                    TESTIMONIALS
                </h3>

                <h2 className="font-[400] text-center items-center mt-[30px] text-[3rem] px-[250px] mb-[30px] left-align">
                    Voice Behind Our Vision
                </h2>



                <div className='testimonial-container relative h-[800px] pb-[90px] overflow-hidden'>
                    <div className='testimonial-scroll mb-[90px] flex animate-scroll-up'>
                        <div className="  flex flex-wrap gap-[24px] justify-center items-center p-[2.5rem]">
                            {testimonials.map((t, index) => (
                                <div
                                    key={index}
                                    className="bg-[#1E1E1E] animate-scroll  p-[24px] rounded-lg w-[300px] shadow-lg"
                                >
                                    <div className="flex items-center gap-[12px] mb-[2px]">
                                        <FaUserCircle className="text-[#FF6B6B] text-[30px]" />
                                        <h3 className="text-white font-bold">{t.name}</h3>
                                    </div>
                                    <p className="text-[#CCCCCC]">{t.text}</p>
                                    <StarRating rating={t.rating} />
                                </div>
                            ))}
                        </div>

                    </div>


                </div>


                



            </div>

            <div className="tenth-container">
                <div className='flex flex-col bg-gradient-to-b from-[#000000] via-[#1e0032] via-40% via-[#211338] via-80% to-[#33205f] border border-white flex m-[80px_80px_80px_80px]  gap-[30px] rounded-[40px]'>
                    <h1 className="m-[3rem] text-center text-[50px] font-[400]">
                        Embark On Your Journey With <br />
                        <span className="bg-gradient-to-r from-[#ff00cc] to-[#3333ff] bg-clip-text text-transparent font-[400]">Snive</span> <br />
                        Today!
                    </h1>
                    <div className=" text-center  gap-[1.5rem] mt-[12px] mb-[3rem]">
                        <button className="get-started">BOOK A DEMO</button>

                    </div>

                </div>
            </div>

            <div className="eleventh bg-[#0A0A0A] text-white px-[2rem] py-[3rem]">

                <div className="flex lg:flex-row ml-[40px] lg:justify-between lg:items-center gap-[1.5rem]  pb-[2rem]">
                    <div className='basis-[60%]'>
                        <h2 className="text-[1.5rem] font-[600]">Get notified when we launch</h2>
                        <p className="text-[#A3A3A3] text-[0.95rem] mt-[0.5rem]">
                            Stay up to date with the latest news, announcements and articles.
                        </p>
                    </div>
                    <div className='basis-[40%]'>
                        <div className="flex gap-[0.5rem] ">
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="bg-transparent  border border-[#4A4A4A] rounded-[10px] px-[1rem] py-[0.6rem] text-sm outline-none focus:border-[#6B6B6B] min-w-[220px]"
                            />
                            <button className="bg-[#525252] hover:bg-[#666666] rounded-[10px] px-[1.5rem] py-[0.6rem] rounded-md text-sm font-medium">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>


                <div className="flex lg:flex-row ml-[40px] mt-[80px]  lg:justify-between lg:items-center gap-[2.5rem]  pb-[2rem]">
                    <div className='basis-[30%]'>
                        <div className="flex items-center gap-[0.5rem] mb-[1rem]">
                            <div className=" ">
                                <img src={logo} alt="Snive Logo" className="h-[32px] w-[32px]" />
                                <span className="font-[400] text-[1.5rem]">Snive</span>
                            </div>
                        </div>
                        <p className="text-[#A3A3A3] text-sm leading-[1.5]">
                            Fuel your business growth with Snive's AI-powered marketing solutions, driving results and expanding your reach.
                        </p>
                    </div>
                    <div className='basis-[70%]'>
                        <div className="flex flex-wrap mt-[5px] gap-[2rem]">

                            <div>
                                <h4 className="font-[400]  mb-[1.75rem]">PRODUCTS</h4>
                                <ul className="flex flex-col gap-[1rem] ml-[14px] text-[#A3A3A3] text-[14px]">
                                    <li>Fusion AI</li>
                                    <li>Human AI</li>
                                </ul>
                            </div>


                            <div>
                                <h4 className="font-[400] mb-[1.75rem]">SOLUTION</h4>
                                <ul className="flex flex-col gap-[1rem] ml-[14px] text-[#A3A3A3] text-[14px]">
                                    <li>Nexa AI</li>
                                    <li>Ecommerce <br /> & Retail</li>
                                </ul>
                            </div>


                            <div>
                                <h4 className="font-[400] mb-[1.75rem]">COMPANY</h4>
                                <ul className="flex flex-col gap-[1rem] ml-[14px] text-[#A3A3A3] text-[14px]">
                                    <li>About</li>
                                    <li>Contact</li>
                                    <li>Security</li>
                                    <li>Legal</li>
                                </ul>
                            </div>


                            <div>
                                <h4 className="font-[400] mb-[1.75rem]">RESOURCE</h4>
                                <ul className="flex flex-col gap-[1rem] ml-[14px] text-[#A3A3A3] text-[14px]">
                                    <li>Blog</li>
                                </ul>
                            </div>


                            <div>
                                <h4 className="font-[400] mb-[1.75rem]">PRICING</h4>
                                <ul className="flex flex-col gap-[1rem] ml-[14px] text-[#A3A3A3] text-[14px]">
                                    <li>Pricing</li>
                                    <li>Plans</li>
                                    <li>FAQ</li>
                                </ul>
                            </div>


                            <div>
                                <h4 className="font-[400] mb-[1.75rem]">PLATFORM</h4>
                                <ul className="flex flex-col gap-[1rem] ml-[14px] text-[#A3A3A3] text-[14px]">
                                    <li>Overview</li>
                                    <li>Features</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>







                <div className="mt-[2.5rem] ml-[65rem] flex gap-[1rem]  text-xl">
                    <a href="#"><FaSquareInstagram size={25} color='white' /></a>
                    <a href="#"><FaFacebookSquare size={25} color='white' /></a>
                    <a href="#"><FaLinkedin size={25} color='white' /></a>
                    <a href="#"><FaSquareYoutube size={25} color='white' /></a>
                </div>
            </div>




        </div>
    );
};

export default Home;
