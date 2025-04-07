
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { generateStudyPlan } from "@/utils/studyPlanGenerator";

export type ExamFormData = {
  examName: string;
  examDate: string;
  subjects: string;
  confidenceLevels: string;
  hoursPerDay: number;
};

interface ExamFormProps {
  onSubmit: (plan: any) => void;
}

const ExamForm = ({ onSubmit }: ExamFormProps) => {
  const [formData, setFormData] = useState<ExamFormData>({
    examName: "",
    examDate: "",
    subjects: "",
    confidenceLevels: "",
    hoursPerDay: 0,
  });

  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "number" ? parseFloat(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validation
    if (!formData.examName || !formData.examDate || !formData.subjects || !formData.confidenceLevels || !formData.hoursPerDay) {
      toast({
        title: "Missing information",
        description: "Please fill all fields to generate your study plan",
        variant: "destructive",
      });
      return;
    }

    // Date validation
    const selectedDate = new Date(formData.examDate);
    const today = new Date();
    if (selectedDate <= today) {
      toast({
        title: "Invalid date",
        description: "Exam date must be in the future",
        variant: "destructive",
      });
      return;
    }

    // Check if subjects and confidence levels match
    const subjectsArray = formData.subjects.split(",").map(s => s.trim());
    const confidenceLevelsArray = formData.confidenceLevels.split(",").map(c => c.trim().toLowerCase());
    
    if (subjectsArray.length !== confidenceLevelsArray.length) {
      toast({
        title: "Mismatch in subjects and confidence levels",
        description: "Please ensure the number of subjects and confidence levels match",
        variant: "destructive",
      });
      return;
    }

    // Validate confidence levels
    for (const level of confidenceLevelsArray) {
      if (!["low", "medium", "high"].includes(level)) {
        toast({
          title: "Invalid confidence level",
          description: "Confidence levels must be 'low', 'medium', or 'high'",
          variant: "destructive",
        });
        return;
      }
    }

    try {
      const studyPlan = await generateStudyPlan(formData);
      onSubmit(studyPlan);
      
      toast({
        title: "Study plan generated",
        description: "Your personalized study plan has been created!",
      });
    } catch (error) {
      console.error("Error generating study plan:", error);
      toast({
        title: "Error",
        description: "Failed to generate study plan. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="examName">1. Exam Name (e.g., SAT, finals):</Label>
          <Input
            id="examName"
            name="examName"
            value={formData.examName}
            onChange={handleChange}
            placeholder="Enter exam name"
            className="mt-1"
            required
          />
        </div>

        <div>
          <Label htmlFor="examDate">2. Exam Date:</Label>
          <Input
            id="examDate"
            name="examDate"
            type="date"
            value={formData.examDate}
            onChange={handleChange}
            className="mt-1"
            required
          />
        </div>

        <div>
          <Label htmlFor="subjects">3. Subjects/Topics (e.g., Math, Biology):</Label>
          <Input
            id="subjects"
            name="subjects"
            value={formData.subjects}
            onChange={handleChange}
            placeholder="Separate multiple subjects with commas"
            className="mt-1"
            required
          />
        </div>

        <div>
          <Label htmlFor="confidenceLevels">4. Confidence Levels (low, medium, high):</Label>
          <Input
            id="confidenceLevels"
            name="confidenceLevels"
            value={formData.confidenceLevels}
            onChange={handleChange}
            placeholder="Match the order of subjects (e.g., low, high)"
            className="mt-1"
            required
          />
        </div>

        <div>
          <Label htmlFor="hoursPerDay">5. Hours per Day:</Label>
          <Input
            id="hoursPerDay"
            name="hoursPerDay"
            type="number"
            step="0.1"
            min="0"
            value={formData.hoursPerDay || ""}
            onChange={handleChange}
            placeholder="Enter available study hours per day"
            className="mt-1"
            required
          />
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-exam-primary to-exam-secondary hover:from-exam-primary/90 hover:to-exam-secondary/90 text-white py-3 rounded-md transition-all"
      >
        Generate Study Plan
      </Button>
    </form>
  );
};

export default ExamForm;
