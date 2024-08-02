"use client";
import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "@/src/utils/motion";
import TeamCard from "./TeamCard";
import { data } from "./ieeestbmembers";

const Team = () => {
  return (
    <div className="flex flex-col mt-[40px]">
      <motion.div
        initial="hidden"
        whileInView="show"
        exit="hidden"
        viewport={{ once: true }}
        variants={textVariant()}
        className="text-center flex flex-col items-center"
      >
        <div className="bg-primary font-bold text-[33px] md:text-[43px] lg:text-[53px] text-white font-poppins">
          TEAM &nbsp;<span className="text-[#915eff]">MEMBERS</span>
        </div>
        <div className="text-secondary font-poppins text-[10px] md:text-[13px] lg:text-[16px] mt-[-12px] flex flex-1 font-bold">
          IEEE STUDENT BRANCH ALIGARH MUSLIM UNIVERSITY
        </div>
      </motion.div>

      <div className="flex flex-row flex-wrap w-full justify-around mt-[30px]">
        {data.map((data, index) => (
          <div className="md:w-[28vw] h-[500px] ml-[10px] mt-[30px]">
            <TeamCard key={index} index={index} data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
