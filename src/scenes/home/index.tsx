import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import doc1 from "@/assets/doc1.jpg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="lg:h-5/6 z-0 sm:h-3/5 md:pb-10">
      <motion.div
        className="mx-auto mt-20 w-full items-center justify-center "
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <motion.div
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          <div className="relative items-center justify-center bg-grey-20 md:flex">
            <div className="mx-auto flex flex-col gap-6 p-20 md:basis-1/3">
              <h1 className="text-4xl">LOREM</h1>
              <p className="mx-auto text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae ratione porro animi velit esse sequi, atque quis
                voluptatibus quam nemo pariatur cum tempore accusamus eaque
                explicabo nesciunt temporibus nisi libero.
              </p>
            </div>
            <img className="rounded md:w-1/2" src={doc1} alt="doc-image-1" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
