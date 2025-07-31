"use client";

import { UserButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
  const { user } = useUser();
  const userTier = user?.publicMetadata?.tier || "free";

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
      <h1 className="text-xl font-bold">Tier Event App</h1>
      <div className="flex items-center gap-4">
        <span className="px-3 py-1 rounded-full bg-blue-600 text-sm">
          {userTier.toString().toUpperCase()} Tier
        </span>
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </nav>
  );
}
