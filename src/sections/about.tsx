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
              I&apos;m a passionate and innovative UI Developer hailing from the
              vibrant and tech-forward Greater Seattle Area. With a strong
              foundation in TypeScript, Next.js, React, and Tailwind CSS, I
              specialize in crafting engaging, responsive, and user-friendly web
              experiences. My mission is to bring creative ideas to life through
              seamless and visually stunning interfaces that delight users and
              drive results.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <p>
              I thrive on challenges and continuously strive to push the
              boundaries of what&apos;s possible in web development. Whether
              it&apos;s building dynamic applications or designing intuitive
              user interfaces, I am dedicated to delivering high-quality
              solutions that exceed expectations.
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
