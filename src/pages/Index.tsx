
import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import ExamForm from "@/components/ExamForm";
import StudyPlanView from "@/components/StudyPlanView";
import TipsSlider from "@/components/TipsSlider";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { StudyPlan } from "@/utils/studyPlanGenerator";
import { CalendarClock } from "lucide-react";

const Index = () => {
  const [studyPlan, setStudyPlan] = useState<StudyPlan | null>(null);
  const [showForm, setShowForm] = useState(true);

  const handleStudyPlanGenerated = (plan: StudyPlan) => {
    setStudyPlan(plan);
    setShowForm(false);
  };

  const handleNewPlan = () => {
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container px-4 py-8 mx-auto">
        <ThemeToggle />
        
        <header className="text-center mb-16">
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient">
              ExamPrep <span className="inline-block mx-2">✎</span> AI
            </h1>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-exam-primary/20 via-exam-secondary/20 to-exam-accent/20 blur-3xl rounded-full"></div>
          </div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Your personalized AI assistant for creating effective exam preparation plans
          </p>
        </header>

        <main>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2" id="planner-section">
              <Card className="shadow-md border border-border h-full">
                <CardHeader className="bg-gradient-to-r from-exam-primary to-exam-secondary text-white">
                  <div className="flex items-center gap-2">
                    <CalendarClock className="h-6 w-6" />
                    <h2 className="text-2xl font-semibold">Virtual Exam Preparation Trainer</h2>
                  </div>
                  <p className="text-white/90 mt-2">
                    {showForm 
                      ? "Enter your exam details to get a customized study plan!" 
                      : "Your personalized study plan is ready!"}
                  </p>
                </CardHeader>
                <CardContent className="p-6">
                  {showForm ? (
                    <ExamForm onSubmit={handleStudyPlanGenerated} />
                  ) : studyPlan ? (
                    <StudyPlanView plan={studyPlan} onNewPlan={handleNewPlan} />
                  ) : null}
                </CardContent>
              </Card>
            </div>

            <div id="tips-section">
              <Card className="shadow-md border border-border h-full glassmorphism overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 relative">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    📖 Tips & Tricks for Exam Prep
                  </h3>
                  <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-purple-300/30 dark:bg-purple-600/20 rounded-full blur-3xl -z-10"></div>
                  <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-blue-300/30 dark:bg-blue-600/20 rounded-full blur-3xl -z-10"></div>
                </CardHeader>
                <CardContent className="p-0 h-[400px]">
                  <TipsSlider />
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
