import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="2"
          stroke="white"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 3.5 L 20 3.5" },
            open: { d: "M 3 15 L 17 2.5" },
          }}
        />
        <motion.path
          strokeWidth="2"
          stroke="white"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="2"
          stroke="white"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 15 L 20 15" },
            open: { d: "M 3.5 3.5 L 17 15" },
          }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
