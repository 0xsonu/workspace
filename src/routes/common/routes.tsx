import SignIn from "@/pages/auth/Sign-in";
import { AUTH_ROUTES } from "./routePaths";
import SignUp from "@/pages/auth/Sign-up";
import GoogleOAuthFailure from "@/pages/auth/GoogleOAuthFailure";

export const authenticationRoutePaths = [
  { path: AUTH_ROUTES.SIGN_IN, element: <SignIn /> },
  { path: AUTH_ROUTES.SIGN_UP, element: <SignUp /> },
  { path: AUTH_ROUTES.GOOGLE_OAUTH_CALLBACK, element: <GoogleOAuthFailure /> },
];
