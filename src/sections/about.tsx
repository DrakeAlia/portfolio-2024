import CoolPortraitCard from "@/components/cool-portrait-card";
import MotionDiv from "@/components/motion-div";
import Image from "next/image";

export default function about() {
  return (
    <section
      id="about"
      className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 md:my-20  md:max-w-full lg:flex-row lg:items-start lg:gap-16"
    >
      <div className="order-2 lg:order-1 lg:w-2/3">
        <MotionDiv delayOffset={0.2}>
          <h2 className="mb-4 text-[1.4rem] md:text-[2rem]">About Me</h2>
        </MotionDiv>
        <article className="flex flex-col gap-4">
          <MotionDiv delayOffset={0.4}>
            <p>
              As an ambitious entry-level Frontend Engineer, I specialize in
              creating innovative and user-friendly web applications, with a
              solid foundation in Next.js, TypeScript, React, Tailwind CSS, and
              Prisma.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <p>
              My ultimate goal is to enrich the web with unique yet accessible
              digital products that users love and benefit from. I am keen on
              collaboration, believing that sharing insights and innovative
              approaches with peers leads to more impactful and meaningful
              technology solutions.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.6}>
            <p>
              My approach to frontend engineering is akin to the art of
              cooking—a process where meticulous preparation, innovative use of
              ingredients, and an understanding of complex techniques come
              together to create something extraordinary.
            </p>
          </MotionDiv>
        </article>
      </div>
      <div className="lg:order-2 lg:w-1/3">
        <MotionDiv delayOffset={0.4}>
          <CoolPortraitCard className="hidden lg:block">
            <Image
              src="/photo.png"
              alt="photo"
              width={200}
              height={200}
              className="w-[350px] min-w-[300px] rounded-xl transition-all"
            />
          </CoolPortraitCard>
        </MotionDiv>
        <MotionDiv delayOffset={0.4}>
          <Image
            src="/photo.png"
            alt="photo"
            width={200}
            height={200}
            className="w-[350px] min-w-[300px] rounded-xl transition-all hover:rotate-3 hover:scale-105 lg:hidden"
          />
        </MotionDiv>
      </div>
    </section>
  );
}
