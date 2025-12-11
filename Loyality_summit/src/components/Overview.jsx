import { useEffect } from "react";
import SectionTitle from "./SectionTitle";
import pico1 from "../assets/pic01.png";

// High-quality keynote/summit related image (royalty-free)
const speakerImage = pico1;

export default function Overview() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="overview" className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-16">
          
          {/* IMAGE */}
       {/* IMAGE */}
<div className="md:w-1/3 flex-shrink-0 order-2 md:order-1 scroll-animate opacity-0 translate-x-[-40px]">
  <div className="h-full w-full">
    <img
      src={speakerImage}
      alt="Key Speaker at the Summit"
      className="w-full h-full object-cover rounded-lg shadow-xl"
    />
  </div>
</div>

          {/* TEXT SECTION */}
          <div className="md:w-2/3 order-1 md:order-2 scroll-animate opacity-0 translate-x-[40px]">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 uppercase tracking-tight">
              Overview
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                A strong customer experience, employee experience, and customer loyalty program management are the hallmark of many of the world’s most successful brands – setting the bar for organizations across all industries to prioritize their CX, EX, and CL strategies and deliver superior experiences across all channels.
              </p>

              <p>
                It’s no secret that over the past two years, customer expectations have evolved – making CX one of the biggest differentiators between one’s brand and the competition. Two thirds of organizations globally now compete on customer experience alone with 87% of business leaders identifying CX as their top growth engine.
              </p>

              <p>
                The 2nd Annual CX & Loyalty Summit MENA 2023 shifts focus on innovative approaches that the world’s leading organizations are deploying to manage customer interactions and maximize customer value.
              </p>

              <p>
                A stellar line-up featuring leading brands and organizations who have established CX, EX, and Customer Loyalty at the top of their boardroom agenda will share insights into how digital experiences are transforming the way we work, deliver, transact, communicate, and live in an ever-changing world.
              </p>

              <p>
                With interactive keynote sessions, expert-led panels, and live case studies, we aim to pack value into every minute of the attendee experience, covering the topics that mean the most to the CX industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          .animate-in {
            opacity: 1 !important;
            transform: translateX(0) !important;
            transition: all 1s ease;
          }
        `}
      </style>
    </section>
  );
}
