import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import WhoWillYouMeet from "./components/WhoWillYouMeet";
import TargetIndustries from "./components/TargetIndustries";
import WhyAttend from "./components/WhyAttend";
import TopicHighlights from "./components/TopicHighlights";
import WhySponsor from "./components/WhySponsor";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-20"> {/* offset for fixed navbar */}
        <Hero />
        <Overview />
        <WhoWillYouMeet />
        <TargetIndustries />
        <WhyAttend />
        <TopicHighlights />
        <WhySponsor />
        <Footer />
      </main>
    </div>
  );
}
