import Image from "next/image";
import HeroSection from "../components/HeroSection";
import Header from "@/components/Header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { categories } from "@/lib/data";
import DoctorsSection from "@/components/DoctorSection";

export default function Home() {
  return (
    <div className="">
        <HeroSection/>
        <DoctorsSection isHome={true}/>
    </div>
  );
}
