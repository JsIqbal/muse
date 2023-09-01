"use client";

import { SignUp, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Page({ params }) {

  const { isSignedIn } = useAuth();
  const router = useRouter();

  if (isSignedIn) {
    return router.push("/");
  } else {
    return <SignUp  afterSignInUrl={params["redirectUrl"] ?? "/"}/>;
  }
}
