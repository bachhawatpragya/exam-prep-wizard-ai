
import { ExamFormData } from "@/components/ExamForm";
import { studyResourcesBySubject } from "@/data/studyResources";

export type SubjectPlan = {
  name: string;
  confidence: "low" | "medium" | "high";
  totalHours: number;
  dailyHours: number;
  questions: string[];
  resources: { title: string; url: string }[];
};

export type StudyPlan = {
  examName: string;
  examDate: string;
  daysLeft: number;
  dailyStudyTime: number;
  subjects: SubjectPlan[];
};

// Helper function to calculate days between dates
const calculateDaysLeft = (examDate: string): number => {
  const today = new Date();
  const examDay = new Date(examDate);
  const timeDiff = examDay.getTime() - today.getTime();
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
};

// Generate practice questions based on subject
const generateQuestions = (subject: string): string[] => {
  const baseQuestions = [
    `What are the core concepts of ${subject}?`,
    `Explain the relationship between key ${subject} topics`,
    `How would you solve a typical ${subject} problem using the methods you've studied?`
  ];
  
  // Subject-specific questions
  const subjectQuestions: Record<string, string[]> = {
    'math': [
      'How can you apply algebraic concepts to solve real-world problems?',
      'What strategies help you tackle complex mathematical equations?',
      'How do different branches of mathematics connect with each other?'
    ],
    'biology': [
      'How do biological systems maintain homeostasis?',
      'Explain the relationship between structure and function in biological systems',
      'How do organisms interact with their environment?'
    ],
    'chemistry': [
      'How do atomic structure and chemical bonding influence molecular properties?',
      'Explain how chemical equations represent reactions at the molecular level',
      'How do reaction rates and equilibrium relate to each other?'
    ],
    'physics': [
      'How do Newton\'s laws apply in everyday situations?',
      'Explain the relationship between different forms of energy',
      'How do electric and magnetic fields interact?'
    ],
    'history': [
      'How do historical events connect to form larger patterns or trends?',
      'Compare and contrast similar historical events from different time periods',
      'How do primary and secondary sources offer different perspectives on historical events?'
    ],
    'literature': [
      'How do literary devices enhance theme development?',
      'Compare writing styles across different literary movements',
      'How does context influence the interpretation of literary works?'
    ],
    'language': [
      'How do grammar rules enhance communication clarity?',
      'What strategies help with vocabulary retention?',
      'How does context influence language interpretation?'
    ]
  };
  
  // Find matching subject or use default
  const subjectLower = subject.toLowerCase();
  const matchingSubject = Object.keys(subjectQuestions).find(key => 
    subjectLower.includes(key)
  );
  
  if (matchingSubject) {
    return [...baseQuestions, ...subjectQuestions[matchingSubject]].slice(0, 4);
  }
  
  return baseQuestions;
};

// Find study resources for a given subject
const findStudyResources = (subject: string) => {
  const subjectLower = subject.toLowerCase();
  
  // Try to find exact matches first
  for (const [key, resources] of Object.entries(studyResourcesBySubject)) {
    if (subjectLower === key.toLowerCase()) {
      return resources;
    }
  }
  
  // Try to find partial matches
  for (const [key, resources] of Object.entries(studyResourcesBySubject)) {
    if (subjectLower.includes(key.toLowerCase()) || key.toLowerCase().includes(subjectLower)) {
      return resources;
    }
  }
  
  // Return general resources if no match found
  return studyResourcesBySubject.general || [];
};

// Adjust study hours based on confidence level
const adjustHoursByConfidence = (
  totalHours: number,
  confidenceLevels: ("low" | "medium" | "high")[],
  subjectIndex: number
): number => {
  // Calculate weighted distribution
  const weights = confidenceLevels.map(level => {
    switch (level) {
      case 'low': return 3;
      case 'medium': return 2;
      case 'high': return 1;
    }
  });
  
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  const proportion = weights[subjectIndex] / totalWeight;
  
  return Math.round(totalHours * proportion * 10) / 10;
};

export const generateStudyPlan = async (formData: ExamFormData): Promise<StudyPlan> => {
  const { examName, examDate, subjects, confidenceLevels, hoursPerDay } = formData;
  
  // Calculate days until exam
  const daysLeft = calculateDaysLeft(examDate);
  
  // Parse subjects and confidence levels
  const subjectList = subjects.split(',').map(s => s.trim());
  const confidenceList = confidenceLevels.split(',').map(c => 
    c.trim().toLowerCase()
  ) as ("low" | "medium" | "high")[];
  
  // Calculate total study hours available
  const totalStudyHours = daysLeft * hoursPerDay;
  
  // Generate subject plans
  const subjectPlans: SubjectPlan[] = subjectList.map((subject, index) => {
    // Allocate study hours based on confidence level
    const totalSubjectHours = adjustHoursByConfidence(
      totalStudyHours, 
      confidenceList, 
      index
    );
    
    const dailySubjectHours = Number((totalSubjectHours / daysLeft).toFixed(1));
    
    return {
      name: subject,
      confidence: confidenceList[index],
      totalHours: totalSubjectHours,
      dailyHours: dailySubjectHours,
      questions: generateQuestions(subject),
      resources: findStudyResources(subject)
    };
  });
  
  return {
    examName,
    examDate,
    daysLeft,
    dailyStudyTime: hoursPerDay,
    subjects: subjectPlans
  };
};
