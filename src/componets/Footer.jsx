import { Link } from "react-router-dom";

const Footer = () => {
  const linkSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Project", path: "/projects/jh2345kjh334hhk2i343er" },
        { label: "About Us", path: "https://vedport.vercel.app/" },
        { label: "Contact Us", path: "/contact/73sds129dfdw3424sds" },
        { label: "My Skills", path: "/skills/08wa3sdw06dd5v0qe9qw42"},
      ],
    },
    {
      title: "Follow Us",
      links: [
        { label: "LinkedIn", path: "https://www.linkedin.com/in/ved-patel-65a39133b/", external: true },
        { label: "Twitter", path: "https://x.com/VedPatel171094", external: true },
        { label: "GitHub", path: "https://github.com/vedpatel-code", external: true },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", path: "/privacy/545dfsd4454sdf44df5", external: true },
        { label: "Terms", path: "/terms/234lf234nnjo2o3o6n22ljn", external: true },
      ],
    },
  ];

  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 mt-30">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        
        {/* Brand */}
        <div>
          <h1 className="font-semibold text-black">VED PATEL</h1>
          <p className="max-w-[410px] mt-6 text-sm">
            Building modern, scalable web experiences with clean design and
            performance in mind.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-6">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 mb-3">
                {section.title}
              </h3>

              <ul className="text-sm space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    {link.external ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-gray-700 transition"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="hover:underline hover:text-gray-700 transition"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <p className="py-4 text-center text-sm text-gray-500/80">
        © 2025 Ved Patel. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;