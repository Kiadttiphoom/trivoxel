import dynamic from "next/dynamic";
import { BackgroundDecoration } from "../components/Background";
import { HeroSection } from "../components/Hero";
import { IdentityWorkspace } from "../components/Identity";
import { ProfessionalPath } from "../components/Experience";
import { SystemDesign } from "../components/Architecture";

// Dynamic imports for heavy or non-critical client components
const FixedMascots = dynamic(() => import("../components/Mascots").then(mod => mod.FixedMascots), {
  ssr: true,
});

const ProjectGallery = dynamic(() => import("../components/Portfolio").then(mod => mod.ProjectGallery), {
  ssr: true,
});

const ContactFooter = dynamic(() => import("../components/Footer").then(mod => mod.ContactFooter), {
  ssr: true,
});

export default function Home() {
  // Serializable props for client components
  const sectionProps = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  } as const;

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden font-sans bg-[var(--color-bg-base)] text-[var(--color-text-main)]">
      
      {/* Background Blobs */}
      <BackgroundDecoration />

      {/* Hero Section (Critical/LCP) */}
      <HeroSection />

      {/* Main Bento Sections */}
      <IdentityWorkspace sectionProps={sectionProps} />
      
      <ProfessionalPath sectionProps={sectionProps} />

      <SystemDesign sectionProps={sectionProps} />

      <ProjectGallery sectionProps={sectionProps} />

      <ContactFooter sectionProps={sectionProps} />

    </main>
  );
}
