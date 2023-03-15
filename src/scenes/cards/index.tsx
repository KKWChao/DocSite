import Info from "./info";
import useMediaQuery from "@/hooks/useMediaQuery";
import { InfoType, SelectedPage } from "@/shared/types";

const info: Array<InfoType> = [
  {
    cardTitle: "LOREM",
    cardText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae ratione porro animi velit esse sequi, atque quisvoluptatibus quam nemo pariatur cum tempore accusamus eaque explicabo nesciunt temporibus nisi libero.",
    cardDelay: 0.1,
  },
  {
    cardTitle: "LOREM",
    cardText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae ratione porro animi velit esse sequi, atque quisvoluptatibus quam nemo pariatur cum tempore accusamus eaque explicabo nesciunt temporibus nisi libero.",
    cardDelay: 0.15,
  },
  {
    cardTitle: "LOREM",
    cardText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae ratione porro animi velit esse sequi, atque quisvoluptatibus quam nemo pariatur cum tempore accusamus eaque explicabo nesciunt temporibus nisi libero.",
    cardDelay: 0.2,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const cards = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1000px)");

  return (
    <div className="mt-5 flex w-full pt-20">
      {isAboveMediumScreens && (
        <div className="mx-auto flex justify-center gap-20">
          {info.map((info: InfoType, i) => (
            <Info
              key={`${info.cardTitle}_${i}`}
              cardTitle={info.cardTitle}
              cardText={info.cardText}
              cardDelay={info.cardDelay}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default cards;
