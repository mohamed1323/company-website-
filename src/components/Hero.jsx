import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import heroImage from './images/heroImage.jpg';
import ayroui from './images/brands/ayroui.svg';
import graygrids from './images/brands/graygrids.svg';
import uideck from './images/brands/uideck.svg';
function Hero() {
  return (
    <div className="font-poppins overflow-x-hidden bg-gradient-to-br from-blue-100">
        <div className="relative pt-[120px] pb-[110px] lg:pt-[150px]">
            <div className="container mx-auto max-sm:px-2">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 lg:w-6/12">
                    <div className="hero-content">
                        <motion.div
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 75 },
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.75, delay: 0.25 }}
                            className=''
                            >
                            <h1 class="sm:text-8xl text-2xl from-blue-400 to-emerald-600 mb-3  xl:mt-20
                            font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                                
                                Welcome  to <br/>
                                <span className="sm:text-7xl text-6xl xl:my-40 ">
                                 <span className='text-blue-500 cursor-pointer my-40'>Somali Daily Tech</span> <br/>
                                </span>
                                <span className="sm:text-7xl text-6xl">
                                 
                                 Your Expert Partner in Web Development
                                </span>
                                
                            </h1>
                            <p class="text-gray-500 text-sm my-8 max-w-[480px] sm:text-base">
                                Welcome, and thank you for taking the time to explore our web development solutions. 
                                We can assure you that we will elevate your online presence and bring your digital projects to the next level. 
                                So,fasten your seatbelt and let's embark on this journey to Level UP your web presence!
                                
                            </p>
                        </motion.div>
                        <motion.div
                            variants={{
                                visible: { opacity: 1, x: 0 },
                                hidden: { opacity: 0, x: -75 },
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.75, delay: 0.25 }}
                            >
                            <ul class="flex flex-wrap items-center">
                                <li>
                                <Link
                                    to="#"
                                    class="bg-blue-500 border-solid border-2 border-blue-500 hover:border-blue-700 hover:bg-blue-700 transition ease-in-out delay-100
                                    inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white  sm:px-10 lg:px-8 xl:px-10"
                                >
                                    Get Started
                                </Link>
                                </li>
                                <li>
                                <Link
                                    to="#"
                                    class="border-solid border-2 border-blue-500   text-black font-normal hover:bg-blue-500 hover:text-white transition ease-in-out delay-100
                                    ml-6 inline-flex items-center justify-center rounded-lg py-4 px-6 text-centersm:px-10 lg:px-8 xl:px-10"
                                    >
                                    Take a look
                                </Link>
                                </li>
                            </ul>
                        </motion.div>

                        
                      
                    </div>
                    </div>

                   <div className="hidden px-4 lg:block lg:w-1/12 "></div> 

                    <div class="w-full px-4 lg:w-5/12 ">
                        <div class="lg:ml-auto lg:text-right">
                            <motion.div
                                variants={{
                                    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
                                    hidden: { opacity: 0, x: 75, filter: "blur(5px)" },
                                }}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.75, delay: 0.25 }}
                                class="relative z-10 inline-block pt-11 lg:pt-0 mt-6"
                                >
                                <img
                                   src={heroImage}
                                    alt="hero"
                                    class="max-w-full lg:ml-auto rounded-l-[20%] "
                                />
                              {/* ceo<br/> */}
                                <span className="sm:text-2xl text-2xl xl:my-10 ">
                                 <span className='text-blue-500 cursor-pointer my-60'>THE CEO/FOUNDER OF SOMALIA DAILY TECH</span> <br/>
                                </span>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
