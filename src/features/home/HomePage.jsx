import React from "react";

import HeroSection from "./HeroSection";
// import AboutSection from "./AboutSection";
import OurProjectsProjects from "./OurProjectsProjects";
import ImpactSection from "./ImpactSection";
import WatchNow from "./WatchNow";
import JoinUsSection from "./JoinUsSection";
import PhotoOfChanges from "./PhotoOfChanges";
import MediaCarousel from "./MediaCarousel";
import OurPartners from "./OurPartners";
import OurInitiatives from "./OurInitiatives";
import AidForUkraine from "./AidForUkraine";
import BlogSection from "./BlogSection";

function HomePage({ posts, media }) {
  return (
    <main>
      <HeroSection />
      {/* <AboutSection /> */}
      <OurProjectsProjects />
      <ImpactSection />
      <WatchNow />
      <JoinUsSection />
      <PhotoOfChanges />
      <MediaCarousel media={media} />
      <OurPartners />
      <OurInitiatives />
      <AidForUkraine />
      <BlogSection posts={posts} />
    </main>
  );
}

export default HomePage;
