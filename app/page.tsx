"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  // const session = await getServerSession(authOptions);
  const { data: session } = useSession();
  console.log(session);
  if (session && session.user) {
    return (
      <div>
        <Link
          href={"/api/auth/signout"}
          className="flex gap-4 ml-auto text-red-600"
        >
          Sign Out
        </Link>
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      <h1>not login</h1>
    </div>
  );
}
