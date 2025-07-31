import { SignUp } from "@clerk/nextjs";

interface PageProps {
  searchParams: { redirect_url?: string };
}

export default function Page({ searchParams }: PageProps) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignUp redirectUrl={searchParams?.redirect_url || "/events"} />
    </div>
  );
}
