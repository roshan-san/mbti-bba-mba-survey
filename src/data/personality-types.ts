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
    description: "ENTJs are strategic leaders with strong commercial and organizational instincts.",
    traits: [
      "Business Operations Analyst",
      "Financial Planning Associate",
      "Procurement Coordinator",
      "Commercial Analyst",
      "Logistics & Supply Chain Analyst"
    ]
  },

  "ENTP": {
    type: "ENTP",
    name: "The Debater",
    description: "ENTPs are idea-driven and excel in dynamic business environments.",
    traits: [
      "Market Research Analyst",
      "Business Analyst",
      "Financial Analyst (Entry-Level)",
      "Sales Strategy Analyst",
      "Operations Research Assistant"
    ]
  },

  "ENFJ": {
    type: "ENFJ",
    name: "The Protagonist",
    description: "ENFJs are people-focused and excel in communication-heavy commercial roles.",
    traits: [
      "Client Relationship Executive",
      "Corporate Communications Associate",
      "Sales & HR Coordinator",
      "Customer Relations Executive",
      "Training & Onboarding Support"
    ]
  },

  "ENFP": {
    type: "ENFP",
    name: "The Campaigner",
    description: "ENFPs thrive in creative, people-driven commerce roles.",
    traits: [
      "Marketing Coordinator",
      "Client Engagement Executive",
      "Corporate Sales Associate",
      "Brand Communication Assistant",
      "CRM Executive"
    ]
  },

  "ESTJ": {
    type: "ESTJ",
    name: "The Executive",
    description: "ESTJs excel in structured commercial, accounting, and compliance environments.",
    traits: [
      "Accounts Supervisor (Junior)",
      "Audit Assistant",
      "Taxation Associate",
      "Compliance & Documentation Associate",
      "Commercial Operations Executive"
    ]
  },

  "ESTP": {
    type: "ESTP",
    name: "The Entrepreneur",
    description: "ESTPs excel in field-driven, negotiation-heavy commercial roles.",
    traits: [
      "Sales Analyst",
      "Retail Operations Coordinator",
      "Distribution & Trade Coordinator",
      "Channel Sales Executive",
      "Merchandise Planner"
    ]
  },

  "ESFJ": {
    type: "ESFJ",
    name: "The Consul",
    description: "ESFJs thrive in supportive administrative and customer-centric commercial roles.",
    traits: [
      "Administrative Accountant",
      "Payroll Coordinator",
      "Customer Account Manager",
      "Documentation Officer",
      "Client Support Coordinator"
    ]
  },

  "ESFP": {
    type: "ESFP",
    name: "The Entertainer",
    description: "ESFPs excel in sales, service, and customer-facing commerce roles.",
    traits: [
      "Customer Support Specialist",
      "Retail Sales Analyst",
      "Billing & Service Executive",
      "Hospitality Operations Executive",
      "Sales Promoter (Corporate)"
    ]
  },

  "INTJ": {
    type: "INTJ",
    name: "The Architect",
    description: "INTJs excel in analytical, finance-based, and operations-focused commercial roles.",
    traits: [
      "Financial Analyst",
      "Investment Research Associate",
      "Business Process Auditor",
      "Risk & Compliance Analyst",
      "Data-Driven Commerce Analyst"
    ]
  },

  "INTP": {
    type: "INTP",
    name: "The Thinker",
    description: "INTPs excel in analytical, research-oriented business environments.",
    traits: [
      "Financial Data Analyst",
      "Cost Analyst",
      "Risk Analyst",
      "Business Research Associate",
      "Process Optimization Analyst"
    ]
  },

  "INFJ": {
    type: "INFJ",
    name: "The Advocate",
    description: "INFJs do well in ethical business, CSR, and structured commercial roles.",
    traits: [
      "Compliance & Ethics Associate",
      "CSR Analyst",
      "Internal Communications Executive",
      "Policy Assistant",
      "Employee Engagement Coordinator"
    ]
  },

  "INFP": {
    type: "INFP",
    name: "The Mediator",
    description: "INFPs excel in communication, CSR, and supportive commercial functions.",
    traits: [
      "Corporate Outreach Coordinator",
      "Training & HR Assistant",
      "Communications & Branding Associate",
      "Documentation Specialist",
      "Client Support Associate"
    ]
  },

  "ISTJ": {
    type: "ISTJ",
    name: "The Logistician",
    description: "ISTJs thrive in structured accounting, audit, and administrative commercial roles.",
    traits: [
      "Junior Accountant",
      "Audit Trainee",
      "Tax Assistant",
      "Inventory & Accounts Coordinator",
      "Compliance Documentation Assistant"
    ]
  },

  "ISTP": {
    type: "ISTP",
    name: "The Virtuoso",
    description: "ISTPs excel in practical, operations-heavy commerce roles.",
    traits: [
      "Logistics & Supply Chain Analyst",
      "Operations Billing Specialist",
      "Inventory Control Executive",
      "Warehouse Data Coordinator",
      "Process Monitoring Assistant"
    ]
  },

  "ISFJ": {
    type: "ISFJ",
    name: "The Protector",
    description: "ISFJs excel in supportive, detail-oriented office and finance roles.",
    traits: [
      "Accounts Assistant",
      "Payroll Support Executive",
      "Documentation Coordinator",
      "Customer Care Executive",
      "Admin & Compliance Assistant"
    ]
  },

  "ISFP": {
    type: "ISFP",
    name: "The Adventurer",
    description: "ISFPs thrive in flexible, service-oriented commercial roles.",
    traits: [
      "Billing & Operations Executive",
      "Client Support Executive",
      "Merchandising Coordinator",
      "Retail Experience Assistant",
      "Service Desk Executive"
    ]
  }
};
