export const categories = [
    "Cardiologist",
    "Dermatologist",
    "Neurologist",
    "Orthopedic Surgeon",
    "Pediatrician",
    "Psychiatrist",
    "Oncologist",
    "General Practitioner",
    "Endocrinologist",
    "Gastroenterologist",
    "Ophthalmologist",
    "Urologist",
    "Gynecologist",
    "Pulmonologist",
    "Rheumatologist",
    "Nephrologist",
    "Allergist/Immunologist",
    "Otolaryngologist (ENT)",
    "Anesthesiologist",
    "Pathologist",
    "Hematologist",
    "Plastic Surgeon",
    "Radiologist",
    "Dentist",
    "Oral Surgeon",
    "Chiropractor",
    "Podiatrist"
  ];
  


export const doctors = [
  {
    name: "Dr. John Smith",
    appointmentTime: "10:00 AM - 11:00 AM",
    fees: "$150",
    category: "Cardiologist",
    hospital: "City Heart Hospital",
    gender: "Male",
    dateAndTime: "2024-11-10 10:00 AM",
    id:1,
  },
  {
    name: "Dr. Emily Davis",
    appointmentTime: "1:00 PM - 2:00 PM",
    fees: "$120",
    category: "Dermatologist",
    hospital: "Skin Care Clinic",
    gender: "Female",
    dateAndTime: "2024-11-11 1:00 PM",
    id:2,
  },
  {
    name: "Dr. Michael Brown",
    appointmentTime: "3:00 PM - 4:00 PM",
    fees: "$200",
    category: "Neurologist",
    hospital: "NeuroHealth Center",
    gender: "Male",
    dateAndTime: "2024-11-12 3:00 PM",
    id:3,
  },
  {
    name: "Dr. Sophia Wilson",
    appointmentTime: "9:00 AM - 10:00 AM",
    fees: "$100",
    category: "Pediatrician",
    hospital: "Children's Medical Center",
    gender: "Female",
    dateAndTime: "2024-11-13 9:00 AM",
    id:4,
  },
  {
    name: "Dr. Liam Johnson",
    appointmentTime: "11:00 AM - 12:00 PM",
    fees: "$180",
    category: "Orthopedic Surgeon",
    hospital: "OrthoCare Hospital",
    gender: "Male",
    dateAndTime: "2024-11-14 11:00 AM",
    id:5,
  },
  {
    name: "Dr. Olivia Martinez",
    appointmentTime: "2:00 PM - 3:00 PM",
    fees: "$140",
    category: "Psychiatrist",
    hospital: "Mental Health Center",
    gender: "Female",
    dateAndTime: "2024-11-15 2:00 PM",
    id:6,
  },
  {
    name: "Dr. Ethan Garcia",
    appointmentTime: "4:00 PM - 5:00 PM",
    fees: "$220",
    category: "Oncologist",
    hospital: "Cancer Treatment Institute",
    gender: "Male",
    dateAndTime: "2024-11-16 4:00 PM",
    id:7,
  },
  {
    name: "Dr. Ava Hernandez",
    appointmentTime: "12:00 PM - 1:00 PM",
    fees: "$130",
    category: "Gynecologist",
    hospital: "Women's Health Clinic",
    gender: "Female",
    dateAndTime: "2024-11-17 12:00 PM",
    id:8,
  }
];
  

export const currentUser = {
  name: "Bilal",
  role: "doctor",
  email: "bilal@gmail.com"
}



export const appointments = [
  {
    user: {
      name: "John Doe",
      email: "john.doe@example.com"
    },
    appointmentTime: "10:30 AM",
    status: "Confirmed",
    appointmentDate: "2024-11-10",
    doctor: {
      name: "Dr. Smith",
      hospital: "City General Hospital"
    }
  },
  {
    user: {
      name: "Jane Smith",
      email: "jane.smith@example.com"
    },
    appointmentTime: "2:00 PM",
    status: "Pending",
    appointmentDate: "2024-11-12",
    doctor: {
      name: "Dr. Emily Johnson",
      hospital: "Green Valley Medical Center"
    }
  },
  {
    user: {
      name: "Michael Brown",
      email: "michael.brown@example.com"
    },
    appointmentTime: "9:00 AM",
    status: "Cancelled",
    appointmentDate: "2024-11-15",
    doctor: {
      name: "Dr. James Wilson",
      hospital: "Sunshine Clinic"
    }
  },
  {
    user: {
      name: "Alice Green",
      email: "alice.green@example.com"
    },
    appointmentTime: "4:30 PM",
    status: "Confirmed",
    appointmentDate: "2024-11-20",
    doctor: {
      name: "Dr. Lisa White",
      hospital: "Downtown Health Center"
    }
  }
];

