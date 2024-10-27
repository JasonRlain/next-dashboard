export { default } from "next-auth/middleware";

import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// export async function middleware(req: NextRequest) {
//   const token = await getToken({ req });
//   console.log("aaaaaaaaaaaa");
//   console.log({ token });

//   if (!token) {
//     const loginUrl = new URL("/login", req.url);
//     return NextResponse.redirect(loginUrl);
//   }

//   return NextResponse.next();
// }

export const config = {
  matcher: [
    "/((?!login|signup|api/auth/signin|api/auth/callback|_next/static|_next/image).*)",
    // "/dashboard",
  ],
};
