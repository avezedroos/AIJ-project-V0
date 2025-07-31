

import React, { useState } from "react";
import {Button,Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
  Checkbox,
} from "@/components/ui";

import {
  FileText,
  Calendar,
  CheckCircle,
  Clock,
  Mail,
  Phone,
  GraduationCap,
  Upload,
  Download,
  CreditCard,
} from "lucide-react";

interface AdmissionStep {
  step: number;
  title: string;
  description: string;
  status: "current" | "upcoming";
  icon: React.ElementType;
}

const admissionSteps: AdmissionStep[] = [
  {
    step: 1,
    title: "Application Form",
    description: "Fill out the online application form with your personal and academic details",
    status: "current",
    icon: FileText,
  },
  {
    step: 2,
    title: "Document Submission",
    description: "Upload required documents including mark sheets and certificates",
    status: "upcoming",
    icon: Upload,
  },
  {
    step: 3,
    title: "Application Review",
    description: "Our admissions team will review your application and documents",
    status: "upcoming",
    icon: CheckCircle,
  },
  {
    step: 4,
    title: "Merit List & Selection",
    description: "Selected candidates will be notified via email and SMS",
    status: "upcoming",
    icon: GraduationCap,
  },
  {
    step: 5,
    title: "Fee Payment",
    description: "Complete the admission process by paying the required fees",
    status: "upcoming",
    icon: CreditCard,
  },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  course: string;
  category: string;
  address: string;
  previousEducation: string;
  marks: string;
}

const AdmissionPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    category: "",
    address: "",
    previousEducation: "",
    marks: "",
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950">
      {/* The rest of your JSX code remains unchanged and can be inserted here in .tsx syntax */}
    </div>
  );
};

export default AdmissionPage;
