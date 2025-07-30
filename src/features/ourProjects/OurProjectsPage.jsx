import React from "react";

import OurProjectsTitle from "./OurProjectsTitle";
import OurProjectsProjects from "./OurProjectsProjects";
import OurVision from "./OurVision";

// import OurProjectsPage from "./OurProjectsPage";

// import * as styles from "./HomePage.module.scss";

function OurProjectsPage() {
  return (
    <main>
      <OurProjectsTitle />
      <OurProjectsProjects />
      <OurVision />
    </main>
  );
}

export default OurProjectsPage;
