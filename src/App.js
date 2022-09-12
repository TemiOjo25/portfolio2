import Spline from '@splinetool/react-spline';
import React from "react";
import { useState } from "react";
import {IoMenu} from 'react-icons/io5';

import profile from './images/profilePic.jpg';
import pythonLogo from './images/python.png';
import htcssLogo from './images/htmlcssLogo.png';
import javaLogo from './images/javaLogo.png';
import splineLogo from './images/splineLogo1.png';
import reactLogo from './images/react.png';
import jslogo from './images/jsLogo.png';

import guieditor from './images/guiEditor.mp4';
import scraper from './images/scraper.mp4';
import resume from './images/TemitayoOjoResume+(1).pdf';


import { Projects, SocialLinks } from "./data";

import {AnimatePresence, motion} from 'framer-motion';



function App() {

  const [isActive, setIsActive] = useState(false)

  return (
    <AnimatePresence initial={false}>
    <div className="flex w-screen min-h-screen flex-col items-center justify-center  bg-black pb-20 ">
      {/* Navigation Bar */}
      <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
        <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
          <p className="text-lg text-slate-200 font-medium">Temitayo Ojo</p> 

          <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
            <a href="#home" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Home</a>
            <a href="#about" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">About Me</a>
            <a href="#projects" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Projects</a>
            <a href="#contact" className="ml-auto text-base text-textBase font-medium hover:textslate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out">Contact Me</a>
            
          </div>
          {/* Menu button */}
          
          <motion.div 
          whileTap={{scale:.5}}
          className=" block md:hidden ml-auto cursor-pointer"
          onClick={() => setIsActive(!isActive)}
          >
            <IoMenu className="text-2xl text-textBase"/>
          </motion.div>

          {isActive && (
            <div className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-40 flex flex-col items-center justify-evenly gap-6 md:hidden">
            <a href="#home" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              onClick={() => setIsActive(false)}>
              Home</a>
            <a href="#about" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
            onClick={() => setIsActive(false)}>
              About Me</a>
            <a href="#projects" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
            onClick={() => setIsActive(false)}>
              Projects</a>
            
            <motion.a 
            whileHover={{scale:0.8}}
            
            href="#contact" className=" text-base text-textBase font-medium hover:textslate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
            onClick={() => setIsActive(false)}>
            Contact Me</motion.a>
            
            
            </div>
          )}
        </div>
        
      </nav>
        
      <div className="relative pb-20 h-90vh w-full  " id="home">
      <Spline scene="https://prod.spline.design/CQV8EWQDT30O6qu1/scene.splinecode" className=' ' />
          <div className="absolute bottom-10 w-full flex justify-center items-center">
            <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl ">
              <p className="text-white">Press and drag to orbit, Type to interact:)</p>
            </div>
          </div>
        </div>
      
 
          {/* Main Section */}
          <main className="w-[80%] mt-20">
            {/* about section */}
            <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24" id="about">
              {/* Image Box */}
              <div className="w-full h-420 flex items-center justify-center ">
                <div className="w-275 h-340 relative bg-emerald-200 rounded-md ">
                  <img className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl hover:scale-105 duration-700 ease-in-out items-center" src={profile}/>
                </div>
                </div>
              

              {/* content Box */}
              <div className="flex-wrap w-full flex flex-col items-center text-center justify-center relative top-10">
              <p className=" text-lg text-textBase text-center">
                  <b>Hi, I'm Temitayo Ojo</b>. A Sophomore at Dartmouth College. I'm a Software Developer with Web/3d developments skills. <br/>I love to Code because it gives me Joy and the ability to make a change in the world.
                </p>

                <a href={resume} target="_blank">
                <motion.button 
                whileTap={{scale:0.8}}
                class=" w-full md:w-auto relative mt-6 inline-flex items-center ustify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Resume
                </span>
              </motion.button>
              </a>
              {/* trusted languages */}
            <div className='flex-wrap relative '>
                <p className=" text-lg text-white text-center ">Experience With:</p>
                  <div className=' inline-flex'>
                  <img className="w-10 hover:scale-110 duration-500 cursor-pointer rounded-2xl mx-2" src={pythonLogo}/></div>
                  <div className=" inline-flex">
                  <img className="w-20  hover:scale-110 duration-500 cursor-pointer rounded-2xl mx-2" src={htcssLogo}/></div>
                  <div className=' inline-flex'>
                  <img className="w-10 hover:scale-110 duration-500 cursor-pointer rounded-2xl mx-0" src={javaLogo}/></div>
                  <div className=' inline-flex'>
                  <img className="w-10 hover:scale-110 duration-500 cursor-pointer rounded-2xl mx-2" src={splineLogo}/></div>
                  <div className=' inline-flex'>
                  <img className="w-10 hover:scale-110 duration-500 cursor-pointer rounded-2xl mx-2" src={reactLogo}/></div>
                  <div className=" inline-flex">
                  <img className="w-12 hover:scale-110 duration-500 cursor-pointer rounded-2xl" src={jslogo}/></div>
                  
               </div>
                
              </div>
              
            </section>
            <hr/>
            
            


            {/* Project Section */}
            <section className="flex flex-wrap items-center justify-evenly my-24 gap-4 w-600 " id="projects">
              {Projects && Projects.map(n => (
                <div key={n.id} className="border border-zinc-800 rounded-md p-2 m-10 w-508 h-190   hover:border-zinc-600 duration-100 ease-in-out ">
                <p className="text-lg text-textBase font-medium uppercase">
                  {n.name}
                </p>
                {n.imageSrc}

                <div className="flex flex-1 items-center justify-between">
                  <p className="text-lg text-textBase ">{n.description}</p>
                  
                </div>
                <div className="flex flex-wrap float-left text-gray-300">
                  <span className="text-sm text-white ">
                    <br/>
                    {n.techs} 
                  </span>
                </div>
                
                <div 
                className="flex flex-wrap float-right mt-5 hover:scale-110 duration-200">
                  {n.github}
                </div>
                

              </div>
              ))}

                    //gui editor vid data

              <div className="border border-zinc-800 rounded-md p-2 m-10 w-508  hover:border-zinc-600 duration-100 ease-in-out ">
                <p className="text-lg text-textBase font-medium uppercase">
                  Collaborative Graphical Editor
                </p>
                <video src={guieditor} loop autoPlay muted className="rounded-md my-4 hover:scale-110 ease-in-out duration-500"/>
              
                
                <div className="flex flex-1 items-center justify-between">
                  <p className="text-lg text-textBase ">Built an editor - similar to Google Docs ability to have multiple simultaneous editors of the same document. In both cases, multiple clients connect to a server, and whatever editing any one of them does, the others see.</p>
                  
                </div>
                <div className="flex flex-wrap float-left text-gray-300">
                  <span className="text-sm to-gray-300 ">
                    
                    <br/>
                    <p>JAVA</p> 
                  </span>
                </div>
                
                <div 
                className="flex flex-wrap float-right mt-5 hover:scale-110 duration-200">
                  <a href="#"><span></span></a>
                </div>

              </div>

                  //  web extractor vid data

              <div className="border border-zinc-800 rounded-md p-2 m-10 w-508 hover:border-zinc-600 duration-100 ease-in-out">

                <p className  = "text-lg text-textBase font-medium uppercase">
                  Web Data Extractor
                </p>
                  <video src={scraper} loop autoPlay muted className= "rounded-md my-4 hover:scale-110 ease-in-out duration-500"/>

                  <div className = 'flex flex-1 items-center justify-between'>
                    <p className = 'text-lg text-textBase'>Program that scrapes an online bookstore website an automatically creates a list of all books depending on th specified ratings and price</p>

                  </div>
                  <div className = 'flex flex-wrap float-left text-gray-300'>
                    <span className = 'text-sm to-gray-300'>

                      <br/>
                      <p>Python</p>
                    </span>
                  </div>

                  <div className = 'flex flex-wrap float-right mt-5 hover:scale-110 duration-200'>
                    <a href = '#'><span></span></a>
                  </div>
              
              
              </div>

                  // Game space invasion vid data

            </section>

            {/* Contact Section */}
            <section id="contact" className="flex flex-col items-center justify-center w-full my-24">
              <p className="text-2xl text-gray-400 capitalize ">Contact Me</p>
                
                <div className="flex item-center justify-center w-full my-4 flex-wrap gap-4">
                  {
                    SocialLinks  && SocialLinks.map(n=>(
                      <motion.a 
                      whileInView={{scale:0.8}}
                      key={n.id} 
                      href={n.link} target="_blank"
                      className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3">
                    {n.iconSrc}
                    <p className="text-lg text-textBase">{n.name}</p>
                  </motion.a>
                    ))
                  }
                </div>

            </section>
          </main>
    </div>
    </AnimatePresence>
  );
}

export default App;
