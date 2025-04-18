import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "motion/react";

function Socials() {
  return (
    <div className="bg-white dark:bg-[#121212]" id="socials">
      <div className="gray overflow-x-hidden">
        <div className="flex md:justify-center p-4 pb-0 md:px-24">
          <motion.img src="./maharashtra.jpg" alt="" className="rotate-280 w-[30%] md:w-[15%] rounded-md" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay:0.1, duration:0.3}}/>
          <motion.img src="./memory2.png" alt="" className="rotate-[-15deg] w-[30%] md:w-[15%] h-[20%] rounded-md" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay:0.3, duration:0.3}}/>
          <motion.img src="./memory4.png" alt="" className="rotate-[10deg] w-[35%] md:w-[20%] h-[20%] rounded-md" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay:0.5, duration:0.3}}/>
          <motion.img src="./memory3.jpg" alt="" className="rotate-[15deg] w-[25%] md:w-[15%] h-[15%] rounded-md relative left-[-15%] md:left-0" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay:0.7, duration:0.3}}/>
          <motion.img src="./memory6.jpeg" alt="" className="rotate-[-15deg] w-[25%] md:w-[20%] h-[15%] rounded-md relative left-[-15%] md:left-0 hidden md:block" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay:0.9, duration:0.3}}/>
        </div>
        <p className="text-sm md:text-lg text-center italic px-10 z-10">I always believed life's about creating those memories and every day is an opportunity to explore something new</p>
        <div className="flex justify-center pt-10 pb-2">
          <p>Let's Connect</p>
        </div>
        <div className="grid grid-rows-2 grid-cols-2 justify-items-center md:px-[10em] md:py-[3em]">
          <a href="https://github.com/Hariom01010" target="_blank" className="my-5">
            <motion.div className="flex items-center w-max border-2 border-[#121212] dark:border-white rounded-md p-2" whileTap={{scale: 0.95}} whileHover={{scale: 1.1}}>
              <FaDiscord size={24}/>
              <p className="px-2 text-lg">Discord</p>
            </motion.div>
          </a>
          <a href="https://x.com/HariomVashista" target="_blank" className="my-5">
            <motion.div className="flex items-center w-max border-2 border-[#121212] dark:border-white rounded-md p-2" whileTap={{scale: 0.95}} whileHover={{scale: 1.1}}>
              <FaXTwitter size={24}/>
              <p className="px-2 text-lg">Twitter</p>
            </motion.div>
          </a>
          <a href="https://github.com/Hariom01010" target="_blank" className="my-5">
            <motion.div className="flex items-center w-max border-2 border-[#121212] dark:border-white rounded-md p-2" whileTap={{scale: 0.95}} whileHover={{scale: 1.1}}>
              <FaGithub size={24}/>
              <p className="px-2 text-lg">Github</p>
            </motion.div>
          </a>
          <a href="https://www.linkedin.com/in/hariom-vashista-603436226/" target="_blank" className="my-5">
            <motion.div className="flex items-center w-max border-2 border-[#121212] dark:border-white rounded-md p-2" whileTap={{scale: 0.95}} whileHover={{scale: 1.1}}>
              <FaLinkedin size={24}/>
              <p className="px-2 text-lg">Linkedin</p>
            </motion.div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Socials
