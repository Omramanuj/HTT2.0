import {React,useEffect} from "react";
import Character from "/assets/img/deit1.avif";
import join from "/assets/img/second.webp";
import RoundaboutLeftIcon from '@mui/icons-material/RoundaboutLeft';
import PlaceIcon from '@mui/icons-material/Place';
import Place from "@mui/icons-material/Place";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';



export default function Aboutus  ({})  {



  return (
    <>
    <div className="flex justify-center">
    <div className="flex justify-center text-justify lg:text-left bg-[#ffffff]">
      <div className="p-4 m-4 faq border-2  lg:w-[80%] md:w-[90%] w-[100%] bg-gradient-to-br from-[#15803d] via-[#2b8c84] to-[#15803d]">
        {/* ---------------About us -------------------- */}
        <div className=" grid lg:grid-flow-col items-center grid-flow-row">
          <div className="lg:ml-[10%]">
            <p className="p-4 text-5xl font-medium text-[#FEBD5F] mt-[5%] ">
              Who are we?
            </p>
            <p className="text-5xl p-4 font-medium  text-[#FAFBFF]">
              About us
            </p>
            <p className="text-l lg:text-xl p-4 text-[#FAFBFF] text-justify">
            We are <strong>SAS FAT TO SLIM</strong>, a leading clinic specializing in dietetics and health expertise. Our revolutionary approach to weight loss and health management sets us apart. Unlike traditional methods, we prioritize the incorporation of nutrient-rich Indian foods over restrictive diets. Our philosophy revolves around the concept of <i>'Eat & Sleep'</i>, emphasizing nourishment rather than deprivation
            </p>
          </div>
          <div>
            <img
              src={Character}
              className="character lg:justify-end p-4 mt-[6%] shadow-none rounded-bl-full w-screen"
              style={{
                filter: "drop-shadow(0px 10px 10px rgba(118, 171, 174, 0.8))",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
        </div>
        {/*--------------- Our Mission ---------------*/}
        <div className="mt-[5%] text-center grid place-items-center">
          <p className="lg:text-5xl md:text-4xl text-3xl p-4 m-4 font-medium text-[#FEBD5F] lg:w-[80%] md:w-[90%] w-[100%]">
            Our Mission
          </p>
          <div className="flex justify-center text-justify p-4">
            <p className=" text-[#FAFBFF] text-sm md:text-base lg:text-xl lg:w-[80%] md:w-[90%] w-[100%]">
            Our mission at SAS FAT TO SLIM is to revolutionize the approach to dietetics and health expertise. We strive to help our clients achieve significant weight loss – up to 7 kgs and 4 inches from various body parts within one month – without resorting to rigorous exercise or starvation diets. 
            </p>
          </div>
        </div>
        {/* -----------------What Sets Us Apart----------- */}
        <div className="grid place-items-center mt-[5%]">
          <p className="p-4 m-4 font-medium text-[#FEBD5F] lg:text-5xl md:text-4xl text-3xl mt-[5%] text-center lg:w-[80%] w-[90%]">
            What Sets Us Apart?
          </p>
          <ul className=" lg:w-[70%] md:w-[80%] w-[100%]">
            <li className="backdrop-blur-sm p-4 m-2 text-[#FAFBFF]  border-2 border-[#FEBD5F] shadow-sm shadow-black rounded-lg text-lg md:text-base lg:text-lg">
            No Starvation: Rejecting starvation tactics, we advocate for colorful, tasty meals that seamlessly integrate into our existing lifestyles, promoting sustainability.            </li>
            <li className="backdrop-blur-sm p-4 m-2 text-[#FAFBFF] border-2 border-[#FEBD5F] shadow-sm shadow-black rounded-lg text-lg md:text-base  lg:text-lg">
            Home-Based Convenience: Our diet plans are designed for easy implementation from the comfort of one's home, eliminating the need for external supplements or pills.            </li>
            <li className="backdrop-blur-sm p-4 m-2 text-[#FAFBFF] border-2 border-[#FEBD5F] shadow-sm shadow-black rounded-lg text-lg md:text-base  lg:text-lg">
            Focus on Traditional Food Habits: We prioritize healthy eating by embracing the food habits ingrained in our upbringing, emphasizing a return to basics for powerful results. </li>         
            <li className="backdrop-blur-sm p-4 m-2 text-[#FAFBFF] border-2 border-[#FEBD5F] shadow-sm shadow-black rounded-lg text-lg md:text-base  lg:text-lg">
            agic in Kitchen Spices: The essence of our diet lies in the magic of kitchen spices, providing natural solutions for weight loss and overall health improvement.              </li>         
          </ul>
        </div>
        {/* -----------------Our Vision-------------- */}
        <div className=" grid place-items-center">
          <p className="lg:text-5xl md:text-4xl text-3xl p-4 m-4 mt-[5%] font-medium text-[#FEBD5F]  text-center lg:w-[80%] md:w-[90%] w-[100%]">
            Our Vision
          </p>
          <p className="p-4 m-4 text-[#FAFBFF] text-sm md:text-base lg:text-xl lg:w-[80%] md:w-[90%] w-[100%] text-justify" >
          At our core, we envision a future where India is liberated from the grips of obesity. Through our platform, we aspire to democratize access to weight-loss programs, ensuring they reach every corner of India. Our goal is to eradicate health complications stemming from weight-related issues, thereby ensuring every individual in India can lead a healthy and fulfilling life, unencumbered by the burden of excess weight.
          </p>
        </div>
        {/* ----------------Join us Today ---------------- */}
        <div className="grid place-items-center">
          <div className="grid md:grid-flow-row lg:grid-flow-col place-items-center shadow-none mt-[5%]">
            <img src={join} className="join lg:justify-end p-2"
              style={{
                filter: "drop-shadow(0px 10px 10px rgba(118, 171, 174, 0.8))",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
          
              }} />
            <div className="lg:w-[80%] md:w-[90%] w-[100%] mb-[10%] faq lg:mr-[20%]">
            
              <div>
              <p className="p-4 m-2 mt-[5%] text-center font-medium text-[#FEBD5F] lg:text-5xl mb-14 text-3xl lg:w-[80%] w-[90%]">
                  Contact Us
                </p>
                <div className="ml-3 text-[#FAFBFF] fle flex-row">
                <p className="p-2 m-2 lg:text-xl text-sm  md:text-base">
                At{" "} 
  <span className="relative inline-block">
    <span className="text-[#FEBD5F] text-2xl font-bold">SAS FAT TO SLIM</span>
  </span>   
 {" "}we extend a warm invitation for you to join our vibrant community. Together, let us embark on a transformative journey towards weight-loss, unlocking boundless possibilities along the way.
</p>

                <div className="flex p-1">
                <h1><Place/></h1>
                            <div>
                        <a href="https://www.google.com/maps/place/Pandit+Nagla+Bypass+Rd,+Moradabad,+Uttar+Pradesh+244001/@28.8092002,78.7839927,17z/data=!3m1!4b1!4m6!3m5!1s0x390afba7c93d6f67:0xcec508228949beaf!8m2!3d28.8092002!4d78.7839927!16s%2Fg%2F1tkmky2r?entry=ttu">Mayfair Road moradabad, Uttarpradesh, India</a>
                    </div>
                </div>
                <div className="flex p-1">
                <h1><CallIcon/></h1>
                            <div>
                            +91-9897717000
                    </div>
                </div>
                <div className="flex p-1">
                <h1><EmailIcon/></h1>
                            <div>
                        <a href="">sasfat2slimmbd@gmail.com</a>
                    </div>
                </div>
                <div className="flex p-1">
                <h1><EmailIcon/></h1>
                            <div>
                        <a href="">info@fattoslimmbd.com</a>
                    </div>
                </div>
              

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
    </div>
        </>
  );
}

