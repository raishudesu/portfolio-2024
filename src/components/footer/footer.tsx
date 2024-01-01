const Footer = () => {
  return (
    <footer className="min-h-20 bg-[#1c1917] text-[#f2f2f2]">
      <div className="h-full w-full text-sm flex flex-col justify-center items-center gap-3 py-6  ">
        <div className="flex gap-1 items-center">
          <span className="scroll-m-20 text-xl font-bold tracking-tight transition-colors first:mt-0 ">
            bnb.dev
          </span>
        </div>
        <span>@2024</span>
      </div>
    </footer>
  );
};

export default Footer;
