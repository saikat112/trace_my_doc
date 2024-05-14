import React, { useEffect, useState } from "react";
import { motion, useAnimationControls} from "framer-motion"


const containerVariants ={
    close:{
        width: "5rem",
        transition:{
            type : 'spring',
            damping: 15,
            duration: 0.5,
        },
    },
    open:{
        width: "16rem",
        transition:{
            type : 'spring',
            damping: 15,
            duration: 0.5,
        },
    }
}
export default function Navigation() {
    const [isOpen , setIsOpen ] = useState(false)
    const containerControls = useAnimationControls()
    useEffect (() => {
        if(isOpen){
            containerControls.start("open")
        } else{
            containerControls.start("close")
        }
    }, [isOpen])
    const handleOpenClose = () => {
        setIsOpen(!isOpen)
    }
  return (
    <motion.nav variants={containerVariants}  animation={containerControls} initial ="close" className="bg-neutral-900 flex flex-col z-10 gap-20 p-5 absolute top-0 left-0 h-full shadow-neutral-600">
      <div className="flex flex-row w-full justify-between place-items-center">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-700 rounded-full" />
        <button className="p-1 rounded-full flex" onClick={() => handleOpenClose()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-8 h-8 stroke-neutral-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}
