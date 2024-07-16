import React from "react";

function Hero() {
  return (
    <div className=" container mx-auto">
      <div>
        <div>
          <div className="text-white hero-slide py-16 space-y-4 px-10 flex flex-col items-end">
            <p className="font-semibold text-base text-start lg:text-2xl">
              Build your skills not your resume
            </p>
            <p className="lg:text-3xl font-bold">
              &quot;Anyone who has never made a mistake<br></br> has never tried
              anything new&quot;
            </p>
            <p className="font-semibold lg:text-2xl">- Albert Einstein</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
