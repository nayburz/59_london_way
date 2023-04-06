const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1253i215%2F25h2s2yrn779m56qjn6jxj4v10i215&option=N&permitphotoenlargement=false&w=1600"
        alt="/"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen " />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>Sonoma, California</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            59 London Way
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl pw-2 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ab
            exercitationem modi cumque facilis earum provident odit, commodi eos
            quia consequuntur illum repellendus nobis praesentium recusandae et
            mollitia officiis possimus!
          </p>
          <button className="border py-2 px-3 rounded-full bg-white text-black">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
