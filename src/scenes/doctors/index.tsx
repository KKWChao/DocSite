import { SelectedPage, DocType } from "@/shared/types";
import { motion } from "framer-motion";
import Doctor from "./Doctor";

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
    <section id="doctors" className="w-full bg-secondary-400">
      <motion.div
        className="flex flex-col items-center justify-center"
        onViewportEnter={() => setSelectedPage(SelectedPage.Doctors)}
      >
        {/* DOCTOR HEADER */}
        <div className=" w-full bg-primary-100 p-20 text-center text-5xl text-secondary-400">
          <h1>
            MEET THE <span>DOCTORS</span>
          </h1>
        </div>
        <div className="container">
          {docs.map((docs: DocType, i) => (
            <Doctor
              key={`${docs.doctorName}_${i}`}
              doctorName={docs.doctorName}
              doctorDescription={docs.doctorDescription}
              doctorImage={docs.doctorImage}
            />
          ))}
        </div>
      </motion.div>

      {/* DESCRIPTION CARDS */}
    </section>
  );
};

export default Doctors;
