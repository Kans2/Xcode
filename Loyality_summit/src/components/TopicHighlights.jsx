import {
  UsersIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  StarIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  ArrowsRightLeftIcon,
  TicketIcon,
  Squares2X2Icon,
  PresentationChartLineIcon,
  MegaphoneIcon,
  CubeTransparentIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";
import SectionTitle from "./SectionTitle";

const topics = [
  { title: "Corporate Culture Focus: Driving CX transformation internally", icon: UsersIcon },
  { title: "Brand communities driving loyalty, retention & advocacy", icon: ChatBubbleLeftRightIcon },
  { title: "Hyper-personalization strategies & CX transformation", icon: SparklesIcon },
  { title: "How exceptional brands retain customers", icon: StarIcon },
  { title: "Improving Customer Experience & Operational Excellence", icon: Cog6ToothIcon },
  { title: "Using Data, CRM & Automation for friction-free experiences", icon: ChartBarIcon },
  { title: "Multichannel CX strategies for world-class service", icon: ArrowsRightLeftIcon },
  { title: "Driving customer loyalty and revenue via gamification", icon: TicketIcon },
  { title: "Tailoring multi-channel experience consistently", icon: Squares2X2Icon },
  { title: "Linking Voice of Employee & Voice of Customer", icon: PresentationChartLineIcon },
  { title: "Social media's role in shaping brand perception", icon: MegaphoneIcon },
  { title: "Advances in customer analytics & segmentation", icon: CubeTransparentIcon },
  { title: "Complaint handling as retention foundation", icon: GiftIcon },
  { title: "How loyalty programs boost revenue", icon: GiftIcon },
];

export default function TopicHighlights() {
  return (
    <section id="topics" className="py-20 bg-white font-sans text-black">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Titles */}
        <div className="text-center mb-12">
         
          <SectionTitle 
            title="Topics" 
            className="text-7xl md:text-6xl font-extrabold" 
          />
          <p className="mt-4 max-w-3xl mx-auto text-base text-gray-600">
            Explore the most relevant CX, loyalty, and digital transformation themes shaping customer-centric organizations today.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {topics.map(({ title, icon: Icon }, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-start p-6 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 shadow-sm hover:shadow-md transition"
            >
              <Icon className="h-10 w-10 text-black mb-4" />
              <p className="text-center text-sm sm:text-base font-medium text-gray-900">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
