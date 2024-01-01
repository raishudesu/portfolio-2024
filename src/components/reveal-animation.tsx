import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

const RevealAnimation = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);
  return (
    <div ref={ref} className="w-full">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.4, delay: 0.25 }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealAnimation;
