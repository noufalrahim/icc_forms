import MultiStageForm from "@/components/MultiStageForm/MultiStageForm";
import logo from "@/assets/images.jpg"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20 py-8">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="items-center flex justify-center">
            <img src={logo} className="h-36 w-36" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">ICC Awards Nomination Form</h1>
          <p className="text-muted-foreground mt-2">ICC – K. V. MARIWALA AWARD FOR “EFFECTIVE CHEMICAL INDUSTRY - ACADEMIA PARTNERSHIP”</p>
        </div>
        <MultiStageForm />
        <div className="text-center text-sm text-muted-foreground mt-10">
          <p>© 2025 ICC. All rights reserved.</p>
          <p className="mt-1">
            <a href="#" className="text-primary hover:underline">Privacy Policy</a> •
            <a href="#" className="text-primary hover:underline ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </div>
  )
}
