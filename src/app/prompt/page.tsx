import Link from "next/link";

export default function Prompt() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center p-6 md:p-0">
      <center className="lg:max-w-[524px] h-auto border-[1px] border-[rgba(0,0,0,0.175)] rounded-[0.375rem]">
        <img
          src="/img/card_img.jpg"
          alt="card-image"
          className="lg:max-w-[524px] max-h-[263px] rounded-t-[0.375rem]"
        />

        <div className="p-[1rem] text-left">
          <h2 className="text-[#212529] text-[24px] font-[600] mb-[0.2rem]">
            How to keep your account secure
          </h2>
          <p className="font-normal text-[0.955rem]">
            We'll take you through some steps to help you protect your account
          </p>
          <p className="text-[0.955rem] ml-5 my-3 mt-8 text-[#212529BF]">
            Follow the instructions carefully to ensure a vivid validation of
            your account
          </p>
          <p className="text-[0.955rem] ml-5 my-3 mb-5 text-[#212529BF]">
            How goal is to make our community safe and secure for everyone
          </p>

          <Link href={'/account-support'}>
            <button className="w-full bg-[#0D6EFD] py-[6px] rounded-[0.375rem] text-white text-[16px] ">
              Continue
            </button>
          </Link>
        </div>
      </center>
    </div>
  );
}
