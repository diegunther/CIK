import Link from "next/link";

const NAV_LINKS = [
  { href: "/#what", label: "What We Do" },
  { href: "/#why", label: "Why It Matters" },
  { href: "/#themes", label: "Research Themes" },
  { href: "/#projects", label: "Projects" },
  { href: "/#learning", label: "Learning & Teaching" },
  { href: "/#team", label: "Team" },
];

const RESEARCH_LINKS = [
  { href: "#", label: "Publications" },
  { href: "#", label: "Methodologies" },
  { href: "#", label: "Open Toolkits" },
  { href: "#", label: "Community Partners" },
  { href: "#", label: "Working Papers" },
];

export function Footer() {
  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "lab@vu.nl";

  return (
    <footer id="contact" className="bg-dark text-[#aaa] pt-16 pb-8 px-6 md:px-10">
      <div className="max-w-content mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="font-serif text-lg text-white block mb-2">
              Co-Creation for Inclusive Knowledges Lab
            </span>
            <p className="text-sm leading-relaxed max-w-[280px]">
              A research lab at Vrije Universiteit Amsterdam, committed to
              building knowledge that includes, centres, and serves all
              communities.
            </p>
            <div className="flex gap-4 mt-6 text-sm">
              <a
                href="#"
                className="text-[#999] hover:text-orange transition-colors no-underline"
              >
                Twitter
              </a>
              <span className="text-[#444]">·</span>
              <a
                href="#"
                className="text-[#999] hover:text-orange transition-colors no-underline"
              >
                LinkedIn
              </a>
              <span className="text-[#444]">·</span>
              <a
                href="#"
                className="text-[#999] hover:text-orange transition-colors no-underline"
              >
                ResearchGate
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h5 className="text-white text-xs uppercase tracking-widest mb-4 font-medium">
              Navigate
            </h5>
            <ul className="flex flex-col gap-2 list-none m-0 p-0">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#999] hover:text-orange transition-colors no-underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research */}
          <div>
            <h5 className="text-white text-xs uppercase tracking-widest mb-4 font-medium">
              Research
            </h5>
            <ul className="flex flex-col gap-2 list-none m-0 p-0">
              {RESEARCH_LINKS.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-[#999] hover:text-orange transition-colors no-underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white text-xs uppercase tracking-widest mb-4 font-medium">
              Contact
            </h5>
            <ul className="flex flex-col gap-2 list-none m-0 p-0 text-sm text-[#999]">
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="hover:text-orange transition-colors no-underline"
                >
                  {contactEmail}
                </a>
              </li>
              <li>
                <a
                  href="https://vu.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange transition-colors no-underline"
                >
                  Vrije Universiteit Amsterdam
                </a>
              </li>
              <li>De Boelelaan 1105</li>
              <li>1081 HV Amsterdam</li>
              <li>The Netherlands</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2e2e2e] pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-[#666]">
          <span>
            © {new Date().getFullYear()} Co-Creation for Inclusive Knowledges
            Lab,{" "}
            <a
              href="https://vu.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange no-underline hover:underline"
            >
              Vrije Universiteit Amsterdam
            </a>
          </span>
          <span>Designed with care for accessibility and inclusion</span>
        </div>
      </div>
    </footer>
  );
}
