import AuthContent from "@/components/auth/AuthContent";

export const metadata = {
  title: "Sign In / Sign Up",
};

const AuthPage = () => {
  return (
    <div className="h-[calc(100dvh-80px)] grid place-items-center overflow-y-auto">
      <div className="w-full max-w-xl ui-container">
        <AuthContent />
      </div>
    </div>
  );
};

export default AuthPage;
