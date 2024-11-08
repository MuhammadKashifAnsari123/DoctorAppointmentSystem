import DoctorsSection from "@/components/DoctorSection";
import Header from "@/components/Header";

export default function Doctors({searchParams}) {
    console.log("searchparams",searchParams)
    return(
        <div>
            <DoctorsSection/>
        </div>
    )
}