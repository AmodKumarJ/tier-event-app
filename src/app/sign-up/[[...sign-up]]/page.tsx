import { SignUp } from "@clerk/nextjs";

export default function Page({ searchParams }: any) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignUp redirectUrl={searchParams?.redirect_url || "/events"} />
    </div>
  );
}
