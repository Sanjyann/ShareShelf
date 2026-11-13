
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { itemsService } from "@/services/items.service";
import {
  BookOpen,
  Laptop,
  Dumbbell,
  Wrench,
  Microscope,
  ArrowRight,
  Star,
  ShieldCheck,
  Users,
  RefreshCw,
} from "lucide-react";

export default async function LandingPage() {
  const [categories, recentItems] = await Promise.all([
    itemsService.getCategories(),
    itemsService.getRecentItems(),
  ]);

  const getCategoryIcon = (iconName: string) => {
    const iconClass = "h-6 w-6 text-[#52796F]";

    switch (iconName) {
      case "BookOpen":
        return <BookOpen className={iconClass} />;
      case "Laptop":
        return <Laptop className={iconClass} />;
      case "Dumbbell":
        return <Dumbbell className={iconClass} />;
      case "Wrench":
        return <Wrench className={iconClass} />;
      default:
        return <Microscope className={iconClass} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">

        {/* HERO SECTION */}
        <section className="bg-gradient-to-b from-[#DCE9E3]/40 to-[#F8F9F5] py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">

            <div className="space-y-6 text-center md:text-left">
              <span className="inline-block rounded-full bg-[#DCE9E3] px-3 py-1 text-xs font-semibold text-[#354F52]">
                Verified Community Sharing
              </span>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#242B2A] sm:text-5xl">
                Share More. Waste Less.{" "}
                <span className="text-[#52796F]">
                  Build Community.
                </span>
              </h1>

              <p className="mx-auto max-w-xl text-lg leading-relaxed text-[#78817D] md:mx-0">
                ShareShelf connects campus members to safely lend
                and borrow textbooks, calculators, lab gear, and
                electronics within a trusted peer network.
              </p>

              <div className="flex flex-col justify-center gap-4 pt-2 sm:flex-row md:justify-start">
                <Link
                  href="/explore"
                  className="flex items-center justify-center rounded-lg bg-[#52796F] px-6 py-3 font-medium text-white shadow-sm transition-colors hover:bg-[#354F52]"
                >
                  Explore Resources
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                <Link
                  href="/register"
                  className="flex items-center justify-center rounded-lg border border-[#52796F] px-6 py-3 font-medium text-[#354F52] transition-colors hover:bg-[#DCE9E3]/30"
                >
                  Start Sharing
                </Link>
              </div>
            </div>

            {/* HERO RESOURCE CARD */}
            <div className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="space-y-4">

                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DCE9E3] font-bold text-[#354F52]">
                      SJ
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#242B2A]">
                        Sarah Jenkins
                      </p>
                      <p className="text-xs text-[#78817D]">
                        Lending in North Campus
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-800">
                    Available
                  </span>
                </div>

                <div className="h-48 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?w=600&auto=format&fit=crop"
                    alt="Graphing calculator"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#242B2A]">
                    TI-84 Plus CE Graphing Calculator
                  </h3>
                  <p className="mt-1 text-xs text-[#78817D]">
                    Max duration: 14 days · Free peer borrowing
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* POPULAR CATEGORIES */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#242B2A]">
                Popular Categories
              </h2>
              <p className="text-sm text-[#78817D]">
                Browse items by academic and practical needs
              </p>
            </div>

            <Link
              href="/explore"
              className="hidden text-sm font-semibold text-[#52796F] hover:underline sm:block"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/explore?category=${cat.slug}`}
                className="group flex flex-col items-center rounded-xl border border-gray-100 bg-white p-5 text-center transition-all hover:border-[#52796F] hover:shadow-md"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#DCE9E3]/50 transition-colors group-hover:bg-[#52796F]/10">
                  {getCategoryIcon(cat.iconName)}
                </div>

                <h3 className="text-sm font-semibold text-[#242B2A] transition-colors group-hover:text-[#52796F]">
                  {cat.name}
                </h3>

                <span className="mt-1 text-xs text-[#78817D]">
                  {cat.itemCount} items
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* RECENTLY SHARED */}
        <section className="border-y border-gray-100 bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="mb-8 flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#242B2A]">
                  Recently Shared Resources
                </h2>
                <p className="text-sm text-[#78817D]">
                  Latest listings available in your community
                </p>
              </div>

              <Link
                href="/explore"
                className="text-sm font-semibold text-[#52796F] hover:underline"
              >
                Explore All
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recentItems.map((item) => (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-xl border border-gray-200/60 bg-[#F8F9F5] transition-shadow hover:shadow-md"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />

                    <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-[#354F52] backdrop-blur-sm">
                      {item.condition.replace("_", " ")}
                    </span>
                  </div>

                  <div className="space-y-3 p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#52796F]">
                      {item.categoryName}
                    </span>

                    <h3 className="line-clamp-1 text-base font-semibold text-[#242B2A]">
                      {item.title}
                    </h3>

                    <p className="line-clamp-2 text-xs text-[#78817D]">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between border-t border-gray-200/80 pt-3 text-xs text-[#78817D]">
                      <span>Lender: {item.ownerName}</span>

                      <div className="flex items-center text-amber-600">
                        <Star className="mr-1 h-3.5 w-3.5 fill-current" />
                        <span>{item.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          id="how-it-works"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-[#242B2A]">
              How ShareShelf Works
            </h2>
            <p className="mt-2 text-sm text-[#78817D]">
              Simple, transparent resource sharing among verified peers
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                number: "1",
                title: "List or Find",
                description:
                  "List resources you own or search for items you need for your semester or project.",
                icon: <BookOpen className="h-6 w-6" />,
              },
              {
                number: "2",
                title: "Request & Coordinate",
                description:
                  "Select borrowing dates, send a request, and agree on a convenient handover point.",
                icon: <RefreshCw className="h-6 w-6" />,
              },
              {
                number: "3",
                title: "Return & Rate",
                description:
                  "Return the item safely on time and leave peer feedback to strengthen community trust.",
                icon: <ShieldCheck className="h-6 w-6" />,
              },
            ].map((step) => (
              <div
                key={step.number}
                className="space-y-4 rounded-xl border border-gray-100 bg-white p-6 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#DCE9E3] text-[#354F52]">
                  {step.icon}
                </div>

                <h3 className="text-lg font-semibold text-[#242B2A]">
                  {step.title}
                </h3>

                <p className="text-sm text-[#78817D]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TRUST & STATISTICS */}
        <section className="bg-[#354F52] py-16 text-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center sm:px-6 md:grid-cols-4 lg:px-8">

            <div className="space-y-1">
              <Users className="mx-auto mb-2 h-6 w-6 text-[#DCE9E3]" />
              <p className="text-3xl font-bold">1,200+</p>
              <p className="text-xs text-[#DCE9E3]">
                Active Community Members
              </p>
            </div>

            <div className="space-y-1">
              <RefreshCw className="mx-auto mb-2 h-6 w-6 text-[#DCE9E3]" />
              <p className="text-3xl font-bold">3,400+</p>
              <p className="text-xs text-[#DCE9E3]">
                Successful Borrows
              </p>
            </div>

            <div className="space-y-1">
              <BookOpen className="mx-auto mb-2 h-6 w-6 text-[#DCE9E3]" />
              <p className="text-3xl font-bold">3,000+</p>
              <p className="text-xs text-[#DCE9E3]">
                Resources Shared
              </p>
            </div>

            <div className="space-y-1">
              <ShieldCheck className="mx-auto mb-2 h-6 w-6 text-[#DCE9E3]" />
              <p className="text-3xl font-bold">99.2%</p>
              <p className="text-xs text-[#DCE9E3]">
                On-Time Return Rate
              </p>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
