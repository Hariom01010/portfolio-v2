import { useState } from "react";
import { skillNames } from "../constants";
import {Card} from "./index"

type Category = "frontend" | "backend" | "tools"

function Skills() {
  const [field, setField] = useState("frontend");
  const [skills, setSkills] = useState<{ [key: string]: { imgSrc: string; name: string; desc: string } }>(skillNames.frontend);

  const setFieldSkills = (fieldName: string)=>{
    setField(fieldName);
    setSkills(skillNames[fieldName as Category])
  }

  return (
    <div className="bg-[#ffffff] text-[#121212] dark:bg-[#121212] dark:text-white pt-28 flex flex-col items-center" id="skills">
      <h1 className="text-3xl py-5">Skills</h1>
      <div className="flex justify-center w-[100%] relative left-[-0.6%]">
        <button className={`${field == 'frontend' ? 'text-[#121212] dark:text-white border-b-2 border-b-[#121212] dark:border-b-white' : 'text-gray-500'} px-5 cursor-pointer outline-none`} onClick={()=>setFieldSkills("frontend")}>Frontend</button>
        <button className={`${field == 'backend' ? 'text-[#121212] dark:text-white border-b-2 border-b-[#121212] dark:border-b-white' : 'text-gray-500'} px-5 cursor-pointer outline-none`} onClick={()=>setFieldSkills("backend")}>Backend</button>
        <button className={`${field == 'tools' ? 'text-[#121212] dark:text-white border-b-2 border-b-[#121212] dark:border-b-white' : 'text-gray-500'} px-5 cursor-pointer outline-none`} onClick={()=>setFieldSkills("tools")}>Tools</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between my-16">
        {Object.entries(skills).map(([tech, skills]) => (
          <Card key={tech+field} name={skills.name} imgSrc={skills.imgSrc} desc={skills.desc}/>
        ))}
      </div>
    </div>
  )
}
export default Skills
