// components/BlinkingCursor.jsx
import { motion } from 'framer-motion';

const BlinkingCursor = () => {
  return (
    <motion.span
      animate={{ opacity: 0 }}
      transition={{ repeat: Infinity, duration: 0.8, repeatType: 'reverse' }}
      className="text-[30px] md:text-[45px] text-white-100 font-extrabold font-poppins"
    >
      .
    </motion.span>
  );
};

export default BlinkingCursor;
