export type UserRole = 'admin' | 'user';
export type AccountStatus = 'pending' | 'waiting_approval' | 'approved';
export type StudyPhase = 0 | 1 | 2 | 3 | 4 | 5;
export type StudyStatus = 'in_progress' | 'completed';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  status: AccountStatus;
  createdAt: string;
  receiptUrl?: string;
}

export interface Message {
  id: string;
  role: 'user' | 'agent';
  content: string;
  agentIndex: number;
  timestamp: string;
}

export interface StudyData {
  project_info: {
    name: string;
    idea: string;
    sector: string;
    location: string;
    capital: string;
  };
  market_analysis: {
    competitors: string;
    targetAudience: string;
    marketSize: string;
    swot: {
      strengths: string[];
      weaknesses: string[];
      opportunities: string[];
      threats: string[];
    };
  };
  financial_plan: {
    fixedCosts: { item: string; amount: number }[];
    variableCosts: { item: string; amount: number }[];
    revenue: {
      monthlyClients: number;
      avgPrice: number;
      monthlyRevenue: number;
      yearlyRevenue: number;
    };
    breakeven: {
      units: number;
      value: number;
    };
    scenarios: {
      optimistic: { revenue: number; profit: number };
      realistic: { revenue: number; profit: number };
      pessimistic: { revenue: number; profit: number };
    };
  };
  operational_plan: {
    location: string;
    equipment: string;
    orgStructure: string;
    licenses: string;
  };
  marketing_plan: {
    strategy: string;
    channels: string[];
    budget: number;
  };
}

export interface Study {
  id: string;
  userId: string;
  userName: string;
  projectName: string;
  status: StudyStatus;
  currentAgent: number;
  createdAt: string;
  data: Partial<StudyData>;
  messages: Message[];
  report?: string;
}

export interface AgentInfo {
  name: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
  questions: string[];
}

export interface PaymentSettings {
  price: number;
  currency: string;
  bankAccount: string;
  paypalLink: string;
  vodafoneCash: string;
  instructions: string;
}
