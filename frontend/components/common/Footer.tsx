import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-16">
        
        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-block text-2xl font-bold tracking-tight text-white"
            >
              VirtualFit<span className="text-purple-400"> AI</span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
              Experience fashion differently with AI-powered virtual
              try-on technology. Visualize your next look before you
              actually wear it.
            </p>

            <p className="mt-5 text-sm text-slate-500">
              Powered by AI • Built for personalized fashion
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Product
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/try-on"
                  className="transition-colors hover:text-white"
                >
                  Virtual Try-On
                </Link>
              </li>

              <li>
                <Link
                  href="/#features"
                  className="transition-colors hover:text-white"
                >
                  Features
                </Link>
              </li>

              <li>
                <Link
                  href="/#how-it-works"
                  className="transition-colors hover:text-white"
                >
                  How It Works
                </Link>
              </li>

              <li>
                <Link
                  href="/#demo"
                  className="transition-colors hover:text-white"
                >
                  Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 VirtualFit AI. All rights reserved.
          </p>

          <p>
            Built for Personalized Fashion. Made with ❤️ by the VirtualFit AI Team.
          </p>
        </div>
      </div>
    </footer>
  );
}