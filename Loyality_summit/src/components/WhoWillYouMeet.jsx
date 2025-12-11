import { useEffect } from "react";
import SectionTitle from "./SectionTitle";

// --- HIGH-QUALITY ONLINE IMAGES (ROYALTY-FREE) ---
const rolesData = [
  {
    title: "CXOs, VPs, Directors",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Chief Marketing Officers",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Heads of Customer Experience & UX",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Heads of Customer Insights & Analytics",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Heads of Digital Transformation",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Heads of Customer Loyalty & Brand Loyalty",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Heads of Customer Value & Loyalty Partnerships",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Heads of Rewards and Loyalty",
    image:
      "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&w=900&q=80",
  },
];

export default function WhoWillYouMeet() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("fade-up");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".scroll-animate").forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gray-50 py-16 md:py-20" id="meet">
      <SectionTitle title="Who Will You Meet?" />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
        {rolesData.map((role, index) => (
          <div
            key={index}
            className="scroll-animate opacity-0 translate-y-10
                       group overflow-hidden rounded-xl shadow-xl bg-white
                       transition duration-500 ease-in-out cursor-pointer
                       transform hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="h-48 sm:h-64 overflow-hidden">
              <img
                src={role.image}
                alt={role.title}
                className="w-full h-full object-cover
                           transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5 bg-white text-center border-t-4 border-indigo-600
                            transition-colors duration-300 group-hover:border-red-500">
              <h3 className="text-lg font-extrabold text-gray-800 leading-snug">
                {role.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Senior Leaders & Decision Makers
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Animation Styles */}
      <style>
        {`
          .fade-up {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition: all 0.9s ease-out;
          }
        `}
      </style>
    </section>
  );
}
