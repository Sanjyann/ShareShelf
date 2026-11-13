
export type ItemCondition = "NEW" | "LIKE_NEW" | "GOOD" | "FAIR";

export type ItemStatus =
  | "AVAILABLE"
  | "BORROWED"
  | "MAINTENANCE"
  | "INACTIVE";

export type RequestStatus =
  | "PENDING"
  | "APPROVED"
  | "REJECTED"
  | "CANCELLED"
  | "RETURNED";

export interface User {
  id: string;
  fullName: string;
  email: string;
  avatarUrl?: string;
  community: string;
  bio?: string;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  itemCount: number;
}

export interface Item {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  categoryName: string;
  condition: ItemCondition;
  status: ItemStatus;
  images: string[];
  location: string;
  ownerId: string;
  ownerName: string;
  ownerAvatar?: string;
  maxBorrowDays: number;
  rating: number;
  createdAt: string;
}

export interface BorrowRequest {
  id: string;
  itemId: string;
  itemTitle: string;
  itemImage: string;
  borrowerId: string;
  borrowerName: string;
  lenderId: string;
  startDate: string;
  endDate: string;
  message?: string;
  status: RequestStatus;
  createdAt: string;
}
