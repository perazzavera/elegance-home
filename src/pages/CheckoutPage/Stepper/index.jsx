import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export default function Steps({ currentStep, steps }) {
  return (
    <Box
      sx={{
        width: "100%",
        "& .MuiStepIcon-root": {
          color: "#ccc", // Cor do ícone padrão (não ativo)
        },
        "& .MuiStepIcon-root.Mui-active": {
          color: "var(--color-coral)", // Cor do ícone ativo
        },
        "& .MuiStepIcon-root.Mui-completed": {
          color: "var(--color-rose)", // Cor do ícone completado
        },
        "& .MuiStepLabel-label": {
          color: "#666", // Texto padrão
        },
        "& .MuiStepLabel-label.Mui-active": {
          color: "var(--color-coral)", // Texto do step ativo
          fontWeight: "bold",
        },
        "& .MuiStepLabel-label.Mui-completed": {
          color: "var(--color-rose)", // Texto dos steps completados
        },
        "& .MuiStepConnector-line": {
          borderColor: "#ccc", // Linha entre os steps
        },
      }}
    >
      <Stepper activeStep={currentStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
