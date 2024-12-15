import React from "react";
import Image from "next/image";
import logo from "./assets/Logo.png";
import worktogather from "./assets/Work Together Image.png";
import apple from "./assets/Apple.png";
import microsoft from "./assets/Microsoft.png";
import slack from "./assets/Slack.png";
import google from "./assets/Google.png";
const page = () => {
  return (
    <>
      {/* Navbar Start here */}
      <div className="fixed  pl-[80px] pt-[30px] pb-[30px]  flex space-between w-[1348px] h-[92px] bg-[#043873]">
        <Image src={logo} alt="Logo Image" width={200} height={1} />

        <div className="w-[737.5px] h-[60px] ml-80 flex justify-around">
          <ul className="w-[549px] h-[23px] pt-4 gap-[32px] text-[18px] leading-[23px] font-[500] text-[#ffffff] flex ">
            <li>Products</li>
            <li>Solutions</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>

          <button className="w-[126px] h-[60px] bg-[#FFE492] rounded-[8px] pt-[16px] pr-[40px] pb-[16px] pl-[40px] gap-[10px]">
            Login
          </button>
        </div>
      </div>
      {/* Navbar Ends here */}

      {/* Hero Section Start here */}
      <div className="w-[1348px] h-[640px] bg-[#043873] content-center ">
        <div className="flex justify-center gap-[40px] items-center ">
          <div className="h-[656px] w-[361px] text-[#ffffff] items-center content-center">
            <h2 className="text-[35px] leading-[50px] font-[750] ">
              Get More Done with <br /> whitepace
            </h2>
            <p className="text-[16px] leading-[30px] font-[400] mt-2 ">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>
            <button className="w-[219px] h-[63px] rounded-[8px] mt-8 p-[20px] gap-[10px] bg-[#3482cf]">
              Try Whitepace free{" "}
            </button>
          </div>

          <div className="bg-[#C4DEFD] w-[450px] h-[350px] "></div>
        </div>
      </div>
      {/* Hero Section ends here */}

      {/* Second Section Start here */}
      <div className="w-[1348px] h-[500px] bg-[#ffffff] content-center ">
        <div className="flex justify-center gap-[20px] items-center ">
          <div className="h-[656px] w-[361px] text-black items-center content-center">
            <h2 className="text-[40px] leading-[50px] font-[700] ">
              Project
              <br /> Management
            </h2>
            <p className="text-[16px] leading-[30px] font-[400] mt-2 ">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </p>
            <button className="w-[219px] h-[63px] rounded-[8px] mt-8 p-[20px] gap-[10px] bg-[#3482cf]">
              Get Started
            </button>
          </div>

          <div className="bg-[#C4DEFD] w-[450px] h-[350px] "></div>
        </div>
      </div>

      {/* second white section */}
      <div className="w-[1348px] h-[600px] bg-[#ffffff] content-center ">
        <div className="flex justify-center gap-[70px] items-center ">
          <Image src={worktogather} alt="Logo Image" width={370} height={170} />

          <div className="h-[656px] w-[371px] text-black items-center content-center">
            <h2 className="text-[40px] leading-[50px] font-[700] ">
              Work togather
            </h2>
            <p className="text-[16px] leading-[30px] font-[600] mt-2 ">
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </p>
            <button className="w-[219px] h-[63px] rounded-[8px] mt-8 p-[20px] gap-[10px] bg-[#3482cf]">
              Try it now
            </button>
          </div>
        </div>
      </div>

      {/* Second Section ends here */}

      {/* third section Section Start here */}
      <div className="w-[1348px] h-[580px] bg-[#043873] content-center ">
        <div className="flex justify-center gap-[80px] items-center ">
          <div className="h-[656px] w-[361px] text-[#ffffff] items-center content-center">
            <h2 className="text-[35px] leading-[50px] font-[750] ">
              Use as Extension
            </h2>
            <p className="text-[16px] leading-[30px] font-[400] mt-2 ">
              Use the web clipper extension, available on Chrome and Firefox, to
              save web pages or take screenshots as notes.
            </p>
            <button className="w-[219px] h-[63px] rounded-[8px] mt-8 p-[20px] gap-[10px] bg-[#3482cf]">
              Let’s G
            </button>
          </div>

          <div className="bg-[#C4DEFD] w-[430px] h-[320px] "></div>
        </div>
      </div>
      {/* third Section ends here */}

      {/* forth Section Start here */}
      <div className="w-[1348px] h-[550px] bg-[#ffffff] content-center ">
        <div className="flex justify-center gap-[80px] items-center ">
          <div className="bg-[#C4DEFD] w-[450px] h-[350px] "></div>

          <div className="h-[656px] w-[361px] text-black items-center content-center">
            <h2 className="text-[40px] leading-[50px] font-[700] ">
              Customise it to your needs
            </h2>
            <p className="text-[16px] leading-[30px] font-[400] mt-2 ">
              Customise the app with plugins, custom themes and multiple text
              editors (Rich Text or Markdown). Or create your own scripts and
              plugins using the Extension API
            </p>
            <button className="w-[219px] h-[63px] rounded-[8px] mt-8 p-[20px] gap-[10px] bg-[#3482cf] text-[#ffffff]">
              Let’s G
            </button>
          </div>
        </div>
      </div>
      {/* forth Section Start here */}

      {/* fifth Section Start here */}
      <div className="w-[1348px] h-[370px] bg-[#043873] text-[#ffffff] text-[14px] text-center content-center ">
        <h1 className="text-[35px] font-[750] pb-4">
          Your work, everywhere you are
        </h1>
        <p>
          Access your notes from your computer, phone or tablet by synchronising
          with various services, including whitepace, Dropbox <br /> and
          OneDrive. The app is available on Windows, macOS, Linux, Android and
          iOS. A terminal app is also available!
        </p>

        <button className="bg-[#3482cf] w-[150px] h-[40px] rounded-[8px] mt-6 p-[10px] pb-4">
          Try Taskey
        </button>
      </div>
      {/* fifth Section Start here */}

      {/* sixthth Section Start here */}
      <div className="w-[1348px] h-[350px] text-black bg-[#ffffff] text-[14px] text-center content-center ">
        <h1 className="text-[35px] font-[750] pb-10">
          Your work, everywhere you are
        </h1>
        <div className="flex justify-around">
          <Image src={apple} alt="Logo Image" width={50} height={1} />
          <Image src={microsoft} alt="Logo Image" width={95} height={2} />
          <Image src={slack} alt="Logo Image" width={95} height={1} />
          <Image src={google} alt="Logo Image" width={95} height={1} />
        </div>
      </div>
      {/* sixth Section Start here */}

      {/* Footer Section starts here */}

      <div className="w-[1348px] h-[250px] bg-[#043873] ">
        <div className="flex justify-around items-center text-[16px] pt-[40px] leading-[28px] text-[#ffffff]">
          <div>
            <Image src={logo} alt="Logo Image" width={170} height={1} />
            <p>
              whitepace was created for <br />
              the new ways we live and
              <br /> work. We make a better
              <br /> workspace around the world
            </p>
          </div>

          <div>
            <ul>
              <h1 className="font-[700] text-[18px]">Product</h1>
              <li>Overview</li>
              <li>Pricing</li>
              <li>Customer stories</li>
            </ul>
          </div>

          <div>
            <ul>
              <h1 className="font-[700] text-[18px]">Resources</h1>
              <li>Blog</li>
              <li>Guides & tutorials</li>
              <li>Help center</li>
            </ul>
          </div>

          <div>
            <ul>
              <h1 className="font-[700] text-[18px]">Company</h1>
              <li>About us</li>
              <li>Careers</li>
              <li>Media kit</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Section ends here */}
    </>
  );
};

export default page;
