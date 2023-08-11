"use client";

import { SignUp, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Page() {

  const { isSignedIn } = useAuth({ params });
  const router = useRouter();

  if (isSignedIn) {
    return router.push("/");
  } else {
    return <SignUp  afterSignInUrl={params["redirectUrl"] ?? "/"}/>;
  }
}
