const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-between gap-8 pb-12 pt-4 md:pb-16 md:pt-4 lg:flex-row"
    >
      <img
        className="intersect-once intersect:motion-preset-slide-up motion-duration-700"
        src="/assets/image.png"
        alt=""
      />
      <div className="intersect-once intersect:motion-preset-slide-up motion-duration-700 flex max-w-xl flex-col gap-8 text-center lg:text-left">
        <h1 className="text-4xl font-bold text-neutral-800">About Me</h1>
        <p className="text-neutral-500 lg:text-lg">
          I am a Full Stack Developer, building solutions for the web. I have
          experience in building web applications using modern technologies like
          React, Node, Express, MongoDB, etc.
        </p>
        <a
          target="_blank"
          href="https://linkedin.com/in/yourdeepanshuverma"
          className="mt-4 w-full transform rounded-full bg-black px-6 py-3 text-center text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-neutral-100 hover:text-black hover:shadow-xl active:scale-95 sm:w-fit lg:px-12 lg:py-6"
        >
          More about me
        </a>
      </div>
    </div>
  );
};

export default About;
