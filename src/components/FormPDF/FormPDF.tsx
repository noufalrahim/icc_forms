
import React from "react";
import { 
  Document, 
  Page, 
  Text, 
  View, 
  StyleSheet, 
  PDFDownloadLink 
} from "@react-pdf/renderer";
import { FormData } from "@/context/FormContext";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    borderBottom: 1,
    borderBottomColor: "#E5E7EB",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    width: "40%",
  },
  value: {
    fontSize: 12,
    width: "60%",
  },
});

const FormPDF = ({ formData }: { formData: FormData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.title}>
        <Text>Application Form Submission</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>  </Text>
        <View style={styles.row}>
          <Text style={styles.label}>Company Name:</Text>
          <Text style={styles.value}>{formData.companyName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Company Type:</Text>
          <Text style={styles.value}>{formData.companyType}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Establishment Year:</Text>
          <Text style={styles.value}>{formData.establishmentYear}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Capital Structure:</Text>
          <Text style={styles.value}>{formData.capitalStructure}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Activities:</Text>
          <Text style={styles.value}>{formData.activities}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Employees:</Text>
          <Text style={styles.value}>{formData.employees}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Company Address:</Text>
          <Text style={styles.value}>{formData.companyAddress}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Organization Structure:</Text>
          <Text style={styles.value}>{formData.organizationStructure}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Reason For Nomination</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Justification:</Text>
          <Text style={styles.value}>{formData.justification}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Partnership Description:</Text>
          <Text style={styles.value}>{formData.partnershipDescription}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Achievements:</Text>
          <Text style={styles.value}>{formData.achievements}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Objectives:</Text>
          <Text style={styles.value}>{formData.objectiveChange}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Resources And Timeline:</Text>
          <Text style={styles.value}>{formData.resourcesAndTimeline}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Expected Benefits:</Text>
          <Text style={styles.value}>{formData.expectedBenefits}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Objective Change:</Text>
          <Text style={styles.value}>{formData.objectiveChange}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Project Completion:</Text>
          <Text style={styles.value}>{formData.projectCompletion}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Societal Benefit:</Text>
          <Text style={styles.value}>{formData.societalBenefit}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Patents:</Text>
          <Text style={styles.value}>{formData.patents}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Academic Contribution:</Text>
          <Text style={styles.value}>{formData.academicContribution}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Org Contribution:</Text>
          <Text style={styles.value}>{formData.orgContribution}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>External Collaborators:</Text>
          <Text style={styles.value}>{formData.externalCollaborators}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Rnd Details:</Text>
          <Text style={styles.value}>{formData.rndDetails}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Academic Scientists:</Text>
          <Text style={styles.value}>{formData.academicScientists}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Collab Origin:</Text>
          <Text style={styles.value}>{formData.collabOrigin}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Performance Status</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Commercialization Details:</Text>
          <Text style={styles.value}>{formData.commercializationDetails}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Development Scope:</Text>
          <Text style={styles.value}>{formData.developmentScope}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Trial Production:</Text>
          <Text style={styles.value}>{formData.trialProduction}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Capacity Info:</Text>
          <Text style={styles.value}>{formData.capacityInfo}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default function PDFDownloadButton ({ formData }: { formData: FormData }) {
  const fileName = `application.pdf`;
  
  return (
    <PDFDownloadLink
      document={<FormPDF formData={formData} />}
      fileName={fileName}
      style={{ textDecoration: 'none' }}
    >
      {({ loading }) => (
        <Button disabled={loading} className="flex items-center gap-2">
          <FileText className="h-4 w-4" />
          {loading ? "Preparing PDF..." : "Download as PDF"}
        </Button>
      )}
    </PDFDownloadLink>
  );
};
