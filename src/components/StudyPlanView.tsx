
import { StudyPlan, SubjectPlan } from "@/utils/studyPlanGenerator";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, BookOpen, CheckCircle } from "lucide-react";

interface StudyPlanViewProps {
  plan: StudyPlan;
  onNewPlan: () => void;
}

const StudyPlanView = ({ plan, onNewPlan }: StudyPlanViewProps) => {
  const { examName, examDate, daysLeft, dailyStudyTime, subjects } = plan;

  return (
    <div className="animate-fade-in">
      <div className="bg-accent/30 p-6 rounded-lg mb-8 border border-border">
        <h2 className="text-gradient text-2xl font-bold mb-2">
          Your Custom Study Plan for {examName}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="flex items-center gap-2">
            <Calendar className="text-primary h-5 w-5" />
            <p>
              Exam Date:{" "}
              <span className="font-semibold">
                {new Date(examDate).toLocaleDateString()}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="text-primary h-5 w-5" />
            <p>
              Days Left: <span className="font-semibold">{daysLeft}</span>
            </p>
          </div>
          <div className="flex items-center gap-2 col-span-full">
            <BookOpen className="text-primary h-5 w-5" />
            <p>
              Daily Study Time:{" "}
              <span className="font-semibold">{dailyStudyTime} hours</span>
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {subjects.map((subject: SubjectPlan, index: number) => (
          <div
            key={index}
            className={`subject-card ${subject.confidence} bg-card hover:shadow-md transition-all p-6 rounded-lg border-l-4`}
          >
            <h3 className="text-xl font-bold mb-2 text-foreground">
              {subject.name}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
              <div>
                <span className="text-muted-foreground text-sm">Confidence:</span>
                <span
                  className={`ml-1 font-medium confidence-${subject.confidence}`}
                >
                  {subject.confidence.charAt(0).toUpperCase() + subject.confidence.slice(1)}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Total Hours:</span>
                <span className="ml-1 font-medium">{subject.totalHours}</span>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Daily Study:</span>
                <span className="ml-1 font-medium">
                  {subject.dailyHours} hours/day
                </span>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                Practice Questions:
              </h4>
              <ul className="space-y-2">
                {subject.questions.map((question, qIndex) => (
                  <li key={qIndex} className="flex items-start gap-2">
                    <CheckCircle className="text-primary h-4 w-4 mt-1 flex-shrink-0" />
                    <span className="text-sm">{question}</span>
                  </li>
                ))}
              </ul>
            </div>

            {subject.resources.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                  Study Resources:
                </h4>
                <ul className="space-y-1">
                  {subject.resources.map((resource, rIndex) => (
                    <li key={rIndex} className="text-sm">
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        <span>{resource.title}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-muted-foreground italic mb-4">
          Tips: Break your daily hours into focused sessions (e.g., 25-min blocks with short breaks). Remember that quality of study is more important than quantity.
        </p>
        <Button
          onClick={onNewPlan}
          variant="outline"
          className="mt-2"
        >
          Create Another Plan
        </Button>
      </div>
    </div>
  );
};

export default StudyPlanView;
