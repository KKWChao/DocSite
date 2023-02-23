import Logo from "@/assets/logoSM.png";
import { motion } from "framer-motion";

type Props = {
  doctorName: string;
  doctorImage: string;
  doctorDescription: string;
};

const Doctor = ({ doctorName, doctorImage, doctorDescription }: Props) => {
  return (
    <div className="flex flex-col justify-center bg-secondary-400 p-5 md:flex-row md:gap-32 md:p-20">
      <div className="md:h-auto md:w-[480px]">
        <img
          className="h-[480px] bg-black md:w-full "
          src={doctorImage}
          alt={doctorName}
        />
      </div>
      <motion.div
        className="flex flex-col justify-center md:w-1/4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.2 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {/* CARD DESCRIPTION */}
        <div className="">
          <h1 className="md:text-3xl">{doctorName}</h1>
          <p className="md:text-xl">{doctorDescription}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Doctor;
