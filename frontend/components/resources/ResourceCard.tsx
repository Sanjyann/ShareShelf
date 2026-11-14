
import Link from "next/link";
import type { Item } from "@/types";
import { Star, MapPin } from "lucide-react";

interface ResourceCardProps {
  item: Item;
}

export function ResourceCard({ item }: ResourceCardProps) {
  return (
    <Link
      href={`/items/${item.id}`}
      className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="relative h-48 bg-gray-100">
        <img
          src={item.images[0]}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <span
          className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-medium ${
            item.status === "AVAILABLE"
              ? "bg-emerald-100 text-emerald-800"
              : "bg-amber-100 text-amber-800"
          }`}
        >
          {item.status.replace("_", " ")}
        </span>
      </div>

      <div className="space-y-2 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#52796F]">
          {item.categoryName}
        </p>

        <h3 className="line-clamp-1 font-semibold text-[#242B2A] group-hover:text-[#52796F]">
          {item.title}
        </h3>

        <div className="flex flex-wrap items-center gap-3 text-xs text-[#78817D]">
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {item.location}
          </span>

          <span className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            {item.rating}
          </span>
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 pt-2">
          <span className="text-xs text-[#78817D]">
            {item.ownerName}
          </span>

          <span className="text-xs font-medium text-[#52796F]">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}
