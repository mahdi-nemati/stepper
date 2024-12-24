"use client";

import GeneralStepper from "@/components/StateFullStepper";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { StepOne, StepThree, StepTwo } from "@/components/Steps";

export default function Home() {
  const handleFinish = (data: Record<string, any>) => {
    console.log("Stepper finished with data:", data);
  };

  const getIconStyle = (isActive: boolean, index: number) => ({
    color: isActive ? "#4caf50" : "#9e9e9e",
    transform: isActive ? "scale(1.5)" : "scale(1)",
    transition: "all 0.3s ease",
  });

  return (
    <div>
      <GeneralStepper
        steps={[StepOne, StepTwo, StepThree]}
        onFinish={handleFinish}
        icons={[<HomeIcon />, <PersonIcon />, <CheckCircleIcon />]}
        getIconStyle={getIconStyle}
      />
    </div>
  );
}
