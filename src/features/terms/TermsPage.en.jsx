import React from "react";
import Link from "next/link";

import * as styles from "./TermsPage.module.scss";

export default function TermsPage() {
  return (
    <section className={styles.termsWrapper}>
      <h1>TERMS OF USE</h1>

      <p>
        Welcome to the website of the charitable organisation <em>iHELP (“I Help”)</em> (hereinafter – «the
        Foundation»). By accessing or using our website at <a href="https://theihelp.org">theihelp.org</a> (hereinafter
        – «the Site»), you agree to the following terms. Please read them carefully before using the Site.
      </p>

      <h2>1. General Provisions</h2>
      <p>
        These Terms of Use govern your access to and use of the Site located at{" "}
        <a href="https://theihelp.org">https://theihelp.org</a>, and all of its subdomains. By using the Site, you
        confirm that you have read, understood, and agree to be bound by these Terms.
      </p>

      <h2>2. Purpose of the Site</h2>
      <p>
        The Site is designed to inform the public about the Foundation’s work, fundraising campaigns, completed and
        ongoing projects, and other aspects of charitable activity. All content on the Site is provided for
        informational and charitable purposes only.
      </p>

      <h2>3. Use of Site Materials</h2>
      <ul>
        <li>
          You are free to view, download, and share materials from the Site for personal, non-commercial use only.
        </li>
        <li>
          Any reproduction, publication, or distribution of Site materials for commercial purposes without the written
          consent of the Foundation is strictly prohibited.
        </li>
        <li>When using any materials, credit must be given to iHELP (“I Help”), along with a link to the Site.</li>
      </ul>

      <h2>4. Disclaimer of Liability</h2>
      <ul>
        <li>
          - The Foundation makes every effort to ensure the accuracy and relevance of the information provided on the
          Site but does not guarantee its completeness or error-free nature.
        </li>
        <li>
          - The Foundation is not liable for any damage or loss resulting from the use of the Site or reliance on the
          information provided.
        </li>
        <li>
          - The Site may contain links to third-party resources, for which the Foundation bears no responsibility in
          terms of content or security.
        </li>
      </ul>

      <h2>5. Donations</h2>
      <p>
        All donations made through the Site are voluntary and non-refundable. Users have no right to demand the return
        of donated funds, except as permitted by the applicable laws of Ukraine.
      </p>

      <h2>6. Personal Data Protection</h2>
      <p>
        The processing of users’ personal data is carried out in accordance with the Foundation’s{" "}
        <Link href="/privacy">Privacy Policy</Link> and applicable Ukrainian data protection legislation.
      </p>

      <h2>7. Changes to the Terms of Use</h2>
      <p>
        The Foundation reserves the right to update these Terms of Use at any time. The current version is always
        available on this page. Continued use of the Site after changes have been made constitutes your acceptance of
        the revised Terms.
      </p>

      <h2>8. Contact Information</h2>
      <p>If you have any questions regarding these Terms of Use, please contact us:</p>
      <span>
        Email: <Link href="mailto:info@theihelp.org">info@theihelp.org</Link>{" "}
      </span>
      <br />

      <span>
        Phone: <Link href="tel:+380636123224">+38 (063) 612-32-24</Link>
      </span>
      <br />
      <span>Address: Kyiv, Ukraine</span>

      <p className={styles.published}>
        <em>
          Last updated: <time dateTime="2025-08-11">11 August 2025</time>
        </em>
      </p>
    </section>
  );
}
