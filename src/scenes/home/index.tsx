import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import doc1 from "@/assets/doc1.jpg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="mx-auto overflow-hidden">
      <motion.div
        className="mt-20 flex h-screen w-full justify-center"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="w-full">
          <img
            className="heroImg h-full basis-2/3 object-fill"
            src={doc1}
            alt="doc-image-1"
          />
        </div>
        <div className="basis-1/3 rounded-lg bg-grey-20 shadow-lg">
          <div className="flex flex-col gap-6 p-20">
            <h1 className="text-4xl">LOREM</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              ratione porro animi velit esse sequi, atque quis voluptatibus quam
              nemo pariatur cum tempore accusamus eaque explicabo nesciunt
              temporibus nisi libero.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
