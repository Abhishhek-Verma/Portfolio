import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  highlightWords?: string[];
  highlightClassName?: string;
}

const AnimatedText = ({
  text,
  className = "",
  highlightWords = [],
  highlightClassName = "",
}: AnimatedTextProps) => {
  // If there are highlight words, split the text and wrap highlighted words
  if (highlightWords.length > 0) {
    let parts = [text];

    // For each highlight word, split all current parts that contain it
    highlightWords.forEach((word) => {
      const newParts: string[] = [];
      parts.forEach((part) => {
        if (part.includes(word)) {
          const splitPart = part.split(word);
          for (let i = 0; i < splitPart.length; i++) {
            newParts.push(splitPart[i]);
            if (i < splitPart.length - 1) {
              newParts.push(word);
            }
          }
        } else {
          newParts.push(part);
        }
      });
      parts = newParts;
    });

    return (
      <motion.p
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {parts.map((part, index) => {
          const isHighlighted = highlightWords.includes(part);
          return (
            <span
              key={index}
              className={isHighlighted ? highlightClassName : ""}
            >
              {part}
            </span>
          );
        })}
      </motion.p>
    );
  }

  // Default case without highlights
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {text}
    </motion.p>
  );
};

export default AnimatedText;
