import React from "react";

import OurProjectsTitle from "./OurProjectsTitle";
// import OurProjectsProjects from "./OurProjectsProjects";
import AboutSection from "./AboutSection";
import ImpactBlock from "./ImpactBlock";
import DownloadsBlock from "./DownloadsBlock";
import CtaForm from "../../components/ui/CtaForm/CtaForm";

// import OurProjectsPage from "./OurProjectsPage";

// import * as styles from "./HomePage.module.scss";

function OurProjectsPage() {
  return (
    <main>
      <OurProjectsTitle />
      <AboutSection />
      <ImpactBlock />
      <DownloadsBlock />
      <CtaForm />
    </main>
  );
}

export default OurProjectsPage;
