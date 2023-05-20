const Rooms = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto py-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold">Fine Interior Rooms</h3>
        <p className="pt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
          impedit ab sapiente provident maiores quasi?
        </p>
      </div>
      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          className="object-cover w-full h-full"
          src="https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1253i215%2Fqrkjvdnza6t7m7a77dynxwdnr4i215&option=N&permitphotoenlargement=false&w=1600"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full"
          src="https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1253i215%2F6snwv3v4gejnm7pt233zembfe6i215&option=N&permitphotoenlargement=false&w=1600"
          alt="/"
        />
        <img
          className="object-cover w-full h-full"
          src="https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1253i215%2Fsdj9yqtygbye43668z0nyhgrb5i215&option=N&permitphotoenlargement=false&w=1600"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Rooms;
