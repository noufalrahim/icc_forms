
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { initialFormData } from "@/context/FormContext";
import { useFormContext } from "@/context/FormContext";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FormSummary } from "../FormSummary";
import { FormStepper } from "../FormStepper";
import { AddressInfo, Eligibility, PerformamceStatus, ReasonForNomination } from "../FormStages";

const steps = [
  "Eligibility",
  "Company",
  "Nomination",
  "Performance"
];

export default function FormStagesDisplay() {
  const { currentStep, setCurrentStep, validateCurrentStep, formData, setFormData } = useFormContext();
  const [isCompleted, setIsCompleted] = useState(false);

  const handleNext = () => {
    if (validateCurrentStep()) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
        window.scrollTo(0, 0);
      } else {
        handleSubmit();
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
    window.scrollTo(0, 0);
  };

  const handleSubmit = () => {
    console.log("Form submitted with data:", formData);
    
    toast({
      title: "Form submitted successfully",
      description: "Thank you for completing the form.",
    });
    
    setIsCompleted(true);
  };

  const restartForm = () => {
    setCurrentStep(0);
    setFormData(initialFormData);
    setIsCompleted(false);
    window.scrollTo(0, 0);
  };

  const renderStage = () => {
    if (isCompleted) {
      return <FormSummary onRestart={restartForm} />;
    }

    switch (currentStep) {
      case 0:
        return <Eligibility />;
      case 1:
        return <AddressInfo />;
      case 2:
        return <ReasonForNomination />;
      case 3: 
        return <PerformamceStatus />;
      default:
        return null;
    }
  };

  return (
    <>
      {!isCompleted && (
        <FormStepper
          steps={steps}
          currentStep={currentStep}
          onStepClick={handleStepClick}
          allowNavigation={true}
        />
      )}
      
      <Card className="p-6">
        {renderStage()}
        
        {!isCompleted && (
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Button>
            
            <Button 
              onClick={handleNext}
              className="flex items-center gap-2"
            >
              {currentStep === steps.length - 1 ? "Submit" : "Next"}
              {currentStep < steps.length - 1 && <ArrowRight className="h-4 w-4" />}
            </Button>
          </div>
        )}
      </Card>
    </>
  );
};