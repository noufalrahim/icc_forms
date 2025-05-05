
import React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface FormStepperProps {
  steps: string[];
  currentStep: number;
  onStepClick?: (step: number) => void;
  allowNavigation?: boolean;
}

export default function FormStepper ({
  steps,
  currentStep,
  onStepClick,
  allowNavigation = false,
}: FormStepperProps) {
  return (
    <div className="relative flex items-center justify-between w-full py-4 px-2 mb-8">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          {/* Step Circle */}
          <div className="flex flex-col items-center relative">
            <button
              onClick={() => {
                if (allowNavigation && index <= currentStep && onStepClick) {
                  onStepClick(index);
                }
              }}
              disabled={!allowNavigation || index > currentStep}
              className={cn(
                "flex items-center justify-center rounded-full w-8 h-8 text-sm font-medium transition-colors z-10",
                index === currentStep
                  ? "bg-primary text-primary-foreground border-2 border-primary"
                  : index < currentStep
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground",
                allowNavigation && index <= currentStep ? "cursor-pointer" : "cursor-default"
              )}
              aria-current={index === currentStep ? "step" : undefined}
            >
              {index < currentStep ? (
                <Check className="h-4 w-4" />
              ) : (
                <span>{index + 1}</span>
              )}
            </button>
            
            {/* Step Label - now placed below the button */}
            <span className="text-xs font-medium text-center mt-2 w-16 overflow-hidden text-ellipsis">
              {step}
            </span>
          </div>

          {/* Connector Line */}
          {index < steps.length - 1 && (
            <div
              className={cn(
                "h-1 flex-1 mx-1",
                index < currentStep
                  ? "bg-primary"
                  : "bg-muted"
              )}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
