import { FormProvider } from "@/context/FormContext";
import FormStagesDisplay from "./FormStagesDisplay";


export default function MultiStageForm () {
  return (
    <FormProvider>
      <FormStagesDisplay />
    </FormProvider>
  );
};
