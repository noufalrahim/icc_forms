
import { useFormContext } from "@/context/FormContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { Upload, FileText } from "lucide-react";

const companyTypes = [
  "Private Limited",
  "Public Limited",
  "Joint Sector",
  "Co-operative Sector",
  "Partnership",
  "Sole Proprietorship",
  "LLP",
  "Other"
];

const Stage2AddressInfo = () => {
  const { formData, setFormData, errors } = useFormContext();
  const [financialDoc, setFinancialDoc] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCompanyTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, companyType: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFinancialDoc(file);
      setFormData(prev => ({ ...prev, financialDoc: file }));
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Company Information</h2>
        <p className="text-muted-foreground">Tell us about your company</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="companyName">Name of Company</Label>
          <Input
            id="companyName"
            name="companyName"
            value={formData.companyName || ''}
            onChange={handleChange}
            placeholder="Company Name"
            className={errors.companyName ? "border-destructive" : ""}
          />
          {errors.companyName && (
            <p className="text-sm text-destructive">{errors.companyName}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="companyType">Company Status</Label>
          <Select
            value={formData.companyType || ''}
            onValueChange={handleCompanyTypeChange}
          >
            <SelectTrigger
              id="companyType"
              className={errors.companyType ? "border-destructive" : ""}
            >
              <SelectValue placeholder="Select company type" />
            </SelectTrigger>
            <SelectContent>
              {companyTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.companyType && (
            <p className="text-sm text-destructive">{errors.companyType}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="establishmentYear">Year of Establishment</Label>
          {/* <Input
            id="establishmentYear"
            name="establishmentYear"
            type="number"
            value={formData.establishmentYear ? String(formData.establishmentYear) : ''}
            onChange={handleChange}
            placeholder="YYYY"
            min="1900"
            max={new Date().getFullYear()}
            className={errors.establishmentYear ? "border-destructive" : ""}
          /> */}
          <Select
            onValueChange={(value) => setFormData(prev => ({ ...prev, establishmentYear: parseInt(value, 10) }))}
            value={formData.establishmentYear ? String(formData.establishmentYear) : ''}
          >
            <SelectTrigger
              id="establishmentYear"
              className={errors.establishmentYear ? "border-destructive" : ""}
            >
              <SelectValue placeholder="Select establishment year" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 2026 - 1950 }, (_, i) => 1950 + i).map((type) => (
                <SelectItem key={type} value={String(type)}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.establishmentYear && (
            <p className="text-sm text-destructive">{errors.establishmentYear}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="capitalStructure">Capital & Financial Structure</Label>
          <Textarea
            id="capitalStructure"
            name="capitalStructure"
            value={formData.capitalStructure || ''}
            onChange={handleChange}
            placeholder="Describe your company's capital and financial structure"
            rows={3}
            className={errors.capitalStructure ? "border-destructive" : ""}
          />
          {errors.capitalStructure && (
            <p className="text-sm text-destructive">{errors.capitalStructure}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Financial Documents (P&L Statement and Balance Sheet)</Label>
          <Input
            ref={fileInputRef}
            id="financialDoc"
            type="file"
            accept=".pdf,.doc,.docx,.xls,.xlsx"
            onChange={handleFileChange}
            className="hidden"
          />

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={triggerFileUpload}
              className="w-full flex items-center justify-center gap-2"
            >
              <Upload className="h-4 w-4" />
              {financialDoc ? "Replace Document" : "Upload Financial Documents"}
            </Button>
          </div>

          {financialDoc && (
            <div className="flex items-center gap-2 p-2 bg-accent/50 rounded-md">
              <FileText className="h-4 w-4" />
              <span className="text-sm truncate">{financialDoc.name}</span>
            </div>
          )}

          {errors.financialDoc && (
            <p className="text-sm text-destructive">{errors.financialDoc}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="activities">Range of Principal Activities/Services</Label>
          <Textarea
            id="activities"
            name="activities"
            value={formData.activities || ''}
            onChange={handleChange}
            placeholder="Describe your company's main manufacturing activities or engineering services"
            rows={3}
            className={errors.activities ? "border-destructive" : ""}
          />
          {errors.activities && (
            <p className="text-sm text-destructive">{errors.activities}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="companyAddress">Company Location (Address)</Label>
          <Textarea
            id="companyAddress"
            name="companyAddress"
            value={formData.companyAddress || ''}
            onChange={handleChange}
            placeholder="Company's full address"
            rows={2}
            className={errors.companyAddress ? "border-destructive" : ""}
          />
          {errors.companyAddress && (
            <p className="text-sm text-destructive">{errors.companyAddress}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="employees">Number of Employees</Label>
          <Input
            id="employees"
            name="employees"
            type="number"
            value={formData.employees || ''}
            onChange={handleChange}
            placeholder="Total number of employees"
            min="1"
            className={errors.employees ? "border-destructive" : ""}
          />
          {errors.employees && (
            <p className="text-sm text-destructive">{errors.employees}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="organizationStructure">Organization Structure</Label>
          <Textarea
            id="organizationStructure"
            name="organizationStructure"
            value={formData.organizationStructure || ''}
            onChange={handleChange}
            placeholder="Describe your company's organizational structure"
            rows={3}
            className={errors.organizationStructure ? "border-destructive" : ""}
          />
          {errors.organizationStructure && (
            <p className="text-sm text-destructive">{errors.organizationStructure}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stage2AddressInfo;
