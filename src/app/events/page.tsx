import UpgradeButtons from "@/components/UpgradeButtons";
import { supabase } from "@/lib/supabase";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function EventsPage() {
  const user = await currentUser();
  const userTier = (user?.publicMetadata?.tier as string) || "free";

  // Tier levels for filtering
  const tierLevels = ["free", "silver", "gold", "platinum"];
  const allowedTiers = tierLevels.slice(0, tierLevels.indexOf(userTier) + 1);

  // Fetch events
  let events = [];
  let errorMsg = null;
  try {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("event_date", { ascending: true });

    if (error) throw error;
    events = data || [];
  } catch (err: any) {
    errorMsg = err.message || "Failed to load events";
  }

  if (errorMsg) {
    return <div className="p-4 text-red-500">Error: {errorMsg}</div>;
  }

  if (!events.length) {
    return <div className="p-4 text-gray-500">No events available.</div>;
  }

  
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Events for {userTier} Tier</h1>

      <UpgradeButtons />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => {
          const isLocked = !allowedTiers.includes(event.tier);
          return (
            <div
              key={event.id}
              className={`border p-4 rounded-lg shadow-md ${
                isLocked ? "bg-gray-100 opacity-70" : "bg-white"
              }`}
            >
              <Image
                src={event.image_url}
                alt={event.title}
                width={400}
                height={200}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                {event.title}
              </h2>
              <p className="text-gray-600">{event.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                {new Date(event.event_date).toLocaleDateString()}
              </p>
              <span className="inline-block mt-3 px-3 py-1 text-sm rounded-full bg-blue-500 text-white">
                {event.tier}
              </span>

              {isLocked && (
                <p className="mt-3 text-sm text-red-500 font-semibold">
                  Upgrade to{" "}
                  {event.tier.charAt(0).toUpperCase() + event.tier.slice(1)} to
                  access this event.
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
