import emailjs from "emailjs-com";
import React, { useState } from "react";
import bikeM from "../assets/bikeM.svg";
import bike from "../assets/bikeN.svg";
import socials from "../assets/Social-Icons.svg";

const Main = () => {
  const [email, setEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: email, // Make sure this matches the variable in your Email.js template
      email: email, // This could be another field, depending on how your template is set up
    };

    emailjs
      .send(
        "service_jcu2aza", // Your service ID
        "template_e2jgjej", // Your template ID
        templateParams, // Email data
        "WcNfDbngJgyC1pjN-" // Your API key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Subscription successful!");
        },
        (error) => {
          console.log("Email send error:", error.text);
          alert("Failed to subscribe. Please try again later.");
        }
      );
  };

  return (
    <div className="bg-bg-mobile md:bg-coming-soon bg-cover bg-center md:h-[1024px]">
      <section>
        <h1 className="font-poppins font-bold text-[56px] md:text-[64px] text-[#FF5F00] flex items-center justify-center pt-[86px] md:pt-[150px]">
          Boxxie
        </h1>
        <h1 className="font-poppins font-medium text-[28px] md:text-[32px] pb-2">
          WE ARE COMING SOON!!
        </h1>
        <p className="font-poppins font-normal tracking-wider text-[16px] text-[#828282]">
          Stay tuned for something amazing
        </p>
        <div className="flex items-center justify-center mt-[12px]">
          <img src={bike} alt="" className="hidden md:flex" />
          <img src={bikeM} alt="" className="md:hidden mt-[70px]" />
        </div>
      </section>

      <section>
        <div className="px-[16px] md:px-[0px]">
          <h1 className=" text-start md:text-center font-poppins font-normal tracking-[0.2px] mt-[80px] md:mr-[460px] text-[18px] md:text-[20px]">
            Subscribe to our mailing list to get latest updates
          </h1>
          <div className="flex items-center justify-center mt-[24px]">
            <input
              type="text"
              placeholder="Email"
              value={email} // Make sure to bind the input's value to the state
              name="from_name"
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none w-[770px] h-[48px] font-poppins font-normal"
            />
            <button
              className="font-poppins font-bold px-4 py-2 h-[49px] w-[132px] bg-orange-500 text-white  hover:bg-orange-600 rounded-none rounded-r-lg border-none"
              onClick={sendEmail}
            >
              Subscribe
            </button>
          </div>
          <div>
            <div className="flex items-center justify-center mt-[40px] cursor-pointer">
              <img src={socials} alt="" />
            </div>
            <h1 className="mt-[50px] text-[#828282] font-poppins font-normal tracking-[0.2px] pb-[120px] md:pb-[0px]">
              © Copyrights Boxxie | All Rights Reserved
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
