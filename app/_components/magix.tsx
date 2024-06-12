import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export function SignIn2() {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("resend", formData);
      }}
    >
      <input type="text" name="email" placeholder="Email" />
      <Button type="submit">Signin with Resend</Button>
    </form>
  );
}
