import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import LoginButton from "./components/LoginButton";
import UserInfo from "./components/UserInfo";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h2>Hello</h2>
      <LoginButton></LoginButton>
      <h2>This is client components</h2>
      <UserInfo />
      <h2 className="text-2xl">
        This is server-side components load data using getServerSession()
      </h2>
      <h2>{JSON.stringify(session)}</h2>
    </div>
  );
}
