import SectionTitle from "./SectionTitle";

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
      className="relative bg-white py-16 text-black"
    >
      {/* subtle top border / accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* top label + main heading in black/emerald style */}
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.28em] text-emerald-600 uppercase">
            Why Attend
          </p>
         
        </div>

        {/* keep your SectionTitle but use as subheading */}
        <div className="mb-6">
          <SectionTitle title="Why Attend?" />
        </div>

        {/* 2-column layout: text + reasons */}
        <div className="grid gap-10 md:grid-cols-2 items-start">
          {/* left: original paragraphs, only layout/colors changed */}
          <div className="space-y-5 text-sm sm:text-base leading-relaxed text-gray-800">
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

          {/* right: reasons in clean cards on white */}
          <ul className="space-y-4">
            {reasons.map((reason, index) => (
              <li
                key={index}
                className="group flex items-start gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm 
                           transition hover:border-emerald-500 hover:shadow-md hover:-translate-y-0.5"
              >
                {/* circular check icon with subtle hover */}
                <span className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-emerald-50 text-emerald-600 text-sm font-bold transition group-hover:bg-emerald-600 group-hover:text-white">
                  ✔
                </span>
                <span className="text-sm sm:text-[0.95rem] text-gray-900">
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
