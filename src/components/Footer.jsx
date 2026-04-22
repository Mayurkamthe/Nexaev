const Footer = () => {
  const links = {
    Models:  ['NXT', 'REO', 'ERA', 'NEO MAX', 'TANK'],
    Company: ['About Us', 'Careers', 'Press', 'Sustainability', 'Blog'],
    Support: ['Find Dealer', 'Service Centers', 'Warranty', 'FAQ', 'Contact'],
  };

  const socials = [
    { label: 'Twitter',   href: 'https://twitter.com'   },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'LinkedIn',  href: 'https://linkedin.com'  },
    { label: 'YouTube',   href: 'https://youtube.com'   },
  ];

  return (
    <footer className="bg-bw-bg border-t border-bw-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#080C10"/>
                </svg>
              </div>
              <span className="font-display text-2xl tracking-widest text-white">
                NEEXA<span className="text-white">.EV</span>
              </span>
            </div>
            <p className="font-body text-bw-muted text-sm leading-relaxed max-w-xs mb-6">
              Building the future of electric mobility in India. Clean, smart, and powerful vehicles for every road.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-bw-border flex items-center justify-center text-bw-muted hover:text-white hover:border-white transition-all duration-300 font-mono text-xs"
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-5">{section}</h4>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item}>
                    <button
                      onClick={() => {}}
                      className="font-body text-sm text-bw-muted hover:text-white transition-colors duration-200 text-left"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-bw-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-bw-muted">
            2024 Neexa EV. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map(l => (
              <button
                key={l}
                onClick={() => {}}
                className="font-mono text-xs text-bw-muted hover:text-white transition-colors"
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
