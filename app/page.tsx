import { SignIn } from "./_components/goo";
import { Logout } from "./_components/logout";
import { SignIn2 } from "./_components/magix";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-normal flex-col">
        <h1 className="text-4xl font-bold">Welcome to Next.js</h1>
        <p className="text-lg mt-4">Login</p>
        <div className="flex flex-col gap-y-10">
          <SignIn />
          <SignIn2 />
        </div>
        {!session ? (
          <p>NO LOGEADO</p>
        ) : (
          <div>
            <h1>{session?.user?.email}</h1>
            <Logout />
          </div>
        )}
      </div>
    </main>
  );
}
