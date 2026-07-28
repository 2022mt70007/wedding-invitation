import { Hero } from "@/components/sections/Hero";
import { CountdownSection } from "@/components/sections/CountdownSection";
import { InviteMessage } from "@/components/sections/InviteMessage";
import { EventTimeline } from "@/components/sections/EventTimeline";
import { Venue } from "@/components/sections/Venue";
import { Gallery } from "@/components/sections/Gallery";
import { Family } from "@/components/sections/Family";
import { ShareButtons } from "@/components/sections/ShareButtons";
import { RsvpCard } from "@/components/sections/RsvpCard";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CountdownSection />
      <InviteMessage />
      <EventTimeline />
      <Venue />
      <Gallery />
      <Family />
      <ShareButtons />
      <RsvpCard />
      <Footer />
    </main>
  );
}
