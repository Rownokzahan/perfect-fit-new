"use client";

import { useState } from "react";
import LoginForm from "../forms/LoginForm";
import SignupForm from "../forms/SignupForm";
import AuthViewHeader from "./AuthViewHeader";

export type ViewState = "login" | "signup";

interface ViewContent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Form: React.ComponentType<any>;
  title: string;
  subtitle: string;
  viewSwitcher: {
    message: string;
    linkText: string;
    targetView: ViewState;
  };
}

const ViewContents: Record<ViewState, ViewContent> = {
  login: {
    Form: LoginForm,
    title: "Welcome Back,",
    subtitle: "Please sign in to continue.",
    viewSwitcher: {
      message: "Don't have an account?",
      linkText: "Sign Up",
      targetView: "signup",
    },
  },
  signup: {
    Form: SignupForm,
    title: "Create an Account",
    subtitle: "Fill in the details to get started.",
    viewSwitcher: {
      message: "Already have an account?",
      linkText: "Log In",
      targetView: "login",
    },
  },
};

const AuthContent = () => {
  const [currentView, setCurrentView] = useState<ViewState>("login");

  const {
    Form,
    title,
    subtitle,
    viewSwitcher: { message, linkText, targetView },
  } = ViewContents[currentView];

  const handleViewSwitch = (targetView: ViewState) => {
    setCurrentView(targetView);
  };

  return (
    <div className="pb-px rounded shadow space-y-6">
      <AuthViewHeader title={title} subtitle={subtitle} />

      <div className="px-6">
        <Form handleViewSwitch={handleViewSwitch} />
      </div>

      <p className="mb-8 mx-6 text-center text-sm">
        {message}{" "}
        <button
          onClick={() => setCurrentView(targetView)}
          className="text-primary font-medium animated-underline py-px!"
        >
          {linkText}
        </button>
      </p>
    </div>
  );
};

export default AuthContent;
