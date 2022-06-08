import { motion } from "framer-motion";

function AnimatedDiv({ children, animationTime = 0.7, ...props }) {
  return (
    <motion.div
      {...props}
      initial={{ opacity: 0 }}
      transition={{ duration: +animationTime }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedDiv;
