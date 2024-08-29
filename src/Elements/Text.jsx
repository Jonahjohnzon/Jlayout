import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const Text = ({ words, speed = 0.05 }) => {
  const refs = useRef();
  const [a, sa] = useState(false)
  var list = [];
  for (let i of words) {
    list.push(i);
  }
  const prints = {
    hidden: { opacity: 0 },
    anim: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        type: "tween",
        duration: 0.3,
        delay: 0.1,
        stiffness: 400,
        staggerChildren: speed,
      },
    },
  };
  const children = {
    hidden: { opacity: 0 },
    anim: { opacity: 1 },
  };
  useEffect(()=>{

      sa(true)
  },[])
  return (
    <div ref={refs}>
      {a && (
        <motion.div
          variants={prints}
          initial="hidden"
          animate="anim"
          className="flex flex-wrap"
        >
          {list.map((e,i) => {
            if (e == " ") {
              e = "\u00A0";
            }
            return <motion.p key={i} variants={children}> {e}</motion.p>
          })}
        </motion.div>
      )}
    </div>
  );
};

export default Text
