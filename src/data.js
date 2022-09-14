import React from "react";
import { useState } from "react";
import { IoLogoGithub, IoLogoGoogle, IoLogoInstagram, IoLogoLinkedin, IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoPython } from "react-icons/io5";
import cccweb from './images/cccWeb.png';
import encoder from './images/huffManEncoder.jpg';
import pathfinder from './images/mapPathFinder.png';
import pong from './images/atariPongGame.png';
import engine from './images/searchengine.png';
import crawler from './images/scraper.mp4';
import guieditor from './images/guiEditor.mp4';
import scraper from './images/scraper.mp4';





export const Projects = [
    {
        id: 1,
        name: "Church Website",
        imageSrc: <a href="https://www.cccnewarknjparish.com/" target="_blank"><img src={cccweb} className="w-full object-cover rounded-md my-4 hover:scale-110 ease-in-out duration-500" alt="" /></a>,
        techs: <p>Html <IoLogoHtml5 className="inline text-orange-400 text-3xl"/>, CSS <IoLogoCss3 className="inline text-blue-300 text-3xl "/>, Js <IoLogoJavascript className="inline text-yellow-500 text-3xl"/>, Bootstrap </p>,
        description: "First website I ever created was for a church. I took on this project during my 1st week of just learning HTML and CSS. During this process I implemented and gained additional knowledge on both JavaScript and Bootstrap.",
        github: <a href="#"><span><IoLogoGithub className="text-white text-3xl cursor-pointer float-right"/></span></a>,
        
    
    },
    {
        id:2,
        name: "Dartmouth College Map PathFinder",
        imageSrc: <img src={pathfinder} className="w-full object-cover rounded-md my-4 hover:scale-110 ease-in-out duration-500" alt="" />,
        techs: <p>Python <IoLogoPython className="inline text-white text-3xl"/> </p>,
        description: "Similar to the foundations of a variety of more advanced GPS apps, I created a graph that models part of the Dartmouth Campus and finds the shortest path from one point to the other and display it.",
        github: "",
        

    },
    
    {
        id:3,
        name:"Huffman Encoder",
        imageSrc:<img src={encoder} className="w-full object-cover rounded-md my-4 hover:scale-110 ease-in-out duration-500" alt="" />,
        techs: "JAVA",
        description: "File compression and decompression using Huffman encoding. This brings together different ADTs' and file i/o, all to help save the bits!",
        github: "",
        

    },
    
    {
        id:4,
        name: "Atari Pong Game",
        imageSrc: <img src={pong} className="w-full object-cover rounded-md my-4 hover:scale-110 ease-in-out duration-500" alt="" />,
        techs: <p>Python <IoLogoPython className="inline text-white text-3xl"/> </p>,
        description: "Simple controllable Pong game for two players.",
        github: "", 

    },
    {
        id:5,
        name: "Web Data Extractor",
        imageSrc: "",
        Vidsrc: <video src={scraper} loop autoPlay muted className="rounded-md my-4 hover:scale-110 ease-in-out duration-500"/>,
        techs: <p>Python <IoLogoPython className="inline text-white text-3xl"/> </p>,
        description: "Program that scrapes an online bookstore website an automatically creates a list of all books depending on th specified ratings and price",
        github: <a href = "#"><span><IoLogoGithub className = "text-white text-3xl cursor-pointer float-right"/></span></a>, 

    },

    {
        id: 6,
        name: "Serial Number Search Engine",
        imageSrc: <img src={engine} className = "w-full object-cover rounded-md my-4 hover:scale-110 ease-in-out duration-500" alt=""/>,
        techs:<p>Python<IoLogoPython classNmae = "inline text-white text-3xl"/></p>,
        description: "Program that crawls through a directory and all it subfolders and files and retreives any serial number format depending on the specified pattern/regex",
        github: <a href = "#"><span><IoLogoGithub className = "text-white text-3xl cursor-pointer float-right"/></span></a>
    

    },

    {
        id:7,
        name: "Collaborative Graphical Editor",
        imageSrc: "",
        Vidsrc: <video src={guieditor} loop autoPlay muted className="rounded-md my-4 hover:scale-110 ease-in-out duration-500"/>,
        techs:<p>Java</p>,
        description: "Built an editor - similar to Google Docs ability to have multiple simultaneous editors of the same document. In both cases, multiple clients connect to a server, and whatever editing any one of them does, the others see.",
        github: <a href = "#"><span><IoLogoGithub className="text-white text-3xl cursor-pointer float-right"/></span></a>

    },
    
   
    
];

export const SocialLinks = [
    {
        id:1,
        iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer"/>,
        name: "Github",
        link: 'https://github.com/TemiOjo25',
    },
    {
        id:2,
        iconSrc: <IoLogoInstagram className="text-red-300 text-3xl cursor-pointer"/>,
        name: "Instagram",
        link: 'https://www.instagram.com/o_jo.dc/'
    },
    {
        id:3,
        iconSrc: <IoLogoGoogle className="text-blue-400 text-3xl cursor-pointer"/>,
        name: "Gmail",
        link: "mailto:tojoseeds@gmail.com",
    },
    
    {
        id:4,
        iconSrc: <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer"/>,
        name: "Linkedin",
        link: "http://www.linkedin.com/in/temitayo-ojo-424134242",
    },
    

]