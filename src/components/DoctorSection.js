import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";  
import { categories, doctors } from "@/lib/data";
import { Button } from "./ui/button";
import Link from "next/link";
import {AvatarImage} from "@radix-ui/react-avatar";
import {Avatar, AvatarFallback} from "./ui/avatar";
import { HomeIcon, ClockIcon, TimerIcon, PlusIcon } from "@radix-ui/react-icons";
export default function DoctorsSection({isHome}) {
    const filtered = isHome ? doctors.slice(0,6) : doctors
   return (
    <div className="container mx-auto px-6 my-20">
        <div className="px-10 flex justify-between">
          <h1 className="text-3xl font-semibold">
         Doctor You Need
          </h1>
          {
            isHome ? (
            <Link href={'/doctors'}>
            <Button>
                See All
            </Button>
            </Link>
            ): (
            <Select>
            <SelectTrigger className="w-[180px]">
            <SelectValue/>
            </SelectTrigger>
            <SelectContent>
          {
            categories.map((category) => (
              <SelectItem key={category} value={category}>{category}</SelectItem>        
          ))}
        </SelectContent>
    </Select>
    )}
 
</div>

      <div className="grid my-3 grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 p-5 gap-3">
        {
            filtered.map((doctor) => (
             <Card key={doctor.name}>
                <CardHeader className={"flex flex-row"}>
                    <Avatar className="self-center h-10 w-10">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="pl-3">
                    <CardTitle>{doctor.name}</CardTitle>
                    <CardDescription>{doctor.category}</CardDescription>
                    </div>
                   
                </CardHeader>
                {
                    !isHome && (<CardContent>
                    <div className="flex justify-between my-2">
                        <div className="flex gap-2 items-center">
                        <HomeIcon/>
                        <h1 className="font-semibold">
                         gender
                        </h1>
                        </div>
                        <h1>{doctor.gender}</h1>
                    </div>
                    <div className="flex justify-between my-2">
                        <div className="flex gap-2 items-center"> 
                            <PlusIcon/>
                        <h1 className="font-semibold">Hospital</h1>
                        </div>
                        <h1>{doctor.hospital}</h1>
                    </div>

                    <div className="flex justify-between my-2">
                        <div className="flex gap-2 items-center"> 
                            <ClockIcon/>
                        <h1 className="font-semibold">appointmentTime</h1>
                        </div>
                        <h1>{doctor.appointmentTime}</h1>
                    </div>


                    <div className="flex justify-between my-2">
                    <div className="flex gap-2 items-center">
                    <TimerIcon/>
                    <h1 className="font-semibold">dateAndTime</h1>
                    </div>
                    <h1>{doctor.dateAndTime}</h1>
                    </div>

                </CardContent>
               )}
                
                <CardFooter>
                    <Link href={`/doctors/${doctor.id}`}>
                    <Button>
                        See Details
                    </Button>
                    </Link>
                </CardFooter>
            </Card>
            ))}

      </div>

</div>
  );
}
