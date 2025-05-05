/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";

export type FormData = {
  companyName: string;
  companyType: string;
  establishmentYear: number;
  capitalStructure: string;
  activities: string;
  companyAddress: string;
  employees: number;
  organizationStructure: string;

  justification: string;
  partnershipDescription: string;
  achievements: string;
  objectives: string;
  resourcesAndTimeline: string;
  expectedBenefits: string;
  objectiveChange: string;
  projectCompletion: string;
  societalBenefit: string;
  patents: string;
  academicContribution: string;
  orgContribution: string;
  externalCollaborators: string;
  rndDetails: string;
  academicScientists: string;
  collabOrigin: string;

  commercializationDetails: string;
  developmentScope: string;
  trialProduction: string;
  capacityInfo: string;
};

type FormContextType = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  errors: Record<string, string>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  validateCurrentStep: () => boolean;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const initialFormData: FormData = {
  companyName: '',
  companyType: '',
  establishmentYear: 0,
  capitalStructure: '',
  activities: '',
  employees: 0,
  companyAddress: '',
  organizationStructure: '',

  justification: '',
  partnershipDescription: '',
  achievements: '',
  objectives: '',
  resourcesAndTimeline: '',
  expectedBenefits: '',
  objectiveChange: '',
  projectCompletion: '',
  societalBenefit: '',
  patents: '',
  academicContribution: '',
  orgContribution: '',
  externalCollaborators: '',
  rndDetails: '',
  academicScientists: '',
  collabOrigin: '',

  commercializationDetails: '',
  developmentScope: '',
  trialProduction: '',
  capacityInfo: '',
};

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [currentStep, setCurrentStep] = useState(0);

  const validateCurrentStep = () => {
    const newErrors: Record<string, string> = {};
    // let isValid = true;

    switch (currentStep) {
      case 0:
        break;

      case 1:
        // if (!formData.companyName) {
        //   newErrors.companyName = "Company name is required";
        //   isValid = false;
        // }
        // if (!formData.companyType) {
        //   newErrors.companyType = "Company type is required";
        //   isValid = false;
        // }
        // if (!formData.establishmentYear) {
        //   newErrors.establishmentYear = "Establishment year is required";
        //   isValid = false;
        // }
        // if (!formData.capitalStructure) {
        //   newErrors.capitalStructure = "Capital Structure is required";
        //   isValid = false;
        // }
        // if (!formData.activities) {
        //   newErrors.activities = "Activities is required";
        //   isValid = false;
        // }
        // if (!formData.employees) {
        //   newErrors.employees = "Employees is required";
        //   isValid = false;
        // }
        // if (!formData.companyAddress) {
        //   newErrors.companyAddress = "Company Address is required";
        //   isValid = false;
        // }
        // if (!formData.organizationStructure) {
        //   newErrors.organizationStructure = "Organization Structure is required";
        //   isValid = false;
        // }
        break;

      case 2:
        // if (!formData.justification) {
        //   newErrors.justification = "Justification is required";
        //   isValid = false;
        // }
        // if (!formData.partnershipDescription) {
        //   newErrors.partnershipDescription = "Partnership Description is required";
        //   isValid = false;
        // }
        // if (!formData.achievements) {
        //   newErrors.achievements = "Achievement is required";
        //   isValid = false;
        // }
        // if (!formData.objectives) {
        //   newErrors.objectives = "Objective is required";
        //   isValid = false;
        // }
        // if (!formData.resourcesAndTimeline) {
        //   newErrors.resourcesAndTimeline = "Resources and timeline is required";
        //   isValid = false;
        // }
        // if (!formData.expectedBenefits) {
        //   newErrors.expectedBenefits = "Expected benefits are required";
        //   isValid = false;
        // }
        // if (!formData.objectiveChange) {
        //   newErrors.objectiveChange = "Objective Change is required";
        //   isValid = false;
        // }
        // if (!formData.projectCompletion) {
        //   newErrors.projectCompletion = "Project Completion is required";
        //   isValid = false;
        // }
        // if (!formData.societalBenefit) {
        //   newErrors.societalBenefit = "Societal benefit is required";
        //   isValid = false;
        // }
        // if (!formData.patents) {
        //   newErrors.patents = "Patents is required";
        //   isValid = false;
        // }
        // if (!formData.academicContribution) {
        //   newErrors.academicContribution = "Academic Contribution is required";
        //   isValid = false;
        // }
        // if (!formData.orgContribution) {
        //   newErrors.orgContribution = "Org contribution is required";
        //   isValid = false;
        // }
        // if (!formData.externalCollaborators) {
        //   newErrors.externalCollaborators = "External collaborators are required";
        //   isValid = false;
        // }
        // if (!formData.rndDetails) {
        //   newErrors.rndDetails = "Rnd Details are required";
        //   isValid = false;
        // }
        // if (!formData.academicScientists) {
        //   newErrors.academicScientists = "Academic scientists are required";
        //   isValid = false;
        // }
        // if (!formData.collabOrigin) {
        //   newErrors.collabOrigin = "Collab origin are required";
        //   isValid = false;
        // }
        break;

      case 3:
        // if (!formData.commercializationDetails) {
        //   newErrors.commercializationDetails = "Commercialization Details are required";
        //   isValid = false;
        // }
        // if (!formData.developmentScope) {
        //   newErrors.developmentScope = "Development Scope is required";
        //   isValid = false;
        // }
        // if (!formData.trialProduction) {
        //   newErrors.trialProduction = "Trial Production is required";
        //   isValid = false;
        // }
        // if (!formData.capacityInfo) {
        //   newErrors.capacityInfo = "Capacity Info is required";
        //   isValid = false;
        // }
        break;

      case 4:
        break;

      default:
        break;
    }

    setErrors(newErrors);
    return true;
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        errors,
        setErrors,
        currentStep,
        setCurrentStep,
        validateCurrentStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
