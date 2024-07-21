import React from 'react';
import { motion } from 'framer-motion';

const AnimatedIcon = ({ IconComponent }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <IconComponent />
    </motion.div>
  );
};

export default AnimatedIcon;
