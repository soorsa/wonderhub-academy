interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fbq: (...args: any[]) => void;
}

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
interface ErrorMsg {
  message: string;
}
type LoginError = {
  non_field_errors: string;
  error: string;
  errors: string[];
  detail: string;
  messages: ErrorMsg[];
};
interface ErrorResponse {
  detail: string;
}
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
  search?: string;
  page: number;
  page_size?: number;
  topic__slug?: string;
  ordering?: "title" | "-created_at" | "create_at" | "topic";
}
interface Instructor {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  bio: string;
  job_title: string;
  number_of_courses: number;
  number_of_students: number;
}
interface Course {
  id: number;
  slug: string;
  title: string;
  instructor: Instructor;
  description: string;
  price: number;
  undiscounted_price: number;
  sale_type: "sale" | "presale" | "free";
  sale_header: string;
  sales_message: string;
  level: string;
  thumbnail: string;
  preview_video: string;
  is_published: boolean;
  total_lectures: number;
  benefits: string[];
  suitable_for: string[];
  topic: Topic[];
  topic_slugs: string[];
  number_of_students: number;
}

interface Modules {
  id: number;
  order: number;
  title: string;
  slug: string;
  lecture_count: number;
  course: Course;
}
interface Lesson {
  id: number;
  order: number;
  title: string;
  slug: string;
  duration: string;
  video_url: string;
  is_preview: boolean;
  text_content: string;
  module_obj: Modules;
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
type NotificationStatus = "Read" | "Unread";
interface NotificationType {
  id: number;
  title: string;
  content: string;
  is_read: NotificationStatus;
  created_at: string | null;
  updated_at: string | null;
}
interface ModalState {
  isCloseable: boolean;
  isTransModal: boolean;
  isOpen: boolean;
  content: ReactNode | null;
  title: string;
  description: string;
  size: string;
  headerStyle: string;
  // setTitle: (title: string) => void;
  goBack: () => void;
  open: (content: StateModalContent) => void;
  openStrong: (content: ReactNode) => void;
  openTransModal: (content: ReactNode) => void;
  close: () => void;
}
interface StateModalContent {
  content: ReactNode;
  title?: string;
  size?: string;
  description?: string;
  headerStyle?: string;
  goBack?: () => void;
}
interface CoursePayload {
  title: string;
  instructor?: number;
  description: string;
  slug?: string;
  topic_slugs?: string[];
  level?: string;
  price?: number;
  benefits?: string[];
  is_published?: boolean;
  undiscounted_price?: number;
  sale_type?: "sale" | "presale" | "free";
  sale_header?: string;
  sales_message?: string;
  thumbnail?: File | string;
  preview_video?: string;
  suitable_for?: string[];
}
interface ModulePayload {
  title: string;
  order: number;
  course: slug;
}
interface LessonPayload {
  title: string;
  order: number;
  module: string;
  text_content: string;
  video_url: string;
  slug?: string;
}
interface CategoryPayload {
  name: string;
  description: string;
  slug?: string;
}
interface TopicPayload {
  name: string;
  description: string;
  category: string;
  slug?: string;
}
interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  is_popular: boolean;
  total_courses: number;
}
interface Topic {
  id: number;
  name: string;
  slug: string;
  description: string;
  category: string;
  total_courses: number;
}

interface PaginatedResponse<Data> {
  count: number;
  next: string;
  previous: string;
  results: Data[];
}
interface Params {
  page?: number;
  paginate?: boolean;
}

// Type definition that adjusts based on the 'paginate' flag
// 1. Your reusable helper type definition
type ApiResponse<T, P extends Params> = P["paginate"] extends "false"
  ? T[]
  : PaginatedResponse<T>;

interface DeletePayload {
  action: string;
  api_path: string;
  slug: string;
}
interface SelectOption {
  value: string | number;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

type TransactionType = "PAYMENT" | "DEPOSIT" | "WITHDRAWAL" | "REFUND";
type TransactionStatus = "PENDING" | "SUCCESS" | "FAILED" | "REVERSED";
type JSONField =
  | string
  | number
  | boolean
  | null
  | Json[]
  | { [key: string]: Json };

interface InitatePaymentPayload {
  reference?: string;
  amount: number;
  currency?: "NGN" | "USD";
  transaction_type?: TransactionType;
  status?: TransactionStatus;
  description: string;
  metadata?: JSONField;
  user?: number;
}
interface Transaction {
  id: string;
  reference: string;
  amount: number;
  currency: string;
  transaction_type: TransactionType;
  status: TransactionStatus;
  description: string;
  metadata: string;
  created_at: string;
  updated_at: string;
  user: number;
}

interface PreEnrollPayload {
  course_slug: string;
  fullname: string;
  email: string;
  phone_number: string;
  amount_paid: number;
  transaction_id: string;
}

interface Option {
  label: string;
  value: string;
  description?: string;
}

interface PixelOptions {
  value?: number;
  currency?: string;
  num_items?: number;
  content_ids?: string[] | number[];
  content_type?: "product" | "product_group";
  content_name?: string;
  content_category?: string;
  search_string?: string;
  // [key: string]: any; // Allows custom parameters seamlessly
}
