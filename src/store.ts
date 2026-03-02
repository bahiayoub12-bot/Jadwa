import { User, Study, PaymentSettings, AccountStatus } from './types';

const STORAGE_KEYS = {
  USERS: 'jadwa_users',
  STUDIES: 'jadwa_studies',
  CURRENT_USER: 'jadwa_current_user',
  PAYMENT_SETTINGS: 'jadwa_payment_settings',
};

// Initialize default admin
const defaultAdmin: User = {
  id: 'admin-001',
  name: 'مدير النظام',
  email: 'admin@jadwa.plus',
  password: 'admin123',
  role: 'admin',
  status: 'approved',
  createdAt: new Date().toISOString(),
};

const defaultPaymentSettings: PaymentSettings = {
  price: 29,
  currency: 'USD',
  bankAccount: 'SA0380000000608010167519',
  paypalLink: 'https://paypal.me/jadwaplus',
  vodafoneCash: '01012345678',
  instructions: 'بعد إتمام التحويل، يرجى رفع صورة الإيصال أو لقطة شاشة للتحويل.',
};

function getFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const data = localStorage.getItem(key);
    if (data) return JSON.parse(data);
  } catch { /* ignore */ }
  return defaultValue;
}

function saveToStorage<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function initializeStore(): void {
  const users = getFromStorage<User[]>(STORAGE_KEYS.USERS, []);
  if (!users.find(u => u.role === 'admin')) {
    users.push(defaultAdmin);
    saveToStorage(STORAGE_KEYS.USERS, users);
  }
  if (!localStorage.getItem(STORAGE_KEYS.PAYMENT_SETTINGS)) {
    saveToStorage(STORAGE_KEYS.PAYMENT_SETTINGS, defaultPaymentSettings);
  }
}

// User operations
export function getUsers(): User[] {
  return getFromStorage<User[]>(STORAGE_KEYS.USERS, [defaultAdmin]);
}

export function getUserById(id: string): User | undefined {
  return getUsers().find(u => u.id === id);
}

export function getUserByEmail(email: string): User | undefined {
  return getUsers().find(u => u.email === email);
}

export function registerUser(name: string, email: string, password: string): { success: boolean; message: string; user?: User } {
  const users = getUsers();
  if (users.find(u => u.email === email)) {
    return { success: false, message: 'البريد الإلكتروني مسجل مسبقاً' };
  }
  const newUser: User = {
    id: 'user-' + Date.now(),
    name,
    email,
    password,
    role: 'user',
    status: 'pending',
    createdAt: new Date().toISOString(),
  };
  users.push(newUser);
  saveToStorage(STORAGE_KEYS.USERS, users);
  return { success: true, message: 'تم إنشاء الحساب بنجاح', user: newUser };
}

export function loginUser(email: string, password: string): { success: boolean; message: string; user?: User } {
  const user = getUserByEmail(email);
  if (!user) return { success: false, message: 'البريد الإلكتروني غير مسجل' };
  if (user.password !== password) return { success: false, message: 'كلمة المرور غير صحيحة' };
  saveToStorage(STORAGE_KEYS.CURRENT_USER, user);
  return { success: true, message: 'تم تسجيل الدخول بنجاح', user };
}

export function getCurrentUser(): User | null {
  return getFromStorage<User | null>(STORAGE_KEYS.CURRENT_USER, null);
}

export function setCurrentUser(user: User | null): void {
  if (user) {
    saveToStorage(STORAGE_KEYS.CURRENT_USER, user);
  } else {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  }
}

export function updateUserStatus(userId: string, status: AccountStatus): void {
  const users = getUsers();
  const idx = users.findIndex(u => u.id === userId);
  if (idx !== -1) {
    users[idx].status = status;
    saveToStorage(STORAGE_KEYS.USERS, users);
    const current = getCurrentUser();
    if (current && current.id === userId) {
      current.status = status;
      setCurrentUser(current);
    }
  }
}

export function updateUserReceipt(userId: string, receiptUrl: string): void {
  const users = getUsers();
  const idx = users.findIndex(u => u.id === userId);
  if (idx !== -1) {
    users[idx].receiptUrl = receiptUrl;
    users[idx].status = 'waiting_approval';
    saveToStorage(STORAGE_KEYS.USERS, users);
    const current = getCurrentUser();
    if (current && current.id === userId) {
      current.receiptUrl = receiptUrl;
      current.status = 'waiting_approval';
      setCurrentUser(current);
    }
  }
}

export function deleteUser(userId: string): void {
  const users = getUsers().filter(u => u.id !== userId);
  saveToStorage(STORAGE_KEYS.USERS, users);
}

// Study operations
export function getStudies(): Study[] {
  return getFromStorage<Study[]>(STORAGE_KEYS.STUDIES, []);
}

export function getUserStudies(userId: string): Study[] {
  return getStudies().filter(s => s.userId === userId);
}

export function getStudyById(id: string): Study | undefined {
  return getStudies().find(s => s.id === id);
}

export function createStudy(userId: string, userName: string): Study {
  const studies = getStudies();
  const newStudy: Study = {
    id: 'study-' + Date.now(),
    userId,
    userName,
    projectName: 'مشروع جديد',
    status: 'in_progress',
    currentAgent: 0,
    createdAt: new Date().toISOString(),
    data: {},
    messages: [],
  };
  studies.push(newStudy);
  saveToStorage(STORAGE_KEYS.STUDIES, studies);
  return newStudy;
}

export function updateStudy(study: Study): void {
  const studies = getStudies();
  const idx = studies.findIndex(s => s.id === study.id);
  if (idx !== -1) {
    studies[idx] = study;
  } else {
    studies.push(study);
  }
  saveToStorage(STORAGE_KEYS.STUDIES, studies);
}

export function deleteStudy(studyId: string): void {
  const studies = getStudies().filter(s => s.id !== studyId);
  saveToStorage(STORAGE_KEYS.STUDIES, studies);
}

export function getTodayStudyCount(userId: string): number {
  const today = new Date().toDateString();
  return getStudies().filter(s => s.userId === userId && new Date(s.createdAt).toDateString() === today).length;
}

// Payment settings
export function getPaymentSettings(): PaymentSettings {
  return getFromStorage<PaymentSettings>(STORAGE_KEYS.PAYMENT_SETTINGS, defaultPaymentSettings);
}

export function updatePaymentSettings(settings: PaymentSettings): void {
  saveToStorage(STORAGE_KEYS.PAYMENT_SETTINGS, settings);
}
