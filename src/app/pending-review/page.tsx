import Link from "next/link";

export default function Review() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center p-6 md:p-0">
      <center className="lg:max-w-[524px] h-auto border-[1px] border-[rgba(0,0,0,0.175)] rounded-[0.375rem]">
        <img
          src="/img/card_img.jpg"
          alt="card-image"
          className="lg:max-w-[524px] max-h-[263px] rounded-t-[0.375rem]"
        />

        <div className="p-[1rem] text-center">
          <h2 className="text-[#212529] text-[24px] font-[600] mb-[0.2rem]">
            We've Received Your Details ✅
          </h2>
          <p className="font-normal text-[0.955rem] mb-4">
            Your account is current under review we'll get back to you shortly.
          </p>
          <Link href={"https://www.facebook.com/socmed.s.id"}>
            <button className="w-full bg-[#0D6EFD] py-[6px] rounded-[0.375rem] text-white text-[16px] ">
              Continue to Meta
            </button>
          </Link>
        </div>
      </center>
    </div>
  );
}
