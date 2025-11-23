export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "At a party, you are more likely to:",
    options: [
      "Spend time with a small group of close friends",
      "Mingle with many different people",
      "Have deep conversations with a few people",
      "Observe others from a distance",
      "Be the center of attention"
    ]
  },
  {
    id: 2,
    question: "When making decisions, you prefer to:",
    options: [
      "Rely on logic and objective analysis",
      "Consider how it affects others",
      "Follow your gut feeling",
      "Analyze all possible outcomes",
      "Go with what feels right in the moment"
    ]
  },
  {
    id: 3,
    question: "You prefer work environments that are:",
    options: [
      "Structured and organized",
      "Flexible and adaptable",
      "Collaborative and team-oriented",
      "Independent and autonomous",
      "Fast-paced and dynamic"
    ]
  },
  {
    id: 4,
    question: "When learning something new, you:",
    options: [
      "Read about it first",
      "Jump in and try it hands-on",
      "Discuss it with others",
      "Observe others doing it",
      "Create a detailed plan first"
    ]
  },
  {
    id: 5,
    question: "Your ideal weekend involves:",
    options: [
      "Relaxing at home with a good book",
      "Going out and socializing",
      "Working on personal projects",
      "Exploring new places",
      "Spending time with close friends"
    ]
  },
  {
    id: 6,
    question: "When facing a problem, you:",
    options: [
      "Analyze it systematically",
      "Consider the emotional impact",
      "Seek advice from others",
      "Think about creative solutions",
      "Take immediate action"
    ]
  },
  {
    id: 7,
    question: "You are more energized by:",
    options: [
      "Time alone to reflect",
      "Interacting with others",
      "Completing tasks efficiently",
      "Exploring new ideas",
      "Helping others solve problems"
    ]
  },
  {
    id: 8,
    question: "In group projects, you typically:",
    options: [
      "Take the lead and organize",
      "Contribute ideas and collaborate",
      "Work independently on your part",
      "Support and encourage others",
      "Focus on the big picture"
    ]
  },
  {
    id: 9,
    question: "You prefer to:",
    options: [
      "Plan ahead and stick to schedules",
      "Keep options open and be spontaneous",
      "Follow established routines",
      "Adapt as situations change",
      "Balance planning with flexibility"
    ]
  },
  {
    id: 10,
    question: "When someone is upset, you:",
    options: [
      "Try to solve their problem logically",
      "Offer emotional support and empathy",
      "Give them space to process",
      "Help them see different perspectives",
      "Listen and validate their feelings"
    ]
  },
  {
    id: 11,
    question: "You make decisions based on:",
    options: [
      "Facts and data",
      "Values and principles",
      "What feels right",
      "Long-term consequences",
      "Immediate needs"
    ]
  },
  {
    id: 12,
    question: "You prefer communication that is:",
    options: [
      "Direct and to the point",
      "Warm and personal",
      "Detailed and comprehensive",
      "Brief and concise",
      "Encouraging and supportive"
    ]
  },
  {
    id: 13,
    question: "When stressed, you:",
    options: [
      "Withdraw to process alone",
      "Seek support from others",
      "Focus on solving the problem",
      "Look for distractions",
      "Try to maintain perspective"
    ]
  },
  {
    id: 14,
    question: "You are more interested in:",
    options: [
      "How things work",
      "How things affect people",
      "What could be possible",
      "What is practical and useful",
      "What is meaningful and important"
    ]
  },
  {
    id: 15,
    question: "Your approach to deadlines is:",
    options: [
      "Plan ahead and finish early",
      "Work steadily toward the deadline",
      "Work best under pressure",
      "Break it into manageable steps",
      "Adapt as needed along the way"
    ]
  },
  {
    id: 16,
    question: "You value most:",
    options: [
      "Efficiency and effectiveness",
      "Harmony and relationships",
      "Innovation and creativity",
      "Stability and security",
      "Growth and development"
    ]
  }
];

// MBTI calculation function
export function calculateMBTI(answers: { questionId: number; answer: number }[]): string {
  // Simplified MBTI calculation
  // Questions 1, 5, 7, 13 -> E/I (Extraversion/Introversion)
  // Questions 2, 6, 11, 14 -> S/N (Sensing/Intuition)
  // Questions 3, 9, 12, 15 -> T/F (Thinking/Feeling)
  // Questions 4, 8, 10, 16 -> J/P (Judging/Perceiving)
  
  const dimensions = {
    E: 0, I: 0, // Extraversion vs Introversion
    S: 0, N: 0, // Sensing vs Intuition
    T: 0, F: 0, // Thinking vs Feeling
    J: 0, P: 0, // Judging vs Perceiving
  };

  answers.forEach(({ questionId, answer }) => {
    // Map questions to dimensions (simplified mapping)
    if ([1, 5, 7, 13].includes(questionId)) {
      // E/I dimension - lower answers tend toward I, higher toward E
      if (answer <= 2) dimensions.I++;
      else dimensions.E++;
    } else if ([2, 6, 11, 14].includes(questionId)) {
      // S/N dimension
      if (answer <= 2) dimensions.S++;
      else dimensions.N++;
    } else if ([3, 9, 12, 15].includes(questionId)) {
      // T/F dimension
      if (answer <= 2) dimensions.T++;
      else dimensions.F++;
    } else if ([4, 8, 10, 16].includes(questionId)) {
      // J/P dimension
      if (answer <= 2) dimensions.J++;
      else dimensions.P++;
    }
  });

  const type = 
    (dimensions.E >= dimensions.I ? 'E' : 'I') +
    (dimensions.S >= dimensions.N ? 'S' : 'N') +
    (dimensions.T >= dimensions.F ? 'T' : 'F') +
    (dimensions.J >= dimensions.P ? 'J' : 'P');

  return type;
}

