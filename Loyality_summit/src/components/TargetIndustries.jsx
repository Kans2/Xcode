import {
  BanknotesIcon,
  ShoppingBagIcon,
  SignalIcon,
  BuildingOfficeIcon,
  GlobeAmericasIcon,
  PaperAirplaneIcon,
  TruckIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import SectionTitle from "./SectionTitle";

const industries = [
  { label: "BFSI", icon: BanknotesIcon },
  { label: "Retail & E-Commerce", icon: ShoppingBagIcon },
  { label: "Telecommunication", icon: SignalIcon },
  { label: "Hospitality", icon: BuildingOfficeIcon },
  { label: "Travel & Tourism", icon: GlobeAmericasIcon },
  { label: "Aviation", icon: PaperAirplaneIcon },
  { label: "FMCG & CPG", icon: TruckIcon },
  { label: "Others", icon: Squares2X2Icon },
];

export default function TargetIndustries() {
  return (
    <section
      id="industries"
      className="relative py-16 px-6 bg-white text-black"
    >
      <div className="relative max-w-6xl mx-auto">
        
        {/* main title */}
        <div className="mb-10">
          <p className="text-sm font-semibold tracking-[0.3em] text-gray-500">
            INDUSTRY
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide leading-tight text-black">
            BREAKDOWN
          </h2>
        </div>

        {/* section title */}
        <div className="mb-4">
          <SectionTitle title="Target Industries" />
        </div>

        {/* cards */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map(({ label, icon: Icon }, index) => (
            <div
              key={label}
              className={`group relative flex flex-col items-center justify-center gap-3 
              rounded-xl border border-gray-200 bg-gray-50 py-8 transition 
              hover:bg-gray-100 fade-up`}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {/* icon */}
              <Icon className="h-8 w-8 text-black transition-transform duration-200 group-hover:scale-110" />

              {/* label */}
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-black uppercase">
                {label}
              </span>

              {/* underline */}
              <span className="mt-1 h-0.5 w-6 origin-center scale-x-0 bg-black transition-transform duration-200 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
