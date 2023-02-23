import Logo from "@/assets/LogoSM.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer id="footer" className="bg-primary-300 py-16 text-secondary-500">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" className="w-[80px]" />
          <p className="my-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
            officiis iste laborum non id tenetur tempore aut illo fuga quidem
            nihil, ea sed animi exercitationem veritatis dolorum libero atque?
            Sunt!
          </p>
          <p>Ⓒ Doctor All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Et gravida id et etiam</p>
          <p className="">(123)-456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
