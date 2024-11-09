import { Button } from "@/components/ui/button";
import { signIn } from "../../../auth";

export default function SignIn() {
    return(
        <div className="min-h-screen flex container mx-auto justify-center items-center">
              <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <Button variant={'outline'}>Signin with Google</Button>
    </form>
    </div>

    )
}