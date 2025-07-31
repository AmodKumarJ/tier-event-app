"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FullScreenLoader from "./FullScreenLoader";

export default function UpgradeButtons() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function upgradeTier(newTier: string) {
    setLoading(true);
    await fetch("/api/upgrade-tier", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newTier }),
    });
    setLoading(false);
    router.refresh();
  }

  const buttonStyles =
    "flex-1 min-w-[150px] text-center px-4 py-2 rounded-lg font-medium shadow-md transition-all duration-200 hover:scale-105";

  return (
    <>
      {loading && <FullScreenLoader />}
      <div className="mb-6 flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => upgradeTier("silver")}
          className={`${buttonStyles} bg-gray-800 text-white hover:bg-gray-700`}
        >
          Upgrade to Silver
        </button>
        <button
          onClick={() => upgradeTier("gold")}
          className={`${buttonStyles} bg-yellow-500 text-white hover:bg-yellow-400`}
        >
          Upgrade to Gold
        </button>
        <button
          onClick={() => upgradeTier("platinum")}
          className={`${buttonStyles} bg-purple-600 text-white hover:bg-purple-500`}
        >
          Upgrade to Platinum
        </button>
      </div>
    </>
  );
}
