interface LoginPayload {
  email: string;
  password: string;
}
interface RegisterPayload {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  role: string;
}

interface LoginResponse {
  token: string;
  user: User;
}
type LoginError = {
  non_field_errors: string;
  error: string;
  errors: string[];
};

type RegisterError = {
  non_field_errors: string[];
  error: string;
  errors: string[];
  username: string[];
  email: string[];
  password: string[];
};

type UserState = {
  user: User | null;
  setUser: (user: User) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (status: boolean) => void;
  token: string;
  setToken: (token: string) => void;
  reset: () => void;
};
type UserRole = "student" | "instructor" | "admin";
interface User {
  id: number;
  email: string;
  phone_number: string;
  referral_code: string;
  name: string | null;
  first_name: string;
  last_name: string;
  role: UserRole;
  country: string | null;
  state: string | null;
  profile_picture: string | null;
  gender: string | null;
  address: string | null;
  date_joined: string;
  is_staff: boolean;
  is_superuser: boolean;
  is_active: boolean;
}

interface GetUserResponse {
  success: boolean;
  user: User;
}
interface CourseFilterParams {
  name?: string;
  type?: string;
  duration?: string;
  page: number;
  duration?: number;
  created_at?: string;
  interest_rate?: number;
  ordering?: string;
}
interface Course {
  id: number;
  slug: string;
  title: string;
  instructor: string;
  desc: string;
  price: number;
}
interface EnrolledCourse {
  id: number;
  title: string;
  instructor: string;
  desc: string;
  price: number;
  progress: number;
  enrolled_date: string;
}
type TransactionStatus = "success" | "pending" | "failed";
interface Transaction {
  id: number;
  amount: number;
  description: string;
  payment_method: string;
  created_at?: string;
  status: TransactionStatus;
  transaction_id?: string;
}
type NotificationStatus = "Read" | "Unread";
interface NotificationType {
  id: number;
  title: string;
  content: string;
  is_read: NotificationStatus;
  created_at: string | null;
  updated_at: string | null;
}
