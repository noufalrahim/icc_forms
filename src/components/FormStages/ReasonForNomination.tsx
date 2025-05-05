import React from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "@/context/FormContext";

export default function ReasonForNomination() {
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
            <div className="space-y-2">
                <Label htmlFor="justification">Brief justification for seeking the award:</Label>
                <Textarea
                    id="justification"
                    name="justification"
                    value={formData.justification || ""}
                    onChange={handleChange}
                    placeholder="Brief justification for seeking the award..."
                    className={errors.justification ? "border-destructive" : ""}
                />
                {errors.justification && <p className="text-sm text-destructive">{errors.justification}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="partnershipDescription">Description of the partnership (collaboration):</Label>
                <Textarea
                    id="partnershipDescription"
                    name="partnershipDescription"
                    value={formData.partnershipDescription || ""}
                    onChange={handleChange}
                    placeholder="Describe the partnership and its uniqueness..."
                    className={errors.partnershipDescription ? "border-destructive" : ""}
                />
                {errors.partnershipDescription && <p className="text-sm text-destructive">{errors.partnershipDescription}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="achievements">Achievements in the partnership:</Label>
                <Textarea
                    id="achievements"
                    name="achievements"
                    value={formData.achievements || ""}
                    onChange={handleChange}
                    placeholder="Detail achievements in the partnership..."
                    className={errors.achievements ? "border-destructive" : ""}
                />
                {errors.achievements && <p className="text-sm text-destructive">{errors.achievements}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="objectives">Objectives of the collaboration:</Label>
                <Textarea
                    id="objectives"
                    name="objectives"
                    value={formData.objectives || ""}
                    onChange={handleChange}
                    placeholder="State the objectives of the collaboration..."
                    className={errors.objectives ? "border-destructive" : ""}
                />
                {errors.objectives && <p className="text-sm text-destructive">{errors.objectives}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="resourcesAndTimeline">Resources allocated & timeline agreed:</Label>
                <Textarea
                    id="resourcesAndTimeline"
                    name="resourcesAndTimeline"
                    value={formData.resourcesAndTimeline || ""}
                    onChange={handleChange}
                    placeholder="Mention resources allocated and timeline agreed..."
                    className={errors.resourcesAndTimeline ? "border-destructive" : ""}
                />
                {errors.resourcesAndTimeline && <p className="text-sm text-destructive">{errors.resourcesAndTimeline}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="expectedBenefits">Expected benefits of the collaboration:</Label>
                <Textarea
                    id="expectedBenefits"
                    name="expectedBenefits"
                    value={formData.expectedBenefits || ""}
                    onChange={handleChange}
                    placeholder="Specify foreseen or expected benefits..."
                    className={errors.expectedBenefits ? "border-destructive" : ""}
                />
                {errors.expectedBenefits && <p className="text-sm text-destructive">{errors.expectedBenefits}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="objectiveChange">Changes in objectives during collaboration:</Label>
                <Textarea
                    id="objectiveChange"
                    name="objectiveChange"
                    value={formData.objectiveChange || ""}
                    onChange={handleChange}
                    placeholder="Mention any changes in objectives during the project..."
                    className={errors.objectiveChange ? "border-destructive" : ""}
                />
                {errors.objectiveChange && <p className="text-sm text-destructive">{errors.objectiveChange}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="projectCompletion">Project completion status and delay reasons:</Label>
                <Textarea
                    id="projectCompletion"
                    name="projectCompletion"
                    value={formData.projectCompletion || ""}
                    onChange={handleChange}
                    placeholder="Was the project completed on time? If not, mention delay reasons..."
                    className={errors.projectCompletion ? "border-destructive" : ""}
                />
                {errors.projectCompletion && <p className="text-sm text-destructive">{errors.projectCompletion}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="societalBenefit">Was the collaboration beneficial for society?</Label>
                <Textarea
                    id="societalBenefit"
                    name="societalBenefit"
                    value={formData.societalBenefit || ""}
                    onChange={handleChange}
                    placeholder="Explain the societal impact, if any..."
                    className={errors.societalBenefit ? "border-destructive" : ""}
                />
                {errors.societalBenefit && <p className="text-sm text-destructive">{errors.societalBenefit}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="patents">Details of patents or applications, if any:</Label>
                <Textarea
                    id="patents"
                    name="patents"
                    value={formData.patents || ""}
                    onChange={handleChange}
                    placeholder="Provide any patent-related details..."
                    className={errors.patents ? "border-destructive" : ""}
                />
                {errors.patents && <p className="text-sm text-destructive">{errors.patents}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="academicContribution">Academic Institution's contribution:</Label>
                <Textarea
                    id="academicContribution"
                    name="academicContribution"
                    value={formData.academicContribution || ""}
                    onChange={handleChange}
                    placeholder="Mention academic institution's contribution..."
                    className={errors.academicContribution ? "border-destructive" : ""}
                />
                {errors.academicContribution && <p className="text-sm text-destructive">{errors.academicContribution}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="orgContribution">Your organization's contribution:</Label>
                <Textarea
                    id="orgContribution"
                    name="orgContribution"
                    value={formData.orgContribution || ""}
                    onChange={handleChange}
                    placeholder="Describe contributions of your organization..."
                    className={errors.orgContribution ? "border-destructive" : ""}
                />
                {errors.orgContribution && <p className="text-sm text-destructive">{errors.orgContribution}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="externalCollaborators">External collaborators (if any):</Label>
                <Textarea
                    id="externalCollaborators"
                    name="externalCollaborators"
                    value={formData.externalCollaborators || ""}
                    onChange={handleChange}
                    placeholder="List foreign or other collaborators..."
                    className={errors.externalCollaborators ? "border-destructive" : ""}
                />
                {errors.externalCollaborators && <p className="text-sm text-destructive">{errors.externalCollaborators}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="rndDetails">R&D base and personnel involved:</Label>
                <Textarea
                    id="rndDetails"
                    name="rndDetails"
                    value={formData.rndDetails || ""}
                    onChange={handleChange}
                    placeholder="Mention R&D base, budget, and number of scientists..."
                    className={errors.rndDetails ? "border-destructive" : ""}
                />
                {errors.rndDetails && <p className="text-sm text-destructive">{errors.rndDetails}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="academicScientists">Number of academic scientists involved:</Label>
                <Textarea
                    id="academicScientists"
                    name="academicScientists"
                    value={formData.academicScientists || ""}
                    onChange={handleChange}
                    placeholder="How many academic scientists participated?"
                    className={errors.academicScientists ? "border-destructive" : ""}
                />
                {errors.academicScientists && <p className="text-sm text-destructive">{errors.academicScientists}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="collabOrigin">How did the collaboration originate?</Label>
                <Textarea
                    id="collabOrigin"
                    name="collabOrigin"
                    value={formData.collabOrigin || ""}
                    onChange={handleChange}
                    placeholder="Was the objective set by your org or collaboratively?"
                    className={errors.collabOrigin ? "border-destructive" : ""}
                />
                {errors.collabOrigin && <p className="text-sm text-destructive">{errors.collabOrigin}</p>}
            </div>
        </div>
    );
};
