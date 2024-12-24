"use client";
import React, { useEffect, useState } from "react";
import { Box, Stepper, Step, StepLabel, Typography } from "@mui/material";

export type StepProps = {
  goNext: () => void;
  goBack: () => void;
  setStepData: (data: Record<string, any>) => void;
  stepsData: Record<string, any>;
};

type StepperProps = {
  steps: React.ElementType<StepProps>[];
  onFinish: (data: Record<string, any>) => void;
  icons?: React.ReactNode[];
  getIconStyle?: (isActive: boolean, index: number) => React.CSSProperties;
};

export default function GeneralStepper({
  steps,
  onFinish,
  icons,
  getIconStyle,
}: StepperProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [stepsData, setStepsData] = useState<Record<string, any>>({});

  const moveNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      onFinish(stepsData);
    }
  };

  const moveBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const setStepData = (data: Record<string, any>) => {
    setStepsData((prev) => ({ ...prev, ...data }));
  };

  const WrapStep = (
    StepComponent: React.ElementType<StepProps>
  ): React.ReactElement<StepProps> => (
    <StepComponent
      goBack={moveBack}
      goNext={moveNext}
      setStepData={setStepData}
      stepsData={stepsData}
    />
  );

  const renderActiveStep = () => {
    const ActiveStepComponent = steps[activeStep];
    return WrapStep(ActiveStepComponent);
  };

  useEffect(() => {
    console.log("stepsData", stepsData);
  }, [stepsData]);

  return (
    <Box>
      <Box display="flex" justifyContent="center" mb={2}>
        {icons?.map((icon, index) => {
          const isActive = activeStep === index;
          const style = getIconStyle
            ? getIconStyle(isActive, index)
            : {
                opacity: isActive ? 1 : 0.5,
                transform: isActive ? "scale(1.2)" : "scale(0.8)",
                transition: "all 0.3s ease",
              };

          return (
            <Box key={index} mx={1} textAlign="center" style={style}>
              <Box>{icon}</Box>
              <Typography variant="caption">Step {index + 1}</Typography>
            </Box>
          );
        })}
      </Box>

      <Stepper activeStep={activeStep}>
        {steps.map((_, index) => (
          <Step key={index}>
            <StepLabel>Step {index + 1}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box mt={3}>{renderActiveStep()}</Box>
    </Box>
  );
}
