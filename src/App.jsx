import './index.css';

function App() {
  return (
    <main className="relative mx-auto w-full max-w-[640px] px-6 overflow-hidden min-h-screen pt-[30px] pb-[38px] flex flex-col bg-white">
      <span
        id="BackgroundGrey"
        className="bg-bookies-grey-light h-[206px] absolute top-0 left-0 w-full"
      />
      <nav className="flex items-center justify-between relative">
        <a href="index.html">
          <div className="size-[35px] shrink-0 rounded-full bg-white flex justify-center items-center hover:bg-bookies-hover-grey-light transition-all duration-300">
            <img src="/assets/images/icons/back.svg" alt="icon" className="size-4" />
          </div>
        </a>
        <button type="button" className="cursor-pointer">
          <div className="size-[35px] shrink-0 rounded-full bg-white flex justify-center items-center hover:bg-bookies-hover-grey-light transition-all duration-300">
            <img src="/assets/images/icons/love.svg" alt="icon" className="size-4" />
          </div>
        </button>
      </nav>
      <header className="mt-[30px] relative">
        <div className="p-[6px] mx-auto rounded-[19.5px] w-[150px] h-[195px] bg-white shrink-0">
          <div className="flex items-center justify-center rounded-[19.5px] overflow-hidden">
            <img
              src="/assets/images/thumbnails/details.png"
              alt="thumbnails"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h1 className="mt-5 text-center font-medium text-[22px] leading-[33px]">
          The Power of Hooked
        </h1>
        <p className="text-center text-bookies-grey mt-1">Growth Business</p>
        <p className="tracking-[0.57em] text-bookies-grey text-center mt-[10px]">
          •••
        </p>
        <h3 className="text-center mt-[10px] font-medium">by Nir Eyal</h3>
      </header>
      <section id="Sinopsis" className="mt-[30px] flex flex-col gap-2">
        <h2 className="text-bookies-grey">Sinopsis</h2>
        <p className="leading-[28px] text-bookies-black">
          Why do some products capture wide spread attention while others what makes
          us engage with people.
        </p>
      </section>
      <div className="flex flex-col justify-between flex-1">
        <section id="Keypoints" className="mt-[30px] flex flex-col gap-2">
          <h2 className="text-bookies-grey">Keypoints</h2>
          <div id="Points" className="flex flex-col gap-[14px]">
            <div className="point flex items-center gap-2">
              <img
                src="/assets/images/icons/bullet-point.svg"
                alt="icon"
                className="size-4 shrink-0"
              />
              <p>Medium chart of team product</p>
            </div>
            <div className="point flex items-center gap-2">
              <img
                src="/assets/images/icons/bullet-point.svg"
                alt="icon"
                className="size-4 shrink-0"
              />
              <p>Perdalam notifications</p>
            </div>
            <div className="point flex items-center gap-2">
              <img
                src="/assets/images/icons/bullet-point.svg"
                alt="icon"
                className="size-4 shrink-0"
              />
              <p>Membuat funnel marketing</p>
            </div>
          </div>
        </section>
        <a href="read.html" className="mt-[50px] mx-auto relative group">
          <div className="relative z-30 rounded-full bg-bookies-button-purple py-[13px] w-[200px] flex justify-center text-center text-white font-medium">
            Read Now
          </div>
          <span className="w-[218px] h-[36px] rounded-full bg-bookies-button-purple/40 absolute top-[22px] -left-[9px] blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </a>
      </div>
    </main>

  );
}

export default App;