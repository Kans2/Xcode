import SectionTitle from "./SectionTitle";

// Helper component for the Card structure
const StaggeredCard = ({ title, description, imageUrl, isImageLeft }) => (
  <div 
    className="min-h-[80vh] py-12 flex items-center justify-center bg-white text-black" // reduced height and padding
  >
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      
      <div className={`w-full ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-72 sm:h-80 object-cover rounded-lg shadow-xl" // slightly smaller image height
        />
      </div>

      <div className={`w-full ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
        <h3 className="mt-4 lg:mt-0 text-3xl sm:text-4xl font-extrabold tracking-tight">
          {title}
        </h3>

        <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export default function WhySponsor() {
  
  const cards = [
    {
      title: "Demonstrate Thought Leadership",
      description: "Deliver impactful keynotes or moderate CX panels in front of high-value decision-makers. Position your brand as an industry authority.",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      isImageLeft: true,
    },
    {
      title: "Network & Generate Leads",
      description: "Connect with senior leaders, explore partnerships, and build high-value business pipelines. Access top CXOs and decision-makers in the region.",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      isImageLeft: false,
    },
    {
      title: "Strong Brand Positioning",
      description: "Position your brand in front of CMOs, CX Heads & Loyalty Directors seeking cutting-edge solutions. Maximize visibility before, during, and after the event.",
      imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      isImageLeft: true,
    },
  ];

  return (
    <div id="sponsor">
      {/* Header Section */}
      <section className="py-16 bg-white text-black"> {/* reduced from py-20 */}
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-10"> {/* reduced mb */}
            <p className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-gray-500">
              Sponsors
            </p>

            <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Why <span className="border-b-4 border-black pb-1">Sponsor?</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto font-medium">
              Connect with CX innovators, loyalty leaders, and global decision-makers shaping the future of customer experience.
            </p>
          </div>

          {/* Intro */}
          <div className="text-base sm:text-lg leading-relaxed text-gray-800 font-medium max-w-4xl mx-auto">
            <p>
              2nd Annual CX & Loyalty Summit MENA 2023 gives solution providers access to 
              CXOs, Heads of Marketing, Heads of Customer Experience, Loyalty Leaders, 
              and Digital Transformation Heads across BFSI, Retail, E-commerce, Telco, Hospitality and more.
            </p>
          </div>
        </div>
      </section>

      {/* Staggered Cards */}
      <div className="relative">
        {cards.map((card, index) => (
          <StaggeredCard 
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            isImageLeft={index % 2 === 0}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-0 bg-black text-white text-center py-14 px-6 w-full">
        <p className="text-3xl sm:text-4xl font-extrabold">
          Ready to Sponsor This Event?
        </p>

        <p className="mt-4 text-base sm:text-lg text-gray-300">
          Learn more about high-ROI sponsorship and exhibition opportunities.
        </p>

        <p className="mt-6 text-xl sm:text-2xl font-bold">📞 +91 9876543210</p>
        <p className="text-xl sm:text-2xl font-bold">📧 abcd@gmail.com</p>
      </div>
    </div>
  );
}
