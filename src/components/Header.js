import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "./ui/button";
import { auth, signOut } from "../../auth";

export default async function Header() {
  const session = await auth();
  console.log("session", session);
  return (
    <div>
      <div className="flex container mx-auto justify-between px-10 p-3">
        <h1 className="text-xl font-bold font-mono rounded">LOGO</h1>
        {session ? (
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                <Avatar>
                  <AvatarImage src={session?.user?.image} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </MenubarTrigger>
              <MenubarContent>
                <MenubarSeparator />
                <Link href={"/profile"}>
                  <MenubarItem>Profile</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href={"/appointment"}>
                  <MenubarItem>My Appointment</MenubarItem>
                </Link>
                <MenubarSeparator />
                <form
        action={async () => {
          "use server";
          await signOut("google");
        }}
      >
        <Button variant={"outline"}>LogOut</Button>
      </form>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        ) : (
          <Link href={"/signin"}>
            <Button variant={"outline"}>Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
