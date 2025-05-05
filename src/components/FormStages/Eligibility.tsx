
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function Stage0Eligibility() {

  const requirements: string[] = [
    'Any industrial unit in the chemical industry in India either in the public, private, or co-operative sector are eligible. The participation is open to all the industrial units irrespective of whether they are ICC Members or not.',
    'The Academic institution which is in Collaboration with the company, could be either Government aided/funded University /Institution or Private Academic institution',
    'The Industry-Academia collaboration should have been initiated preferably within the last 5 years.',
    'Funding for the collaboration could have come from any source. That is either Industry, or Academia or both or from the Government.',
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Eligibility Criteria</h2>
        <p className="text-muted-foreground">
          Please confirm you meet all requirements to proceed
        </p>
      </div>

      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <h3 className="font-medium mb-1">Important Notice:</h3>
              <p>
                Before proceeding with this application, please review the following
                eligibility criteria. You must meet all criteria to submit this
                application successfully.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {
          requirements.map((req) => (
            <div className="flex items-start space-x-3 border p-4 rounded-md">
              <p className="text-sm text-muted-foreground">
                {req}
              </p>
            </div>
          ))
        }
        <div className="flex items-start space-x-3 border p-4 rounded-md">
          <div className="text-sm text-muted-foreground space-y-2">
            <p className="list-disc list-inside">
              The Industry-Academia collaboration should have resulted in a tangible solution(s) for the Industry or Academia.
            </p>
            <div className="">
              <p className="font-medium">Tangible solutions for the Academic Institution / Laboratory:</p>
              <ul className="list-disc list-inside ml-4">
                <li>Start of a new course or support to an existing course where Industry-focused knowledge & skills are imparted to students with proven direct involvement of the Industry.</li>
                <li>Generation of Intellectual Property Rights via joint patent application(s).</li>
                <li>Licensing of new technology/process/product to the chemical industry with potential commercialization in 1–2 years.</li>
              </ul>

              <p className="font-medium mt-2">Tangible solutions for the Industry:</p>
              <ul className="list-disc list-inside ml-4">
                <li>Problem-solving in operations/processes leading to improved output, compliance, or cost reduction.</li>
                <li>Enhanced R&D resulting in an Intellectual Property Right application (e.g., patent) with commercial potential.</li>
                <li>Licensing of new technology/process/product to the chemical industry with expected commercialization in 1–2 years.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

