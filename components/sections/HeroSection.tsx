import Link from "next/link";
import { HeroIllustration } from "@/components/illustrations/HeroIllustration";

export function HeroSection() {
  return (
    <div className="max-w-hero mx-auto">
      <section
        className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center
                   gap-10 px-6 md:px-10 pt-28 pb-16"
        aria-label="Hero"
      >
        {/* Text */}
        <div className="animate-[fadeUp_0.8s_ease_both]">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 text-orange text-xs
                       font-medium tracking-[0.1em] uppercase mb-6
                       before:block before:w-7 before:h-px before:bg-orange"
          >
            VU Amsterdam Research Lab
          </div>

          <h1
            className="font-serif text-[clamp(2.4rem,4.5vw,3.8rem)]
                       leading-[1.18] tracking-tight text-dark mb-6"
          >
            Co-creating knowledge for a more{" "}
            <em className="italic text-orange not-italic">just</em> society
          </h1>

          <p className="text-lg text-mid font-light max-w-[420px] mb-10 leading-[1.75]">
            Bringing together communities, researchers, and lived experiences
            to build knowledge that truly includes everyone.
          </p>

          <div className="flex gap-4 items-center flex-wrap">
            <Link
              href="#themes"
              className="bg-orange text-white px-8 py-3.5 rounded-full
                         text-sm font-medium no-underline
                         transition-[transform,box-shadow] duration-200
                         hover:-translate-y-0.5 hover:shadow-orange"
            >
              Explore our work
            </Link>
            <Link
              href="#what"
              className="text-dark text-sm font-normal no-underline
                         inline-flex items-center gap-2
                         transition-[gap,color] duration-200
                         hover:gap-3 hover:text-orange
                         after:content-['→']"
            >
              How we do it
            </Link>
          </div>
        </div>

        {/* Illustration */}
        <div
          className="flex justify-center items-center
                     order-first md:order-last
                     animate-[fadeUp_0.8s_0.2s_ease_both]"
        >
          <HeroIllustration />
        </div>
      </section>
    </div>
  );
}
