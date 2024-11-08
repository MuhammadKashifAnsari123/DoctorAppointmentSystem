import { columns } from "@/components/AppointmentTable/colums";
import { AppointmentTable } from "@/components/AppointmentTable/data-Table";
import { appointments } from "@/lib/data";

export default function Appointments(){
    return(
        <div className="container mx-auto px-10">
            <div className="my-10">
            <AppointmentTable columns={columns} data={appointments}/>
            </div>
        </div>
    )
}