"use client";
import React from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { StepProps } from "./StateFullStepper";

// Step 1
const StepOne: React.FC<StepProps> = ({ goNext, setStepData, stepsData }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStepData({ stepOneInput: e.target.value });
  };

  return (
    <Box>
      <Typography variant="h6">Step One</Typography>
      <TextField
        label="Input for Step 1"
        variant="outlined"
        fullWidth
        value={stepsData.stepOneInput || ""}
        onChange={handleInputChange}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={goNext}>
        Next
      </Button>
    </Box>
  );
};

// Step 2
const StepTwo: React.FC<StepProps> = ({
  goNext,
  goBack,
  setStepData,
  stepsData,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStepData({ stepTwoInput: e.target.value });
  };

  return (
    <Box>
      <Typography variant="h6">Step Two</Typography>
      <TextField
        label="Input for Step 2"
        variant="outlined"
        fullWidth
        value={stepsData.stepTwoInput || ""}
        onChange={handleInputChange}
        sx={{ mb: 2 }}
      />
      <Button variant="outlined" onClick={goBack} sx={{ mr: 2 }}>
        Back
      </Button>
      <Button variant="contained" onClick={goNext}>
        Next
      </Button>
    </Box>
  );
};

// Step 3
const StepThree: React.FC<StepProps> = ({
  goBack,
  goNext,
  setStepData,
  stepsData,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStepData({ stepThreeInput: e.target.value });
  };

  return (
    <Box>
      <Typography variant="h6">Step Three</Typography>
      <TextField
        label="Input for Step 3"
        variant="outlined"
        fullWidth
        value={stepsData.stepThreeInput || ""}
        onChange={handleInputChange}
        sx={{ mb: 2 }}
      />
      <Button variant="outlined" onClick={goBack} sx={{ mr: 2 }}>
        Back
      </Button>
      <Button variant="contained" onClick={goNext}>
        Finish
      </Button>
    </Box>
  );
};

export { StepOne, StepTwo, StepThree };
