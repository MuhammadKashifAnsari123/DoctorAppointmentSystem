import DoctorForm from "@/components/ApplyForm";

export default function ApplyAsDoctor() {
    return(
        <div className="container mx-auto px-10">
            <h1 className="font-bold text-2xl mt-10">
                Apply As Doctor In Our Platform
            </h1>
            <p className="text-secondary-foreground mt-5">
            Apply As Doctor In Our Platform
            </p>
            <DoctorForm/>
        </div>
    )
}