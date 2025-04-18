import { motion } from "motion/react"

function Projects() {

  return (
    <div className="dark:bg-[#121212]" id="projects">
      <div className="flex justify-around pt-14">
        <a href="https://www.knell.co.in" target="_blank">
          <motion.img src="./projects/knell.png" alt="knell-project-logo" className="rounded-full w-15 md:w-24 cursor-pointer shadow-lg shadow-green-600" animate={{x:[0,10,0], y:[0,20,0]}} transition={{repeat:Infinity, duration:3}}/>
        </a>
        <a href="https://www.realdevsquad.com" target="_blank">
          <motion.img src="./projects/rds-logo.png" alt="rds-logo" className="rounded-full w-15 md:w-24 cursor-pointer shadow-lg shadow-pink-600" animate={{x:[0,10,0], y:[0,20,0]}} transition={{repeat:Infinity, duration:3}} />
        </a>
        <a href="https://team.shiksha.com" target="_blank">
          <motion.img src="./projects/team-shiksha.png" alt="team-shiksha-logo" className="rounded-full w-15 md:w-24 cursor-pointer shadow-lg shadow-blue-600" animate={{x:[0,10,0], y:[0,20,0]}} transition={{repeat:Infinity, duration:3}} />
        </a>
      </div>
    </div>
  )
}

export default Projects
