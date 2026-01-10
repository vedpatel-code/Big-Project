import React from "react";

const Terms = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16 text-slate-800">
      <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>

      <p className="text-sm text-slate-500 mb-10">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      {/* Introduction */}
      <section className="mb-10">
        <p>
          By accessing or using this website, you agree to be bound by these
          Terms and Conditions. If you do not agree, stop using the site. There
          is no workaround or exception.
        </p>
      </section>

      {/* Use of Website */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Use of the Website</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>You must use this website only for lawful purposes.</li>
          <li>You may not misuse, abuse, or attempt to disrupt the website.</li>
          <li>You are responsible for any activity conducted under your access.</li>
        </ul>
      </section>

      {/* Intellectual Property */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Intellectual Property
        </h2>
        <p>
          All content on this website — including text, design, graphics, and
          code — is owned by us unless stated otherwise. You may not copy,
          distribute, or reuse any content without permission.
        </p>
      </section>

      {/* User Content */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">User Content</h2>
        <p>
          If you submit any content (messages, forms, feedback), you grant us the
          right to use it for operating and improving the service. Don’t submit
          anything you don’t have the right to share.
        </p>
      </section>

      {/* Third-Party Links */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Third-Party Links
        </h2>
        <p>
          This website may contain links to third-party websites. We are not
          responsible for their content, policies, or behavior. Click at your
          own risk.
        </p>
      </section>

      {/* Disclaimer */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Disclaimer</h2>
        <p>
          This website is provided “as is” without warranties of any kind. We do
          not guarantee accuracy, availability, or reliability. If something
          breaks, we’re not liable for your losses.
        </p>
      </section>

      {/* Limitation of Liability */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Limitation of Liability
        </h2>
        <p>
          We will not be liable for any direct, indirect, incidental, or
          consequential damages arising from your use of the website.
        </p>
      </section>

      {/* Termination */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Termination</h2>
        <p>
          We reserve the right to suspend or terminate access to the website at
          any time, without notice, if you violate these terms.
        </p>
      </section>

      {/* Changes */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Changes to These Terms
        </h2>
        <p>
          We may update these Terms at any time. Continued use of the website
          means you accept the updated version.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Contact</h2>
        <p>
          If you have questions about these Terms, contact us at:
          <br />
          <span className="font-medium">vvvedpatel@gmail.com</span>
        </p>
      </section>
    </main>
  );
};

export default Terms;