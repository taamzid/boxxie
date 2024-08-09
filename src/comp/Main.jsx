import bike from "../assets/bikeN.svg";
import socials from "../assets/Socials.svg";
const Main = () => {
  return (
    <div className="bg-coming-soon bg-cover bg-center h-[1024px]">
      <section>
        <h1 className="font-poppins font-bold text-[64px] text-[#FF5F00] flex items-center justify-center pt-[150px]">
          Boxxie
        </h1>
        <h1 className="font-poppins font-medium text-[32px] pb-2">
          WE ARE COMING SOON!!
        </h1>
        <p className="font-poppins font-normal tracking-wider text-[16px] text-[#828282]">
          Stay tuned for something amazing
        </p>
        <div className="flex items-center justify-center mt-[12px]">
          <img src={bike} alt="" />
        </div>
      </section>

      <section>
        <div>
          <h1 className="font-poppins font-normal tracking-[0.2px] mt-[80px] mr-[460px] text-[20px]">
            Subscribe to our mailing list to get latest updates
          </h1>
          <div className="flex items-center justify-center mt-[24px]">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none w-[770px] h-[48px] font-poppins font-normal"
            />
            <button className="font-poppins font-bold px-4 py-2 h-[49px] w-[132px] bg-orange-500 text-white  hover:bg-orange-600 rounded-none rounded-r-lg border-none">
              Subscribe
            </button>
          </div>
          <div>
            <div className="flex items-center justify-center mt-[40px] cursor-pointer">
              <img src={socials} alt="" />
            </div>
            <h1 className="mt-[50px] text-[#828282] font-poppins font-normal tracking-[0.2px]">
              © Copyrights Greelogix | All Rights Reserved
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
