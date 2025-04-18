import { motion } from "motion/react"

function DesktopTimeline() {
  return (
    <div className="bg-white dark:bg-[#121212] hidden md:flex flex-col pt-24 px-10">
        <motion.div className="border-2 border-[#121212] dark:border-white w-[90%]" initial={{opacity: 0, y:20}} whileInView={{opacity: 1, y:0}} transition={{delay: 0.1, duration: 0.5}}></motion.div>
        <div className="flex w-[100%] relative top-[-1.25em]">
            <motion.div className="flex flex-col mr-5" initial={{opacity: 0, y:20}} whileInView={{opacity: 1, y:0}} transition={{delay: 0.1, duration: 0.5}}>
                <div className="border-2 h-[0%] w-[0%] bg-[#121212] dark:bg-white border-[#121212] dark:border-white my-2 p-2 rounded-full relative"></div>
                <p className="text-sm lg:pr-10">2004 — A year that marked the beginning of my journey. Grew up with curiosity and a love for figuring out how things work.</p>
            </motion.div>
            <motion.div className="flex flex-col items-center mx-5" initial={{opacity: 0, y:20}} whileInView={{opacity: 1, y:0}} transition={{delay: 0.3, duration: 0.5}}>
                <div className="border-2 h-[0%] w-[0%] bg-[#121212] dark:bg-white border-[#121212] dark:border-white my-2 p-2 rounded-full relative"></div>
                <p className="text-center text-sm lg:px-10">Cleared 10th Class. Choose science stream. A stepping stone in my journey to become a curious devleoper.</p>
            </motion.div>
            <motion.div className="flex flex-col items-center mx-5" initial={{opacity: 0, y:20}} whileInView={{opacity: 1, y:0}} transition={{delay: 0.5, duration: 0.5}}>
                <div className="border-2 h-[0%] w-[0%] bg-[#121212] dark:bg-white border-[#121212] dark:border-white my-2 p-2 rounded-full relative"></div>
                <p className="text-center text-sm lg:px-10">Graduated high school. Got into college, having some goals, aspirations and a lot more excitement.</p>
            </motion.div>
            <motion.div className="flex flex-col items-center mx-5" initial={{opacity: 0, y:20}} whileInView={{opacity: 1, y:0}} transition={{delay: 0.7, duration: 0.5}}>
                <div className="border-2 h-[0%] w-[0%] bg-[#121212] dark:bg-white border-[#121212] dark:border-white my-2 p-2 rounded-full relative"></div>
                <p className="text-center text-sm lg:px-10">Building skills, projects and enjoying life. Project Contributor at RDS and Team Shiksha currently</p>
            </motion.div>
            <motion.div className="flex items-start relative left-5 lg:left-[-2%] text-center" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.9, duration: 0.5}}>
                <p className="text-sm">The Journey Continues...</p>
            </motion.div>
        </div>
    </div>
  )
}

export default DesktopTimeline
