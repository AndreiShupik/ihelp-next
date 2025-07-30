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

// import AboutHero from "../AboutPage/AboutHero";

// import OurProjectsPage from "../OurProjects/OurProjectsPage";

// import KhersonChildrenPage from "../KhersonChildrenPage/KhersonChildrenPage";

// import FrontlinePeoplePage from "../FrontlinePeoplePage/FrontlinePeoplePage";

// import SocialTaxiPage from "./SocialTaxiPage";

// import * as styles from "./HomePage.module.scss";

function HomePage() {
  return (
    <main>
      {/* <AboutHero /> */}

      <HeroSection />
      <AboutSection />
      <ImpactSection />
      <JoinUsSection />
      <PhotoOfChanges />
      <OurPartners />
      <OurInitiatives />
      <AidForUkraine />
      <BlogSection />

      {/* <OurProjectsPage /> */}
      {/* <KhersonChildrenPage /> */}
      {/* <FrontlinePeoplePage /> */}
      {/* <SocialTaxiPage /> */}
    </main>
  );
}

export default HomePage;
