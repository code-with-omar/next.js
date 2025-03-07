import { NextResponse } from "next/server";

export function middleware(request) {
  const isService = request.nextUrl.pathname.includes("/service");
  const dummyUser = {
    role: "admin",
    email: "omarfaruk65142@gmail.com",
  };
  const isAdmin = dummyUser.role === "admin";
  if (isService && !isAdmin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}
