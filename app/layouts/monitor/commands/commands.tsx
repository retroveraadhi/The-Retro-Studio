"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const blurOpacity = {
  hidden: {
    opacity: 0,
    filter: "blur(1px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
  },
};

const Commands = () => {
  return (
    <div
      className="flex flex-col items-center justify-start gap-0.5 w-full h-full absolute pl-5"
      id="command"
    >
      <div className="flex flex-col w-full h-auto items-start justify-start gap-1 pt-2.5">
        {/* First Command */}
        <div
          className="flex items-start justify-center gap-1"
          id="initial-command"
        >
          <div className="flex items-center justify-center">
            <p className="text-[#A9A7D7] font-dmsans text-[15px]">
              retrolib@localhost:~$
            </p>
          </div>
          <div className="flex items-center justify-center">
            {"ps aux | grep longlearning-curve".split("").map((char, idx) => (
              <motion.p
                key={idx}
                variants={blurOpacity}
                className="text-[#A9A7D7] font-dmsans text-[15px]"
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: idx * 0.08,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.p>
            ))}
          </div>
        </div>

        {/* First Result */}
        <div
          className="flex items-start justify-center gap-1"
          id="initial-result"
        >
          <div className="flex items-center justify-center">
            <motion.p
              className="text-[#A9A7D7] font-dmsans text-[15px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.7 }}
            >
              user 1919 94.0 409612 longlearning-curve --active
            </motion.p>
          </div>
        </div>

        {/* Second Command */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.7 }}
          className="flex items-start justify-center gap-1"
          id="second-command"
        >
          <div className="flex items-center justify-center">
            <p className="text-[#A9A7D7] font-dmsans text-[15px]">
              retrolib@localhost:~$
            </p>
          </div>
          <div className="flex items-center justify-center">
            {"sudo kill -9 1919".split("").map((char, idx) => (
              <motion.p
                key={idx}
                variants={blurOpacity}
                className="text-[#A9A7D7] font-dmsans text-[15px]"
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 4.7 + idx * 0.08,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Second Result */}
        <div
          className="flex items-start justify-center gap-1"
          id="second-result"
        >
          <div className="flex items-center justify-center">
            <motion.p
              className="text-[#A9A7D7] font-dmsans text-[15px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 6.8 }}
            >
              [✓] Process 1919 (longlearning-curve) terminated
            </motion.p>
          </div>
        </div>

        {/* Third Command */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 8.8 }}
          className="flex items-start justify-center gap-1"
          id="third-command"
        >
          <div className="flex items-center justify-center">
            <p className="text-[#A9A7D7] font-dmsans text-[15px]">
              retrolib@localhost:~$
            </p>
          </div>
          <div className="flex items-center justify-center">
            {"rm -rf ./no-user-management".split("").map((char, idx) => (
              <motion.p
                key={idx}
                variants={blurOpacity}
                className="text-[#A9A7D7] font-dmsans text-[15px]"
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 8.8 + idx * 0.08,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Third Result */}
        <div
          className="flex items-start justify-center gap-1"
          id="third-result"
        >
          <div className="flex items-center justify-center">
            <motion.p
              className="text-[#A9A7D7] font-dmsans text-[15px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 11.3 }}
            >
              [✓] Removed directory: ./no-user-management
            </motion.p>
          </div>
        </div>

        {/* Fourth Command */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 13.3 }}
          className="flex items-start justify-center gap-1"
          id="fourth-command"
        >
          <div className="flex items-center justify-center">
            <p className="text-[#A9A7D7] font-dmsans text-[15px]">
              retrolib@localhost:~$
            </p>
          </div>
          <div className="flex items-center justify-center">
            {`echo "custom_props=enabled" >> ~/.retro`
              .split("")
              .map((char, idx) => (
                <motion.p
                  key={idx}
                  variants={blurOpacity}
                  className="text-[#A9A7D7] font-dmsans text-[15px]"
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: 13.3 + idx * 0.08,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.p>
              ))}
          </div>
        </motion.div>

        {/* Fourth Result */}
        <div
          className="flex items-start justify-center gap-1"
          id="fourth-result"
        >
          <div className="flex items-center justify-center">
            <motion.p
              className="text-[#A9A7D7] font-dmsans text-[15px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 16.3 }}
            >
              [✓] Configuration updated
            </motion.p>
          </div>
        </div>

        {/* Fifth Command */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 18.5 }}
          className="flex items-start justify-center gap-1"
          id="fifth-command"
        >
          <div className="flex items-center justify-center">
            <p className="text-[#A9A7D7] font-dmsans text-[15px]">
              retrolib@localhost:~$
            </p>
          </div>
          <div className="flex items-center justify-center">
            {"./retrolib install".split("").map((char, idx) => (
              <motion.p
                key={idx}
                variants={blurOpacity}
                className="text-[#A9A7D7] font-dmsans text-[15px]"
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 18.5 + idx * 0.08,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Fifth Result - multi-line */}
        <div
          className="flex flex-col items-start justify-center gap-0.5"
          id="fifth-result"
        >
          {[
            "> Installing RetroLib...",
            "> Resolving dependencies..",
            "[✓] Installation complete",
          ].map((line, idx) => (
            <motion.p
              key={idx}
              className="text-[#A9A7D7] font-dmsans text-[15px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 21 + idx * 0.8,
              }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Commands;
