import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth(); // <-- Added await

 
  if (!userId) {
    redirect("/sign-in?redirect_url=/events");
  }

  
  redirect("/events");
}

