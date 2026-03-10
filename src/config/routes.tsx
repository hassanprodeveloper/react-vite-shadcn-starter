import { lazy } from "react";

const Dashboard = lazy(() => import("@/app/dashboard/page"));
// Lazy load components for better performance
const FAQs = lazy(() => import("@/app/faqs/page"));

// Auth pages
const SignIn = lazy(() => import("@/app/auth/sign-in/page"));
const SignUp = lazy(() => import("@/app/auth/sign-up/page"));
const ForgotPassword = lazy(() => import("@/app/auth/forgot-password/page"));

// Error pages
const Unauthorized = lazy(() => import("@/app/errors/unauthorized/page"));
const Forbidden = lazy(() => import("@/app/errors/forbidden/page"));
const NotFound = lazy(() => import("@/app/errors/not-found/page"));
const InternalServerError = lazy(
  () => import("@/app/errors/internal-server-error/page"),
);
const UnderMaintenance = lazy(
  () => import("@/app/errors/under-maintenance/page"),
);

// Settings pages
const UserSettings = lazy(() => import("@/app/settings/user/page"));
const AccountSettings = lazy(() => import("@/app/settings/account/page"));
const BillingSettings = lazy(() => import("@/app/settings/billing/page"));
const AppearanceSettings = lazy(() => import("@/app/settings/appearance/page"));
const NotificationSettings = lazy(
  () => import("@/app/settings/notifications/page"),
);
const ConnectionSettings = lazy(
  () => import("@/app/settings/connections/page"),
);

export interface RouteConfig {
  path: string;
  element: React.ReactNode;
  children?: RouteConfig[];
}

export const routes: RouteConfig[] = [
  // Default route - redirect to dashboard
  {
    path: "/",
    // element: <Navigate to="auth/sign-in" replace />,
    element: <Dashboard />,
  },

  // Application Routes
  {
    path: "/faqs",
    element: <FAQs />,
  },
 
  // Authentication Routes
  {
    path: "/auth/sign-in",
    element: <SignIn />,
  },
  {
    path: "/auth/sign-up",
    element: <SignUp />,
  },
  {
    path: "/auth/forgot-password",
    element: <ForgotPassword />,
  },
  // Error Pages
  {
    path: "/errors/unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "/errors/forbidden",
    element: <Forbidden />,
  },
  {
    path: "/errors/not-found",
    element: <NotFound />,
  },
  {
    path: "/errors/internal-server-error",
    element: <InternalServerError />,
  },
  {
    path: "/errors/under-maintenance",
    element: <UnderMaintenance />,
  },

  // Settings Routes
  {
    path: "/settings/user",
    element: <UserSettings />,
  },
  {
    path: "/settings/account",
    element: <AccountSettings />,
  },
  {
    path: "/settings/billing",
    element: <BillingSettings />,
  },
  {
    path: "/settings/appearance",
    element: <AppearanceSettings />,
  },
  {
    path: "/settings/notifications",
    element: <NotificationSettings />,
  },
  {
    path: "/settings/connections",
    element: <ConnectionSettings />,
  },

  // Catch-all route for 404
  {
    path: "*",
    element: <NotFound />,
  },
];
