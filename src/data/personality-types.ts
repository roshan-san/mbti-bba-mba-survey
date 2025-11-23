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
    description: "ENTJs are strategic leaders, motivated to organize change. They excel at vision, management, and execution.",
    traits: [
      "Business Strategist",
      "Operations Manager",
      "Executive Leadership",
      "Project Director",
      "Business Development Manager"
    ]
  },
  "ENTP": {
    type: "ENTP",
    name: "The Debater",
    description: "ENTPs are innovative thinkers who enjoy ideation, problem-solving, and challenging norms.",
    traits: [
      "Product Innovation Lead",
      "Business Consultant",
      "Entrepreneur",
      "Marketing Strategist",
      "R&D Manager"
    ]
  },
  "ENFJ": {
    type: "ENFJ",
    name: "The Protagonist",
    description: "ENFJs are inspiring leaders who excel at team alignment, communication, and people-first leadership.",
    traits: [
      "HR Manager",
      "Training & Development Lead",
      "Customer Success Manager",
      "Organizational Development Manager",
      "Public Relations Manager"
    ]
  },
  "ENFP": {
    type: "ENFP",
    name: "The Campaigner",
    description: "ENFPs bring energy, creativity, and people-focused ideas to organizations.",
    traits: [
      "Creative Marketing Lead",
      "Brand Manager",
      "Community Manager",
      "Recruitment Specialist",
      "Culture & Engagement Manager"
    ]
  },
  "ESTJ": {
    type: "ESTJ",
    name: "The Executive",
    description: "ESTJs are structured, dependable organizers who excel in operations and administration.",
    traits: [
      "Operations Manager",
      "Administrative Manager",
      "Compliance Officer",
      "Supply Chain Manager",
      "Project Administrator"
    ]
  },
  "ESTP": {
    type: "ESTP",
    name: "The Entrepreneur",
    description: "ESTPs are action-oriented and thrive in fast-paced, dynamic environments.",
    traits: [
      "Sales Manager",
      "Business Development Lead",
      "Field Operations Manager",
      "Negotiator",
      "Crisis Management Lead"
    ]
  },
  "ESFJ": {
    type: "ESFJ",
    name: "The Consul",
    description: "ESFJs organize people and processes, excelling in coordination, service, and administrative roles.",
    traits: [
      "Customer Relations Manager",
      "HR Coordinator",
      "Office Manager",
      "Client Services Lead",
      "Event Manager"
    ]
  },
  "ESFP": {
    type: "ESFP",
    name: "The Entertainer",
    description: "ESFPs are social, energetic, and thrive where interaction and presentation matter.",
    traits: [
      "Sales Representative",
      "Brand Ambassador",
      "Hospitality Manager",
      "Public Relations Coordinator",
      "Retail Manager"
    ]
  },
  "INTJ": {
    type: "INTJ",
    name: "The Architect",
    description: "INTJs are analytical strategists who excel at long-term planning and systems optimization.",
    traits: [
      "Business Analyst",
      "Strategic Planner",
      "Management Consultant",
      "Operations Architect",
      "Data Strategy Lead"
    ]
  },
  "INTP": {
    type: "INTP",
    name: "The Thinker",
    description: "INTPs are conceptual thinkers who excel at analysis, modeling, and innovation.",
    traits: [
      "Process Analyst",
      "R&D Strategist",
      "Systems Designer",
      "Data Analyst",
      "Business Process Engineer"
    ]
  },
  "INFJ": {
    type: "INFJ",
    name: "The Advocate",
    description: "INFJs excel in roles where purpose, people, and strategy align.",
    traits: [
      "Organizational Development Specialist",
      "HR Business Partner",
      "Corporate Social Responsibility (CSR) Lead",
      "Change Management Consultant",
      "Employee Wellness Manager"
    ]
  },
  "INFP": {
    type: "INFP",
    name: "The Mediator",
    description: "INFPs thrive in mission-driven, creative, and people-centric roles.",
    traits: [
      "Content Strategist",
      "CSR Coordinator",
      "Employee Relations Specialist",
      "Creative Writer/Brand Voice Lead",
      "Culture Specialist"
    ]
  },
  "ISTJ": {
    type: "ISTJ",
    name: "The Logistician",
    description: "ISTJs excel in structured environments with clear rules and responsibilities.",
    traits: [
      "Accountant",
      "Administrative Supervisor",
      "Compliance Specialist",
      "Inventory Manager",
      "Data Administrator"
    ]
  },
  "ISTP": {
    type: "ISTP",
    name: "The Virtuoso",
    description: "ISTPs thrive in hands-on, problem-solving, technical, and operational roles.",
    traits: [
      "Operations Technician",
      "Process Improvement Analyst",
      "Field Operations Lead",
      "Logistics Coordinator",
      "Risk & Safety Manager"
    ]
  },
  "ISFJ": {
    type: "ISFJ",
    name: "The Protector",
    description: "ISFJs excel in supportive, detail-oriented, and people-focused administrative roles.",
    traits: [
      "Administrative Assistant",
      "HR Support Specialist",
      "Customer Support Lead",
      "Compliance Assistant",
      "Office Operations Coordinator"
    ]
  },
  "ISFP": {
    type: "ISFP",
    name: "The Adventurer",
    description: "ISFPs thrive in flexible, creative, and hands-on environments.",
    traits: [
      "Creative Designer",
      "Brand Stylist",
      "Customer Experience Specialist",
      "Event & Experience Designer",
      "Retail Experience Manager"
    ]
  }
}

