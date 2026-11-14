
"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

import { MOCK_ITEMS } from "@/services/items.service";
import { ResourceCard } from "@/components/resources/ResourceCard";
import type { ItemCondition } from "@/types";

const conditions: ItemCondition[] = [
  "NEW",
  "LIKE_NEW",
  "GOOD",
  "FAIR",
];

const categories = [
  { id: "1", name: "Textbooks & Books" },
  { id: "2", name: "Electronics & Calculators" },
  { id: "3", name: "Sports & Outdoors" },
  { id: "4", name: "Tools & Hardware" },
  { id: "5", name: "Lab Equipment" },
];

export default function ExplorePage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [cond, setCond] = useState<ItemCondition | "">("");
  const [available, setAvailable] = useState(false);

  const filtered = useMemo(() => {
    return MOCK_ITEMS.filter((item) => {
      const search = q.toLowerCase().trim();

      const matchQ =
        !search ||
        item.title.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search);

      const matchCat = cat === "all" || item.categoryId === cat;
      const matchCond = !cond || item.condition === cond;
      const matchAvail = !available || item.status === "AVAILABLE";

      return matchQ && matchCat && matchCond && matchAvail;
    });
  }, [q, cat, cond, available]);

  return (
    <main className="min-h-screen bg-[#F8F9F5]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Page Heading */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#52796F]">
            Discover and Borrow
          </p>

          <h1 className="text-3xl font-bold text-[#242B2A]">
            Explore Resources
          </h1>

          <p className="mt-2 text-[#78817D]">
            Find useful resources shared by your community.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 rounded-2xl border border-gray-100 bg-white p-4">
          <div className="flex flex-col gap-4 md:flex-row">

            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-[#78817D]" />

              <input
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search books, calculators, tools..."
                className="w-full rounded-lg border border-gray-200 py-2.5 pl-9 pr-3 outline-none focus:ring-2 focus:ring-[#52796F]/30"
              />
            </div>

            {/* Category Filter */}
            <select
              value={cat}
              onChange={(e) => setCat(e.target.value)}
              className="rounded-lg border border-gray-200 bg-white px-3 py-2.5"
            >
              <option value="all">All Categories</option>

              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            {/* Condition Filter */}
            <select
              value={cond}
              onChange={(e) =>
                setCond(e.target.value as ItemCondition | "")
              }
              className="rounded-lg border border-gray-200 bg-white px-3 py-2.5"
            >
              <option value="">Any Condition</option>

              {conditions.map((condition) => (
                <option key={condition} value={condition}>
                  {condition.replace("_", " ")}
                </option>
              ))}
            </select>

            {/* Availability Filter */}
            <button
              type="button"
              onClick={() => setAvailable((value) => !value)}
              aria-pressed={available}
              className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 transition-colors ${
                available
                  ? "border-[#52796F] bg-[#52796F] text-white"
                  : "border-gray-200 text-[#354F52] hover:bg-gray-50"
              }`}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Available Only
            </button>
          </div>
        </div>

        {/* Results Heading */}
        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-semibold text-[#242B2A]">
            Available Resources
          </h2>

          <span className="text-sm text-[#78817D]">
            {filtered.length}{" "}
            {filtered.length === 1 ? "item" : "items"} found
          </span>
        </div>

        {/* Resource Grid */}
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <ResourceCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
            <Search className="mx-auto mb-4 h-10 w-10 text-gray-400" />

            <h3 className="text-lg font-semibold text-[#242B2A]">
              No resources found
            </h3>

            <p className="mt-2 text-sm text-[#78817D]">
              Try changing your search or filters.
            </p>

            <button
              type="button"
              onClick={() => {
                setQ("");
                setCat("all");
                setCond("");
                setAvailable(false);
              }}
              className="mt-5 rounded-lg bg-[#52796F] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#354F52]"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
