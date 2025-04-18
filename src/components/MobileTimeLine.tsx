import { motion } from "motion/react"

function MobileTimeLine() {
  return (
    <div className="dark:bg-[#121212] md:hidden p-10 py-16">
      <div className="flex">
        <motion.div className="w-2 h-[calc(var(--spacing) * 10)] sm:h-72 border-l-2 border-[#121212] dark:border-white relative" initial={{opacity: 0, x:30}} whileInView={{opacity: 1, x: 0}} transition={{delay: 0.1, duration: 0.5}}></motion.div>  
        <div className="-ml-[30px]">
          <motion.div className="flex my-2 -mt-6 py-5" initial={{opacity: 0, x:30}} whileInView={{opacity: 1, x: 0}} transition={{delay: 0.1, duration: 0.5}}>
            <div className="w-[0%] h-[0%] p-1 mx-5 rounded-full bg-[#121212] dark:bg-white border-2 border-[#121212] dark:border-white"></div>
            <p className="text-sm relative top-[-0.5em]">2004 — A year that marked the beginning of my journey. Grew up with curiosity and a love for figuring out how things work.</p>
          </motion.div>
          <motion.div className="flex my-2 py-5" initial={{opacity: 0, x:30}} whileInView={{opacity: 1, x: 0}} transition={{delay: 0.3, duration: 0.5}}>
            <div className="w-[0%] h-[0%] p-1 mx-5 rounded-full bg-[#121212] dark:bg-white border-2 border-[#121212] dark:border-white"></div>
            <p className="text-sm relative top-[-0.5em]">Cleared 10th Class. Choose science stream. A stepping stone in my journey to become a curious devleoper.</p>
          </motion.div>
          <motion.div className="flex my-2 py-5" initial={{opacity: 0, x:30}} whileInView={{opacity: 1, x: 0}} transition={{delay: 0.5, duration: 0.5}}>
            <div className="w-[0%] h-[0%] p-1 mx-5 rounded-full bg-[#121212] dark:bg-white border-2 border-[#121212] dark:border-white"></div>
            <p className="text-sm relative top-[-0.5em]">Graduated high school. Got into college, having some goals, aspirations and a lot more excitement.</p>
          </motion.div>
          <motion.div className="flex my-2 py-5" initial={{opacity: 0, x:30}} whileInView={{opacity: 1, x: 0}} transition={{delay: 0.7, duration: 0.5}}>
            <div className="w-[0%] h-[0%] p-1 mx-5 rounded-full bg-[#121212] dark:bg-white border-2 border-[#121212] dark:border-white"></div>
            <p className="text-sm relative top-[-0.5em]">Building skills, projects and enjoying life. Project Contributor at RDS and Team Shiksha currently</p>
          </motion.div>
        </div>  
      </div>
      <p  className="text-center text-sm py-2">The journey Continues...</p>
    </div>
  )
}

export default MobileTimeLine
