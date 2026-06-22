import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import HeroSection from "../components/Herosection";
import ProjectsSection from "../components/ProjectSection";
import ScroolProgress from "../components/ScroolProgress";
import VanishNav from "../components/VanishNav";
import StackSection from "../components/StackSection";
import CertificationsSection from "../components/CertificationsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <ScroolProgress />
      <VanishNav />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <StackSection />
      <CertificationsSection />
      <ContactSection />

      <Footer />
    </>
  );
}

export default Home;
