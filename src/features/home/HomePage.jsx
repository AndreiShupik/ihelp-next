import React from "react";

import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ImpactSection from "./ImpactSection";
import JoinUsSection from "./JoinUsSection";
import PhotoOfChanges from "./PhotoOfChanges";
import OurPartners from "./OurPartners";
import OurInitiatives from "./OurInitiatives";
import AidForUkraine from "./AidForUkraine";
import BlogSection from "./BlogSection";

function HomePage({ posts }) {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ImpactSection />
      <JoinUsSection />
      <PhotoOfChanges />
      <OurPartners />
      <OurInitiatives />
      <AidForUkraine />
      <BlogSection posts={posts} />
    </main>
  );
}

export default HomePage;
