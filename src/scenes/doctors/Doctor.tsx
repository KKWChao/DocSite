import Logo from "@/assets/logoSM.png";
import { motion } from "framer-motion";

type Props = {
  doctorName: string;
  doctorImage: string;
  doctorDescription: string;
};

const Doctor = ({ doctorName, doctorImage, doctorDescription }: Props) => {
  return (
    <div className="p-4">
      <div className="flex gap-8">
        <img
          className="h-[240px] w-[240px] bg-black md:h-[480px] md:w-[480px] md:basis-1/2"
          src={doctorImage}
          alt={doctorName}
        />
        <motion.div
          className="flex items-center justify-center md:basis-1/2"
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
    </div>
  );
};

export default Doctor;
