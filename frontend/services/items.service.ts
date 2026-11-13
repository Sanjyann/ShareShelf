
import api from "@/lib/axios";
import type { Category, Item } from "@/types";

// Temporary development data
const MOCK_CATEGORIES: Category[] = [
  {
    id: "1",
    name: "Textbooks & Books",
    slug: "books",
    iconName: "BookOpen",
    itemCount: 142,
  },
  {
    id: "2",
    name: "Electronics & Calculators",
    slug: "electronics",
    iconName: "Laptop",
    itemCount: 89,
  },
  {
    id: "3",
    name: "Sports & Outdoors",
    slug: "sports",
    iconName: "Dumbbell",
    itemCount: 64,
  },
  {
    id: "4",
    name: "Tools & Hardware",
    slug: "tools",
    iconName: "Wrench",
    itemCount: 51,
  },
  {
    id: "5",
    name: "Lab Equipment",
    slug: "lab",
    iconName: "Microscope",
    itemCount: 33,
  },
];

const MOCK_ITEMS: Item[] = [
  {
    id: "101",
    title: "TI-84 Plus CE Graphing Calculator",
    description:
      "Perfect for Calculus and Statistics courses. Comes with charging cable.",
    categoryId: "2",
    categoryName: "Electronics & Calculators",
    condition: "LIKE_NEW",
    status: "AVAILABLE",
    images: [
      "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?w=600&auto=format&fit=crop",
    ],
    location: "North Campus Library Area",
    ownerId: "u1",
    ownerName: "Sarah Jenkins",
    maxBorrowDays: 14,
    rating: 4.9,
    createdAt: "2025-02-15T10:00:00Z",
  },
  {
    id: "102",
    title: "Data Structures & Algorithms in Java",
    description:
      "Clean copy with no highlight marks. Great reference for CS modules.",
    categoryId: "1",
    categoryName: "Textbooks & Books",
    condition: "GOOD",
    status: "AVAILABLE",
    images: [
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&auto=format&fit=crop",
    ],
    location: "Student Housing Block B",
    ownerId: "u2",
    ownerName: "Alex Chen",
    maxBorrowDays: 30,
    rating: 4.8,
    createdAt: "2025-02-18T14:30:00Z",
  },
  {
    id: "103",
    title: "Digital Microscope 1000x HD",
    description:
      "USB digital microscope for biology and electronics debugging.",
    categoryId: "5",
    categoryName: "Lab Equipment",
    condition: "LIKE_NEW",
    status: "AVAILABLE",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&auto=format&fit=crop",
    ],
    location: "Science Building Lab 3",
    ownerId: "u3",
    ownerName: "David K.",
    maxBorrowDays: 7,
    rating: 5.0,
    createdAt: "2025-02-20T09:15:00Z",
  },
];

export const itemsService = {
  async getCategories(): Promise<Category[]> {
    try {
      const response = await api.get<Category[]>("/categories");
      return response.data;
    } catch {
      return MOCK_CATEGORIES;
    }
  },

  async getRecentItems(): Promise<Item[]> {
    try {
      const response = await api.get<Item[]>("/items/recent");
      return response.data;
    } catch {
      return MOCK_ITEMS;
    }
  },

  async getItemById(id: string): Promise<Item | null> {
    try {
      const response = await api.get<Item>(`/items/${id}`);
      return response.data;
    } catch {
      return MOCK_ITEMS.find((item) => item.id === id) ?? null;
    }
  },
};
