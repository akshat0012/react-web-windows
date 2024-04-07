import { motion } from 'framer-motion';

function HelloWorldWindow({ onClose, foregroundRef }) {
  return (
    <motion.div
      drag
      dragMomentum = {false}
      dragConstraints = {foregroundRef}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2 }}
      className="absolute z-[3] bg-white h-[200px] w-[300px] text-black overflow-hidden rounded-md shadow-xl"
    >
      <div className="p-4">
        <h1 className="text-xl font-bold">Hello, World!</h1>
      </div>
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-black focus:outline-none"
        onClick={onClose}
      >
        Close
      </button>
    </motion.div>
  );
}

export default HelloWorldWindow;