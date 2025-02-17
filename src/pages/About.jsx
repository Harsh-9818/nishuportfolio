export default function About() {
  return (
    <div className="px-10 sm:px:20 md:px-32 mt-10 sm:mt-28 flex flex-col gap-16">
      <div className="text-center sm:text-start sm:flex justify-between ">
        <div className="w-[300px] sm:w-[700px] flex flex-col gap-10">
          <div className="text-3xl font-bold">Hello!</div>
          <div className="text-lg ">
            I am Nishu Rawat ,a passionate computer science student with a
            strong interest in software development,problem solving .I enjoy
            building efficient and scalable applications while continuously
            learning new technologies. I'm always eager to take on new
            challenges, collaborate with others, and contribute to exciting tech
            solutions.
            <br />
            <span className="text-2xl">
              {" "}
              Let's connect and create something amazing!
            </span>
          </div>
        </div>
        <div>
          <img
            src="src/assets/Image/girl-programmer.webp"
            className="rounded-[50%] opacity-90 pl-5 mt-5 sm:mt-0"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-col-1 gap-5 sm:">
        <div className="w-[310px] md:w-[280px] xl:w-[320px] h-[130px] bg-[#252446] pl-5 transform transition duration-500 hover:scale-110">
          <div className="text-orange-400 text-2xl">Education:</div>
          <ul>
            <li>10 | CBSE | 72%</li>
            <li>12 | CBSE | 87%</li>
            <li>BCA at DSEU | 2023-2026 | 8.4 cgpa</li>
          </ul>
        </div>
        <div className="w-[310px] md:w-[280px] xl:w-[320px] bg-[#252446] pl-5 transform transition duration-500 hover:scale-110">
          <div className="text-orange-400 text-2xl">social profiles:</div>
          <ul>
            <li>
              <a
                href="https://github.com/NishuRawat06"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nishu-rawat-7a04622a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
        <div className="w-[310px] md:w-[280px] xl:w-[320px] bg-[#252446] pl-5 transform transition duration-500 hover:scale-110">
          <div className="text-orange-400 text-2xl">Contact Me:</div>
          <ul>
            <li>+91 98113342xx</li>
            <li><a href="mailto:rawatnishu378@gmail.com" className="hover:underline">rawatnishu378@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
