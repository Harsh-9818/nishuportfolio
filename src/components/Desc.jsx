export default function Intro() {
    return (
        <div className=" md:flex justify-around items-center px-4 md:px-32">
          <div className="w-[400] md:w-[800px] text-center md:text-start">
            <span className="text-lg md:text-3xl">Hi</span>
            <br />
            <span className="font-bold text-xl md:text-4xl">I am an aspiring Software Developer</span>
            <br />
            <span className=" w-[100px] md:w-[222px] text-lg md:text-3xl">I Simplify The Complex.</span>
            <br/>
            <span> </span>
          </div>
          <div className="w-[150px] md:w-[250px] h-[150px] md:h-[250px] mt-10 md:mt-0 mx-auto">
            <img
              src="/Image/picture2.jpeg"
              className="rounded-[50%] border-orange-400 border-4"
            />
          </div>
        </div>
    );
  }
  