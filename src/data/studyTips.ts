
export interface Tip {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const studyTips: Tip[] = [
  {
    id: 1,
    icon: "🧠",
    title: "Mind-Body Connection",
    description: "Regular exercise improves memory retention and cognitive function. Even short 20-minute walks before studying can increase blood flow to your brain by up to 15%. Research shows that students who exercise regularly score 20% higher on memory tests than sedentary peers. Try incorporating brief movement breaks between study sessions for optimal brain performance."
  },
  {
    id: 2,
    icon: "⏰",
    title: "Spaced Repetition",
    description: "Instead of cramming, space out your study sessions. The spacing effect shows that information is better retained when reviewed at gradually increasing intervals. Start with a review after 1 day, then 3 days, then a week. This technique can improve long-term retention by up to 200% compared to mass studying. Use apps like Anki or RemNote to implement spaced repetition effectively."
  },
  {
    id: 3,
    icon: "🍎",
    title: "Nutrition & Brain Health",
    description: "Your brain consumes 20% of your body's calories. Foods rich in omega-3 fatty acids (like salmon and walnuts), antioxidants (berries), and complex carbohydrates (whole grains) have been shown to improve cognitive function. Stay hydrated - even mild dehydration reduces cognitive performance by 10-15%. Consider eating smaller, frequent meals during study sessions to maintain steady glucose levels."
  },
  {
    id: 4,
    icon: "😴",
    title: "Sleep & Memory Consolidation",
    description: "Sleep is critical for converting short-term memories into long-term ones through a process called consolidation. Students who sleep 7-9 hours perform 10% better on exams than those who don't. A 90-minute nap improves memory by up to 20%. Avoid all-nighters - they reduce recall by 40%. The optimal time to review material is right before sleep, as this improves retention during overnight processing."
  },
  {
    id: 5,
    icon: "🔄",
    title: "Active Recall",
    description: "Testing yourself is more effective than rereading. Close your books and actively recall information instead of passively reviewing it. Research shows this improves long-term retention by up to 50%. Create flashcards with questions on one side and answers on the other. Explain concepts aloud as if teaching someone else - known as the 'Feynman Technique' - to identify knowledge gaps and strengthen understanding."
  },
  {
    id: 6,
    icon: "🧩",
    title: "Interleaving Practice",
    description: "Mix up different topics or problem types during a study session rather than focusing on just one. This approach, called interleaving, forces your brain to continually retrieve different strategies, strengthening neural connections. Students who interleave their practice perform 40% better on tests than those who block-practice. While it feels more difficult, this productive struggle enhances long-term learning."
  },
  {
    id: 7,
    icon: "🎧",
    title: "Optimal Study Environment",
    description: "Create a dedicated study space with minimal distractions. Research shows that studying in the same physical environment improves recall by 20-40% due to environmental cues. Background noise should be kept under 70 decibels - classical music at a low volume or ambient noise can help some students focus. Natural lighting improves alertness and concentration by regulating circadian rhythms."
  },
  {
    id: 8,
    icon: "📱",
    title: "Digital Distraction Management",
    description: "The average student is distracted by digital notifications every 3-5 minutes, and it takes 23 minutes to regain full concentration after a distraction. Use apps like Forest, Freedom or Focus@Will to block distracting websites during study sessions. The Pomodoro Technique (25-minute focused sessions with 5-minute breaks) can help maintain concentration and reduce the urge to check devices."
  }
];
