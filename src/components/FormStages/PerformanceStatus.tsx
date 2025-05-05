import React from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "@/context/FormContext";

export default function PerformanceStatus() {
    const { formData, setFormData, errors } = useFormContext();

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold">Reasons for Nomination / Application for the Award</h2>
                <p className="text-muted-foreground">Tell us about the reason for nomination</p>
            </div>
            <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> This section is relevant only if a <strong>new technology development</strong> took place in the collaboration. Otherwise, these questions are optional.
            </p>

            <div className="space-y-2">
                <Label htmlFor="commercializationDetails">
                    Has this technology already been commercialized? If yes, mention the year of commercialization, economic impact of the company's project, and the payback period. Briefly describe problems faced during development/design/scale-up with solutions.
                </Label>
                <Textarea
                    id="commercializationDetails"
                    name="commercializationDetails"
                    value={formData.commercializationDetails || ""}
                    onChange={handleChange}
                    placeholder="Enter details about commercialization, year, impact, and issues faced..."
                    className={errors.commercializationDetails ? "border-destructive" : ""}
                />
                {errors.commercializationDetails && (
                    <p className="text-sm text-destructive">{errors.commercializationDetails}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="developmentScope">
                    Was the entire technology package developed from start to end? If not, clarify if assistance was provided during the pilot plant stage leading to final commercial transfer.
                </Label>
                <Textarea
                    id="developmentScope"
                    name="developmentScope"
                    value={formData.developmentScope || ""}
                    onChange={handleChange}
                    placeholder="Explain the development scope and assistance if any..."
                    className={errors.developmentScope ? "border-destructive" : ""}
                />
                {errors.developmentScope && (
                    <p className="text-sm text-destructive">{errors.developmentScope}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="trialProduction">
                    When did trial production start and how long did it take to stabilize operations on a commercial scale?
                </Label>
                <Textarea
                    id="trialProduction"
                    name="trialProduction"
                    value={formData.trialProduction || ""}
                    onChange={handleChange}
                    placeholder="Mention trial production start date and stabilization time..."
                    className={errors.trialProduction ? "border-destructive" : ""}
                />
                {errors.trialProduction && (
                    <p className="text-sm text-destructive">{errors.trialProduction}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="capacityInfo">
                    Provide information on change in plant capacity and capacity utilization achieved. Also include increase in actual production (quantity and value) since start-up and current production rate.
                </Label>
                <Textarea
                    id="capacityInfo"
                    name="capacityInfo"
                    value={formData.capacityInfo || ""}
                    onChange={handleChange}
                    placeholder="Provide data on plant capacity, utilization, and production figures..."
                    className={errors.capacityInfo ? "border-destructive" : ""}
                />
                {errors.capacityInfo && (
                    <p className="text-sm text-destructive">{errors.capacityInfo}</p>
                )}
            </div>
        </div>
    );
};
