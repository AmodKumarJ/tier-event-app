import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = auth();

  // If not logged in → go to sign-in
  if (!userId) {
    redirect("/sign-in?redirect_url=/events");  // after login, go to /events
  }

  // If logged in → go to events
  redirect("/events");
}
