import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Location = ({ setSelectedPage }: Props) => {
  return (
    <section id="offices">
      <div className="flex w-full flex-col justify-around py-20 md:flex-row">
        <div className="w-full md:w-[600px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.4347445331955!2d-122.42517748405679!3d37.82670701694173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085811569574f23%3A0x189c28e85a71ae17!2sAlcatraz%20Island!5e0!3m2!1sen!2sus!4v1677187698297!5m2!1sen!2sus"
            width="100%"
            height="450"
            loading="lazy"
          />
          <div className="text-center">
            <h1>HOURS</h1>
            <ul>
              <li>
                Monday: <span>9:00 AM - 5:00 PM</span>
              </li>
              <li>
                Tuesday: <span>9:00 AM - 5:00 PM</span>
              </li>
              <li>
                Wednesday: <span>9:00 AM - 5:00 PM</span>
              </li>
              <li>
                Thursday: <span>9:00 AM - 5:00 PM</span>
              </li>
              <li>
                Friday: <span>9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-[600px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.4347445331955!2d-122.42517748405679!3d37.82670701694173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085811569574f23%3A0x189c28e85a71ae17!2sAlcatraz%20Island!5e0!3m2!1sen!2sus!4v1677187698297!5m2!1sen!2sus"
            width="100%"
            height="450"
            loading="lazy"
          />
          <div className="text-center">
            <h1>HOURS</h1>
            <ul>
              <li>
                Monday: <span>9:00 AM - 5:00 PM</span>
              </li>
              <li>
                Tuesday: <span>9:00 AM - 5:00 PM</span>
              </li>
              <li>
                Wednesday: <span>9:00 AM - 5:00 PM</span>
              </li>
              <li>
                Thursday: <span>9:00 AM - 5:00 PM</span>
              </li>
              <li>
                Friday: <span>9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
