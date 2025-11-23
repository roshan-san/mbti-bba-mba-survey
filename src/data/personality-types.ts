export interface PersonalityTypeInfo {
  type: string;
  name: string;
  description: string;
  traits: string[];
}

export const personalityTypes: { [key: string]: PersonalityTypeInfo } = {
  "ENTJ": {
    type: "ENTJ",
    name: "The Commander",
    description: "ENTJs are strategic leaders, motivated to organize change. They are quick to see inefficiency and conceptualize new solutions, and they enjoy developing long-term plans to accomplish their vision.",
    traits: ["Strategic", "Confident", "Decisive", "Natural leader", "Goal-oriented"]
  },
  "ENTP": {
    type: "ENTP",
    name: "The Debater",
    description: "ENTPs are smart and curious thinkers who cannot resist an intellectual challenge. They are bold and creative, deconstructing and rebuilding ideas with great mental agility.",
    traits: ["Innovative", "Quick-witted", "Outspoken", "Resourceful", "Energetic"]
  },
  "ENFJ": {
    type: "ENFJ",
    name: "The Protagonist",
    description: "ENFJs are natural-born leaders, full of passion and charisma. They are able to inspire others with their conviction and are often found taking charge of a situation.",
    traits: ["Charismatic", "Inspiring", "Natural-born leader", "Passionate", "Altruistic"]
  },
  "ENFP": {
    type: "ENFP",
    name: "The Campaigner",
    description: "ENFPs are people-centered creators with a focus on possibilities and a contagious enthusiasm for new ideas, people and activities.",
    traits: ["Enthusiastic", "Creative", "Sociable", "Free-spirited", "Passionate"]
  },
  "ESTJ": {
    type: "ESTJ",
    name: "The Executive",
    description: "ESTJs are hardworking traditionalists, eager to take charge in organizing projects and people. Orderly, rule-abiding, and conscientious, ESTJs like to get things done.",
    traits: ["Organized", "Dedicated", "Honest", "Dependable", "Practical"]
  },
  "ESTP": {
    type: "ESTP",
    name: "The Entrepreneur",
    description: "ESTPs are smart, energetic and very perceptive people, truly aware of their surroundings. They are flexible and adaptable, always ready to dive into the next experience.",
    traits: ["Bold", "Practical", "Original", "Perceptive", "Direct"]
  },
  "ESFJ": {
    type: "ESFJ",
    name: "The Consul",
    description: "ESFJs are extraverted helpers, ready to support their friends and loved ones and organize social gatherings. They are careful and methodical, and enjoy being in control.",
    traits: ["Strong practical skills", "Loyal", "Sensitive", "Warm", "Good at connecting with others"]
  },
  "ESFP": {
    type: "ESFP",
    name: "The Entertainer",
    description: "ESFPs are spontaneous, energetic people who love life and live it to the fullest. They are flexible and resourceful, and they love to explore new possibilities.",
    traits: ["Bold", "Original", "Aesthetics & showmanship", "Practical", "Perceptive"]
  },
  "INTJ": {
    type: "INTJ",
    name: "The Architect",
    description: "INTJs are analytical problem-solvers, eager to improve systems and processes with their innovative ideas. They have a talent for seeing possibilities for improvement.",
    traits: ["Independent", "Determined", "Insightful", "Original", "Confident"]
  },
  "INTP": {
    type: "INTP",
    name: "The Thinker",
    description: "INTPs are philosophical innovators, fascinated by logical analysis, systems, and design. They are preoccupied with theory, and search for the universal law behind everything they see.",
    traits: ["Logical", "Original", "Creative", "Theoretical", "Independent"]
  },
  "INFJ": {
    type: "INFJ",
    name: "The Advocate",
    description: "INFJs are creative nurturers with a strong sense of personal integrity and a drive to help others realize their potential. Creative and dedicated, they have a talent for helping others with original solutions.",
    traits: ["Creative", "Insightful", "Inspiring", "Convicted", "Determined"]
  },
  "INFP": {
    type: "INFP",
    name: "The Mediator",
    description: "INFPs are poetic, kind and altruistic people, always eager to help a good cause. They are creative and flexible, and they enjoy exploring new possibilities.",
    traits: ["Idealistic", "Loyal", "Adaptable", "Creative", "Passionate"]
  },
  "ISTJ": {
    type: "ISTJ",
    name: "The Logistician",
    description: "ISTJs are practical and fact-minded, reliable, and responsible. They are thorough and painstaking, and they value tradition and loyalty.",
    traits: ["Honest", "Practical", "Responsible", "Calm", "Loyal"]
  },
  "ISTP": {
    type: "ISTP",
    name: "The Virtuoso",
    description: "ISTPs are bold and practical experimenters, masters of all kinds of tools. They are observant and flexible, and they enjoy understanding how things work.",
    traits: ["Bold", "Practical", "Original", "Perceptive", "Spontaneous"]
  },
  "ISFJ": {
    type: "ISFJ",
    name: "The Protector",
    description: "ISFJs are very dedicated and warm protectors, always ready to defend their loved ones. They are practical and committed to their sense of duty.",
    traits: ["Supportive", "Reliable", "Patient", "Imaginative", "Observant"]
  },
  "ISFP": {
    type: "ISFP",
    name: "The Adventurer",
    description: "ISFPs are flexible and charming artists, always ready to explore new possibilities. They are practical and spontaneous, and they enjoy living in the moment.",
    traits: ["Bold", "Practical", "Aesthetic", "Flexible", "Charming"]
  }
};

