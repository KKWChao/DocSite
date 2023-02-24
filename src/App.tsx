import { useState, useEffect } from "react";
import { SelectedPage } from "./shared/types";
import Home from "@/scenes/home";
import Card from "@/scenes/cards";
import Navbar from "@/scenes/navbar";
import Footer from "@/scenes/footer";
import Doctors from "@/scenes/doctors";
import Location from "./scenes/location";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }

      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Card setSelectedPage={setSelectedPage} />
      <Doctors setSelectedPage={setSelectedPage} />
      <Location setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
