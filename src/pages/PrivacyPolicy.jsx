import React from "react";

const PrivacyPolicy = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16 text-slate-800">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <p className="text-sm text-slate-500 mb-10">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      {/* Intro */}
      <section className="mb-10">
        <p>
          This Privacy Policy explains how we collect, use, and protect your
          information when you use our website and services. If you don’t agree
          with this policy, don’t use the site. Simple.
        </p>
      </section>

      {/* Information We Collect */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Personal Information:</strong> Name, email address, or other
            details you provide voluntarily (contact forms, subscriptions,
            accounts).
          </li>
          <li>
            <strong>Usage Data:</strong> Pages visited, browser type, device
            info, IP address, and general analytics data.
          </li>
        </ul>
      </section>

      {/* How We Use Data */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To operate and maintain the website</li>
          <li>To improve performance, features, and user experience</li>
          <li>To communicate with you when you contact us</li>
          <li>To prevent abuse, fraud, or security issues</li>
        </ul>
      </section>

      {/* Cookies */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Cookies</h2>
        <p>
          We may use cookies and similar technologies to understand usage
          patterns and improve the site. You can disable cookies in your
          browser, but parts of the site may stop working properly. That’s on
          you.
        </p>
      </section>

      {/* Third Parties */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Third-Party Services</h2>
        <p>
          We may use third-party tools (analytics, authentication, hosting).
          These services have their own privacy policies, and we are not
          responsible for how they handle your data.
        </p>
      </section>

      {/* Data Security */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
        <p>
          We take reasonable steps to protect your data. That said, no system is
          100% secure. If you think otherwise, you’re fooling yourself.
        </p>
      </section>

      {/* Your Rights */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal
          data by contacting us. We’ll comply where legally required.
        </p>
      </section>

      {/* Changes */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy at any time. Continued use of the
          site after changes means you accept the updated policy.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, contact us at:
          <br />
          <span className="font-medium">vvvedpatel@gmail.com</span>
        </p>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
