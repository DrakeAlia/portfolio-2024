import ContactList from "@/components/contact-list";
import MotionText from "@/components/motion-text";
import MotionDiv from "@/components/motion-div";
import Image from "next/image";

export default function hero() {
  return (
    <section className="my-8 flex flex-col items-center justify-center">
      <h1 className="mb-4 text-[1.4rem] md:text-[2rem]">
        <MotionText delayOffset={0}>Hello, I&apos;m Drake Alia! 👋</MotionText>
      </h1>
      <div className="overflow-hidden md:p-4">
        <MotionDiv delayOffset={0.4}>
          <Image
            src="/images/hero.png"
            alt="hero"
            width={200}
            height={200}
            className="flex flex-col overflow-hidden rounded-lg"
          />
        </MotionDiv>
      </div>
      <div className="my-9 flex w-full flex-col gap-2 text-center lg:w-[50%]">
        <MotionDiv delayOffset={1.2}>
          <h1 className="text-2xl font-semibold">A UI Developer</h1>
        </MotionDiv>
        <MotionDiv delayOffset={1.4}>
          <p>
            Who is passionate and innovative UI Developer hailing from the
            vibrant and tech-forward Greater Seattle Area. With a strong
            foundation in TypeScript, Next.js, React, and Tailwind CSS, I
            specialize in crafting engaging, responsive, and user-friendly web
            experiences. My mission is to bring creative ideas to life through
            seamless and visually stunning interfaces that delight users and
            drive results.
          </p>
        </MotionDiv>
      </div>
      <div className="my-8">
        <ContactList delayOffset={1.45} showWhenInView={false} />
      </div>
    </section>
  );
}
