import SectionTitle from "./SectionTitle";
import { CheckIcon } from "@heroicons/react/24/solid"; // Import Heroicons check

const reasons = [
  "Gain Knowledge and Insights from Top Industry Leaders and Experts from across the globe",
  "Network with Industry Peers in a solution-oriented environment",
  "Discuss Significant Partnerships and Collaborations with Industry leaders",
  "Deep Dive into Insights derived from real-time case studies",
  "Build Industry Ecosystem Collaboration to address latest challenges",
];

export default function WhyAttend() {
  return (
    <section
      id="attend"
      className="relative bg-white py-20 text-black"
    >
      {/* subtle top border / accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* top label + main heading */}
        <div className="text-center mb-12">
          <p className="text-sm sm:text-base font-semibold tracking-[0.28em] text-black uppercase">
            Why Attend
          </p>
        </div>

        {/* Section Title */}
        <div className="mb-8">
          <SectionTitle title="Why Attend?" className="text-black" />
        </div>

        {/* 2-column layout */}
        <div className="grid gap-12 md:grid-cols-2 items-start">
          {/* left: paragraphs */}
          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-900">
            <p>
              The 2nd Annual CX &amp; Loyalty Summit MENA 2023 will bring together senior
              industry professionals across all industries and verticals to talk all
              things CX, EX, Loyalty, Customer Service, Digital Trends and much more.
              The Summit will explore emerging CX strategies, the latest technologies –
              Digital, Automation and best practices that will keep your organization at
              the forefront of CX, EX &amp; CL excellence. Delegates will experience a
              power-packed agenda consisting of presentations, panel discussions and
              keynotes from globally renowned speakers, panelists, and moderators. At
              the event, you will have the opportunity to network with and gain
              knowledge from industry specialists from around the globe and form
              partnerships with these specialists.
            </p>

            <p>
              At 2nd Annual CX &amp; Loyalty Summit MENA 2023, you’ll hear the most
              innovative approaches that the world’s leading organizations are deploying
              to manage customer interactions and maximize customer value. If you are
              ready to innovate and join the ranks of the biggest innovators while
              resonating with the following reasons compelling enough to attend, then
              register today:
            </p>
          </div>

          {/* right: reasons cards */}
          <ul className="space-y-5">
            {reasons.map((reason, index) => (
              <li
                key={index}
                className="group flex items-start gap-4 rounded-xl border border-gray-300 bg-white px-5 py-4 shadow transition 
                           hover:border-black hover:shadow-lg hover:-translate-y-1"
              >
                {/* circular check icon using Heroicons */}
                <span className="mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-full border border-black bg-black text-white transition group-hover:bg-white group-hover:text-black">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <span className="text-base sm:text-lg text-gray-900">
                  {reason}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
