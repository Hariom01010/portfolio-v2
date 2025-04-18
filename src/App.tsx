import './App.css'
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux'
import { darkMode, lightMode } from './slice/themeSlice';
import { RootState } from './store/store';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {Skills, Projects, MobileTimeLine, Socials, Timeline} from "./components/index"
import { activities } from './constants';

function App() {
  const theme = useSelector((state: RootState)=>state.theme.value)
  const dispatch = useDispatch();

  // Typewriter effect
  const [count, setCount] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Mobile Animation
  const isMobile = window.innerWidth < 768;
  const imgInitial = isMobile ? {opacity: 0, y:20}: {opacity: 0, x:-30}
  const pInitial = isMobile ? {opacity: 0, y:20} : {opacity: 0, x: 50}
  const animateTo = isMobile ? {opacity: 1, y:0} : {opacity: 1, x:0}

  useEffect(()=>{
    const rootElement = document.documentElement
    if (rootElement) {
      if(theme == 'dark'){
          rootElement.className = 'dark';
      }else{
        rootElement.className = 'light';
      }
    }
    const currentActivity: string = activities[count];
    const typingSpeed = isDeleting ? 100 : 150;

    const timeOut = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentActivity.length) {
          setDisplayText((prev) => prev + currentActivity[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentActivity.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setCount((prev) => (prev + 1) % activities.length);
        }
      }  
    }, typingSpeed)
    return () => clearTimeout(timeOut);}
  , [theme, charIndex, count, isDeleting])
  
  return (
    <div className='h-[100vh] bg-[#ffffff] text-[#121212] dark:bg-[#121212] dark:text-[#ffffff]'>
      <div className='fixed z-10 right-0 bottom-0 bg-[#2f2e2e] text-[#ffffff] dark:bg-white dark:text-[#2f2e2e] mx-5 p-2 rounded-full shadow-md'>
        {theme=='dark'
        ?<MdSunny size={30} onClick={()=>dispatch(lightMode())} />
        :<FaMoon size={30} onClick={()=>dispatch(darkMode())} />}
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen overflow-x-hidden">
        <div className="flex justify-between">
          <a href="#projects">
            <motion.div
              className="text-[#121212] dark:text-white group cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 1 }}
            >
              <p className="relative left-[-20%] my-2 cursor-pointer group-hover:drop-shadow-lg group-hover:drop-shadow-white">
                projects
              </p>
              <svg
                viewBox="0 0 100 100"
                className="w-24 rotate-x-180 group-hover:drop-shadow-lg group-hover:drop-shadow-white"
                fill="none"
              >
                <path d="M5 100 C20 0, 60 80, 100 0" stroke="currentColor" />
              </svg>
            </motion.div>
          </a>
          <a href="#socials">
            <motion.div
              className="text-[#121212] dark:text-white group cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 1 }}
            >
              <p className="relative right-[-70%] w-max my-2 group-hover:drop-shadow-lg group-hover:drop-shadow-white">
                socials
              </p>
              <svg
                viewBox="0 0 100 100"
                className="w-24 rotate-x-180 rotate-y-180 group-hover:drop-shadow-lg group-hover:drop-shadow-white"
                fill="none"
              >
                <path d="M5 100 C20 0, 60 80, 100 0" stroke="currentColor" />
              </svg>
            </motion.div>
          </a>
        </div>
  
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-3xl md:text-6xl">Hariom Vashista</h1>
        </motion.div>
        <motion.p
          className="py-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {displayText}|
        </motion.p>
        <a
          href="https://app.cal.com/hariom-vashista"
          target="_blank"
          className="bg-black text-white dark:text-black dark:bg-white px-5 py-2 rounded-md font-semibold cursor-pointer"
        >
          Book a Call
        </a>
  
        <div className="flex justify-between ml-3">
          <a href="https://drive.google.com/drive/folders/1XRfJDluI1ZzOq1yEZaXQzblKH5VIXRy2?usp=sharing" target='_blank'>
            <motion.div
              className="text-[#121212] dark:text-white group cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 1 }}
            >
              <svg
                viewBox="0 0 100 100"
                className="w-24 group-hover:drop-shadow-lg group-hover:drop-shadow-white"
              >
                <path
                  d="M10 100 C10 30, 10 80, 100 10"
                  stroke="currentColor"
                  fill="none"
                />
              </svg>
              <p className="relative left-[-8%] w-max group-hover:drop-shadow-md group-hover:drop-shadow-white">
                docs
              </p>
            </motion.div>
          </a>
          <a href='#projects'>
            <motion.div
              className="text-[#121212] dark:text-white group cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 1 }}
            >
              <svg
                viewBox="0 0 100 100"
                className="w-24 rotate-y-180 group-hover:drop-shadow-lg group-hover:drop-shadow-white"
                fill="none"
              >
                <path d="M10 100 C10 30, 10 80, 100 10" stroke="currentColor" />
              </svg>
              <p className="relative right-[-30%] w-max group-hover:drop-shadow-lg group-hover:drop-shadow-white">
                contributions
              </p>
            </motion.div>
          </a>
        </div>
      </div>
  
      <motion.div className="flex flex-col md:flex-row items-center justify-center dark:bg-[#121212] pb-24">
        <motion.img
          src="./profile.jpg"
          alt="hariom-image"
          className="rounded-[100%] w-[40%] md:w-[23%] py-5 dark:grayscale"
          initial={imgInitial}
          whileInView={animateTo}
          transition={{duration: 1, delay: 0.3}}
        />
        <motion.p className="px-5 mx-10 text-center md:text-xl md:w-[40%]" initial={pInitial} whileInView={animateTo} transition={{duration: 1, delay: 0.3}}>
          A web developer passionate about web development, and I enjoy learning new
          things, especially coding. I strive to build projects that showcase my
          skills and make a meaningful impact. In my free time, I enjoy playing
          video games, especially Valorant, and spending time with friends.
          Football is one of my favorite ways to stay active, and I love
          dramas. I value hard work and continuous learning and am driven by the goal of
          becoming successful in all that I do.
        </motion.p>
      </motion.div>
  
      <Socials />

      <Timeline />
      <MobileTimeLine />
  
      <Projects />

      <Skills />
    </div>
  )
}

export default App
