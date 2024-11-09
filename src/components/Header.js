import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { auth } from "../../auth";

export default async function Header() {
  const session = await auth();
console.log("session in header=>",session)
  return (
    <div>
        <div className="flex container mx-auto justify-between px-10 p-3">
        <h1 className="text-xl font-bold font-mono">LOGO</h1>
        {
          session ? (
            <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
          <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
    </Avatar>

          </MenubarTrigger>
          <MenubarContent>
            <MenubarSeparator />
            <Link href={'/profile'}>
            <MenubarItem>Profile</MenubarItem>
            </Link>
            <MenubarSeparator />
            <Link href={'/appointment'}>
            <MenubarItem>My Appointment</MenubarItem>
            </Link>
            <MenubarSeparator />
            <MenubarItem>Logout</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
          ): (
            <Link href={'/signin'}>
            <Button variant={'outline'}>Login</Button>
            </Link>
          )
        }
        </div>
    </div>
  );
}
