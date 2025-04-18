import { motion } from "motion/react"

type CardProps = {
  readonly imgSrc: string,
  readonly name: string,
  readonly desc: string
}

function Card({imgSrc, name, desc}: CardProps) {
  return (
    <motion.div className="text-[#121212] bg-[#e5e5e5] dark:text-white dark:bg-[#242424] m-5 p-5 rounded-md flex flex-col items-center md:flex-row md:items-start" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1, delay: 0.2}}>
        <img src={imgSrc} alt="" className="w-24 h-24 rounded-md"/>
        <div className="pl-3">
          <h1 className="font-bold">{name}</h1>
          <p className="md:py-2 text-xs">{desc}</p>
        </div>
    </motion.div>
  )
}

export default Card
