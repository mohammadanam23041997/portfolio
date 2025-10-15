import HeroImg from "@/assets/images/hero.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Full Stack Developer
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Mohammad Anam, a Full Stack Developer with over 6 years of experience specializing in MERN and MEAN stacks. I build scalable web applications and develop robust APIs to solve real-world problems with clean and efficient code.{" "}
                <span className="font-bold text-white">
                  I work with frameworks like Angular to streamline development workflows and boost developer productivity.
                </span>
              </p>
              <p className="text-white">
                I currently work as a Staff Engineer at Recordent, where I am involved in developing and evolving various backend systems and cloud solutions to support and scale our web applications.              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner and passionate about optimizing performance, enhancing automation, and delivering scalable, maintainable solutions.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Mohammad Anam
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
