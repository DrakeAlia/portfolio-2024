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
            src="/hero.png"
            alt="photo"
            width={200}
            height={200}
            className="flex flex-col overflow-hidden rounded-lg"
          />
        </MotionDiv>
      </div>
      <h1 className="text-2xl font-semibold text-center">
        <MotionDiv delayOffset={0.8}>Developer 🧑🏻‍💻</MotionDiv>
      </h1>
      <h1 className="text-2xl font-semibold text-center">
        <MotionDiv delayOffset={1}>Artist 🎨</MotionDiv>
      </h1>
      <h1 className="text-2xl font-semibold text-center">
        <MotionDiv delayOffset={1}>Cook 🧑‍🍳</MotionDiv>
      </h1>
      <div className="my-12 flex w-full flex-col gap-2 text-center lg:w-[50%]">
        <MotionDiv delayOffset={1.2}>
          <p>A Frontend Engineer</p>
        </MotionDiv>
        <MotionDiv delayOffset={1.4}>
          <p>
            Who hails from the vibrant and tech-forward Greater Seattle Area. I
            blend my expertise in Typescript, Next.js, React, and Tailwind CSS
            to craft engaging, responsive, and user-friendly web experiences.
          </p>
        </MotionDiv>
      </div>
      <div className="my-8">
        <ContactList delayOffset={1.45} showWhenInView={false} />
      </div>
    </section>
  );
}
