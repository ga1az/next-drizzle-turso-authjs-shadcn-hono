import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export function Logout() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit" className="bg-red-500 p-5">
        Logout
      </Button>
    </form>
  );
}
