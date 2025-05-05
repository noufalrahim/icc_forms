/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormContext } from "@/context/FormContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import { PDFDownloadButton } from "../FormPDF";

export default function FormSummary({ onRestart }: { onRestart: () => void }) {
  const { formData } = useFormContext();

  const renderSection = (title: string, data: Record<string, any>) => (
    <div className="space-y-2">
      <h3 className="font-semibold text-lg">{title}</h3>
      <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-x-4">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="space-y-1">
            <p className="text-sm text-muted-foreground capitalize">
              {key.replace(/([A-Z])/g, " $1")}
            </p>
            <p className="font-medium">{value || "Not provided"}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary mb-4">
          <Check className="h-8 w-8 text-primary-foreground" />
        </div>
        <h2 className="text-2xl font-bold">Application Submitted!</h2>
        <p className="text-muted-foreground">Thank you for completing the form</p>
      </div>

      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="space-y-6">

            {renderSection("Company Details", {
              "Company Name": formData.companyName,
              "Company Type": formData.companyType,
              "Establishment Year": formData.establishmentYear,
              "Capital Structure": formData.capitalStructure,
              "Activities": formData.activities,
              "Employees": formData.employees,
              "Company Address": formData.companyAddress,
              "Organization Structure": formData.organizationStructure,
            })}
            <Separator />

            {renderSection("Reason for nomination", {
              "Justification": formData.justification,
              "Partnership Description": formData.partnershipDescription,
              "Achievements": formData.achievements,
              "Objectives": formData.objectives,
              "Resources And Timeline": formData.resourcesAndTimeline,
              "Expected Benefits": formData.expectedBenefits,
              "Objective Change": formData.objectiveChange,
              "Project Completion": formData.projectCompletion,
              "Societal Benefit": formData.societalBenefit,
              "Patents": formData.patents,
              "Academic Contribution": formData.academicContribution,
              "Org Contribution": formData.orgContribution,
              "External Collaborators": formData.externalCollaborators,
              "Rnd Details": formData.rndDetails,
              "Academic Scientists": formData.academicScientists,
              "Collab Origin": formData.collabOrigin,
            })}
            <Separator />

            {renderSection("Performance Status", {
              "commercializationDetails": formData.commercializationDetails,
              "developmentScope": formData.developmentScope,
              "trialProduction": formData.trialProduction,
              "capacityInfo": formData.capacityInfo,
            })}
            <Separator />

          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row sm:justify-center gap-4 pt-4">
        <PDFDownloadButton formData={formData} />
        <Button onClick={onRestart} variant="outline" className="w-full sm:w-auto">
          Start New Application
        </Button>
      </div>
    </div>
  );
};

