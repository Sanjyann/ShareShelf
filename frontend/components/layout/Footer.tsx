
import Link from "next/link";
import { Share2, Mail, Code, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#52796F] bg-[#354F52] pb-8 pt-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#52796F]">
                <Share2 className="h-4 w-4" />
              </div>

              <span className="text-xl font-bold">
                ShareShelf
              </span>
            </div>

            <p className="text-sm leading-relaxed text-[#DCE9E3]">
              Empowering campus communities to share resources,
              reduce waste, and build trust locally.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#DCE9E3]">
              Platform
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/explore" className="hover:text-white">
                  Explore Resources
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-white">
                  Add Listing
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-white">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#DCE9E3]">
              Categories
            </h4>

            <ul className="space-y-2 text-sm text-gray-300">
              <li>Textbooks & Notes</li>
              <li>Electronics & Calculators</li>
              <li>Sports Equipment</li>
              <li>Lab Gear & Tools</li>
            </ul>
          </div>

          {/* Trust & Safety */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#DCE9E3]">
              Trust & Safety
            </h4>

            <ul className="space-y-2 text-sm text-gray-300">
              <li>Community Guidelines</li>
              <li>Peer Ratings</li>
              <li>Campus Verification</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between space-y-4 border-t border-[#52796F]/40 pt-8 text-sm text-[#DCE9E3] md:flex-row md:space-y-0">

          <p>
            © {new Date().getFullYear()} ShareShelf Platform.
            Built for Community Sharing.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code className="h-5 w-5 transition-colors hover:text-white" />
            </a>

            <a
              href="https://example.com"
              aria-label="Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="h-5 w-5 transition-colors hover:text-white" />
            </a>

            <a
              href="mailto:hello@shareshelf.com"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 transition-colors hover:text-white" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
