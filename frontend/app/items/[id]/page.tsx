
import { notFound } from "next/navigation";
import { Star, MapPin, Calendar, ShieldCheck } from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BorrowRequestDialog } from "@/components/resources/BorrowRequestDialog";
import { itemsService } from "@/services/items.service";

export const instant = false;

interface ItemDetailProps {
  params: Promise<{ id: string }>;
}

export default async function ItemDetail({ params }: ItemDetailProps) {
  const { id } = await params;
  const item = await itemsService.getItemById(id);

  if (!item) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F9F5]">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <p className="mb-6 text-sm text-[#78817D]">
          Home / Explore Resources / {item.categoryName}
        </p>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Resource Image */}
          <div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <img
                src={item.images[0]}
                alt={item.title}
                className="h-[350px] w-full object-cover sm:h-[450px]"
              />
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-[#52796F]">
              <ShieldCheck className="h-5 w-5" />
              Community Resource
            </div>
          </div>

          {/* Resource Information */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#52796F]">
                {item.categoryName}
              </p>

              <h1 className="mt-2 text-3xl font-bold text-[#242B2A] sm:text-4xl">
                {item.title}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[#78817D]">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {item.location}
                </span>

                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  {item.rating}
                </span>

                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Max {item.maxBorrowDays} days
                </span>
              </div>
            </div>

            {/* Availability */}
            <div>
              <span
                className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                  item.status === "AVAILABLE"
                    ? "bg-emerald-100 text-emerald-800"
                    : "bg-amber-100 text-amber-800"
                }`}
              >
                {item.status.replace("_", " ")}
              </span>
            </div>

            {/* Description */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-[#242B2A]">
                About this resource
              </h2>

              <p className="leading-relaxed text-[#78817D]">
                {item.description}
              </p>

              <div className="mt-6 space-y-3 border-t border-gray-100 pt-5">
                <p className="text-sm text-[#78817D]">
                  Condition:
                  <strong className="ml-2 text-[#242B2A]">
                    {item.condition.replace("_", " ")}
                  </strong>
                </p>

                <p className="text-sm text-[#78817D]">
                  Lender:
                  <strong className="ml-2 text-[#242B2A]">
                    {item.ownerName}
                  </strong>
                </p>

                <p className="text-sm text-[#78817D]">
                  Maximum borrowing period:
                  <strong className="ml-2 text-[#242B2A]">
                    {item.maxBorrowDays} days
                  </strong>
                </p>
              </div>
            </div>

            {/* Borrow Request */}
            {item.status === "AVAILABLE" ? (
              <BorrowRequestDialog
                itemId={item.id}
                itemTitle={item.title}
              />
            ) : (
              <button
                disabled
                className="w-full cursor-not-allowed rounded-lg bg-gray-300 px-6 py-3 font-medium text-gray-600"
              >
                Currently Unavailable
              </button>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
