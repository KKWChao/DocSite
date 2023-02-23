import { motion } from "framer-motion";

type Props = {
  cardTitle: string;
  cardText: string;
  cardDelay: number;
};

const Info = ({ cardTitle, cardText, cardDelay }: Props) => {
  const cardStyle = ``;

  return (
    <motion.div
      className="w-1/4 overflow-hidden rounded bg-primary-100 p-10 drop-shadow-md"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: cardDelay, duration: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <h1 className="text-xl text-secondary-400 md:text-3xl">{cardTitle}</h1>
      <p className="text-sm text-white md:text-xl">{cardText}</p>
    </motion.div>
  );
};

export default Info;
