import React from "react";
import Link from "next/link";

import * as styles from "./PrivacyPage.module.scss";

function PrivacyPage() {
  return (
    <section className={styles.privacyWrapper}>
      <h1>WEBSITE PRIVACY POLICY</h1>
      <p className={styles.published}>
        <em>
          <time dateTime="2025-08-14">Effective Date: 14 August 2025</time>
        </em>
      </p>

      <p>
        The Charitable Organization <em>«I Help»</em> (iHELP), registered under Ukrainian law (EDRPOU code 44668404), is
        the owner and administrator of an online platform for collecting charitable donations. The platform supports
        humanitarian, social, and defence-related initiatives in Ukraine and is accessible at:{" "}
        <Link href="https://theihelp.org" target="_blank" rel="noopener noreferrer">
          theihelp.org
        </Link>
        .
      </p>

      <p>
        This Privacy Policy explains how we collect, use, and protect your personal information. It applies in the
        following cases:
      </p>
      <ul>
        <li>You visit our website;</li>
        <li>You make a donation;</li>
        <li>You provide your personal data in any other form to communicate with us.</li>
      </ul>

      <h2>1. Data Collection and Processing</h2>
      <p>
        The scope and method of data processing depend on your interaction with the website. Some data is provided
        directly by you, while other data is collected automatically.
      </p>

      <p>Legal grounds for processing include:</p>
      <ul>
        <li>- Your explicit consent;</li>
        <li>- The necessity of providing services or responding to your requests;</li>
        <li>- Our organisation’s legitimate interest that does not override your rights and freedoms;</li>
        <li>- A legal obligation to store or transfer data;</li>
        <li>- Protection of the organisation’s rights or in relation to legal proceedings.</li>
      </ul>

      <p>We may process the following types of data:</p>
      <ul>
        <li>Contact data: name, surname, email address, phone number;</li>
        <li>Technical data: IP address, browser type and version, operating system, location data;</li>
        <li>Usage statistics: pages visited, time spent, referral sources, etc.</li>
      </ul>

      <p>
        We may also obtain information from publicly available sources or third parties and combine it with existing
        data to improve service quality.
      </p>

      <h2>2. Use of Personal Data</h2>
      <p>Collected data may be used to:</p>
      <ul>
        <li>Process donations and orders;</li>
        <li>Provide reporting and informational support;</li>
        <li>Respond to your inquiries.</li>
      </ul>

      <p>We do not sell or disclose your personal data to third parties, except as required by law or this Policy.</p>

      <h2>3. Data Retention</h2>
      <p>
        Your data will be stored for as long as necessary to fulfil the purposes for which it was collected, or for the
        duration required by law.
      </p>

      <h2>4. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>- Access, update, or correct your personal data;</li>
        <li>- Request deletion or restriction of data processing;</li>
        <li>- Object to the use of your data;</li>
        <li>- Receive a copy of your data or transfer it to another controller (where technically feasible);</li>
        <li>- Withdraw your consent to processing (this will not affect the lawfulness of prior processing).</li>
      </ul>

      <p>
        To exercise your rights, please send a request to <Link href="mailto:info@theihelp.org">info@theihelp.org</Link>{" "}
        with the subject <em>«Personal Data Request»</em>, including your contact information and details of your
        inquiry. We will respond within 30 days.
      </p>

      <h2>5. Disclosure of Information</h2>
      <p>
        We may share personal data with government authorities in cases required by law, including for security purposes
        or upon request from law enforcement agencies.
      </p>

      <h2>6. Contact Information</h2>
      <p>For any questions or concerns regarding your data, please contact us:</p>
      <span>
        Email: <Link href="mailto:info@theihelp.org">info@theihelp.org</Link>{" "}
      </span>
      <br />

      <span>
        Phone: <Link href="tel:+380636123224">+38 (063) 612-32-24</Link>
      </span>
      <br />
      <span>Address: Kyiv, Ukraine</span>

      <h2>7. ЗChanges to This Policy</h2>
      <p>
        iHELP reserves the right to update this Privacy Policy at any time. The latest version will always be available
        on the website.
      </p>
    </section>
  );
}

export default PrivacyPage;
