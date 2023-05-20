import React from "react";

const ImageSection = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 grid lg:grid-cols-2 gap-4">
      {/* Left Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="object-cover w-full h-full p-2 row-span-3"
          src="https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1253i215%2F4dqa00n6aqmmmqe97ze0vhy6m4i215&option=N&permitphotoenlargement=false&w=1600"
          alt="/"
        />
        <img
          className="object-cover w-full h-full p-2 row-span-2"
          src="https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1253i215%2Fb7qzm8v1z0mw49yam92bkwph67i215&option=N&permitphotoenlargement=false&w=1600"
          alt="/"
        />
        <img
          className="object-cover w-full h-full p-2 row-span-2"
          src="https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1253i215%2Fzmfp1v0fvy6smp23dwj3ffynm5i215&option=N&permitphotoenlargement=false&w=1600"
          alt="/"
        />
        <img
          className="object-cover w-full h-full p-2 row-span-3"
          src="https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1253i215%2Fgmwdk86dcwy8mx63vpvk1g84q1i215&option=N&permitphotoenlargement=false&w=1600"
          alt="/"
        />
        <img
          className="object-cover w-full h-full p-2 row-span-2"
          src="https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1253i215%2F7sfarvk12eejmap41xb0rqqbg2i215&option=N&permitphotoenlargement=false&w=1600"
          alt="/"
        />
      </div>
      {/* Right side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">
          Sonoma Country Country Living
        </h3>
        <p className="text-2xl py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
          voluptatum.
        </p>
        <p className="pb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quis
          ad quae fugiat nemo tempora aperiam dolor repellendus exercitationem.
          Accusantium, facilis! Possimus eligendi, libero accusamus incidunt
          quam voluptates commodi delectus.
        </p>
        <div>
          <button className="border py-2 px-3 rounded-full border-black mr-4 hover:shadow-xl">
            Learn More
          </button>
          <button className="border py-2 px-3 rounded-full border-black hover:shadow-xl">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
