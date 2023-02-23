import { SelectedPage, DocType } from "@/shared/types";
import { motion } from "framer-motion";
import Doctor from "./Doctor";
import Logo from "@/assets/logoSM.png";

const docs: Array<DocType> = [
  {
    doctorName: "LOREM",
    doctorDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae ratione porro animi velit esse sequi, atque quisvoluptatibus quam nemo pariatur cum tempore accusamus eaque explicabo nesciunt temporibus nisi libero.",
    doctorImage: "a",
  },
  {
    doctorName: "LOREM",
    doctorDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae ratione porro animi velit esse sequi, atque quisvoluptatibus quam nemo pariatur cum tempore accusamus eaque explicabo nesciunt temporibus nisi libero.",
    doctorImage: "b",
  },
  {
    doctorName: "LOREM",
    doctorDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae ratione porro animi velit esse sequi, atque quisvoluptatibus quam nemo pariatur cum tempore accusamus eaque explicabo nesciunt temporibus nisi libero.",
    doctorImage: "c",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Doctors = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="doctors"
      className="z-10 mt-10 w-full bg-secondary-400 md:bg-white"
    >
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Doctors)}>
        {/* DOCTOR HEADER */}
        <div className="flex justify-center bg-primary-100 p-20 text-5xl text-secondary-400">
          <h1>
            MEET THE <span>DOCTORS</span>
          </h1>
        </div>
      </motion.div>
      {/* DESCRIPTION CARDS */}
      <div className="">
        {docs.map((docs: DocType, i) => (
          <Doctor
            key={`${docs.doctorName}_${i}`}
            doctorName={docs.doctorName}
            doctorDescription={docs.doctorDescription}
            doctorImage={docs.doctorImage}
          />
        ))}
      </div>
    </section>
  );
};

export default Doctors;
