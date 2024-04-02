import ContactList from "@/components/contact-list";
import MotionDiv from "@/components/motion-div";

export default function contact() {
  return (
    <section
      className="my-4 mb-28 flex flex-col items-center gap-5 text-center md:mt-8"
      id="contact"
    >
      <MotionDiv>
        <h2 className="mb-4 text-[1.4rem] md:text-[2rem]">Contact</h2>
      </MotionDiv>
      <ContactList />
    </section>
  );
}
