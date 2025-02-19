export default function Footer() {
  return (
    <div className="w-full h-auto md:min-h-[150px] lg:min-h-[200px] flex flex-col md:flex-row items-center px-10 md:px-20 lg:px-24 justify-between border-t-2 border-white space-y-5 md:space-y-0 lg:gap-x-10 mt-6">
      <div className="w-full md:w-1/3 text-center md:text-start text-base md:text-lg lg:text-xl">
        Designed and built by <span className="text-orange-400">Nishu</span> with <span className="text-orange-400">Love</span>
      </div>
      <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-center md:justify-between items-center text-center space-y-3 md:space-y-0">
        <a href="mailto:rawatnishu378@gmail.com" className="text-base md:text-lg lg:text-xl">
          rawatnishu378@gmail.com
        </a>
        <div className="text-base md:text-lg lg:text-xl">Delhi, India</div>
        <div className="flex gap-5 text-2xl md:text-3xl lg:text-4xl text-slate-700">
          <a href="https://github.com/NishuRawat06" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
            <i className="fa-brands fa-square-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/nishu-rawat-7a04622a2" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
